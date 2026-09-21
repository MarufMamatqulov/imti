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
  "inline-flex items-center justify-center gap-2 rounded font-semibold transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-400 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-primary-700 text-white hover:bg-primary-800",
  secondary: "bg-primary-900 text-white hover:bg-primary-800",
  ghost:
    "bg-white text-primary-700 border border-line hover:border-primary-300 hover:bg-primary-50",
  "outline-light":
    "bg-transparent text-white border border-white/50 hover:bg-white/10",
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
