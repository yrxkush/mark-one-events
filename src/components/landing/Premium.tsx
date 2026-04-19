import { Crown, Zap, Tag, Percent } from "lucide-react";

export const Premium = () => {
  return (
    <section className="relative overflow-hidden gradient-premium py-24 px-6 text-white">
      <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
          <Crown className="h-3.5 w-3.5" /> EXCLUSIVE MEMBERSHIP
        </div>

        <h2 className="mt-6 font-display text-5xl font-bold md:text-6xl">
          Mark-One <span className="text-gold">Premium</span>
        </h2>
        <p className="mt-3 text-sm tracking-widest text-white/60">INDIA'S TOP REWARDS PROGRAM FOR EVENT HOSTS</p>

        <div className="mx-auto mt-10 flex items-center justify-center gap-3 text-gold">
          <span className="h-px w-8 bg-gold/40" />
          <span className="text-xs font-semibold tracking-[0.3em]">★ PREMIUM BENEFITS ★</span>
          <span className="h-px w-8 bg-gold/40" />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Zap, title: "Priority Booking", desc: "Skip the queue, book first" },
            { icon: Tag, title: "Exclusive Deals", desc: "Members-only premium offers" },
            { icon: Percent, title: "Special Discounts", desc: "Up to 30% off all services" },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-smooth hover:border-gold/40">
              <b.icon className="mx-auto mb-3 h-8 w-8 text-gold" />
              <h3 className="font-display text-lg font-bold">{b.title}</h3>
              <p className="mt-1 text-sm text-white/70">{b.desc}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-gold-foreground transition-smooth hover:scale-105">
          Join Premium
        </button>
      </div>
    </section>
  );
};
