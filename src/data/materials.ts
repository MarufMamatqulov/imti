export type MaterialFile = {
  label: string;
  path: string;
  fileType: "PPTX" | "PDF";
  fileSize: string;
};

export type MaterialItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  cover: string;
  files: MaterialFile[];
};

export const MATERIAL_CATEGORIES = [
  "Barchasi",
  "Milliy qadriyatlar",
  "Davlat ramzlari va bayramlar",
  "Mustaqillik va davlat siyosati",
  "Xalqaro tajriba",
  "Ma'naviy tarbiya",
] as const;

// Manba: institutning targ'ibot-ma'rifiy materiallar arxivi (2025-2026).
// Bu taqdimotlar institut tomonidan mahalla, ta'lim muassasalari va boshqa
// tashkilotlar targ'ibot-tashviqot ishlarida erkin foydalanishi uchun
// tayyorlangan ommaviy materiallardir (institutning ichki normativ-huquqiy
// hujjatlari emas — ular Hujjatlar bo'limida joylashgan).
export const MATERIALS: MaterialItem[] = [
  {
    slug: "birlashib-buyuk-tarix-yaratamiz",
    title: "\"Birlashib, buyuk tarix yaratamiz!\"",
    description:
      "Prezident Shavkat Mirziyoyevning O'zbekiston Respublikasi davlat mustaqilligining 35 yilligiga bag'ishlangan tantanali marosimdagi nutqi asosida tayyorlangan targ'ibot materiali.",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/birlashib-buyuk-tarix-yaratamiz-cover.png",
    files: [
      { label: "Taqdimot", path: "/materiallar/birlashib-buyuk-tarix-yaratamiz.pptx", fileType: "PPTX", fileSize: "7.8 MB" },
      { label: "Nutq sharhi", path: "/materiallar/birlashib-buyuk-tarix-yaratamiz.pdf", fileType: "PDF", fileSize: "4.8 MB" },
    ],
  },
  {
    slug: "dolzarb-90-kun-90-imkoniyat",
    title: "Dolzarb 90 kun, 90 imkoniyat",
    description: "Targ'ibot-tashviqot tadbirlarida foydalanish uchun tayyorlangan taqdimot.",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/dolzarb-90-kun-90-imkoniyat-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/dolzarb-90-kun-90-imkoniyat.pptx", fileType: "PPTX", fileSize: "5.0 MB" }],
  },
  {
    slug: "davlat-bayrogi-haqida",
    title: "O'zbekiston Respublikasi Davlat bayrog'i haqida",
    description: "Davlat bayrog'ining tarixi va ramziy ma'nosi haqida keng ommaga mo'ljallangan taqdimot.",
    category: "Davlat ramzlari va bayramlar",
    cover: "/materiallar/davlat-bayrogi-haqida-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/davlat-bayrogi-haqida.pptx", fileType: "PPTX", fileSize: "4.2 MB" }],
  },
  {
    slug: "navroz-2025",
    title: "\"Qadriyatlaring boqiy bo'lsin, Navro'z!\"",
    description: "Navro'z bayrami tadbirlarida foydalanish uchun tayyorlangan taqdimot.",
    category: "Davlat ramzlari va bayramlar",
    cover: "/materiallar/navroz-2025-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/navroz-2025.pptx", fileType: "PPTX", fileSize: "5.1 MB" }],
  },
  {
    slug: "fargona-doppilari",
    title: "\"Farg'ona do'ppilari kuylagan ohang\"",
    description: "Farg'ona vodiysi do'ppichilik san'ati va milliy naqsh an'analariga bag'ishlangan ilmiy-ommabop taqdimot.",
    category: "Milliy qadriyatlar",
    cover: "/materiallar/fargona-doppilari-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/fargona-doppilari.pptx", fileType: "PPTX", fileSize: "7.5 MB" }],
  },
  {
    slug: "qashqadaryo-doppilari",
    title: "\"Qashqadaryo do'ppilari\"",
    description: "Qashqadaryo vohasi do'ppichilik an'analari haqida ilmiy-ommabop taqdimot.",
    category: "Milliy qadriyatlar",
    cover: "/materiallar/qashqadaryo-doppilari-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/qashqadaryo-doppilari.pptx", fileType: "PPTX", fileSize: "6.4 MB" }],
  },
  {
    slug: "hashar",
    title: "Hashar: nima, qanday, qachon o'tkaziladi?",
    description: "Milliy hashar an'anasining mohiyati va uni tashkil etish tartibi haqida taqdimot.",
    category: "Milliy qadriyatlar",
    cover: "/materiallar/hashar-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/hashar.pptx", fileType: "PPTX", fileSize: "2.7 MB" }],
  },
  {
    slug: "yapon-mojizasi",
    title: "\"Yapon mo'jizasi\"",
    description: "Ijtimoiy safarbarlikka undagan intensiv tarbiya metodlari — xalqaro tajriba tahlili.",
    category: "Xalqaro tajriba",
    cover: "/materiallar/yapon-mojizasi-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/yapon-mojizasi.pptx", fileType: "PPTX", fileSize: "4.0 MB" }],
  },
  {
    slug: "manaviyat-xonasi",
    title: "\"Ma'naviyat va ma'rifat xonasi\" qanday jihozlanadi?",
    description: "\"Ma'rifat\" targ'ibotchilar jamiyati bilan hamkorlikda tayyorlangan uslubiy taqdimot.",
    category: "Ma'naviy tarbiya",
    cover: "/materiallar/manaviyat-xonasi-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/manaviyat-xonasi.pptx", fileType: "PPTX", fileSize: "5.6 MB" }],
  },
];
