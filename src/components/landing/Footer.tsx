import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const cols = [
    { title: "About", links: ["Who We Are", "Careers", "Blog", "Press", "Contact Us"] },
    { title: "Services", links: ["Banquet Halls", "Catering", "Decoration", "Premium", "Gift Cards"] },
    { title: "Contact", links: ["Help & Support", "Partner With Us", "Ride With Us", "Report Fraud"] },
  ];

  return (
    <footer className="bg-[hsl(0_0%_7%)] py-16 px-6 text-white/70">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-display text-3xl font-bold text-white">mark-one</h3>
            <p className="mt-3 text-sm">India's #1 event booking platform.</p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-semibold uppercase tracking-wider text-white text-xs">{c.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-smooth hover:text-white">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs">© 2026 Mark-One Ltd. All rights reserved.</p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-smooth hover:border-primary hover:bg-primary hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
