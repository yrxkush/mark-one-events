import { Calendar, ShieldCheck, Star, Clock, Lock } from "lucide-react";

const FEATURES = [
  { icon: Calendar, title: "Easy Booking", desc: "Reserve in just a few taps" },
  { icon: ShieldCheck, title: "Verified Providers", desc: "Trusted partners only" },
  { icon: Star, title: "Reviews & Ratings", desc: "Real feedback from real guests" },
  { icon: Clock, title: "Slot Availability", desc: "Live schedules at your fingertips" },
  { icon: Lock, title: "Secure Payments", desc: "Protected transactions, every time" },
];

export const Features = () => {
  return (
    <section className="bg-soft-pink py-24 px-6">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">
          What's waiting for you?
        </h2>
        <p className="mt-3 text-muted-foreground">Everything you need to plan an unforgettable event</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-card animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-primary-foreground transition-smooth group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
