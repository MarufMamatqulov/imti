export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  image: string;
  views: number;
};

export const NEWS_CATEGORIES = [
  "Barchasi",
  "Ilmiy hayot",
  "Xalqaro hamkorlik",
  "Ma'rifiy tadbirlar",
  "E'lonlar",
] as const;

export const NEWS: NewsItem[] = [
  {
    slug: "yillik-ilmiy-anjuman-2026",
    title:
      "\"Ma'naviyat va milliy taraqqiyot\" mavzusidagi respublika ilmiy-amaliy anjumani bo'lib o'tdi",
    excerpt:
      "Institutimiz tashabbusi bilan mamlakatimizning yetakchi olimlari, faylasuflari va ijtimoiy soha mutaxassislari ishtirokida yirik ilmiy anjuman tashkil etildi.",
    content: [
      "Institut binosida bo'lib o'tgan anjumanda mamlakatimizning turli oliy ta'lim muassasalari, ilmiy-tadqiqot institutlari va davlat organlaridan 200 dan ortiq mutaxassis ishtirok etdi.",
      "Tadbir davomida ma'naviy-ma'rifiy sohadagi dolzarb muammolar, yoshlar tarbiyasi, milliy g'oyani mustahkamlash borasidagi ilmiy yondashuvlar muhokama qilindi.",
      "Anjuman yakunida qatnashchilar tomonidan bir qator tavsiyalar ishlab chiqildi va ular tegishli davlat idoralariga yuborilishi rejalashtirilgan.",
    ],
    date: "2026-09-10",
    category: "Ilmiy hayot",
    image: "https://picsum.photos/seed/imti-conference/1200/800",
    views: 1284,
  },
  {
    slug: "xalqaro-hamkorlik-memorandum",
    title: "Xorijiy tadqiqot markazi bilan hamkorlik memorandumi imzolandi",
    excerpt:
      "Institutimiz va xorijlik hamkor tashkilot o'rtasida ilmiy tadqiqotlar, tajriba almashinuvi va qo'shma loyihalar yuzasidan memorandum imzolandi.",
    content: [
      "Memorandumga ko'ra, tomonlar ijtimoiy-ma'naviy tadqiqotlar sohasida qo'shma ilmiy loyihalarni amalga oshirish, mutaxassislar almashinuvini yo'lga qo'yish bo'yicha kelishib oldilar.",
      "Shuningdek, yaqin oylarda qo'shma ilmiy seminarlar va onlayn konferensiyalar tashkil etilishi rejalashtirilmoqda.",
    ],
    date: "2026-08-28",
    category: "Xalqaro hamkorlik",
    image: "https://picsum.photos/seed/imti-partnership/1200/800",
    views: 956,
  },
  {
    slug: "yoshlar-forumi",
    title: "\"Yoshlar va ma'naviy immunitet\" respublika forumi start oldi",
    excerpt:
      "Mamlakatimizning barcha hududlaridan yig'ilgan faol yoshlar ishtirokida ma'naviy immunitetni mustahkamlashga bag'ishlangan forum bo'lib o'tmoqda.",
    content: [
      "Forum doirasida yoshlarni turli g'oyaviy tahdidlardan himoya qilish, ularda mustaqil fikrlash ko'nikmalarini shakllantirish masalalari muhokama qilindi.",
      "Tadbirda institutimiz tadqiqotchilari tomonidan so'nggi ijtimoiy so'rovnoma natijalari taqdim etildi.",
    ],
    date: "2026-08-15",
    category: "Ma'rifiy tadbirlar",
    image: "https://picsum.photos/seed/imti-youth/1200/800",
    views: 2110,
  },
  {
    slug: "yosh-tadqiqotchilar-tanlovi",
    title: "Yosh tadqiqotchilar orasida ilmiy ishlar tanlovi e'lon qilindi",
    excerpt:
      "Institut ma'naviyat va ma'rifat sohasida faoliyat yurituvchi yosh olimlar va tadqiqotchilar uchun an'anaviy ilmiy ishlar tanlovini e'lon qildi.",
    content: [
      "Tanlovda 35 yoshgacha bo'lgan tadqiqotchilar ishtirok etishlari mumkin. G'oliblar diplom va pul mukofotlari bilan taqdirlanadi.",
      "Ishlarni qabul qilish muddati — 2026-yil 30-noyabrgacha. Batafsil ma'lumot institutning rasmiy elonlar bo'limida joylashtirilgan.",
    ],
    date: "2026-08-02",
    category: "E'lonlar",
    image: "https://picsum.photos/seed/imti-competition/1200/800",
    views: 1489,
  },
  {
    slug: "mintaqaviy-sorovnoma-natijalari",
    title: "Mintaqalar kesimida ijtimoiy-ma'naviy muhit so'rovnomasi natijalari e'lon qilindi",
    excerpt:
      "Institut tomonidan barcha viloyatlar va Toshkent shahrini qamrab olgan yirik sotsiologik so'rovnoma natijalari bo'yicha tahliliy hisobot taqdim etildi.",
    content: [
      "So'rovnomada 15 mingdan ortiq respondent ishtirok etdi. Natijalar aholi orasida ma'naviy qadriyatlarga munosabat, oilaviy tarbiya va milliy an'analarga bo'lgan qiziqish darajasini aks ettiradi.",
      "To'liq hisobot institutning Nashrlar bo'limida elektron shaklda joylashtirildi.",
    ],
    date: "2026-07-20",
    category: "Ilmiy hayot",
    image: "https://picsum.photos/seed/imti-survey/1200/800",
    views: 1732,
  },
  {
    slug: "malaka-oshirish-kursi",
    title: "Mutaxassislar uchun navbatdagi malaka oshirish kursi boshlandi",
    excerpt:
      "Respublikaning turli hududlaridan kelgan ma'naviyat-ma'rifat sohasi xodimlari uchun bir oylik malaka oshirish kursi tashkil etildi.",
    content: [
      "Kurs davomida ishtirokchilar zamonaviy ijtimoiy tadqiqot metodologiyasi, raqamli ma'rifiy vositalar va yoshlar bilan ishlash texnologiyalari bo'yicha bilim oladilar.",
      "Kursni muvaffaqiyatli tamomlaganlarga davlat namunasidagi sertifikat topshiriladi.",
    ],
    date: "2026-07-05",
    category: "Ma'rifiy tadbirlar",
    image: "https://picsum.photos/seed/imti-training/1200/800",
    views: 874,
  },
];

export function getNewsBySlug(slug: string) {
  return NEWS.find((item) => item.slug === slug);
}

export function getLatestNews(count: number) {
  return [...NEWS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getRelatedNews(slug: string, count: number) {
  return NEWS.filter((item) => item.slug !== slug).slice(0, count);
}
