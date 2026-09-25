export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
};

// Manba: institut tarkibiy bo'limlarining rasmiy Nizomlari (2021–2023,
// Respublika Ma'naviyat va ma'rifat markazi tomonidan tasdiqlangan).
// Har bir bo'limning maqsad, vazifa va funksiyalari shu hujjatlar
// asosida keltirilgan.
export const SERVICES: ServiceItem[] = [
  {
    slug: "ilmiy-tadqiqotlarni-tashkil-etish",
    icon: "FlaskConical",
    title: "Ilmiy tadqiqotlarni tashkil etish va amalga oshirish",
    description:
      "Jamiyat barqarorligiga salbiy ta'sir etuvchi illatlarni bartaraf etish va ijtimoiy-ma'naviy muhitni yaxshilash yo'nalishida fundamental hamda amaliy tadqiqotlarni tashkil qiladi va amalga oshiradi.",
    points: [
      "Ilmiy, ilmiy-amaliy faoliyat yo'nalishlarini belgilab, yillik va istiqboldagi ish rejalarini tasdiqlash",
      "Mahalliychilik, korrupsiya, oilaviy qadriyatlarga bepisandlik kabi illatlarga qarshi kompleks chora-tadbirlar ishlab chiqish",
      "Uzluksiz ma'naviy tarbiya samaradorligini baholashning ilmiy asoslangan indikatorlarini joriy etish",
      "Fundamental, amaliy va innovatsion tadqiqotlarni amalga oshirib, natijalarini amaliyotga tatbiq qilish",
      "Xorijiy ilmiy markazlar va olimlar bilan hamkorlik o'rnatish",
    ],
  },
  {
    slug: "ilmiy-ekspertiza",
    icon: "ShieldCheck",
    title: "Ilmiy-ma'naviy ekspertiza",
    description:
      "Ommaviy axborot vositalari, nashrlar va internet tarmog'idagi kontentni g'oyaviy-mafkuraviy jihatdan ilmiy ekspertizadan o'tkazib, amaliy taklif va xulosalar tayyorlaydi.",
    points: [
      "OAV, rasmiy veb-saytlar va media mahsulotlarini ilmiy ekspertizadan o'tkazish",
      "Nashrga tayyorlangan ilmiy va ilmiy-ommabop adabiyotlar ekspertizasini amalga oshirish",
      "Sohaga oid olimlar va mutaxassislardan iborat ekspertlar guruhini shakllantirish",
      "Doktorant va mustaqil izlanuvchilarning ilmiy ishlarini tahlil qilib, takliflar berish",
      "Davlat va xususiy nashriyotlar bilan doimiy hamkorlikni tashkil etish",
    ],
  },
  {
    slug: "ijtimoiy-manaviy-muhitni-tahlil-qilish",
    icon: "LineChart",
    title: "Ijtimoiy-ma'naviy muhitni tahlil qilish",
    description:
      "Mamlakatdagi ijtimoiy-ma'naviy muhit holatini muntazam monitoring qilib, tahlil va baholaydi hamda uni yaxshilashga qaratilgan zamonaviy targ'ibot texnologiyalarini ishlab chiqadi.",
    points: [
      "Ijtimoiy-ma'naviy muhit holatini muntazam monitoring qilish va baholash",
      "Jamiyat barqarorligiga tahdid soluvchi omillar yuzasidan ilmiy-amaliy izlanishlar olib borish",
      "Dunyoning mafkuraviy manzarasini o'rganish va tahlil qilish",
      "Milliy manfaatlarga qarshi g'oyaviy-axborot hujumlari dinamikasini kuzatish",
      "Zamonaviy targ'ibot texnologiyalarini ishlab chiqish va joriy etish",
    ],
  },
  {
    slug: "malaka-oshirish",
    icon: "GraduationCap",
    title: "Malaka oshirish va uslubiy ta'minot",
    description:
      "Ma'naviy-ma'rifiy targ'ibotga mas'ul mutasaddi xodimlarning kasbiy malakasini oshirish bo'yicha o'quv kurslari, seminar va treninglarni tashkil etadi.",
    points: [
      "Davlat siyosati va islohotlar mohiyatini tushuntiruvchi o'quv tizimini yo'lga qo'yish",
      "Millatlararo totuvlik, bag'rikenglik va o'zaro hurmat mavzularida o'quvlar tashkil etish",
      "Din va diniy masalalar, voizlik madaniyatini chuqur o'rganishni yo'lga qo'yish",
      "Kadrlar malakasini oshirish tizimini takomillashtirish bo'yicha takliflar ishlab chiqish",
      "O'quv kurslari tinglovchilariga sertifikatlarni rasmiylashtirish",
    ],
  },
  {
    slug: "milliy-goya-targibot-metodik-taminlash",
    icon: "Megaphone",
    title: "Milliy g'oya va targ'ibot ishlarini metodik ta'minlash",
    description:
      "Targ'ibotchilar uchun uslubiy qo'llanma, ma'ruza matni, risola va ko'rgazmali materiallar tayyorlab, targ'ibot ishlarining zamonaviy usul va uslublarini ishlab chiqadi.",
    points: [
      "Tadbir, davra suhbati va ochiq muloqotlar uchun uslubiy qo'llanma va ma'ruza matnlari tayyorlash",
      "Ichki va tashqi mafkuraviy tahdidlarga qarshi kompleks tadbirlarga metodik tavsiyalar ishlab chiqish",
      "Tarixiy meros va milliy tarbiya an'analarini asrab-avaylashga qaratilgan targ'ibot metodlarini ishlab chiqish",
      "Milliy g'oya mavzusidagi ilmiy-amaliy konferensiya va davra suhbatlari o'tkazish usullarini yaratish",
      "\"Tafakkur\", \"Ma'naviy hayot\", \"Jahon adabiyoti\" jurnallari orqali targ'ibot natijalarini jamoatchilikka yetkazish",
    ],
  },
];
