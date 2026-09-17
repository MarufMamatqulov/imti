// Eslatma: quyidagi rahbariyat ma'lumotlari namunaviy (placeholder) tarzda
// kiritilgan. Saytni ishga tushirishdan oldin haqiqiy F.I.Sh., lavozim va
// qabul kunlari bilan almashtiring.
export type LeadershipMember = {
  slug: string;
  fullName: string;
  position: string;
  bio: string;
  receptionDay: string;
  phone: string;
  email: string;
  photo: string;
};

export const LEADERSHIP: LeadershipMember[] = [
  {
    slug: "direktor",
    fullName: "F.I.Sh. kiritiladi",
    position: "Institut direktori",
    bio: "Institut faoliyatiga umumiy rahbarlik qiladi, strategik yo'nalishlarni belgilaydi va davlat organlari, xalqaro tashkilotlar bilan hamkorlikni muvofiqlashtiradi.",
    receptionDay: "Har oyning 1- va 3- seshanba kunlari, 14:00–17:00",
    phone: "+998 71 233 45 67",
    email: "direktor@imti.uz",
    photo: "https://picsum.photos/seed/imti-leader1/400/480",
  },
  {
    slug: "ilmiy-ishlar-orinbosari",
    fullName: "F.I.Sh. kiritiladi",
    position: "Direktor o'rinbosari — ilmiy ishlar bo'yicha",
    bio: "Ilmiy-tadqiqot loyihalari, nashriyot faoliyati va ilmiy kengash ishini boshqaradi.",
    receptionDay: "Har chorshanba, 10:00–13:00",
    phone: "+998 71 233 45 69",
    email: "ilmiy@imti.uz",
    photo: "https://picsum.photos/seed/imti-leader2/400/480",
  },
  {
    slug: "marifiy-ishlar-orinbosari",
    fullName: "F.I.Sh. kiritiladi",
    position: "Direktor o'rinbosari — ma'rifiy-tashkiliy ishlar bo'yicha",
    bio: "Ma'rifiy-tarbiyaviy tadbirlar, hududlar bilan ishlash va targ'ibot loyihalarini muvofiqlashtiradi.",
    receptionDay: "Har payshanba, 10:00–13:00",
    phone: "+998 71 233 45 70",
    email: "marifat@imti.uz",
    photo: "https://picsum.photos/seed/imti-leader3/400/480",
  },
];
