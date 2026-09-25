export type Publication = {
  slug: string;
  title: string;
  author: string;
  year: number;
  type: string;
  source: string;
  url?: string;
  cover: string;
  description: string;
};

// Manba: institutning ichki suhbat arxividan olingan OAVda chop etilgan
// maqolalar va nashrlar (2026-yil). Rasmlar tegishli gazeta/jurnal
// sahifalarining haqiqiy skanlaridir.
export const PUBLICATIONS: Publication[] = [
  {
    slug: "qadriyat-taqvimga-kirgan-sana",
    title: "Qadriyat taqvimga kirgan sana",
    author: "Bo'ri Qodirov, Alisher Atayev",
    year: 2026,
    type: "OAV maqolalari",
    source: "\"Jamiyat\" gazetasi, 2026-yil 24-sentabr, 37-son",
    cover: "/nashrlar/qadriyat-taqvimga-kirgan-sana.jpg",
    description: "Institut xodimlari Bo'ri Qodirov va Alisher Atayevning hamkorlikdagi maqolasi.",
  },
  {
    slug: "ozbek-va-koreys-xalqlari-dostligi",
    title: "O'zbek va koreys xalqlari do'stligining ijtimoiy ildizlari",
    author: "Muhiddin Teshaboyev",
    year: 2026,
    type: "OAV maqolalari",
    source: "\"Yangi O'zbekiston\" gazetasi, 2026-yil 23-sentabr",
    cover: "/nashrlar/ozbek-va-koreys-xalqlari-dostligi.jpg",
    description: "Institut bo'lim boshlig'i, falsafa fanlari doktori, dotsent M. Teshaboyevning maqolasi.",
  },
  {
    slug: "raqamli-dunyoning-raqamli-bolalari",
    title: "Raqamli dunyoning raqamli bolalari",
    author: "Nigora Husanova",
    year: 2026,
    type: "Ilmiy jurnal",
    source: "\"Ma'naviy hayot\" jurnali, 2026-yil 3-son",
    cover: "/nashrlar/raqamli-dunyoning-raqamli-bolalari.jpg",
    description: "Bolalar va yoshlarning raqamli makondagi xavfsizligi muammolariga bag'ishlangan tahliliy maqola.",
  },
  {
    slug: "vatanparvarlikning-uzilmas-tomiri",
    title: "Vatanparvarlikning uzilmas tomiri — Vataningda qadr topmoq",
    author: "Shahlo Ahrorova",
    year: 2026,
    type: "OAV maqolalari",
    source: "\"Vatanparvar\" gazetasi, 2026-yil 18-sentabr",
    cover: "/nashrlar/vatanparvarlikning-uzilmas-tomiri.jpg",
    description: "Institut bosh ilmiy xodimi, \"Ma'rifat\" targ'ibotchilar jamiyati a'zosi Shahlo Ahrorovaning maqolasi.",
  },
  {
    slug: "jadidchilik-risolalar-turkumi",
    title: "Jadidchilik harakati namoyandalariga bag'ishlangan risolalar turkumi",
    author: "Bo'ri Qodirov",
    year: 2026,
    type: "Ilmiy-ommabop nashr",
    source: "\"Ma'naviyat\" nashriyoti",
    cover: "/nashrlar/jadidchilik-risolalar-turkumi.jpg",
    description:
      "Jadidchilik harakatining 8 nafar taniqli namoyandasi hayoti, faoliyati va ma'rifat yo'lidagi xizmatlariga bag'ishlangan risolalar turkumi.",
  },
  {
    slug: "ozi-uchar-gilamlardan",
    title: "O'zi uchar gilamlardan ekranlar qa'rigacha",
    author: "Nigora Husanova",
    year: 2026,
    type: "OAV maqolalari",
    source: "Xabar.uz",
    url: "https://xabar.uz/6zsb",
    cover: "/nashrlar/ozi-uchar-gilamlardan.jpg",
    description: "Institut katta ilmiy xodimi Nigora Husanovaning tahliliy maqolasi.",
  },
  {
    slug: "qilichdan-otkir-kalom",
    title: "Qilichdan o'tkir kalom, yoxud zamonaviy targ'ibot va propaganda",
    author: "Nigora Husanova",
    year: 2026,
    type: "OAV maqolalari",
    source: "\"Vatanparvar\" gazetasi, 2026-yil 4-sentabr, 36-son",
    cover: "/nashrlar/qilichdan-otkir-kalom.jpg",
    description: "Institut kichik ilmiy xodimi Nigora Husanovaning maqolasi.",
  },
  {
    slug: "9-11-chorak-asrlik-saboq",
    title: "9/11: chorak asrlik saboq yoxud xavfsizlik va ma'rifat yo'li",
    author: "A. Shermatov",
    year: 2026,
    type: "OAV maqolalari",
    source: "UZA — O'zbekiston Milliy axborot agentligi",
    url: "https://uza.uz/oz/posts/9-11-chorak-asrlik-saboq-yohud-xavfsizlik-va-marifat-yoli_907651",
    cover: "https://picsum.photos/seed/imti-shermatov/400/560",
    description: "Institut kichik ilmiy xodimi A. Shermatovning UZA rasmiy saytida e'lon qilingan maqolasi.",
  },
  {
    slug: "marifat-qudratli-kuchga-aylanmoqda",
    title: "Ma'rifat yana qudratli kuchga aylanmoqda, NEGA?",
    author: "Bo'ri Qodirov",
    year: 2026,
    type: "OAV maqolalari",
    source: "\"Jamiyat\" gazetasi, 2026-yil 13-avgust",
    cover: "/nashrlar/marifat-qudratli-kuchga-aylanmoqda.jpg",
    description: "\"Do'stlik\" ordeni sohibi, institut bo'lim boshlig'i Bo'ri Qodirovning maqolasi.",
  },
];
