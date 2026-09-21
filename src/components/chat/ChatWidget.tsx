"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, Send, Sparkles, X } from "lucide-react";
import clsx from "clsx";
import { SITE } from "@/data/site";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const GREETING: Message = {
  role: "assistant",
  content: `Assalomu alaykum! Men ${SITE.shortName} sun'iy intellekt yordamchisiman. Institut faoliyati, xizmatlari yoki boshqa savollaringiz bo'yicha yordam bera olaman.`,
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isStreaming) return;

    setError(null);
    setInput("");

    const history = [...messages, { role: "user" as const, content: text }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Xatolik yuz berdi. Qayta urinib ko'ring.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        if (!chunk) continue;

        setMessages((prev) => {
          const next = [...prev];
          const last = next[next.length - 1];
          next[next.length - 1] = { ...last, content: last.content + chunk };
          return next;
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xatolik yuz berdi.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Chatni yopish" : "AI yordamchi bilan suhbat"}
        className={clsx(
          "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-soft transition-colors duration-200",
          "bg-primary-700 text-white hover:bg-primary-800",
          "sm:bottom-6 sm:right-6"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[min(600px,calc(100vh-140px))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-md border border-line bg-white shadow-soft sm:bottom-28 sm:right-6">
          <div className="flex items-center gap-3 bg-primary-900 px-4 py-4 text-white">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Bot className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">{SITE.shortName} AI yordamchi</p>
              <p className="flex items-center gap-1 text-xs text-primary-200">
                <Sparkles className="h-3 w-3" /> Onlayn yordam
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Chatni yopish"
              className="ml-auto rounded-full p-1.5 text-primary-200 hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={clsx("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={clsx(
                    "max-w-[85%] whitespace-pre-wrap rounded-md px-4 py-2.5 text-sm leading-relaxed",
                    m.role === "user"
                      ? "bg-primary-700 text-white"
                      : "bg-primary-50 text-primary-950"
                  )}
                >
                  {m.content || (
                    <Loader2 className="h-4 w-4 animate-spin text-primary-400" />
                  )}
                </div>
              </div>
            ))}
            {error && (
              <p className="rounded-xl bg-red-50 px-3 py-2 text-xs text-red-600">{error}</p>
            )}
          </div>

          <form onSubmit={sendMessage} className="flex items-end gap-2 border-t border-slate-100 p-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e);
                }
              }}
              rows={1}
              placeholder="Savolingizni yozing..."
              className="max-h-28 flex-1 resize-none rounded-md border border-line px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              aria-label="Yuborish"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-700 text-white transition-colors hover:bg-primary-800 disabled:opacity-40"
            >
              {isStreaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
