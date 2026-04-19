import banquetImg from "@/assets/service-banquet.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import decorImg from "@/assets/service-decor.jpg";
import { ArrowRight } from "lucide-react";

const BRANDS = [
  { name: "Banquet", desc: "Premium venues for every celebration", image: banquetImg, tint: "bg-soft-pink" },
  { name: "Catering", desc: "Curated menus crafted by top chefs", image: cateringImg, tint: "bg-[hsl(45_85%_94%)]" },
  { name: "Decoration", desc: "Stunning setups that wow your guests", image: decorImg, tint: "bg-[hsl(280_45%_95%)]" },
];

export const Brands = () => {
  return (
    <section className="bg-background py-24 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-5xl font-bold md:text-6xl">mark-one</h2>
        <p className="mt-3 text-xs font-semibold tracking-[0.3em] text-muted-foreground">
          POWERING INDIA'S CELEBRATIONS
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BRANDS.map((b, i) => (
            <div
              key={i}
              className={`group cursor-pointer rounded-3xl ${b.tint} p-6 text-left shadow-soft transition-smooth hover:-translate-y-2 hover:shadow-card-hover animate-fade-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{b.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
              <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth group-hover:gap-3">
                Explore <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
