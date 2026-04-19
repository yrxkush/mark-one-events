import { useState } from "react";
import { format } from "date-fns";
import { Star, MapPin, Calendar as CalendarIcon, X, Check } from "lucide-react";
import type { Service } from "@/data/services";
import { TIME_SLOTS } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Props {
  service: Service;
  onClose?: () => void;
  variant?: "panel" | "sheet";
}

export const DetailPanel = ({ service, onClose, variant = "panel" }: Props) => {
  const [activeImg, setActiveImg] = useState(service.image);
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string>("");

  const handleBook = () => {
    if (!date || !slot) {
      toast.error("Please select a date and time slot");
      return;
    }
    toast.success(`Booking requested for ${service.name}`, {
      description: `${format(date, "PPP")} • ${slot}`,
    });
  };

  return (
    <div className={cn(
      "flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card",
      variant === "panel" && "animate-fade-up"
    )}>
      <div className="relative">
        <img src={activeImg} alt={service.name} className="h-64 w-full object-cover" />
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/95 p-2 shadow-soft backdrop-blur transition-smooth hover:scale-110"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex gap-2">
          {service.gallery.slice(0, 4).map((g, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(g)}
              className={cn(
                "h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-smooth",
                activeImg === g ? "border-primary" : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <img src={g} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <div className="mt-5">
          <h2 className="font-display text-2xl font-bold leading-tight">{service.name}</h2>
          <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {service.location}
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-primary">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="font-semibold">{service.rating}</span>
            </div>
            <span className="text-muted-foreground">({service.reviews} reviews)</span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

        <div className="mt-5">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Features</h4>
          <div className="flex flex-wrap gap-2">
            {service.amenities.map((a) => (
              <span key={a} className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium">
                <Check className="h-3 w-3 text-primary" />
                {a}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3 rounded-2xl bg-muted/50 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Book your slot</h4>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start rounded-xl bg-background font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span className="text-muted-foreground">Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="pointer-events-auto" />
            </PopoverContent>
          </Popover>

          <Select value={slot} onValueChange={setSlot}>
            <SelectTrigger className="rounded-xl bg-background"><SelectValue placeholder="Select time slot" /></SelectTrigger>
            <SelectContent>
              {TIME_SLOTS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="border-t border-border bg-card p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs text-muted-foreground">starting from</div>
            <div className="font-display text-2xl font-bold text-primary">{service.price}</div>
          </div>
          <Button onClick={handleBook} size="lg" className="rounded-xl px-8 font-semibold">Book Now</Button>
        </div>
      </div>
    </div>
  );
};
