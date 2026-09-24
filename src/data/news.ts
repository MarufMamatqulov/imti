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

// Manba: institutning rasmiy Telegram kanali eksporti (2024-05 — 2026-09).
// Har bir yangilik kanaldagi haqiqiy post matni asosida yozilgan; faqat
// institutga bevosita tegishli, haqiqatan sodir bo'lgan voqealar tanlab
// olindi (tabriklar, umumiy targ'ibot slaydlari va boshqa institutga
// aloqasi bo'lmagan repostlar chiqarib tashlandi). `views` maydoni hali
// haqiqiy sayt statistikasi mavjud emasligi sababli namunaviy qoladi.
export const NEWS: NewsItem[] = [
  {
    slug: "mustaqil-izlanuvchilikka-qabul",
    title: "Doktorantura (PhD/DSc) mustaqil izlanuvchilikka hujjatlar qabul qilinmoqda",
    excerpt:
      "Institut 09.00.07, 09.00.08 va 09.00.09 ixtisosliklari bo'yicha mustaqil izlanuvchilikka hujjatlar qabulini e'lon qildi.",
    content: [
      "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti 09.00.07 — \"Ma'naviyat tarixi va nazariyasi\", 09.00.08 — \"Ma'naviy tarbiya\" va 09.00.09 — \"Ma'naviy jarayonlar va texnologiyalar\" ixtisosliklari bo'yicha (DSc hamda PhD) mustaqil izlanuvchilikka qabulni e'lon qildi.",
      "Talabgorlardan quyidagi hujjatlar talab etiladi: oliy ta'lim muassasasi magistraturasi diplomi (yoki nusxasi), kamida 1 ta maqola va 2 ta tezis, qisqacha biografik ma'lumotnoma hamda ish joyidan tavsifnoma. Hujjatlar Yagona elektron tizim (daraja.ilmiy.uz) orqali qabul qilinadi.",
    ],
    date: "2026-07-20",
    category: "E'lonlar",
    image: "/news/mustaqil-izlanuvchilikka-qabul.jpg",
    views: 1842,
  },
  {
    slug: "dostlik-ordeni-taqdirlash",
    title: "Institut bo'lim boshlig'i \"Do'stlik\" ordeni bilan taqdirlandi",
    excerpt:
      "Prezidentimiz farmoniga muvofiq, institut bo'lim boshlig'i Kadirov Buri Xudayshukurovich \"Do'stlik\" ordeni bilan taqdirlandi.",
    content: [
      "O'zbekiston Respublikasi Prezidentining farmoniga muvofiq, Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti bo'lim boshlig'i Kadirov Buri Xudayshukurovich mamlakatimiz taraqqiyotiga qo'shgan hissasi uchun \"Do'stlik\" ordeni bilan taqdirlandi.",
    ],
    date: "2026-08-22",
    category: "Ilmiy hayot",
    image: "/news/dostlik-ordeni-taqdirlash.jpg",
    views: 1560,
  },
  {
    slug: "mustaqillik-35-yillik-konferensiya",
    title:
      "\"Mustaqillikning 35 yilligi: milliy ma'naviy taraqqiyot natijalari va ma'rifat targ'ibotining ilmiy-metodik masalalari\" konferensiyasi bo'lib o'tdi",
    excerpt:
      "Samarqand davlat universitetida institut hamda hamkor tashkilotlar ishtirokida respublika ilmiy-amaliy konferensiyasi tashkil etildi.",
    content: [
      "2026-yil 22-avgust kuni Samarqand shahrida, Samarqand davlat universiteti bosh binosida \"Ma'naviy islohotlarning yangi bosqichida targ'ibot ishlarining ilmiy-metodik muammolari\" mavzusidagi respublika ilmiy-amaliy konferensiyasi bo'lib o'tdi. Tadbir Respublika Ma'naviyat va ma'rifat markazi, Ijtimoiy-Ma'naviy Tadqiqotlar Instituti, Fanlar akademiyasi va \"Ma'rifat\" targ'ibotchilar jamiyati hamkorligida tashkil etilgan.",
      "Konferensiya olti yo'nalish bo'yicha ish olib bordi: ma'naviy islohotlarning nazariy-falsafiy asoslari, targ'ibot ishlarining ilmiy-metodik asoslari, raqamli jamiyatda ma'naviy targ'ibot, yoshlar ma'naviyati va fuqarolik mas'uliyati, milliy meros va Uchinchi Renessans g'oyalari, hamda global tahdidlar sharoitida milliy o'zlikni saqlash masalalari.",
      "Mamlakatimiz mustaqilligining 35 yilligiga bag'ishlangan konferensiya materiallari to'plam sifatida chop etildi.",
    ],
    date: "2026-08-22",
    category: "Ilmiy hayot",
    image: "/news/mustaqillik-35-yillik-konferensiya.jpg",
    views: 1327,
  },
  {
    slug: "umummilliy-taraqqiyot-konferensiyasi",
    title: "\"Umummilliy taraqqiyotning ijtimoiy-ma'naviy masalalari\" konferensiyasi materiallari nashr etildi",
    excerpt:
      "\"O'zbekiston — 2030\" strategiyasi doirasidagi ustuvor vazifalarni ilmiy tahlil qilishga bag'ishlangan respublika ilmiy-amaliy konferensiyasi materiallari chop etildi.",
    content: [
      "\"O'zbekiston — 2030\" strategiyasi, mamlakatimizda amalga oshirilayotgan keng ko'lamli islohotlar hamda jamiyatning ma'naviy yuksalishini ta'minlashga qaratilgan ustuvor vazifalar ijrosini ilmiy jihatdan tahlil qilish maqsadida Institut tomonidan 2026-yil 3-iyun kuni \"Umummilliy taraqqiyotning ijtimoiy-ma'naviy masalalari\" mavzusida respublika ilmiy-amaliy konferensiyasi o'tkazildi.",
      "Konferensiya besh sho'ba bo'yicha ish olib bordi: jamiyat ma'naviy taraqqiyotini tadqiq etishning ilmiy-nazariy va texnologik muammolari, ijtimoiy-ma'naviy muhit transformatsiyasi, ijtimoiy-ma'naviy jarayonlarni tahlil qilish mexanizmlari, umummilliy taraqqiyotning g'oyaviy-mafkuraviy targ'iboti, hamda yangi O'zbekistonda ma'naviy tarbiya va kasbiy kompetensiyalarni rivojlantirish masalalari. Konferensiya materiallari elektron va bosma shaklda chop etildi.",
    ],
    date: "2026-06-03",
    category: "Ilmiy hayot",
    image: "/news/umummilliy-taraqqiyot-konferensiyasi.jpg",
    views: 1108,
  },
  {
    slug: "maromiylik-maqolalar-tanlovi",
    title: "\"Maromiylik\" mavzusida maqolalar tanlovi e'lon qilindi",
    excerpt:
      "Institut, Respublika Ma'naviyat va Ma'rifat markazi hamda \"Ma'rifat\" targ'ibotchilar jamiyati hamkorlikda \"O'zbek to'ylaridagi isrofgarchilik\" mavzusida maqolalar tanlovini e'lon qildi.",
    content: [
      "Respublika Ma'naviyat va Ma'rifat markazi, Ijtimoiy-Ma'naviy Tadqiqotlar Instituti va \"Ma'rifat\" targ'ibotchilar jamiyati hamkorligida \"Maromiylik\" loyihasi doirasida \"O'zbek to'ylaridagi isrofgarchilik — an'ana va zamon ziddiyatlari\" hamda \"Maromiylik\" mavzusida maqolalar tanlovi e'lon qilindi.",
      "Tanlovda ilmiy xodimlar, tadqiqotchilar, oliy ta'lim muassasalari o'qituvchilari, doktorantlar, mustaqil tadqiqotchilar, jurnalistlar va ushbu mavzuga qiziqqan barcha fuqarolar ishtirok etishlari mumkin.",
    ],
    date: "2025-12-18",
    category: "E'lonlar",
    image: "https://picsum.photos/seed/imti-maromiylik/1200/800",
    views: 742,
  },
  {
    slug: "kitoblar-taqdimoti-yoshlarni-himoya",
    title: "Yoshlarni mafkuraviy xurujlardan himoya qilish bo'yicha tayyorlangan kitoblar taqdimoti o'tkazildi",
    excerpt:
      "Amaliy-maqsadli loyiha doirasida tayyorlangan o'quv va ilmiy-metodik qo'llanmalar, uslubiy tavsiyalar hamda ma'rifiy adabiyotlar taqdimoti bo'lib o'tdi.",
    content: [
      "Institut tomonidan \"Yoshlarni turli mafkuraviy xurujlardan himoya qilish va ma'naviy-axloqiy tarbiyalash bo'yicha o'quv va ilmiy-metodik qo'llanmalar, uslubiy tavsiya, ma'rifiy adabiyot va media mahsulotlar majmuasini yaratish\" mavzusidagi amaliy-maqsadli loyiha doirasida tayyorlangan kitoblar taqdimoti bo'yicha ma'naviy-ma'rifiy tadbir bo'lib o'tdi.",
    ],
    date: "2025-12-17",
    category: "Ma'rifiy tadbirlar",
    image: "https://picsum.photos/seed/imti-kitob-taqdimot/1200/800",
    views: 689,
  },
  {
    slug: "fvv-akademiyasi-memorandum",
    title: "FVV Akademiyasi bilan hamkorlik memorandumi imzolandi",
    excerpt:
      "Institut va FVV Akademiyasi o'rtasida ikki tomonlama hamkorlik memorandumi imzolandi.",
    content: [
      "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti hamda FVV Akademiyasi o'rtasida ikki tomonlama hamkorlik memorandumi imzolandi.",
      "Memorandum doirasida tomonlar ma'naviy-ma'rifiy tadqiqotlar, birgalikdagi ilmiy-amaliy tadbirlar va kadrlar tayyorlash sohasida hamkorlikni yo'lga qo'yish bo'yicha kelishib oldilar.",
    ],
    date: "2025-09-23",
    category: "Ilmiy hayot",
    image: "/news/fvv-akademiyasi-memorandum.jpg",
    views: 964,
  },
  {
    slug: "mafkuraviy-tahdidlar-konferensiyasi",
    title:
      "\"Mafkuraviy tahdidlarning ma'naviy jarayonlar rivojiga ta'siri va uni oldini olish mexanizmlari\" konferensiyasi o'tkazildi",
    excerpt:
      "\"Mafkuraviy tahdiddan himoyalanish emas, hujumga o'tish kerak\" shiori ostida respublika ilmiy-amaliy konferensiyasi bo'lib o'tdi, konferensiya materiallari to'plam sifatida chop etildi.",
    content: [
      "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti tomonidan \"Mafkuraviy tahdidlarning ma'naviy jarayonlar rivojiga ta'siri va uni oldini olish mexanizmlari\" mavzusida respublika ilmiy-amaliy konferensiyasi o'tkazildi.",
      "Konferensiya materiallari alohida to'plam sifatida nashr etilib, ishtirokchilarga taqdim etildi. (Batafsil: oyina.uz)",
    ],
    date: "2025-09-11",
    category: "Ilmiy hayot",
    image: "/news/mafkuraviy-tahdidlar-konferensiyasi.jpg",
    views: 1215,
  },
  {
    slug: "malaka-oshirish-kurslari-prorektorlar",
    title: "Oliy ta'lim muassasalari prorektorlari uchun malaka oshirish kurslari davom etmoqda",
    excerpt:
      "Yurtimizdagi oliy ta'lim muassasalari prorektorlarining siyosiy-ma'naviy ko'nikmalarini rivojlantirishga qaratilgan malaka oshirish kurslari institut negizida davom etmoqda.",
    content: [
      "Institut negizida yurtimizdagi oliy ta'lim muassasalari prorektorlarining siyosiy-ma'naviy ko'nikmalarini rivojlantirishga qaratilgan malaka oshirish kurslari tashkil etilib, muntazam davom ettirilmoqda. Tadbir \"O'zbekiston 24\" telekanali tomonidan yoritilgan.",
    ],
    date: "2025-02-26",
    category: "Ma'rifiy tadbirlar",
    image: "https://picsum.photos/seed/imti-malaka-oshirish/1200/800",
    views: 831,
  },
  {
    slug: "kembrij-universitetiga-tashrif",
    title: "Institut delegatsiyasi Kembrij universitetiga tashrif buyurdi",
    excerpt:
      "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti delegatsiyasi Buyuk Britaniyaning Kembrij universitetiga xalqaro tajriba almashish tashrifini amalga oshirdi.",
    content: [
      "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti delegatsiyasi Buyuk Britaniyaning nufuzli oliygohlaridan biri — Kembrij universitetiga tashrif buyurdi. Tashrif haqida \"Axborot 24\" teleradiokanali alohida reportaj tayyorladi.",
    ],
    date: "2024-12-19",
    category: "Xalqaro hamkorlik",
    image: "https://picsum.photos/seed/imti-cambridge/1200/800",
    views: 2340,
  },
  {
    slug: "yangi-ozbekiston-manaviy-jarayonlar-anjumani",
    title: "\"Yangi O'zbekiston: ma'naviy jarayonlar va mafkuraviy tahdidlar\" respublika ilmiy-amaliy konferensiyasi bo'lib o'tdi",
    excerpt:
      "Institut va Mirzo Ulug'bek nomidagi O'zbekiston Milliy universiteti hamkorligida tashkil etilgan konferensiyada taniqli olimlar va yosh tadqiqotchilar qatnashdi.",
    content: [
      "Respublika Ma'naviyat va ma'rifat markazi huzuridagi Ijtimoiy-Ma'naviy Tadqiqotlar Instituti va Mirzo Ulug'bek nomidagi O'zbekiston Milliy universiteti hamkorligida \"Yangi O'zbekiston: ma'naviy jarayonlar va mafkuraviy tahdidlar\" mavzusida respublika ilmiy-amaliy konferensiyasi tashkil etildi.",
      "Konferensiya ishida taniqli professor va olimlar, shuningdek yosh tadqiqotchilar o'z ilmiy izlanishlari yuzasidan qarash va xulosalarini bayon qildilar. Tadbir falsafa, pedagogika, psixologiya va siyosat yo'nalishlarini qamrab oldi. (Batafsil: uza.uz)",
    ],
    date: "2024-09-17",
    category: "Ilmiy hayot",
    image: "/news/yangi-ozbekiston-manaviy-jarayonlar-anjumani.jpg",
    views: 1673,
  },
  {
    slug: "yoshlar-ijtimoiy-faolligi-anjumani",
    title:
      "\"Yoshlar ijtimoiy faolligini oshirish va ma'naviyatni yuksaltirishning zamonaviy texnologiyalari\" ilmiy-amaliy anjumani o'tkazildi",
    excerpt:
      "Institut tashabbusi bilan yoshlarning ijtimoiy faolligini oshirish va ma'naviyatini yuksaltirish masalalariga bag'ishlangan ilmiy-amaliy anjuman tashkil etildi.",
    content: [
      "Ijtimoiy-Ma'naviy Tadqiqotlar Instituti tomonidan \"Yoshlar ijtimoiy faolligini oshirish va ma'naviyatni yuksaltirishning zamonaviy texnologiyalari\" mavzusida ilmiy-amaliy anjuman o'tkazildi.",
    ],
    date: "2024-06-03",
    category: "Ilmiy hayot",
    image: "/news/yoshlar-ijtimoiy-faolligi-anjumani.jpg",
    views: 1046,
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
