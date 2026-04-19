import { Calendar, Users, Sparkles } from "lucide-react";

export const Stats = () => {
  return (
    <section className="gradient-soft py-24 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">
          Better services for<br />better events
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          For over a decade, we've been bringing dream events to life — connecting hosts with India's most trusted partners.
        </p>

        <div className="mt-12 grid gap-4 rounded-3xl bg-card p-2 shadow-card sm:grid-cols-3 sm:p-3">
          {[
            { icon: Calendar, value: "10,000+", label: "bookings" },
            { icon: Users, value: "500+", label: "service providers" },
            { icon: Sparkles, value: "1M+", label: "happy users" },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-3 rounded-2xl px-6 py-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-full gradient-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className="font-display text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
