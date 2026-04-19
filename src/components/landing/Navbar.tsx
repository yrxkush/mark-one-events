import { Link, NavLink, useLocation } from "react-router-dom";
import { ShoppingBag, CalendarCheck, User, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services/banquet", label: "Banquet" },
  { to: "/services/caterers", label: "Caterers" },
  { to: "/services/decorators", label: "Decorators" },
];

export const Navbar = ({ solid = false }: { solid?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const isOpaque = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        isOpaque ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className={`flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-sm font-bold text-primary-foreground`}>M</span>
          <span className={`font-display text-xl font-bold tracking-tight ${isOpaque ? "text-foreground" : "text-white"}`}>
            mark-one
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-smooth ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : isOpaque
                    ? "text-foreground/80 hover:bg-muted"
                    : "text-white/90 hover:bg-white/10"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <IconBtn isOpaque={isOpaque} label="Cart"><ShoppingBag className="h-5 w-5" /></IconBtn>
          <IconBtn isOpaque={isOpaque} label="Bookings"><CalendarCheck className="h-5 w-5" /></IconBtn>
          <IconBtn isOpaque={isOpaque} label="Profile"><User className="h-5 w-5" /></IconBtn>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={`md:hidden rounded-full p-2 transition-smooth ${isOpaque ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const IconBtn = ({ children, isOpaque, label }: { children: React.ReactNode; isOpaque: boolean; label: string }) => (
  <button
    aria-label={label}
    className={`hidden sm:flex items-center justify-center rounded-full p-2.5 transition-smooth ${
      isOpaque ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
    }`}
  >
    {children}
  </button>
);
