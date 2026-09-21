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
            "block text-xs font-bold uppercase tracking-widest",
            light ? "text-primary-200" : "text-primary-700"
          )}
        >
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
