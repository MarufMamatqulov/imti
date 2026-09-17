export type StatItem = {
  value: number;
  suffix: string;
  label: string;
  icon: string;
};

export const STATS: StatItem[] = [
  { value: 6, suffix: "+", label: "Yillik tajriba", icon: "CalendarRange" },
  { value: 120, suffix: "+", label: "Ilmiy xodim va tadqiqotchi", icon: "Users" },
  { value: 340, suffix: "+", label: "Nashr etilgan ilmiy ish", icon: "BookOpen" },
  { value: 45, suffix: "+", label: "Xalqaro hamkor tashkilot", icon: "Globe2" },
  { value: 180, suffix: "+", label: "O'tkazilgan tadqiqot va so'rovnoma", icon: "LineChart" },
];
