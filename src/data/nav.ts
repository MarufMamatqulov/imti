export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Bosh sahifa", href: "/" },
  {
    label: "Institut haqida",
    href: "/institut",
    children: [
      { label: "Institut haqida", href: "/institut", description: "Missiya, tarix va faoliyat" },
      { label: "Rahbariyat", href: "/institut/rahbariyat", description: "Institut rahbariyati" },
      { label: "Tarkibiy bo'linmalar", href: "/institut/tuzilma", description: "Bo'lim rahbarlari" },
      { label: "Vakansiyalar", href: "/institut/vakansiya", description: "Bo'sh ish o'rinlari" },
    ],
  },
  { label: "Faoliyat yo'nalishlari", href: "/faoliyat" },
  { label: "Ilmiy faoliyat", href: "/ilmiy-faoliyat" },
  { label: "Yangiliklar", href: "/yangiliklar" },
  { label: "Nashrlar", href: "/nashrlar" },
  { label: "Hujjatlar", href: "/hujjatlar" },
  { label: "Materiallar", href: "/materiallar" },
  { label: "Galereya", href: "/galereya" },
  { label: "Aloqa", href: "/aloqa" },
];
