export type DocumentItem = {
  title: string;
  category: string;
  date: string;
  fileType: "PDF" | "DOCX" | "XLSX";
  fileSize: string;
};

export const DOCUMENT_CATEGORIES = [
  "Barchasi",
  "Normativ-huquqiy hujjatlar",
  "Institut ustavi",
  "Buyruq va farmoyishlar",
  "Hisobotlar",
  "Ochiq ma'lumotlar",
] as const;

export const DOCUMENTS: DocumentItem[] = [
  {
    title: "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti to'g'risidagi NIZOM",
    category: "Institut ustavi",
    date: "2026-01-14",
    fileType: "PDF",
    fileSize: "1.2 MB",
  },
  {
    title: "Institutni tashkil etish to'g'risida qaror",
    category: "Normativ-huquqiy hujjatlar",
    date: "2019-05-21",
    fileType: "PDF",
    fileSize: "640 KB",
  },
  {
    title: "2026-yil uchun ilmiy-tadqiqot ishlari rejasi",
    category: "Buyruq va farmoyishlar",
    date: "2026-01-10",
    fileType: "DOCX",
    fileSize: "310 KB",
  },
  {
    title: "Institut faoliyati bo'yicha 2025-yilgi yakuniy hisobot",
    category: "Hisobotlar",
    date: "2026-01-25",
    fileType: "PDF",
    fileSize: "2.4 MB",
  },
  {
    title: "Xodimlarni tanlov asosida ishga qabul qilish tartibi",
    category: "Normativ-huquqiy hujjatlar",
    date: "2025-11-02",
    fileType: "PDF",
    fileSize: "480 KB",
  },
  {
    title: "Ochiq ma'lumotlar: byudjet mablag'laridan foydalanish tahlili",
    category: "Ochiq ma'lumotlar",
    date: "2025-10-18",
    fileType: "XLSX",
    fileSize: "128 KB",
  },
  {
    title: "Ilmiy kengash faoliyati to'g'risidagi nizom",
    category: "Institut ustavi",
    date: "2024-06-09",
    fileType: "PDF",
    fileSize: "560 KB",
  },
  {
    title: "Fuqarolar murojaatlari bilan ishlash bo'yicha yo'riqnoma",
    category: "Normativ-huquqiy hujjatlar",
    date: "2024-03-12",
    fileType: "PDF",
    fileSize: "390 KB",
  },
];
