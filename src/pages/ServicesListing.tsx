import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams, Navigate } from "react-router-dom";
import { SlidersHorizontal, ArrowLeft, Star } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FilterSidebar, DEFAULT_FILTERS, type Filters } from "@/components/services/FilterSidebar";
import { DetailPanel } from "@/components/services/DetailPanel";
import { SERVICES, CATEGORY_META, type Category, type Service } from "@/data/services";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const CATS: Category[] = ["banquet", "caterers", "decorators"];

const ServicesListing = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const isMobile = useIsMobile();

  const valid = !!params.category && CATS.includes(params.category as Category);
  const cat = (valid ? params.category : "banquet") as Category;
  const meta = CATEGORY_META[cat];

  const [draft, setDraft] = useState<Filters>(DEFAULT_FILTERS);
  const [applied, setApplied] = useState<Filters>(DEFAULT_FILTERS);
  const [selected, setSelected] = useState<Service | null>(null);

  useEffect(() => {
    setDraft(DEFAULT_FILTERS);
    setApplied(DEFAULT_FILTERS);
    setSelected(null);
    window.scrollTo(0, 0);
  }, [cat]);

  const all = useMemo(() => SERVICES.filter((s) => s.category === cat), [cat]);

  const results = useMemo(() => {
    return all.filter((s) => {
      if (applied.query && !s.name.toLowerCase().includes(applied.query.toLowerCase())) return false;
      if (applied.city !== "all" && s.city !== applied.city) return false;
      if (s.priceValue < applied.price[0] || s.priceValue > applied.price[1]) return false;
      if (applied.capacity !== "any") {
        const cap = parseInt(applied.capacity);
        if (cap === 1001 ? s.capacity <= 1000 : s.capacity > cap) return false;
      }
      if (s.rating < applied.rating) return false;
      if (applied.amenities.length && !applied.amenities.every((a) => s.amenities.includes(a))) return false;
      return true;
    });
  }, [all, applied]);

  // Default-select via query param or first card on desktop
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const found = all.find((s) => s.id === id);
      if (found) setSelected(found);
    } else if (!isMobile && !selected && results[0]) {
      setSelected(results[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, all, isMobile]);

  const handleSelect = (s: Service) => setSelected(s);

  const sidebar = (
    <FilterSidebar
      filters={draft}
      setFilters={setDraft}
      onApply={() => setApplied(draft)}
      onReset={() => { setDraft(DEFAULT_FILTERS); setApplied(DEFAULT_FILTERS); }}
      resultCount={results.length}
    />
  );

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar solid />

      <div className="mx-auto max-w-[1500px] px-4 pt-24 pb-16 sm:px-6">
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          <a href="/" className="hover:text-foreground">Home</a>
          <span>/</span>
          <span className="text-foreground">{meta.label}</span>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold md:text-4xl">{meta.title}</h1>
            <p className="mt-1.5 text-muted-foreground">{meta.subtitle}</p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden rounded-xl"><SlidersHorizontal className="mr-2 h-4 w-4" />Filters</Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[340px] overflow-y-auto p-0 sm:w-[380px]">
              <div className="p-4">{sidebar}</div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr_380px] xl:grid-cols-[300px_1fr_420px]">
          <div className="hidden lg:block">
            <div className="sticky top-24">{sidebar}</div>
          </div>

          <main>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold">
                <span className="text-foreground">{results.length}</span>
                <span className="text-muted-foreground"> Results</span>
              </p>
              <div className="hidden items-center gap-1 text-xs text-muted-foreground sm:flex">
                <Star className="h-3 w-3 fill-primary text-primary" />
                Sorted by rating
              </div>
            </div>

            {results.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border bg-card p-12 text-center">
                <p className="font-display text-lg font-semibold">No matches found</p>
                <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
                {results.map((s) => (
                  <ServiceCard
                    key={s.id}
                    service={s}
                    onSelect={handleSelect}
                    selected={selected?.id === s.id}
                  />
                ))}
              </div>
            )}
          </main>

          <aside className="hidden lg:block">
            {selected ? (
              <div className="sticky top-24 max-h-[calc(100vh-7rem)]">
                <DetailPanel service={selected} />
              </div>
            ) : (
              <div className="sticky top-24 rounded-3xl border border-dashed border-border bg-card p-8 text-center">
                <p className="font-display text-lg font-semibold">Select a venue</p>
                <p className="mt-1 text-sm text-muted-foreground">Click any card to see details and book</p>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* Mobile bottom sheet */}
      <Drawer open={isMobile && !!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DrawerContent className="max-h-[92vh] p-0">
          {selected && (
            <div className="h-[85vh] overflow-hidden p-3">
              <DetailPanel service={selected} onClose={() => setSelected(null)} variant="sheet" />
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ServicesListing;
