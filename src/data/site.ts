export const SITE = {
  domain: "https://imti.uz",
  shortName: "IMTI",
  fullNameUz:
    "Respublika Ma'naviyat va Ma'rifat Markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti",
  parentOrg: "Respublika Ma'naviyat va Ma'rifat Markazi",
  tagline: "Ma'naviyat ilm bilan, jamiyat tadqiqot bilan mustahkam",
  description:
    "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti — jamiyatda ma'naviy-ma'rifiy muhitni tadqiq etuvchi, ilmiy-tahliliy xulosalar va amaliy tavsiyalar ishlab chiquvchi yetakchi ilmiy-tadqiqot muassasasi.",
  founded: 2019,
  address: "100060, Toshkent shahri, Mustaqillik ko'chasi, 5-uy",
  phone: "+998 71 233 45 67",
  phoneSecondary: "+998 71 233 45 68",
  email: "info@imti.uz",
  pressEmail: "matbuot@imti.uz",
  workHours: "Dushanba – Juma, 09:00 – 18:00",
  socials: {
    telegram: "https://t.me/imti_uz",
    facebook: "https://facebook.com/imti.uz",
    instagram: "https://instagram.com/imti.uz",
    youtube: "https://youtube.com/@imti_uz",
    x: "https://x.com/imti_uz",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Mustaqillik+ko%27chasi+5,+Toshkent&output=embed",
} as const;

export const LANGUAGES = [
  { code: "uz", label: "O'zbekcha" },
  { code: "ru", label: "Русский" },
  { code: "en", label: "English" },
] as const;
