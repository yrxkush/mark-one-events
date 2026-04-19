import { useState } from "react";
import { Star, MapPin } from "lucide-react";
import banquetImg from "@/assets/service-banquet.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import decorImg from "@/assets/service-decor.jpg";

type Category = "banquet" | "caterers" | "decorators";

interface Service {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  category: Category;
}

const SERVICES: Service[] = [
  { id: "1", name: "The Grand Pavilion", location: "Bandra, Mumbai", price: "₹85,000", rating: 4.8, image: banquetImg, category: "banquet" },
  { id: "2", name: "Royal Heritage Hall", location: "Connaught Place, Delhi", price: "₹1,20,000", rating: 4.9, image: banquetImg, category: "banquet" },
  { id: "3", name: "Crystal Banquets", location: "Koramangala, Bangalore", price: "₹65,000", rating: 4.7, image: banquetImg, category: "banquet" },
  { id: "4", name: "Spice Route Catering", location: "Andheri, Mumbai", price: "₹850/plate", rating: 4.9, image: cateringImg, category: "caterers" },
  { id: "5", name: "Royal Feast Co.", location: "Saket, Delhi", price: "₹1,200/plate", rating: 4.8, image: cateringImg, category: "caterers" },
  { id: "6", name: "Heritage Kitchens", location: "Indiranagar, Bangalore", price: "₹950/plate", rating: 4.7, image: cateringImg, category: "caterers" },
  { id: "7", name: "Bloom & Blossom Decor", location: "Juhu, Mumbai", price: "₹45,000", rating: 4.9, image: decorImg, category: "decorators" },
  { id: "8", name: "Mandap Magic", location: "GK-1, Delhi", price: "₹75,000", rating: 4.8, image: decorImg, category: "decorators" },
  { id: "9", name: "Floral Dreams Studio", location: "HSR Layout, Bangalore", price: "₹55,000", rating: 4.7, image: decorImg, category: "decorators" },
];

const TABS: { id: Category; label: string }[] = [
  { id: "banquet", label: "Banquet" },
  { id: "caterers", label: "Caterers" },
  { id: "decorators", label: "Decorators" },
];

export const Services = () => {
  const [active, setActive] = useState<Category>("banquet");
  const filtered = SERVICES.filter((s) => s.category === active);

  return (
    <section id="services" className="bg-background py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Explore Services</h2>
          <p className="mt-3 text-muted-foreground">Find the perfect partner for your next event</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-2 rounded-full bg-muted p-1.5 shadow-soft">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-smooth ${
                  active === tab.id
                    ? "gradient-primary text-primary-foreground shadow-card"
                    : "text-foreground hover:bg-background"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div id="services-grid" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <article
              key={s.id}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-card shadow-card transition-smooth hover:-translate-y-2 hover:shadow-card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
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
                  <span className="text-lg font-bold text-primary">{s.price}</span>
                  <span className="text-xs text-muted-foreground">starting from</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
