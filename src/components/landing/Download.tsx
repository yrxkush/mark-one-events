import { Apple, Play, Smartphone } from "lucide-react";

export const Download = () => {
  return (
    <section id="download" className="bg-background py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-10 rounded-3xl bg-soft-pink p-8 shadow-soft md:grid-cols-2 md:p-14">
          <div>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Download the app now!</h2>
            <p className="mt-3 text-muted-foreground">
              Experience seamless event booking — only on the Mark-One app.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-background transition-smooth hover:scale-105">
                <Play className="h-5 w-5 fill-current" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-80">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-background transition-smooth hover:scale-105">
                <Apple className="h-5 w-5" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold">Scan the QR code to download</p>
            <div className="rounded-2xl bg-card p-4 shadow-card">
              <div
                className="grid h-40 w-40 grid-cols-10 grid-rows-10 gap-px bg-card p-1"
                aria-label="QR code placeholder"
              >
                {Array.from({ length: 100 }).map((_, i) => {
                  const seed = (i * 73 + 11) % 7;
                  const filled = seed < 3 || (i < 10 || i > 89 || i % 10 === 0 || i % 10 === 9);
                  return (
                    <div
                      key={i}
                      className={filled ? "bg-foreground" : "bg-card"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Smartphone className="h-3.5 w-3.5" /> iOS & Android
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
