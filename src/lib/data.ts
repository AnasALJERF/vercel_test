export type Category =
  | "Bedrooms"
  | "Living Rooms"
  | "Dining Rooms"
  | "Majlis"
  | "Office"
  | "Hotel"
  | "Custom";

export interface Collection {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  description: string;
  materials: string[];
  features: string[];
  // gradient pair used for the placeholder frame (replace with photography)
  tone: [string, string];
}

export const categories: Category[] = [
  "Bedrooms",
  "Living Rooms",
  "Dining Rooms",
  "Majlis",
  "Office",
  "Hotel",
  "Custom",
];

export const collections: Collection[] = [
  {
    slug: "amber-master-suite",
    name: "Amber Master Suite",
    category: "Bedrooms",
    tagline: "A sanctuary in walnut and brushed brass",
    description:
      "A complete master bedroom collection built around a hand-finished walnut headboard, integrated lighting, and upholstered panels in natural linen. Designed for deep rest and quiet grandeur.",
    materials: ["Solid American walnut", "Brushed brass inlay", "Belgian linen", "Memory-core upholstery"],
    features: ["Upholstered wing headboard", "Floating bedside consoles", "Soft-close drawer system", "Hidden ambient lighting"],
    tone: ["#3A2C1E", "#7A5C3A"],
  },
  {
    slug: "nectar-living-collection",
    name: "Nectar Living Collection",
    category: "Living Rooms",
    tagline: "Modular comfort, sculpted lines",
    description:
      "A modular seating system with deep down-filled cushions and a low walnut plinth. Reconfigure the lounge to your room, from intimate two-seat to expansive corner.",
    materials: ["Kiln-dried hardwood frame", "Down-feather blend", "Performance bouclé", "Walnut plinth"],
    features: ["Modular configuration", "Removable covers", "Solid-wood base", "10-year frame warranty"],
    tone: ["#241B12", "#C79A3C"],
  },
  {
    slug: "honeycomb-dining",
    name: "Honeycomb Dining",
    category: "Dining Rooms",
    tagline: "Gather around the centerpiece",
    description:
      "An extending dining table with a hexagonal pedestal base inspired by the comb, paired with sculpted dining chairs in saddle leather.",
    materials: ["Solid oak top", "Hexagonal pedestal", "Saddle leather seats", "Hand-rubbed oil finish"],
    features: ["Extends to seat 10", "Self-storing leaf", "Stain-resistant finish", "Sculpted comfort seating"],
    tone: ["#15100A", "#C79A3C"],
  },
  {
    slug: "royal-majlis",
    name: "Royal Majlis Arrangement",
    category: "Majlis",
    tagline: "Hospitality, elevated",
    description:
      "A traditional majlis reimagined: continuous floor seating with hand-tufted bolsters, carved hardwood arms, and richly woven textiles for generous gatherings.",
    materials: ["Carved hardwood arms", "Hand-tufted bolsters", "Jacquard upholstery", "High-resilience foam"],
    features: ["Continuous seating", "Custom lengths", "Bolster cushions", "Removable, cleanable covers"],
    tone: ["#3A2C1E", "#E4BC6B"],
  },
  {
    slug: "atelier-office",
    name: "Atelier Executive Office",
    category: "Office",
    tagline: "Where decisions are made",
    description:
      "An executive desk and credenza in figured walnut with leather inlay and integrated cable management, complemented by an ergonomic leather chair.",
    materials: ["Figured walnut veneer", "Full-grain leather inlay", "Brushed steel", "Soft-close storage"],
    features: ["Integrated cable routing", "Lockable storage", "Leather writing surface", "Ergonomic seating"],
    tone: ["#241B12", "#9A8A74"],
  },
  {
    slug: "grand-hotel-suite",
    name: "Grand Hotel Suite Package",
    category: "Hotel",
    tagline: "Turnkey furnishing at scale",
    description:
      "A complete hospitality package — beds, casegoods, seating, and desks — engineered for durability and consistency across every room of the property.",
    materials: ["Contract-grade frames", "Commercial textiles", "Scratch-resistant surfaces", "Fire-rated foams"],
    features: ["Volume manufacturing", "Consistent finishes", "Contract durability", "Project management"],
    tone: ["#15100A", "#7A5C3A"],
  },
];

export interface Service {
  title: string;
  icon: string; // simple key for the inline icon component
  description: string;
}

export const services: Service[] = [
  { title: "Interior Furnishing", icon: "layout", description: "End-to-end furnishing for homes and villas — space planning, material selection, and styling." },
  { title: "Custom Manufacturing", icon: "hammer", description: "Bespoke pieces built to your exact dimensions, materials, and finish in our own workshop." },
  { title: "Bedroom Furniture", icon: "bed", description: "Beds, wardrobes, and dressers that turn the bedroom into a calm, considered retreat." },
  { title: "Living Room Furniture", icon: "sofa", description: "Sofas, sectionals, and cabinetry designed for comfort and lasting presence." },
  { title: "Dining Room Furniture", icon: "table", description: "Tables and seating crafted to host — built for daily life and grand occasions alike." },
  { title: "Office Furniture", icon: "desk", description: "Executive desks, storage, and seating that bring warmth and authority to the workplace." },
  { title: "Hotel Furnishing", icon: "building", description: "Contract-grade furnishing for hospitality at scale, with consistency room to room." },
  { title: "Delivery & Installation", icon: "truck", description: "White-glove delivery, assembly, and placement by our own trained installation team." },
];

export const values = [
  { title: "Craftsmanship", text: "Every joint, seam, and finish is completed by hand and inspected before it leaves the workshop." },
  { title: "Honest Materials", text: "Solid hardwoods, full-grain leathers, and natural textiles — chosen to age beautifully." },
  { title: "Made to Last", text: "We build for decades, not seasons, with frames and finishes engineered to endure." },
  { title: "Service", text: "From first sketch to final placement, one team stays with your project end to end." },
];

export const timeline = [
  { year: "2004", title: "The first workshop", text: "Shahd begins as a small family atelier crafting bespoke bedroom furniture." },
  { year: "2011", title: "Showroom opens", text: "Our flagship showroom opens, bringing collections to life under one roof." },
  { year: "2017", title: "Hospitality division", text: "We begin furnishing hotels and large residential projects across the region." },
  { year: "2022", title: "Custom atelier", text: "A dedicated custom workshop opens, doubling our bespoke capacity." },
  { year: "2026", title: "A modern house", text: "Shahd becomes a name trusted for craftsmanship, comfort, and quiet luxury." },
];

export const testimonials = [
  { quote: "The master suite they built for us feels like it was always meant to be in our home. Faultless craftsmanship.", name: "Layla A.", role: "Private residence" },
  { quote: "We furnished 80 hotel rooms with Shahd. Consistent quality, on time, every single room.", name: "Omar K.", role: "Hospitality group" },
  { quote: "They listened, sketched, and delivered exactly the majlis we imagined — only better.", name: "Hessa M.", role: "Villa project" },
];

export const stats = [
  { value: "20+", label: "Years of craft" },
  { value: "3,400", label: "Pieces delivered" },
  { value: "120+", label: "Projects furnished" },
  { value: "100%", label: "In-house workshop" },
];
