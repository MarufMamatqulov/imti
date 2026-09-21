import { ArrowUpRight } from "lucide-react";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";

export default function ServicesGrid({ compact = false }: { compact?: boolean }) {
  const items = compact ? SERVICES.slice(0, 6) : SERVICES;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-md overflow-hidden">
      {items.map((service, i) => (
        <Reveal key={service.slug} delay={(i % 3) * 0.08}>
          <div className="group relative h-full bg-white p-7 hover:bg-primary-50/40 transition-colors duration-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-50 text-primary-700 group-hover:bg-primary-800 group-hover:text-white transition-colors duration-300">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-primary-950 leading-snug">{service.title}</h3>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
              {service.description}
            </p>
            <ul className="mt-4 space-y-1.5">
              {service.points.slice(0, compact ? 2 : 3).map((point) => (
                <li key={point} className="flex items-start gap-2 text-xs text-slate-500">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-600" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 opacity-0 group-hover:opacity-100 transition-opacity">
              Batafsil <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
