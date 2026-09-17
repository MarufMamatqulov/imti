export type ServiceItem = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "ijtimoiy-monitoring",
    icon: "LineChart",
    title: "Ijtimoiy-ma'naviy monitoring",
    description:
      "Jamiyatdagi ma'naviy-ma'rifiy muhitni, aholi kayfiyati va ijtimoiy fikrni tizimli o'rganish va tahlil qilish.",
    points: [
      "Ijtimoiy so'rovnomalar va sotsiologik tadqiqotlar",
      "Mintaqalar kesimida tahliliy hisobotlar",
      "Yillik ma'naviy muhit indeksi",
    ],
  },
  {
    slug: "ilmiy-tadqiqot",
    icon: "FlaskConical",
    title: "Ilmiy-tadqiqot loyihalari",
    description:
      "Milliy g'oya, ma'naviyat va ma'rifat sohasidagi dolzarb muammolar bo'yicha fundamental va amaliy tadqiqotlar.",
    points: [
      "Grant asosidagi ilmiy loyihalar",
      "Xalqaro hamkorlikdagi tadqiqotlar",
      "Yosh tadqiqotchilarni qo'llab-quvvatlash",
    ],
  },
  {
    slug: "ekspertiza",
    icon: "ShieldCheck",
    title: "Ilmiy-ma'naviy ekspertiza",
    description:
      "Ommaviy axborot vositalari, kontent va tashabbuslarga ma'naviy-ma'rifiy nuqtai nazardan ekspert xulosa berish.",
    points: [
      "Mafkuraviy tahdidlarga qarshi tahlil",
      "Kontent monitoringi va ekspertizasi",
      "Tavsiyalar va profilaktik chora-tadbirlar",
    ],
  },
  {
    slug: "targibot",
    icon: "Megaphone",
    title: "Ma'rifiy-tarbiyaviy targ'ibot",
    description:
      "Aholi, ayniqsa yoshlar orasida milliy g'oya va umuminsoniy qadriyatlarni targ'ib qiluvchi loyihalar.",
    points: [
      "Respublika miqyosidagi ma'rifiy aksiyalar",
      "Multimedia va ijtimoiy tarmoq loyihalari",
      "Mintaqalararo forumlar va uchrashuvlar",
    ],
  },
  {
    slug: "malaka-oshirish",
    icon: "GraduationCap",
    title: "Malaka oshirish va treninglar",
    description:
      "Ma'naviyat-ma'rifat sohasi mutaxassislari uchun uzluksiz kasbiy rivojlanish dasturlari.",
    points: [
      "Seminar-treninglar va vebinarlar",
      "Malaka oshirish sertifikat dasturlari",
      "Metodik qo'llanmalar tayyorlash",
    ],
  },
  {
    slug: "xalqaro-hamkorlik",
    icon: "Globe2",
    title: "Xalqaro hamkorlik",
    description:
      "Xorijiy ilmiy-tadqiqot markazlari va xalqaro tashkilotlar bilan tajriba almashish va qo'shma loyihalar.",
    points: [
      "Qo'shma ilmiy konferensiyalar",
      "Akademik almashinuv dasturlari",
      "Xalqaro nashrlarda hamkorlik",
    ],
  },
];
