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
    bioIntro: "1993-yilda Mirzo Ulug'bek nomidagi O'zbekiston Milliy universitetiga o'qishga kirgan.",
    workHistory: [
      { period: "1993–1998", role: "Mirzo Ulug'bek nomidagi O'zbekiston Milliy universiteti talabasi" },
      { period: "1998–2012", role: "Toshkent davlat agrar universiteti Falsafa kafedrasi assistenti" },
      { period: "2012–2015", role: "Toshkent davlat agrar universiteti Falsafa kafedrasi katta o'qituvchisi" },
      { period: "2015", role: "Toshkent davlat agrar universiteti Falsafa kafedrasi assistenti" },
      { period: "2015–2017", role: "Toshkent davlat agrar universiteti Gumanitar fanlar kafedrasi katta o'qituvchisi" },
      { period: "2017–2018", role: "Toshkent davlat agrar universiteti Ma'naviyat-ma'rifat va iqtidorli yoshlar bilan ishlash bo'limi boshlig'i" },
      { period: "2018–2019", role: "Toshkent davlat agrar universiteti Gumanitar fanlar kafedrasi dotsenti" },
      { period: "2019–2021", role: "Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ma'naviyat va ma'rifat markazi tashkiliy, ma'naviy-ma'rifiy va ijtimoiy-siyosiy masalalar bo'yicha direktor o'rinbosari" },
      { period: "2021", role: "Oliy va o'rta maxsus ta'lim vazirligi huzuridagi Ma'naviyat va ma'rifat markazi direktori v.v.b." },
      { period: "2021-yil 1-dekabrdan h.v.", role: "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti ilmiy kotibi" },
    ],
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
    bioIntro: "2009-yilda O'zbekiston Milliy universitetiga o'qishga kirgan, keyinchalik xalqaro munosabatlar yo'nalishida magistraturani tamomlagan.",
    workHistory: [
      { period: "2009–2013", role: "O'zbekiston Milliy universiteti Falsafa fakulteti Siyosatshunoslik yo'nalishi kunduzgi bo'lim talabasi" },
      { period: "2013–2014", role: "Toshkent davlat farmatsevtika instituti qoshidagi akademik litseyda to'garak rahbari, ma'naviy-ma'rifiy ishlar bo'yicha yordamchi" },
      { period: "2014–2016", role: "Toshkent davlat sharqshunoslik instituti Xalqaro munosabatlar yo'nalishi magistranti" },
      { period: "2016–2017", role: "Respublika Ma'naviyat targ'ibot markazi rahbari yordamchisi, Ta'lim muassasalari bilan ishlash bo'limi bosh mutaxassisi" },
      { period: "2017–2018", role: "O'zbekiston Matbuot va axborot agentligi Litsenziyalashni nazorat qilish boshqarmasi mutaxassisi" },
      { period: "2018–2020", role: "Prezident huzuridagi Davlat boshqaruvi akademiyasi qoshidagi Yoshlar muammolarini o'rganish va istiqbolli kadrlarni tayyorlash instituti O'quvlarni tashkil etish bo'limi bosh metodisti, Metodik ta'minot bo'limi boshlig'i" },
      { period: "2020–2021", role: "Yoshlar ishlari agentligi huzuridagi Yoshlar muammolarini o'rganish va istiqbolli kadrlarni tayyorlash instituti Uslubiy ta'minotni muvofiqlashtirish bo'limi boshlig'i" },
      { period: "2021-yildan h.v.", role: "Respublika Ma'naviyat va ma'rifat markazi Ijtimoiy-iqtisodiy va siyosiy targ'ibot bo'limi bosh mutaxassisi; Ijtimoiy-Ma'naviy Tadqiqotlar Instituti kichik ilmiy xodimi, 2024-yil 4-yanvardan Malaka oshirish bo'limi boshlig'i" },
    ],
    receptionDay: "Oldindan yozilish asosida",
    phone: "+998 55 510 27 37",
    email: "info@manaviyat.uz",
    website: SITE.domain,
    photo: "/kuchkarov-xudaynazar.png",
  },
];
