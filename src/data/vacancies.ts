export type Vacancy = {
  slug: string;
  title: string;
  department: string;
  type: string;
  deadline: string;
  requirements: string[];
};

export const VACANCIES: Vacancy[] = [
  {
    slug: "ilmiy-xodim-sotsiolog",
    title: "Ilmiy xodim (sotsiolog)",
    department: "Ijtimoiy tadqiqotlar bo'limi",
    type: "To'liq stavka",
    deadline: "2026-10-15",
    requirements: [
      "Sotsiologiya yoki ijtimoiy fanlar yo'nalishida oliy ma'lumot",
      "Ijtimoiy so'rovnoma o'tkazish tajribasi",
      "SPSS yoki shunga o'xshash statistik dasturlarni bilish",
    ],
  },
  {
    slug: "kichik-ilmiy-xodim",
    title: "Kichik ilmiy xodim",
    department: "Ma'naviy-ma'rifiy tahlil markazi",
    type: "To'liq stavka",
    deadline: "2026-10-01",
    requirements: [
      "Falsafa, tarix yoki ma'naviyat asoslari yo'nalishida oliy ma'lumot",
      "Ilmiy maqola yozish ko'nikmalari",
      "Kamida 1 yillik ilmiy-tadqiqot tajribasi",
    ],
  },
  {
    slug: "tarjimon-xalqaro-hamkorlik",
    title: "Tarjimon (ingliz tili)",
    department: "Xalqaro hamkorlik bo'limi",
    type: "To'liq stavka",
    deadline: "2026-09-30",
    requirements: [
      "Ingliz tilini yuqori darajada bilish (IELTS 7.0 va undan yuqori)",
      "Rasmiy hujjatlar va ilmiy matnlar tarjimasi tajribasi",
      "Xalqaro tashkilotlar bilan ishlash ko'nikmasi",
    ],
  },
  {
    slug: "smm-mutaxassisi",
    title: "SMM va raqamli kontent mutaxassisi",
    department: "Raqamli tahlil va monitoring bo'limi",
    type: "To'liq stavka",
    deadline: "2026-10-20",
    requirements: [
      "Ijtimoiy tarmoqlarni yuritish bo'yicha tajriba",
      "Grafik dizayn va video montaj ko'nikmalari",
      "Analitik fikrlash va kontent strategiyasini tuza olish",
    ],
  },
];
