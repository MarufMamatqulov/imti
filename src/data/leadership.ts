// Manba: ochiq OAV va yuridik ma'lumotlar (yuz.uz, oyina.uz, norma.uz) —
// Muhammadjon Quronov 2026-yil 20-avgustdan Institut direktori etib
// tayinlangan (avvalgi direktor Olim Davlatov Prezident maslahatchisi
// lavozimiga o'tkazilgan). Institutning tarkibiy bo'linma rahbarlari
// (Ilmiy kotib, bo'lim boshliqlari) endi shu yerda emas, balki
// src/data/structure.ts faylida, Tarkibiy bo'linmalar (/institut/tuzilma)
// sahifasi uchun saqlanadi. `photo` maydoni bo'sh qoldirilgan a'zolar
// uchun LeadershipCard komponenti avtomatik ravishda bosh harflar bilan
// belgi ko'rsatadi.
import { SITE } from "@/data/site";

export type LeadershipMember = {
  slug: string;
  fullName: string;
  position: string;
  duties: string[];
  bio: string;
  receptionDay: string;
  phone: string;
  email: string;
  website: string;
  photo?: string;
};

export const LEADERSHIP: LeadershipMember[] = [
  {
    slug: "direktor",
    fullName: "Quronov Muhammadjon",
    position: "Institut direktori",
    duties: [
      "Institut faoliyatiga umumiy rahbarlik qilish va strategik yo'nalishlarni belgilash",
      "Davlat organlari va xalqaro tashkilotlar bilan hamkorlikni muvofiqlashtirish",
      "Institut tarkibiy bo'linmalari faoliyatini nazorat qilish",
      "Ilmiy-tadqiqot va targ'ibot dasturlarining ijrosini ta'minlash",
    ],
    bio: "Pedagogika fanlari doktori, professor. 2026-yil 20-avgust sanasidan Respublika Ma'naviyat va Ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti direktori lavozimida faoliyat yuritmoqda. Ilgari markaz direktorining ilmiy-nazariy va uslubiy masalalar bo'yicha birinchi o'rinbosari sifatida ishlagan.",
    receptionDay: "Oldindan yozilish asosida",
    phone: "+998 55 510 27 37",
    email: "info@manaviyat.uz",
    website: SITE.domain,
    photo: "/director-quronov-muhammadjon.png",
  },
];
