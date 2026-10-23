// Manba: institut tomonidan 2026-yil oktyabr holatiga tayyorlangan rasmiy
// ma'lumotnomalar (sayt uchun). Ilgari ochiq OAV manbalaridan olingan
// qisqa ma'lumotlar shu rasmiy hujjatlar asosida to'liq mehnat tarixi
// bilan yangilandi. Institutning tarkibiy bo'linma rahbarlari (Ilmiy
// kotib, bo'lim boshliqlari va boshqaruv xodimlari) endi shu yerda emas,
// balki src/data/structure.ts faylida, Tarkibiy bo'linmalar
// (/institut/tuzilma) sahifasi uchun saqlanadi. `photo` maydoni bo'sh
// qoldirilgan a'zolar uchun LeadershipCard komponenti avtomatik ravishda
// bosh harflar bilan belgi ko'rsatadi.
import { SITE } from "@/data/site";

export type LeadershipMember = {
  slug: string;
  fullName: string;
  position: string;
  duties: string[];
  // Ilmiy daraja/unvon kabi qisqa izoh (ixtiyoriy). Mehnat tarixi mavjud
  // bo'lgan davrlar (jumladan talabalik) workHistory jadvalida keltiriladi.
  bioIntro?: string;
  workHistory: { period: string; role: string }[];
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
    bioIntro: "Pedagogika fanlari doktori, professor.",
    workHistory: [
      { period: "1975–1979", role: "Samarqand davlat pedagogika instituti talabasi" },
      { period: "1979–1988", role: "Samarqand davlat pedagogika instituti o'qituvchisi, katta o'qituvchisi" },
      { period: "1988–1991", role: "Sobiq SSSR Pedagogika fanlari akademiyasi kunduzgi ta'lim aspiranti" },
      { period: "1992–1995", role: "Samarqand davlat universiteti katta o'qituvchisi, katta ilmiy xodimi" },
      { period: "1995–1997", role: "Samarqand davlat universiteti Boshlang'ich ta'lim kafedrasi katta o'qituvchisi" },
      { period: "1997–1999", role: "Prezident huzuridagi Davlat va jamiyat qurilishi akademiyasi ilmiy tadqiqot bo'limi bosh mutaxassisi, bo'lim mudiri" },
      { period: "1999–2000", role: "Respublika \"Oila\" ilmiy-amaliy markazi bo'lim mudiri" },
      { period: "2000–2003", role: "Respublika Ma'naviyat va ma'rifat markazi bo'lim mudiri" },
      { period: "2003–2004", role: "Vazirlar Mahkamasi ijtimoiy kotibiyati bosh mutaxassisi" },
      { period: "2004–2006", role: "Oliy va o'rta maxsus ta'lim vaziri o'rinbosari" },
      { period: "2006–2009", role: "Milliy g'oya va mafkura ilmiy-amaliy markazi rahbari" },
      { period: "2009", role: "O'zbekiston Milliy teleradiokompaniyasi raisining birinchi o'rinbosari" },
      { period: "2009–2015", role: "Milliy g'oya va mafkura ilmiy-amaliy markazi rahbari" },
      { period: "2015–2017", role: "Bosh vazir o'rinbosarining, Bosh vazirning maslahatchisi" },
      { period: "2017–2021", role: "Respublika Ma'naviyat va ma'rifat markazi rahbarining birinchi o'rinbosari" },
      { period: "2021–2023", role: "O'zbekiston Pedagogika fanlari ilmiy-tadqiqot instituti xalqaro tadqiqotlar bo'limi boshlig'i" },
      { period: "2023–2026", role: "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-ma'naviy tadqiqotlar instituti direktori o'rinbosari" },
      { period: "2026-yil 20-avgustdan h.v.", role: "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-ma'naviy tadqiqotlar instituti direktori" },
    ],
    receptionDay: "Oldindan yozilish asosida",
    phone: "+998 55 510 27 37",
    email: "info@manaviyat.uz",
    website: SITE.domain,
    photo: "/director-quronov-muhammadjon.png",
  },
  {
    slug: "direktor-orinbosari",
    fullName: "Yunusov Abbos Safarovich",
    position: "Institut direktori o'rinbosari",
    duties: [
      "Institut direktori yo'qligida uning vazifalarini bajarish",
      "Institut tarkibiy bo'linmalari faoliyatini muvofiqlashtirish va nazorat qilish",
      "Direktor topshirig'iga binoan tashkiliy va ijro intizomini ta'minlash",
    ],
    workHistory: [
      { period: "2003–2008", role: "Samarqand viloyati Tayloq tumanidagi 47-umumiy o'rta ta'lim maktabi tarix fani o'qituvchisi" },
      { period: "2008–2014", role: "Samarqand viloyati Tayloq tumanidagi 47-umumiy o'rta ta'lim maktabi ma'naviy-ma'rifiy ishlar bo'yicha direktor o'rinbosari" },
      { period: "2014–2015", role: "Prezident huzuridagi Davlat boshqaruvi akademiyasi \"Davlat boshqaruvi\" yo'nalishi tinglovchisi" },
      { period: "2015–2017", role: "Milliy g'oya va mafkura ilmiy-amaliy markazi yetakchi mutaxassisi" },
      { period: "2017", role: "Respublika Ma'naviyat va ma'rifat markazi Axborot-tahlil bo'limi bosh mutaxassisi" },
      { period: "2017–2021", role: "Respublika Ma'naviyat va ma'rifat markazi Axborot-tahlil bo'limi boshlig'i" },
      { period: "2021–2024", role: "Respublika Ma'naviyat va ma'rifat markazi Axborot-tahlil va ijro nazorati bo'limi boshlig'i" },
      { period: "2024", role: "Demokratik jarayonlarni tahlil qilish markazi Din va konfessiyalararo totuvlik bo'yicha bo'lim mudiri" },
      { period: "2024–2025", role: "O'zbekiston Respublikasi Prezidenti Administratsiyasi yetakchi inspektori" },
      { period: "2025–2026", role: "Prezident Administratsiyasi Vakillik organlari, nodavlat notijorat tashkilotlar, din va yoshlar masalalari bo'yicha maslahatchi bo'linmasi yetakchi inspektori" },
      { period: "2026-yildan h.v.", role: "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-ma'naviy tadqiqotlar instituti direktori o'rinbosari" },
    ],
    receptionDay: "Oldindan yozilish asosida",
    phone: "+998 55 510 27 37",
    email: "info@manaviyat.uz",
    website: SITE.domain,
  },
];
