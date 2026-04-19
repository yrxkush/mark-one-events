import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Service } from "@/data/services";

interface Props {
  service: Service;
  onSelect?: (s: Service) => void;
  selected?: boolean;
  asLink?: boolean;
}

export const ServiceCard = ({ service, onSelect, selected, asLink }: Props) => {
  const inner = (
    <article
      className={`group cursor-pointer overflow-hidden rounded-3xl bg-card shadow-card transition-smooth hover:-translate-y-1.5 hover:shadow-card-hover ${
        selected ? "ring-2 ring-primary" : ""
      }`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-foreground shadow-soft backdrop-blur">
          <Star className="h-3 w-3 fill-primary text-primary" />
          {service.rating}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold leading-tight">{service.name}</h3>
        <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {service.location}
        </div>
        <div className="mt-3 flex items-baseline justify-between border-t border-border pt-3">
          <div>
            <div className="text-[11px] text-muted-foreground">starting from</div>
            <span className="text-lg font-bold text-primary">{service.price}</span>
          </div>
          <span className="text-xs text-muted-foreground">{service.reviews} reviews</span>
        </div>
      </div>
    </article>
  );

  if (asLink) {
    return <Link to={`/services/${service.category}?id=${service.id}`}>{inner}</Link>;
  }
  return <button onClick={() => onSelect?.(service)} className="block w-full text-left">{inner}</button>;
};
