import type { LeadershipMember } from "@/data/leadership";
import { SITE } from "@/data/site";

// Manba: foydalanuvchi tomonidan taqdim etilgan rasmiy ma'lumotnomalar.
// Institut direktori src/data/leadership.ts faylida (Rahbariyat sahifasi
// uchun) saqlanadi; bu yerda institutning tarkibiy bo'linmalariga
// rahbarlik qiluvchi/mas'ul shaxslar ro'yxati keltirilgan. Shaxsiy
// telefon/email topilmagani uchun institutning umumiy kontaktlari
// ishlatilgan.
export const STRUCTURE_MEMBERS: LeadershipMember[] = [
  {
    slug: "ilmiy-kotib",
    fullName: "Suvanov Ilhom Abdixalilovich",
    position: "Ilmiy kotib",
    duties: [
      "Institut ilmiy kengashi faoliyatini tashkil etish va uning qarorlari ijrosini nazorat qilish",
      "Ilmiy anjuman, konferensiya va nashrlar rejasini muvofiqlashtirish",
      "Ilmiy xodimlarning attestatsiya va malaka oshirish jarayonlarini boshqarish",
    ],
    bio: "1993–1998-yillarda Mirzo Ulug'bek nomidagi O'zbekiston Milliy universitetida tahsil olgan. 1998–2019-yillarda Toshkent davlat agrar universitetining falsafa va gumanitar fanlar kafedralarida assistent, katta o'qituvchi va dotsent lavozimlarida ishlagan, shu jumladan Ma'naviyat-ma'rifat va iqtidorli yoshlar bilan ishlash bo'limiga rahbarlik qilgan. 2019–2021-yillarda Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ma'naviyat va ma'rifat markazi direktori o'rinbosari, so'ngra direktori vazifasini bajaruvchi bo'lgan. 2021-yil 1-dekabrdan Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti ilmiy kotibi lavozimida faoliyat yuritmoqda.",
    receptionDay: "Oldindan yozilish asosida",
    phone: "+998 55 510 27 37",
    email: "info@manaviyat.uz",
    website: SITE.domain,
    photo: "/suvanov-ilhom.png",
  },
  {
    slug: "malaka-oshirish-bolimi-boshligi",
    fullName: "Kuchkarov Xudaynazar Muhiddinovich",
    position: "Malaka oshirish bo'limi boshlig'i",
    duties: [
      "Ma'naviyat-ma'rifat sohasi mutaxassislari uchun malaka oshirish va qayta tayyorlov dasturlarini tashkil etish",
      "Seminar-treninglar, vebinarlar va uslubiy qo'llanmalar tayyorlashni muvofiqlashtirish",
      "Bo'lim faoliyatini rejalashtirish va uning ijrosini ta'minlash",
    ],
    bio: "2009–2013-yillarda Mirzo Ulug'bek nomidagi O'zbekiston Milliy universiteti falsafa fakulteti siyosatshunoslik yo'nalishida, 2014–2016-yillarda Toshkent davlat sharqshunoslik instituti xalqaro munosabatlar yo'nalishi magistraturasida tahsil olgan. Mehnat faoliyatini Respublika Ma'naviyat targ'ibot markazi va O'zbekiston Matbuot va axborot agentligida boshlab, so'ngra Prezident huzuridagi Davlat boshqaruvi akademiyasi hamda Yoshlar ishlari agentligi qoshidagi institutlarda uslubiy ta'minot bo'limlarini boshqargan. 2021-yildan Respublika Ma'naviyat va ma'rifat markazida faoliyat yuritib, 2024-yil 4-yanvardan Ijtimoiy-Ma'naviy Tadqiqotlar Instituti Malaka oshirish bo'limi boshlig'i lavozimida ishlamoqda.",
    receptionDay: "Oldindan yozilish asosida",
    phone: "+998 55 510 27 37",
    email: "info@manaviyat.uz",
    website: SITE.domain,
    photo: "/kuchkarov-xudaynazar.png",
  },
];
