export type DocumentItem = {
  title: string;
  category: string;
  date: string;
  fileType: "PDF" | "DOC" | "DOCX" | "XLSX" | "PPTX";
  fileSize: string;
  file: string;
};

export const DOCUMENT_CATEGORIES = [
  "Barchasi",
  "Normativ-huquqiy hujjatlar",
  "Institut ustavi",
  "Buyruq va farmoyishlar",
  "Hisobotlar",
  "Ochiq ma'lumotlar",
] as const;

// Manba: institut xodimi tomonidan taqdim etilgan rasmiy hujjatlar
// (Ustav va bo'lim nizomlari). Sanalar hujjatning o'zida ko'rsatilgan
// tasdiqlangan/tayyorlangan yiliga mos keladi; aniq kun ko'rsatilmagan
// hujjatlar uchun oyning boshi qo'yilgan.
export const DOCUMENTS: DocumentItem[] = [
  {
    title: "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti USTAVI",
    category: "Institut ustavi",
    date: "2021-06-04",
    fileType: "PDF",
    fileSize: "1.0 MB",
    file: "/hujjatlar/institut-ustavi.pdf",
  },
  {
    title: "\"Ilmiy ekspertiza\" bo'limi to'g'risida nizom",
    category: "Institut ustavi",
    date: "2022-05-17",
    fileType: "DOC",
    fileSize: "65 KB",
    file: "/hujjatlar/ilmiy-ekspertiza-bolimi-nizomi.doc",
  },
  {
    title: "\"Ilmiy tadqiqotlarni tashkil etish va amalga oshirish\" bo'limi to'g'risida nizom",
    category: "Institut ustavi",
    date: "2025-12-01",
    fileType: "DOCX",
    fileSize: "38 KB",
    file: "/hujjatlar/ilmiy-tadqiqotlarni-tashkil-etish-bolimi-nizomi.docx",
  },
  {
    title: "\"Malaka oshirish\" bo'limi to'g'risida nizom",
    category: "Institut ustavi",
    date: "2021-01-01",
    fileType: "DOCX",
    fileSize: "21 KB",
    file: "/hujjatlar/malaka-oshirish-bolimi-nizomi.docx",
  },
  {
    title: "\"Ijtimoiy-ma'naviy muhitni tahlil qilish va zamonaviy targ'ibot texnologiyalarini ishlab chiqish\" bo'limi to'g'risida nizom",
    category: "Institut ustavi",
    date: "2023-01-01",
    fileType: "DOCX",
    fileSize: "23 KB",
    file: "/hujjatlar/ijtimoiy-manaviy-muhitni-tahlil-qilish-bolimi-nizomi.docx",
  },
  {
    title: "\"Milliy g'oya va ma'naviy-ma'rifiy targ'ibot ishlarini metodik ta'minlash\" bo'limi to'g'risida nizom",
    category: "Institut ustavi",
    date: "2021-01-01",
    fileType: "DOCX",
    fileSize: "29 KB",
    file: "/hujjatlar/milliy-goya-targibot-bolimi-nizomi.docx",
  },
  {
    title: "Institut haqida taqdimot",
    category: "Ochiq ma'lumotlar",
    date: "2026-08-01",
    fileType: "PPTX",
    fileSize: "4.6 MB",
    file: "/hujjatlar/institut-haqida-taqdimot.pptx",
  },
];
