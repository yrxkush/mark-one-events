import { Search, Star } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export interface Filters {
  query: string;
  city: string;
  price: [number, number];
  capacity: string;
  rating: number;
  amenities: string[];
}

export const DEFAULT_FILTERS: Filters = {
  query: "",
  city: "all",
  price: [0, 200000],
  capacity: "any",
  rating: 0,
  amenities: [],
};

const CITIES = ["all", "Mumbai", "Delhi", "Bangalore", "Chennai", "Jaipur"];
const CAPACITIES = [
  { v: "any", l: "Any" },
  { v: "200", l: "Up to 200" },
  { v: "500", l: "Up to 500" },
  { v: "1000", l: "Up to 1000" },
  { v: "1001", l: "1000+" },
];
const AMENITIES = ["AC Hall", "Parking", "Catering Allowed", "DJ Available", "Stage", "Valet"];

interface Props {
  filters: Filters;
  setFilters: (f: Filters) => void;
  onApply: () => void;
  onReset: () => void;
  resultCount: number;
}

export const FilterSidebar = ({ filters, setFilters, onApply, onReset }: Props) => {
  const toggleAmen = (a: string) => {
    setFilters({
      ...filters,
      amenities: filters.amenities.includes(a)
        ? filters.amenities.filter((x) => x !== a)
        : [...filters.amenities, a],
    });
  };

  return (
    <aside className="rounded-3xl border border-border bg-card p-6 shadow-soft">
      <h3 className="font-display text-lg font-bold">Filters</h3>

      <div className="mt-5 space-y-5">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={filters.query}
              onChange={(e) => setFilters({ ...filters, query: e.target.value })}
              placeholder="Search..."
              className="rounded-xl pl-9"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Location</label>
          <Select value={filters.city} onValueChange={(v) => setFilters({ ...filters, city: v })}>
            <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              {CITIES.map((c) => (
                <SelectItem key={c} value={c}>{c === "all" ? "All Cities" : c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Price Range</label>
            <span className="text-xs text-muted-foreground">
              ₹{filters.price[0].toLocaleString()} – ₹{filters.price[1].toLocaleString()}
            </span>
          </div>
          <Slider
            min={0}
            max={200000}
            step={5000}
            value={filters.price}
            onValueChange={(v) => setFilters({ ...filters, price: [v[0], v[1]] as [number, number] })}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Capacity</label>
          <Select value={filters.capacity} onValueChange={(v) => setFilters({ ...filters, capacity: v })}>
            <SelectTrigger className="rounded-xl"><SelectValue /></SelectTrigger>
            <SelectContent>
              {CAPACITIES.map((c) => (
                <SelectItem key={c.v} value={c.v}>{c.l}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Minimum Rating</label>
          <div className="flex gap-1">
            {[0, 3, 4, 4.5].map((r) => (
              <button
                key={r}
                onClick={() => setFilters({ ...filters, rating: r })}
                className={`flex flex-1 items-center justify-center gap-1 rounded-xl border px-2 py-2 text-sm font-medium transition-smooth ${
                  filters.rating === r
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {r === 0 ? "Any" : <><Star className="h-3 w-3 fill-current" />{r}+</>}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Amenities</label>
          <div className="space-y-2">
            {AMENITIES.map((a) => (
              <label key={a} className="flex cursor-pointer items-center gap-2.5 text-sm">
                <Checkbox
                  checked={filters.amenities.includes(a)}
                  onCheckedChange={() => toggleAmen(a)}
                />
                {a}
              </label>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button onClick={onReset} variant="outline" className="flex-1 rounded-xl">Reset</Button>
          <Button onClick={onApply} className="flex-1 rounded-xl">Apply</Button>
        </div>
      </div>
    </aside>
  );
};
