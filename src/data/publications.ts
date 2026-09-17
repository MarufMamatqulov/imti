export type Publication = {
  slug: string;
  title: string;
  author: string;
  year: number;
  type: string;
  pages: number;
  cover: string;
  description: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    slug: "manaviyat-va-milliy-goya",
    title: "Ma'naviyat va milliy g'oya: nazariya va amaliyot",
    author: "Institut jamoasi",
    year: 2026,
    type: "Monografiya",
    pages: 284,
    cover: "https://picsum.photos/seed/imti-book1/400/560",
    description:
      "Milliy g'oyaning shakllanish tarixi, uning zamonaviy jamiyatdagi o'rni va istiqbolli rivojlanish yo'nalishlari tahlil qilingan.",
  },
  {
    slug: "yoshlar-ijtimoiy-portreti",
    title: "O'zbekiston yoshlarining ijtimoiy-ma'naviy portreti",
    author: "Sotsiologik tadqiqotlar bo'limi",
    year: 2025,
    type: "Tadqiqot hisoboti",
    pages: 156,
    cover: "https://picsum.photos/seed/imti-book2/400/560",
    description:
      "Respublika miqyosidagi so'rovnoma asosida yoshlarning qadriyatlar tizimi, intilishlari va dunyoqarashi tahlili.",
  },
  {
    slug: "oilaviy-tarbiya-anyanalari",
    title: "Oilaviy tarbiya an'analari va zamonaviylik",
    author: "M. Yusupova, D. Karimov",
    year: 2025,
    type: "Ilmiy-ommabop nashr",
    pages: 198,
    cover: "https://picsum.photos/seed/imti-book3/400/560",
    description:
      "O'zbek oilasidagi tarbiya an'analarining zamonaviy sharoitda transformatsiyasi haqida keng ommaga mo'ljallangan nashr.",
  },
  {
    slug: "manaviy-tahdidlarga-qarshi",
    title: "Ma'naviy tahdidlarga qarshi kurashning ilmiy asoslari",
    author: "Ekspertiza va tahlil markazi",
    year: 2024,
    type: "Monografiya",
    pages: 312,
    cover: "https://picsum.photos/seed/imti-book4/400/560",
    description:
      "Zamonaviy axborot makonidagi mafkuraviy tahdidlarning tabiati va ularga qarshi profilaktik yondashuvlar.",
  },
  {
    slug: "ilmiy-jurnal-2026-3",
    title: "\"Ijtimoiy-ma'naviy tadqiqotlar\" ilmiy jurnali, 2026 / 3-son",
    author: "Institut nashri",
    year: 2026,
    type: "Ilmiy jurnal",
    pages: 128,
    cover: "https://picsum.photos/seed/imti-book5/400/560",
    description:
      "Institutning navbatdagi ilmiy jurnal soni: mahalliy va xorijiy mualliflarning so'nggi tadqiqot natijalari.",
  },
  {
    slug: "raqamli-avlod-qadriyatlari",
    title: "Raqamli avlod va an'anaviy qadriyatlar muvozanati",
    author: "B. Tursunov",
    year: 2024,
    type: "Tadqiqot hisoboti",
    pages: 176,
    cover: "https://picsum.photos/seed/imti-book6/400/560",
    description:
      "Raqamli texnologiyalar davrida o'sib kelayotgan avlodning qadriyatlar tizimidagi o'zgarishlar tahlili.",
  },
];
