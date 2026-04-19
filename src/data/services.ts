import banquetImg from "@/assets/service-banquet.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import decorImg from "@/assets/service-decor.jpg";

export type Category = "banquet" | "caterers" | "decorators";

export interface Service {
  id: string;
  name: string;
  location: string;
  city: string;
  price: string;
  priceValue: number;
  rating: number;
  reviews: number;
  capacity: number;
  image: string;
  gallery: string[];
  category: Category;
  description: string;
  amenities: string[];
}

const IMG: Record<Category, string> = {
  banquet: banquetImg,
  caterers: cateringImg,
  decorators: decorImg,
};

const make = (
  id: string,
  category: Category,
  name: string,
  city: string,
  area: string,
  priceValue: number,
  priceLabel: string,
  rating: number,
  reviews: number,
  capacity: number,
  amenities: string[],
): Service => ({
  id,
  name,
  city,
  location: `${area}, ${city}`,
  price: priceLabel,
  priceValue,
  rating,
  reviews,
  capacity,
  image: IMG[category],
  gallery: [IMG.banquet, IMG.caterers, IMG.decorators, IMG[category]],
  category,
  description:
    "An elegant venue tailored for unforgettable celebrations. Spacious interiors, premium service, and a team committed to delivering a flawless event experience from start to finish.",
  amenities,
});

const AMEN_BANQ = ["AC Hall", "Parking", "Catering Allowed", "DJ Available", "Stage", "Valet"];
const AMEN_CAT = ["Veg & Non-Veg", "Live Counters", "Custom Menu", "Servers Included"];
const AMEN_DEC = ["Floral Arrangement", "Lighting", "Stage Setup", "Theme Decor"];

export const SERVICES: Service[] = [
  make("b1", "banquet", "The Grand Pavilion", "Mumbai", "Bandra", 85000, "₹85,000", 4.8, 248, 500, AMEN_BANQ),
  make("b2", "banquet", "Royal Heritage Hall", "Delhi", "Connaught Place", 120000, "₹1,20,000", 4.9, 412, 800, AMEN_BANQ),
  make("b3", "banquet", "Crystal Banquets", "Bangalore", "Koramangala", 65000, "₹65,000", 4.7, 189, 350, AMEN_BANQ),
  make("b4", "banquet", "Emerald Gardens", "Mumbai", "Powai", 95000, "₹95,000", 4.8, 301, 600, AMEN_BANQ),
  make("b5", "banquet", "The White Orchid", "Delhi", "Vasant Kunj", 110000, "₹1,10,000", 4.6, 156, 450, AMEN_BANQ),
  make("b6", "banquet", "Saffron Palace", "Jaipur", "C-Scheme", 75000, "₹75,000", 4.9, 267, 700, AMEN_BANQ),
  make("b7", "banquet", "Marina Hall", "Chennai", "Anna Nagar", 70000, "₹70,000", 4.5, 142, 400, AMEN_BANQ),
  make("b8", "banquet", "The Velvet Room", "Bangalore", "Whitefield", 88000, "₹88,000", 4.7, 198, 500, AMEN_BANQ),

  make("c1", "caterers", "Spice Route Catering", "Mumbai", "Andheri", 850, "₹850/plate", 4.9, 312, 1000, AMEN_CAT),
  make("c2", "caterers", "Royal Feast Co.", "Delhi", "Saket", 1200, "₹1,200/plate", 4.8, 287, 1500, AMEN_CAT),
  make("c3", "caterers", "Heritage Kitchens", "Bangalore", "Indiranagar", 950, "₹950/plate", 4.7, 234, 800, AMEN_CAT),
  make("c4", "caterers", "Coastal Flavors", "Chennai", "Mylapore", 780, "₹780/plate", 4.6, 178, 600, AMEN_CAT),
  make("c5", "caterers", "Maharaja Caterers", "Jaipur", "Malviya Nagar", 1100, "₹1,100/plate", 4.8, 256, 1200, AMEN_CAT),
  make("c6", "caterers", "Urban Bites", "Mumbai", "Lower Parel", 1050, "₹1,050/plate", 4.7, 201, 900, AMEN_CAT),

  make("d1", "decorators", "Bloom & Blossom Decor", "Mumbai", "Juhu", 45000, "₹45,000", 4.9, 187, 0, AMEN_DEC),
  make("d2", "decorators", "Mandap Magic", "Delhi", "GK-1", 75000, "₹75,000", 4.8, 234, 0, AMEN_DEC),
  make("d3", "decorators", "Floral Dreams Studio", "Bangalore", "HSR Layout", 55000, "₹55,000", 4.7, 156, 0, AMEN_DEC),
  make("d4", "decorators", "Petal & Pearl", "Jaipur", "Bani Park", 60000, "₹60,000", 4.8, 198, 0, AMEN_DEC),
  make("d5", "decorators", "The Decor Atelier", "Mumbai", "Worli", 90000, "₹90,000", 4.9, 267, 0, AMEN_DEC),
  make("d6", "decorators", "Lumiere Events", "Delhi", "Dwarka", 50000, "₹50,000", 4.6, 134, 0, AMEN_DEC),
];

export const CATEGORY_META: Record<Category, { label: string; title: string; subtitle: string }> = {
  banquet: { label: "Banquet", title: "Banquet Halls", subtitle: "Find and book the perfect venue" },
  caterers: { label: "Caterers", title: "Caterers", subtitle: "Delicious menus for every occasion" },
  decorators: { label: "Decorators", title: "Decorators", subtitle: "Stunning setups that wow your guests" },
};

export const TIME_SLOTS = ["09:00 - 13:00", "13:00 - 17:00", "17:00 - 21:00", "21:00 - 01:00"];
