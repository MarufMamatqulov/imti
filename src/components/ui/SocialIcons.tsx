import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.05 3.76 2.98 10.9c-1.24.5-1.23 1.2-.23 1.5l4.63 1.45 1.78 5.5c.22.6.11.84.75.84.5 0 .72-.23 1-.5l2.4-2.34 4.7 3.47c.87.48 1.5.23 1.72-.8l3.1-14.63c.32-1.27-.48-1.84-1.78-1.63Zm-12.1 10.2-1.42-4.67 9.98-6.3c.47-.28.9-.13.55.18l-9.1 10.79Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.98 2 14.71 2 12.05 2 10 3.62 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Z" />
      <path d="M10 9v6l5-3-5-3Z" fill="#0a1f4d" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 3H21l-6.4 7.3L22.1 21h-6.6l-5.2-6.8L4.3 21H2.1l6.8-7.8L1.9 3h6.7l4.7 6.2L18.9 3Zm-1.2 16.2h1.2L7.4 4.7H6.1l11.6 14.5Z" />
    </svg>
  );
}
