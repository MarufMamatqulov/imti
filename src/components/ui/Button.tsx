import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type Props = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-400 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-accent-400 text-primary-950 hover:bg-accent-300 shadow-[0_8px_24px_rgba(247,154,5,0.35)] hover:shadow-[0_10px_28px_rgba(247,154,5,0.45)] hover:-translate-y-0.5",
  secondary:
    "bg-primary-900 text-white hover:bg-primary-800 hover:-translate-y-0.5",
  ghost:
    "bg-white text-primary-900 border border-primary-100 hover:border-primary-300 hover:bg-primary-50",
  "outline-light":
    "bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-7 py-3.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  href,
  onClick,
  type = "button",
}: Props) {
  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
