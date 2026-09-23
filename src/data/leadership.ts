// Manba: ochiq OAV va yuridik ma'lumotlar (yuz.uz, oyina.uz, norma.uz) —
// Muhammadjon Quronov 2026-yil 20-avgustdan Institut direktori etib
// tayinlangan (avvalgi direktor Olim Davlatov Prezident maslahatchisi
// lavozimiga o'tkazilgan). Suvanov Ilhom va Kuchkarov Xudaynazarning
// lavozim, mehnat faoliyati va rasmlari foydalanuvchi tomonidan taqdim
// etilgan rasmiy ma'lumotnomalar asosida kiritilgan. Ularning shaxsiy
// telefon/email raqami ochiq manbalarda topilmagani sababli, aloqa
// ma'lumotlari sifatida institutning umumiy kontaktlari ishlatilgan.
// `photo` maydoni bo'sh qoldirilgan a'zolar uchun LeadershipCard
// komponenti avtomatik ravishda bosh harflar bilan belgi ko'rsatadi.
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
    website: "https://imti.uz",
    photo: "/director-quronov-muhammadjon.png",
  },
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
    website: "https://imti.uz",
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
    website: "https://imti.uz",
    photo: "/kuchkarov-xudaynazar.png",
  },
];
