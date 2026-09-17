export type StructureUnit = {
  name: string;
  description: string;
  icon: string;
};

export const STRUCTURE: StructureUnit[] = [
  {
    name: "Ijtimoiy tadqiqotlar bo'limi",
    description:
      "Sotsiologik so'rovnomalar, fokus-guruh muhokamalari va ijtimoiy fikr monitoringini amalga oshiradi.",
    icon: "Users",
  },
  {
    name: "Ma'naviy-ma'rifiy tahlil markazi",
    description:
      "Jamiyatdagi g'oyaviy jarayonlarni tahlil qiladi, ilmiy-tahliliy xulosalar va tavsiyalar tayyorlaydi.",
    icon: "BrainCircuit",
  },
  {
    name: "Xalqaro hamkorlik bo'limi",
    description:
      "Xorijiy ilmiy muassasalar bilan aloqalarni yo'lga qo'yadi, qo'shma loyiha va almashinuv dasturlarini boshqaradi.",
    icon: "Globe2",
  },
  {
    name: "Nashriyot va ilmiy jurnal tahririyati",
    description:
      "Institut nashrlari, ilmiy jurnal va elektron kutubxona faoliyatini yuritadi.",
    icon: "BookOpen",
  },
  {
    name: "Raqamli tahlil va monitoring bo'limi",
    description:
      "Katta ma'lumotlar va raqamli vositalar yordamida ijtimoiy tarmoqlardagi kayfiyatni tahlil qiladi.",
    icon: "BarChart3",
  },
  {
    name: "Kadrlar va yuridik ta'minot bo'limi",
    description:
      "Institut xodimlari bilan ishlash, huquqiy ta'minot va ichki tartib-qoidalarni nazorat qiladi.",
    icon: "ScrollText",
  },
];
