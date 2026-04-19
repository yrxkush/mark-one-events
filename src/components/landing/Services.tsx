import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SERVICES, type Category } from "@/data/services";

const TABS: { id: Category; label: string }[] = [
  { id: "banquet", label: "Banquet" },
  { id: "caterers", label: "Caterers" },
  { id: "decorators", label: "Decorators" },
];

export const Services = () => {
  const [active, setActive] = useState<Category>("banquet");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const filtered = SERVICES.filter((s) => s.category === active);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Explore Services</h2>
          <p className="mt-3 text-muted-foreground">Find the perfect partner for your next event</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="hidden sm:block w-32" />
          <div className="inline-flex gap-1 rounded-full bg-muted p-1.5 shadow-soft">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-smooth ${
                  active === tab.id
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <Link
            to={`/services/${active}`}
            className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-primary transition-smooth hover:bg-primary/5"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative mt-10">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-3 shadow-card transition-smooth hover:scale-110 lg:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background p-3 shadow-card transition-smooth hover:scale-110 lg:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            id="services-slider"
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((s) => (
              <Link
                to={`/services/${s.category}?id=${s.id}`}
                key={s.id}
                className="group w-[85%] flex-shrink-0 snap-start sm:w-[60%] md:w-[45%] lg:w-[31%]"
              >
                <article className="overflow-hidden rounded-3xl bg-card shadow-card transition-smooth hover:-translate-y-1.5 hover:shadow-card-hover">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-foreground shadow-soft backdrop-blur">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      {s.rating}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-bold">{s.name}</h3>
                    <div className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {s.location}
                    </div>
                    <div className="mt-3 flex items-baseline justify-between border-t border-border pt-3">
                      <div>
                        <div className="text-[11px] text-muted-foreground">starting from</div>
                        <span className="text-lg font-bold text-primary">{s.price}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
