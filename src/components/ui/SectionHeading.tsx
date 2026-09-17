import clsx from "clsx";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider",
            light
              ? "bg-white/10 text-accent-300 border border-white/15"
              : "bg-accent-50 text-accent-700 border border-accent-100"
          )}
        >
          <span
            className={clsx(
              "h-1.5 w-1.5 rounded-full",
              light ? "bg-accent-300" : "bg-accent-500"
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-balance",
          light ? "text-white" : "text-primary-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed",
            light ? "text-white/70" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
