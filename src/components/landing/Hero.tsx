import heroBg from "@/assets/hero-banquet.jpg";
import { Apple, Play, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Elegant banquet hall"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105 blur-[2px]"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur-md animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
          Now booking for 2026
        </div>

        <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Mark-One
        </h1>
        <p className="mt-4 max-w-2xl font-display text-2xl font-semibold md:text-4xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          India's #1 Event Booking Platform
        </p>
        <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Book banquet halls, caterers, and decorators with ease
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#services"
            className="rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card-hover transition-smooth hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="#download"
            className="rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-smooth hover:bg-white/20"
          >
            Download App
          </a>
        </div>

        <div className="mt-6 flex items-center gap-3 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <button className="flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-left transition-smooth hover:bg-black">
            <Play className="h-5 w-5 fill-white" />
            <div className="leading-tight">
              <div className="text-[10px] opacity-80">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-left transition-smooth hover:bg-black">
            <Apple className="h-5 w-5" />
            <div className="leading-tight">
              <div className="text-[10px] opacity-80">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>
        </div>

        <a href="#services" className="absolute bottom-8 flex items-center gap-1 text-xs text-white/70 transition-smooth hover:text-white">
          Scroll down <ArrowDown className="h-3 w-3 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
