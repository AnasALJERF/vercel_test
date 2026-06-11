import Icon from "./Icons";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative overflow-hidden rounded-xl2 border border-bone/8 bg-walnut p-7 transition-all duration-500 hover:-translate-y-1 hover:border-honey/40 hover:shadow-lift">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-honey/0 to-transparent transition-all duration-500 group-hover:via-honey/60" />
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-honey/10 text-honey transition-colors duration-500 group-hover:bg-honey group-hover:text-espresso">
        <Icon name={service.icon} size={26} />
      </div>
      <h3 className="mt-6 font-display text-lg text-bone">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-taupe">{service.description}</p>
    </div>
  );
}
