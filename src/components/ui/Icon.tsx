import {
  LineChart,
  FlaskConical,
  ShieldCheck,
  Megaphone,
  GraduationCap,
  Globe2,
  Users,
  BookOpen,
  CalendarRange,
  BrainCircuit,
  BarChart3,
  ScrollText,
  type LucideProps,
} from "lucide-react";
import { ComponentType } from "react";

const ICONS: Record<string, ComponentType<LucideProps>> = {
  LineChart,
  FlaskConical,
  ShieldCheck,
  Megaphone,
  GraduationCap,
  Globe2,
  Users,
  BookOpen,
  CalendarRange,
  BrainCircuit,
  BarChart3,
  ScrollText,
};

export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = ICONS[name] ?? Users;
  return <Component className={className} />;
}
