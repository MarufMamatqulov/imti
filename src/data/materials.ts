import { BOOKS } from "@/data/books";

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
  // "portrait" — kitob sahifasi kabi tik nisbat, sahifa to'liq ko'rinadi
  // (object-contain). Berilmasa, taqdimotlar uchun odatdagi 16:9 (object-cover).
  coverAspect?: "video" | "portrait";
  files: MaterialFile[];
};

export const MATERIAL_CATEGORIES = [
  "Barchasi",
  "Milliy qadriyatlar",
  "Davlat ramzlari va bayramlar",
  "Mustaqillik va davlat siyosati",
  "Xalqaro tajriba",
  "Ma'naviy tarbiya",
  "Kitoblar",
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
    files: [
      { label: "Taqdimot", path: "/materiallar/dolzarb-90-kun-90-imkoniyat.pptx", fileType: "PPTX", fileSize: "5.0 MB" },
      { label: "Uslubiy qo'llanma", path: "/materiallar/dolzarb-90-kun-90-imkoniyat-qollanma.pdf", fileType: "PDF", fileSize: "2.3 MB" },
    ],
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
  {
    slug: "14-yanvar-vatan-himoyachilari-kuni",
    title: "\"Milliy armiya — Ona yurt qalqoni, tinchligimiz posboni!\"",
    description: "14-yanvar — Vatan himoyachilari kuniga bag'ishlangan targ'ibot taqdimoti.",
    category: "Davlat ramzlari va bayramlar",
    cover: "/materiallar/14-yanvar-vatan-himoyachilari-kuni-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/14-yanvar-vatan-himoyachilari-kuni.pptx", fileType: "PPTX", fileSize: "6.6 MB" }],
  },
  {
    slug: "9-may-xotira-va-qadrlash-kuni",
    title: "\"Burch, jasorat, matonat!\"",
    description: "9-may Xotira va qadrlash kuni munosabati bilan tayyorlangan taqdimot.",
    category: "Davlat ramzlari va bayramlar",
    cover: "/materiallar/9-may-xotira-va-qadrlash-kuni-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/9-may-xotira-va-qadrlash-kuni.pptx", fileType: "PPTX", fileSize: "8.5 MB" }],
  },
  {
    slug: "davlat-dasturi-2026",
    title: "\"O'zbekiston — 2030\" strategiyasini amalga oshirish bo'yicha Davlat dasturi",
    description: "Mahallani rivojlantirish va jamiyatni yuksaltirish yilida ustuvor yo'nalishlar bo'yicha islohotlar dasturi.",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/davlat-dasturi-2026-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/davlat-dasturi-2026.pptx", fileType: "PPTX", fileSize: "8.8 MB" }],
  },
  {
    slug: "prezident-murojaatnomasi-2025",
    title: "Prezidentning Oliy Majlisga va xalqqa Murojaatnomasi",
    description: "O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyevning 2025-yil 26-dekabrdagi Murojaatnomasi asosida tayyorlangan taqdimot.",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/prezident-murojaatnomasi-2025-cover.jpg",
    files: [
      { label: "Taqdimot", path: "/materiallar/prezident-murojaatnomasi-2025.pptx", fileType: "PPTX", fileSize: "8.8 MB" },
      { label: "Murojaatnoma matni", path: "/materiallar/prezident-murojaatnomasi-2025-matni.pdf", fileType: "PDF", fileSize: "0.8 MB" },
      { label: "Murojaatnomaga sharh", path: "/materiallar/prezident-murojaatnomasi-2025-sharh.pdf", fileType: "PDF", fileSize: "8.5 MB" },
    ],
  },
  {
    slug: "sohibqiron-amir-temur",
    title: "\"Sohibqiron Amir Temur — buyuk sarkarda\"",
    description: "Amir Temurning davlat arbobi va sarkardalik merosiga bag'ishlangan ilmiy-ommabop taqdimot.",
    category: "Milliy qadriyatlar",
    cover: "/materiallar/sohibqiron-amir-temur-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/sohibqiron-amir-temur.pptx", fileType: "PPTX", fileSize: "4.2 MB" }],
  },
  {
    slug: "konstitutsiya-taqdimoti",
    title: "\"Konstitutsiya — inson qadri, erkinlik, tenglik va adolat garovi\"",
    description: "O'zbekiston Respublikasi Konstitutsiyasi qabul qilingan kun (8-dekabr) munosabati bilan tayyorlangan taqdimot.",
    category: "Davlat ramzlari va bayramlar",
    cover: "/materiallar/konstitutsiya-taqdimoti-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/konstitutsiya-taqdimoti.pptx", fileType: "PPTX", fileSize: "5.3 MB" }],
  },
  {
    slug: "bmt-bosh-assambleyasi-80-yubiley",
    title: "BMT Bosh Assambleyasining 80-yubiley sessiyasi",
    description: "Birlashgan Millatlar Tashkiloti Bosh Assambleyasining 80 yilligiga bag'ishlangan taqdimot.",
    category: "Xalqaro tajriba",
    cover: "/materiallar/bmt-bosh-assambleyasi-80-yubiley-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/bmt-bosh-assambleyasi-80-yubiley.pptx", fileType: "PPTX", fileSize: "8.6 MB" }],
  },
  {
    slug: "vatan-mudofaasi-yuksak-sharaf",
    title: "\"Vatan mudofaasi — yuksak sharaf\"",
    description: "Qurolli Kuchlar va vatan mudofaasi mavzusidagi targ'ibot taqdimoti.",
    category: "Davlat ramzlari va bayramlar",
    cover: "/materiallar/vatan-mudofaasi-yuksak-sharaf-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/vatan-mudofaasi-yuksak-sharaf.pptx", fileType: "PPTX", fileSize: "4.8 MB" }],
  },
  {
    slug: "ijtimoiy-tarmoqlar-tasiri",
    title: "\"Ijtimoiy tarmoqlar ta'siri\"",
    description: "Ota-onalar va o'quvchilar uchun ijtimoiy tarmoqlardan xavfsiz foydalanish bo'yicha tavsiyaviy metodik qo'llanma.",
    category: "Ma'naviy tarbiya",
    cover: "/materiallar/ijtimoiy-tarmoqlar-tasiri-cover.jpg",
    files: [
      { label: "Taqdimot", path: "/materiallar/ijtimoiy-tarmoqlar-tasiri.pptx", fileType: "PPTX", fileSize: "3.0 MB" },
      { label: "Metodik qo'llanma", path: "/materiallar/ijtimoiy-tarmoqlar-tasiri-qollanma.pdf", fileType: "PDF", fileSize: "1.7 MB" },
    ],
  },
  {
    slug: "ozbekiston-2030-iqtisodiy-islohotlar",
    title: "\"O'zbekiston — 2030\" strategiyasida iqtisodiy islohotlar",
    description: "\"O'zbekiston — 2030\" strategiyasi doirasidagi iqtisodiy islohotlarga bag'ishlangan taqdimot (1-qism).",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/ozbekiston-2030-iqtisodiy-islohotlar-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/ozbekiston-2030-iqtisodiy-islohotlar.pptx", fileType: "PPTX", fileSize: "3.4 MB" }],
  },
  {
    slug: "jadidchilik-harakatining-paydo-bolishi",
    title: "\"Jadidchilik harakatining paydo bo'lishi\"",
    description: "Jadidchilik harakati va uning taniqli namoyandalariga bag'ishlangan taqdimot.",
    category: "Milliy qadriyatlar",
    cover: "/materiallar/jadidchilik-harakatining-paydo-bolishi-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/jadidchilik-harakatining-paydo-bolishi.pptx", fileType: "PPTX", fileSize: "4.0 MB" }],
  },
  {
    slug: "korrupsiyaga-qarshi-kurash",
    title: "\"Korrupsiyaga qarshi kurash — har bir vatanparvar yurtdoshimizning vijdon ishidir\"",
    description: "Korrupsiyaga qarshi kurashish mavzusidagi ma'rifiy-targ'ibot taqdimoti.",
    category: "Ma'naviy tarbiya",
    cover: "/materiallar/korrupsiyaga-qarshi-kurash-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/korrupsiyaga-qarshi-kurash.pptx", fileType: "PPTX", fileSize: "3.4 MB" }],
  },
  {
    slug: "mustaqillik-34-yil",
    title: "\"Vatan uchun, millat uchun, xalq uchun!\"",
    description: "Mustaqillikning 34 yilligi bayramiga bag'ishlangan targ'ibot taqdimoti.",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/mustaqillik-34-yil-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/mustaqillik-34-yil.pptx", fileType: "PPTX", fileSize: "7.0 MB" }],
  },
  {
    slug: "mahalladagi-ijtimoiy-manaviy-muhit",
    title: "\"Mahalladagi ijtimoiy-ma'naviy muhitni barqarorlashtirish\"",
    description: "Diniy bag'rikenglik va millatlararo totuvlikni ta'minlash bo'yicha amalga oshiriladigan asosiy vazifalar haqida taqdimot.",
    category: "Ma'naviy tarbiya",
    cover: "/materiallar/mahalladagi-ijtimoiy-manaviy-muhit-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/mahalladagi-ijtimoiy-manaviy-muhit.pptx", fileType: "PPTX", fileSize: "4.4 MB" }],
  },
  {
    slug: "markaziy-osiyo-yevropa-ittifoqi-sammiti",
    title: "\"Markaziy Osiyo — Yevropa Ittifoqi\" birinchi sammiti",
    description: "2025-yil 3–4-aprel kunlari Samarqand shahrida bo'lib o'tgan sammitga bag'ishlangan taqdimot.",
    category: "Xalqaro tajriba",
    cover: "/materiallar/markaziy-osiyo-yevropa-ittifoqi-sammiti-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/markaziy-osiyo-yevropa-ittifoqi-sammiti.pptx", fileType: "PPTX", fileSize: "7.8 MB" }],
  },
  {
    slug: "ozbek-tili-millat-iftixori",
    title: "\"O'zbek tili — millat iftixori va davlat mustaqilligining ruhiy poydevori\"",
    description: "21-oktabr — o'zbek tiliga davlat tili maqomi berilgan kunga bag'ishlangan taqdimot.",
    category: "Milliy qadriyatlar",
    cover: "/materiallar/ozbek-tili-millat-iftixori-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/ozbek-tili-millat-iftixori.pptx", fileType: "PPTX", fileSize: "3.0 MB" }],
  },
  {
    slug: "parlamentlararo-ittifoq-150-yubiley",
    title: "Parlamentlararo Ittifoqning 150-yubiley Assambleyasi",
    description: "2025-yil 5–9-aprel kunlari Toshkentda bo'lib o'tgan assambleyaga bag'ishlangan taqdimot.",
    category: "Xalqaro tajriba",
    cover: "/materiallar/parlamentlararo-ittifoq-150-yubiley-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/parlamentlararo-ittifoq-150-yubiley.pptx", fileType: "PPTX", fileSize: "3.2 MB" }],
  },
  {
    slug: "telegram-messenger-haqida",
    title: "Telegram Messenger haqida siz bilgan va bilmaganlaringiz?",
    description: "Raqamli savodxonlik va soxta xabarlarni aniqlash mavzusidagi targ'ibot taqdimoti.",
    category: "Ma'naviy tarbiya",
    cover: "/materiallar/telegram-messenger-haqida-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/telegram-messenger-haqida.pptx", fileType: "PPTX", fileSize: "5.0 MB" }],
  },
  {
    slug: "turkiy-davlatlar-tashkiloti-sammiti",
    title: "Turkiy davlatlar tashkiloti sammiti",
    description: "2025-yil 6–7-oktyabr kunlari Gabala shahrida bo'lib o'tgan sammitga bag'ishlangan taqdimot.",
    category: "Xalqaro tajriba",
    cover: "/materiallar/turkiy-davlatlar-tashkiloti-sammiti-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/turkiy-davlatlar-tashkiloti-sammiti.pptx", fileType: "PPTX", fileSize: "3.7 MB" }],
  },
  {
    slug: "ustoz-haqida",
    title: "\"Ustoz haqida\"",
    description: "\"Ustozning qadam tashlashi ham tarbiyadir\" — o'qituvchilik kasbi mavzusidagi taqdimot.",
    category: "Ma'naviy tarbiya",
    cover: "/materiallar/ustoz-haqida-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/ustoz-haqida.pptx", fileType: "PPTX", fileSize: "3.5 MB" }],
  },
  {
    slug: "vatan-mudofaasi-yuksak-sharaf",
    title: "\"Vatan mudofaasi — yuksak sharaf\"",
    description: "Qurolli kuchlar va harbiy xizmat mavzusidagi targ'ibot taqdimoti.",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/vatan-mudofaasi-yuksak-sharaf-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/vatan-mudofaasi-yuksak-sharaf.pptx", fileType: "PPTX", fileSize: "4.8 MB" }],
  },
  {
    slug: "kitobxonlik-madaniyatini-rivojlantirish",
    title: "\"Kitob, men va tafakkur: kim birlamchi?\"",
    description: "Frankfurt kitob yarmarkasi tajribasini targ'ibot faoliyatida qo'llash mavzusidagi taqdimot.",
    category: "Ma'naviy tarbiya",
    cover: "/materiallar/kitobxonlik-madaniyatini-rivojlantirish-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/kitobxonlik-madaniyatini-rivojlantirish.pptx", fileType: "PPTX", fileSize: "5.5 MB" }],
  },
  {
    slug: "yagona-vatan-yagona-xalq",
    title: "\"Yagona Vatan, yagona xalq bo'lib, yangi hayot va kelajak yaratamiz!\"",
    description: "O'zbekiston Respublikasi davlat mustaqilligi va taraqqiyoti yutuqlariga bag'ishlangan targ'ibot taqdimoti.",
    category: "Mustaqillik va davlat siyosati",
    cover: "/materiallar/yagona-vatan-yagona-xalq-cover.jpg",
    files: [{ label: "Taqdimot", path: "/materiallar/yagona-vatan-yagona-xalq.pdf", fileType: "PDF", fileSize: "10.1 MB" }],
  },
];

// Amir Temur va temuriylar davri tarixiga bag'ishlangan kitoblar — institutning
// "Yangi ma'lumotlar" arxividan olingan (2026). Muqovalar har bir kitobning
// o'z PDF faylidan olingan haqiqiy sahifalardir.
export const TEMUR_BOOKS: MaterialItem[] = [
  {
    slug: "amir-temur-haqida-hikoyalar",
    title: "Amir Temur haqida hikoyalar",
    description: "Amir Temur davri voqealari asosida yozilgan hikoyalar to'plami. Toshkent: \"O'zbekiston\" nashriyoti, 2009.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-haqida-hikoyalar-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-haqida-hikoyalar.pdf", fileType: "PDF", fileSize: "0.7 MB" }],
  },
  {
    slug: "amir-temur-saltanati",
    title: "Amir Temur saltanati",
    description: "Lyusyen Kerenning Amir Temur saltanati tarixiga bag'ishlangan asari. Toshkent: \"Ma'naviyat\", 1999.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-saltanati-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-saltanati.pdf", fileType: "PDF", fileSize: "5.7 MB" }],
  },
  {
    slug: "amir-temur-qissalari",
    title: "Amir Temur qissalari",
    description: "Adabiyotshunos olim Aziz Qayumovning Amir Temur haqidagi qissalar to'plami.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-qissalari-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-qissalari.pdf", fileType: "PDF", fileSize: "1.5 MB" }],
  },
  {
    slug: "amir-temur-roman-ahmedov",
    title: "\"Amir Temur\" (tarixiy roman)",
    description: "Tarixchi-yozuvchi Bo'riboy Ahmedovning Amir Temur hayoti va faoliyatiga bag'ishlangan tarixiy romani. Toshkent: Abdulla Qodiriy nomidagi Xalq merosi nashriyoti.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-roman-ahmedov-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-roman-ahmedov.pdf", fileType: "PDF", fileSize: "23.1 MB" }],
  },
  {
    slug: "amir-temur-sevgan-yurt",
    title: "\"Amir Temur sevgan yurt\" (Badialar)",
    description: "Hakim Sattoriyning Amir Temur va vatanparvarlik mavzusidagi badialari. Toshkent: \"O'zbekiston\", 1996.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-sevgan-yurt-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-sevgan-yurt.pdf", fileType: "PDF", fileSize: "5.2 MB" }],
  },
  {
    slug: "amir-temur-va-fransiya",
    title: "Amir Temur va Fransiya",
    description: "L. Keren va A. Saidovning asari. O'zbekiston Respublikasi IIV Akademiyasi nashri. Toshkent: \"Adolat\", 1996.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-va-fransiya-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-va-fransiya.pdf", fileType: "PDF", fileSize: "3.5 MB" }],
  },
  {
    slug: "amir-temur-solnomasi",
    title: "Amir Temur solnomasi",
    description: "Muhammad Alining asari. Xalqaro Amir Temur jamg'armasi homiyligida, Alisher Navoiy nomidagi O'zbekiston Milliy kutubxonasi nashriyoti. Toshkent, 2008.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-solnomasi-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-solnomasi.pdf", fileType: "PDF", fileSize: "1.6 MB" }],
  },
  {
    slug: "amir-temur-siymosi",
    title: "\"Amir Temur siymosi\" (Ilmiy badia)",
    description: "Taniqli yozuvchi Pirimqul Qodirovning Amir Temur siymosiga bag'ishlangan ilmiy-badiiy asari. Toshkent: \"O'zbekiston\", 2007.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-siymosi-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-siymosi.pdf", fileType: "PDF", fileSize: "7.6 MB" }],
  },
  {
    slug: "temurnoma",
    title: "Temurnoma",
    description: "Salohiddin Toshkandiyning asari. \"Sharq\" nashriyot-matbaa konserni Bosh tahririyati. Toshkent, 1997.",
    category: "Kitoblar",
    cover: "/materiallar/temurnoma-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/temurnoma.pdf", fileType: "PDF", fileSize: "16.5 MB" }],
  },
  {
    slug: "amir-temur-ajdodlari",
    title: "Amir Temur ajdodlari",
    description: "Sharafiddin Ali Yazdiyning \"Zafarnoma\" asaridan terma-tarjima. Fors tilidan tarjima, kirish so'z va izohlar muallifi — Omonulla Buriev; mas'ul muharrir — tarix fanlari doktori Asomiddin Urinboyev.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-ajdodlari-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-ajdodlari.pdf", fileType: "PDF", fileSize: "1.7 MB" }],
  },
  {
    slug: "zafarnoma",
    title: "Zafarnoma",
    description: "Sharafiddin Ali Yazdiyning Amir Temur davri tarixiga bag'ishlangan mashhur asari. \"Sharq\" nashriyot-matbaa konserni. Toshkent, 1997.",
    category: "Kitoblar",
    cover: "/materiallar/zafarnoma-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/zafarnoma.pdf", fileType: "PDF", fileSize: "18.5 MB" }],
  },
  {
    slug: "temur-tuzuklari",
    title: "Temur tuzuklari",
    description: "Forschadan tarjima: Alixon So'g'uniy va Habibullo Qoratamov; so'zboshi muallifi — Bo'riboy Ahmedov. Toshkent: Nashriyot-matbaa birlashmasi, 1991.",
    category: "Kitoblar",
    cover: "/materiallar/temur-tuzuklari-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/temur-tuzuklari.pdf", fileType: "PDF", fileSize: "5.6 MB" }],
  },
  {
    slug: "buyuk-temur-roman",
    title: "\"Buyuk Temur\" (roman-badia)",
    description: "Yevgeniy Berezikovning asari. \"Sharq\" nashriyot-matbaa konserni. Toshkent, 1996.",
    category: "Kitoblar",
    cover: "/materiallar/buyuk-temur-roman-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/buyuk-temur-roman.pdf", fileType: "PDF", fileSize: "14.6 MB" }],
  },
  {
    slug: "amir-temur-davlat-boshqaruvi",
    title: "Amir Temur davlat boshqaruvi",
    description: "Shohistaxon O'ljayevaning Amir Temur davridagi davlat boshqaruvi tizimiga bag'ishlangan asari.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-davlat-boshqaruvi-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-davlat-boshqaruvi.pdf", fileType: "PDF", fileSize: "7.4 MB" }],
  },
  {
    slug: "amir-temur-saltanatida-xavfsizlik-xizmati",
    title: "Amir Temur saltanatida xavfsizlik xizmati",
    description: "Hamdam Sodiqovning Amir Temur davridagi davlat xavfsizligini ta'minlash tizimi tarixiga bag'ishlangan asari.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-saltanatida-xavfsizlik-xizmati-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-saltanatida-xavfsizlik-xizmati.pdf", fileType: "PDF", fileSize: "9.6 MB" }],
  },
  {
    slug: "klavixo-dnevnik-puteshestviya",
    title: "\"Dnevnik puteshestviya v Samarkand ko dvoru Timura\" (1403–1406)",
    description: "Ispan elchisi Rui Gonsales de Klavixoning Amir Temur saroyiga sayohati haqidagi kundaligi (rus tilida).",
    category: "Kitoblar",
    cover: "/materiallar/klavixo-dnevnik-puteshestviya-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/klavixo-dnevnik-puteshestviya.pdf", fileType: "PDF", fileSize: "7.3 MB" }],
  },
  {
    slug: "temuriylar-shajarasi",
    title: "Temuriylar shajarasi",
    description: "Turg'un Fayziyevning temuriylar sulolasi shajarasiga bag'ishlangan tarixiy-genealogik asari.",
    category: "Kitoblar",
    cover: "/materiallar/temuriylar-shajarasi-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/temuriylar-shajarasi.pdf", fileType: "PDF", fileSize: "16.9 MB" }],
  },
  {
    slug: "ozbek-toylaridagi-isrofgarchilik-toplam",
    title: "\"O'zbek to'ylaridagi isrofgarchilik: an'ana va zamon ziddiyatlari, maromiylik zarurati\"",
    description: "Institut hamkorligida tashkil etilgan mavzu bo'yicha maqolalar to'plami. Toshkent, 2026.",
    category: "Kitoblar",
    cover: "/materiallar/ozbek-toylaridagi-isrofgarchilik-toplam-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "To'plam (PDF)", path: "/materiallar/ozbek-toylaridagi-isrofgarchilik-toplam.pdf", fileType: "PDF", fileSize: "3.0 MB" }],
  },
  {
    slug: "mustaqillik-35-yilligi-konferensiya-toplami",
    title: "\"Mustaqillikning 35 yilligi: milliy ma'naviy taraqqiyot natijalari va ma'rifat targ'ibotining ilmiy-metodik masalalari\"",
    description: "Respublika ilmiy-amaliy konferensiyasi materiallari to'plami. Samarqand, 2026.",
    category: "Kitoblar",
    cover: "/materiallar/mustaqillik-35-yilligi-konferensiya-toplami-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "To'plam (PDF)", path: "/materiallar/mustaqillik-35-yilligi-konferensiya-toplami.pdf", fileType: "PDF", fileSize: "6.0 MB" }],
  },
  {
    slug: "yagona-manaviy-makon-konferensiya-toplami",
    title: "\"O'zbekistonda yagona ma'naviy makon barpo etishning strategik yo'nalishlari\"",
    description: "Respublika ilmiy-amaliy konferensiyasi materiallari to'plami.",
    category: "Kitoblar",
    cover: "/materiallar/yagona-manaviy-makon-konferensiya-toplami-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "To'plam (PDF)", path: "/materiallar/yagona-manaviy-makon-konferensiya-toplami.pdf", fileType: "PDF", fileSize: "5.3 MB" }],
  },
  {
    slug: "ummilliy-taraqqiyot-ijtimoiy-manaviy-masalalar-toplami",
    title: "\"Umummilliy taraqqiyotning ijtimoiy-ma'naviy masalalari\"",
    description: "Institut tashkil etgan respublika ilmiy-amaliy konferensiyasi materiallari to'plami. Toshkent, 2026.",
    category: "Kitoblar",
    cover: "/materiallar/ummilliy-taraqqiyot-ijtimoiy-manaviy-masalalar-toplami-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "To'plam (PDF)", path: "/materiallar/ummilliy-taraqqiyot-ijtimoiy-manaviy-masalalar-toplami.pdf", fileType: "PDF", fileSize: "5.1 MB" }],
  },
  {
    // Diqqat: manba PDF faylida shrift kodlashtirish nosozligi bor — sahifalar
    // avtomatik renderlab bo'lmadi (matn/varaqlarning o'zi joyida, faqat
    // bizning render-pipeline uning shriftini to'g'ri chiqara olmadi). Shu
    // sababli muqova institut ranglarida sodda belgi sifatida yasalgan —
    // haqiqiy kitob sahifasi surati emas.
    slug: "ozbek-falsafasi",
    title: "O'zbek falsafasi",
    description: "O'zbek falsafiy tafakkuri tarixiga bag'ishlangan ilmiy-ensiklopedik nashr.",
    category: "Kitoblar",
    cover: "/materiallar/ozbek-falsafasi-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/ozbek-falsafasi.pdf", fileType: "PDF", fileSize: "10.6 MB" }],
  },
  {
    // Diqqat: muqova yuqoridagi "O'zbek falsafasi" bilan bir xil sababga ko'ra
    // generatsiya qilingan belgi — manba PDF shrifti render pipeline'da
    // to'g'ri chiqmadi.
    slug: "amir-temur-oglining-olimi-haqida-rivoyat",
    title: "Amir Temur o'g'lining o'limi haqida rivoyat",
    description: "Amir Temur davriga oid tarixiy rivoyat.",
    category: "Kitoblar",
    cover: "/materiallar/amir-temur-oglining-olimi-haqida-rivoyat-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/amir-temur-oglining-olimi-haqida-rivoyat.pdf", fileType: "PDF", fileSize: "0.1 MB" }],
  },
  {
    // Diqqat: muqova yuqoridagilar bilan bir xil sababga ko'ra generatsiya
    // qilingan belgi.
    slug: "temuriy-malikalar",
    title: "Temuriy malikalar",
    description: "Temuriylar sulolasi ayollari tarixiga bag'ishlangan ocherk.",
    category: "Kitoblar",
    cover: "/materiallar/temuriy-malikalar-cover.jpg",
    coverAspect: "portrait",
    files: [{ label: "Kitob (PDF)", path: "/materiallar/temuriy-malikalar.pdf", fileType: "PDF", fileSize: "0.4 MB" }],
  },
];

// Kitoblar/jurnallar — Respublika Ma'naviyat va ma'rifat markazi elektron
// kutubxonasidan olingan (avtomatik generatsiya qilingan, books.ts'ga qarang).
export const ALL_MATERIALS: MaterialItem[] = [...MATERIALS, ...TEMUR_BOOKS, ...BOOKS];
