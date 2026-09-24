// Eslatma: quyidagi ma'lumotlar ochiq manbalar (Vazirlar Mahkamasining
// 03.06.2021-yildagi 340-son qarori, norma.uz, gazeta.uz, manaviyat.uz va cvc
// boshqa rasmiy/OAV manbalari) asosida yozilgan. Institutning o'z alohida
// telefon/email raqami ochiq manbalarda topilmagani sababli, aloqa
// ma'lumotlari sifatida qarashli tashkilot — Respublika Ma'naviyat va
// Ma'rifat Markazining rasmiy (manaviyat.uz) kontaktlari keltirilgan.
// Institut o'zining alohida raqami/emailiga ega bo'lsa, shu yerda almashtiring.
export const SITE = {
  domain: "https://www.imt-institut.uz",
  shortName: "IMTI",
  fullNameUz:
    "Respublika Ma'naviyat va Ma'rifat Markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti",
  parentOrg: "Respublika Ma'naviyat va Ma'rifat Markazi",
  tagline: "Ma'naviyat ilm bilan, jamiyat tadqiqot bilan mustahkam",
  description:
    "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti — Vazirlar Mahkamasining 2021-yil 3-iyundagi 340-son qarori bilan tashkil etilgan, jamiyatdagi ijtimoiy-ma'naviy muhitni ilmiy asosda tadqiq etuvchi, zamonaviy targ'ibot texnologiya va usullarini ishlab chiquvchi, aholining, ayniqsa yoshlarning mafkuraviy immunitetini mustahkamlashga xizmat qiluvchi ilmiy-tadqiqot muassasasi.",
  founded: 2021,
  address: "Toshkent shahri, Yakkasaroy tumani, Bobur ko'chasi, 9-uy, 3-qavat",
  phone: "+998 55 510 27 37",
  email: "info@manaviyat.uz",
  workHours: "Dushanba – Juma, 09:00 – 18:00",
  socials: {
    telegram: "https://t.me/manaviyat_markaz",
    facebook: "https://fb.com/manaviyat.uz",
    instagram: "https://instagram.com/manaviyat_markaz",
    youtube: "https://www.youtube.com/@respublikamanaviyatvamarif2968",
    x: "https://x.com/manaviyat_uz",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Bobur+ko%27chasi+9,+Yakkasaroy,+Toshkent&output=embed",
} as const;

export const LANGUAGES = [
  { code: "uz", label: "O'zbekcha" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
] as const;
