import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="relative -mt-10 sm:-mt-14 z-10">
      <Container>
        <div className="rounded-md bg-white border border-line grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-line">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="p-6 sm:p-8 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-md bg-primary-50 text-primary-700">
                <Icon name={stat.icon} className="h-5 w-5" />
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-primary-950">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-xs sm:text-[13px] text-slate-500 leading-snug">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
