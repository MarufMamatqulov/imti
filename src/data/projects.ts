export type ResearchProject = {
  title: string;
  status: "Davom etmoqda" | "Yakunlangan";
  period: string;
  description: string;
  lead: string;
};

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    title: "Yoshlarda milliy g'oyaviy immunitetni shakllantirish mexanizmlari",
    status: "Davom etmoqda",
    period: "2025–2027",
    description:
      "Respublika miqyosida yoshlar orasida g'oyaviy immunitetni oshirish bo'yicha ilmiy-amaliy modelni ishlab chiqish.",
    lead: "Ijtimoiy tadqiqotlar bo'limi",
  },
  {
    title: "Raqamli makonda ma'naviy tahdidlar tipologiyasi",
    status: "Davom etmoqda",
    period: "2026–2028",
    description:
      "Ijtimoiy tarmoqlardagi zararli kontentni aniqlash va tasniflash bo'yicha ilmiy metodologiyani takomillashtirish.",
    lead: "Raqamli tahlil va monitoring bo'limi",
  },
  {
    title: "Oilaviy tarbiyada milliy va zamonaviy qadriyatlar uyg'unligi",
    status: "Yakunlangan",
    period: "2023–2025",
    description:
      "O'zbek oilasidagi tarbiya an'analarining zamonaviy jamiyat sharoitida transformatsiyasini tadqiq etish.",
    lead: "Ma'naviy-ma'rifiy tahlil markazi",
  },
  {
    title: "Mahalliy va xalqaro tajribada ma'rifiy targ'ibot modellari",
    status: "Yakunlangan",
    period: "2022–2024",
    description:
      "Xorijiy davlatlarning ma'rifiy-tarbiyaviy tajribasini o'rganish va milliy sharoitga moslashtirish.",
    lead: "Xalqaro hamkorlik bo'limi",
  },
];

export const RESEARCH_AREAS = [
  "Ijtimoiy sotsiologiya",
  "Milliy g'oya va mafkura",
  "Yoshlar siyosati",
  "Oila va tarbiya",
  "Diniy bag'rikenglik",
  "Raqamli ma'rifat",
  "Madaniy meros",
  "Fuqarolik jamiyati",
];
