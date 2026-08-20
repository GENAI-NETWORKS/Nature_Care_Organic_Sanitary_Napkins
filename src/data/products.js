// ── Image imports ──────────────────────────────────────────
import img1  from "../assets/WhatsApp Image 2026-08-10 at 12.55.06 PM (1).jpeg";
import img2  from "../assets/WhatsApp Image 2026-08-10 at 12.55.06 PM.jpeg";
import img3  from "../assets/WhatsApp Image 2026-08-10 at 12.55.07 PM (1).jpeg";
import img4  from "../assets/WhatsApp Image 2026-08-10 at 12.55.07 PM (2).jpeg";
import img5  from "../assets/WhatsApp Image 2026-08-10 at 12.55.07 PM.jpeg";
import img6  from "../assets/WhatsApp Image 2026-08-10 at 12.55.08 PM (1).jpeg";
import img7  from "../assets/WhatsApp Image 2026-08-10 at 12.55.08 PM.jpeg";
import img8  from "../assets/WhatsApp Image 2026-08-10 at 12.55.09 PM (1).jpeg";
import img9  from "../assets/WhatsApp Image 2026-08-10 at 12.55.09 PM (2).jpeg";
import img10 from "../assets/WhatsApp Image 2026-08-10 at 12.55.09 PM.jpeg";
import img11 from "../assets/WhatsApp Image 2026-08-20 at 11.26.36 AM.jpeg";
import img12 from "../assets/WhatsApp Image 2026-08-20 at 11.26.36 AM (1).jpeg";

// Export hero image (full pack display) and gallery images
export const heroImage   = img1;
export const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

// ── Product SKU Data ─────────────────────────────────────
export const PRODUCTS = [
  {
    id: 1,
    name: "Nature Care Organic",
    size: "XL, XXL",
    badge: "XL, XXL",
    grade: "Organic",
    description: "Pure organic cotton top sheet, gentle on sensitive skin.",
    tags: ["thin", "organic"],
    chips: ["Organic", "Cotton Top Sheet", "Gentle"],
    color: "#f5e6f2",
    image: img8, 
    imageAlt: "Nature Care Organic Pad",
    mrp: 200,
    wholesale: 125,
    packaging: "10pcs/pkt"
  },
  {
    id: 2,
    name: "Nature Care Anion",
    size: "XL, XXL",
    badge: "XL, XXL",
    grade: "A Grade",
    description: "Ultra thin daily protection with powerful anion strip for freshness.",
    tags: ["thin", "anion"],
    chips: ["Ultra Thin", "Anion", "A Grade"],
    color: "#d4edda",
    image: img11,
    imageAlt: "Nature Care Anion Pad",
    mrp: 225,
    wholesale: 150,
    packaging: "10pcs/pkt"
  },
  {
    id: 3,
    name: "Nature Care Organic Thick",
    size: "XXL",
    badge: "XXL Thick",
    grade: "Organic",
    description: "Extra-absorbent thick pad engineered for heavy flow days.",
    tags: ["thick", "organic"],
    chips: ["Heavy Flow", "Extra Absorbent", "Organic"],
    color: "#fff3e0",
    image: img9,
    imageAlt: "Nature Care XXL Thick Organic Pad",
    mrp: 200,
    wholesale: 125,
    packaging: "10pcs/pkt"
  },
  {
    id: 4,
    name: "Nature Care Panty Liner",
    size: "180mm",
    badge: "Liner",
    grade: "Organic",
    description: "Organic liner for daily freshness and odor control.",
    tags: ["liner", "organic"],
    chips: ["Organic", "Panty Liner"],
    color: "#e8eaf6",
    image: img2,
    imageAlt: "Nature Care Panty Liner 180mm",
    mrp: 225,
    wholesale: 150,
    packaging: "20pcs/pkt"
  },
  {
    id: 5,
    name: "Nature Care Panty Liner",
    size: "155mm",
    badge: "Liner",
    grade: "Organic",
    description: "Compact organic liner for everyday comfort.",
    tags: ["liner", "organic"],
    chips: ["Organic", "Panty Liner", "Compact"],
    color: "#e8eaf6",
    image: img2,
    imageAlt: "Nature Care Panty Liner 155mm",
    mrp: 300,
    wholesale: 200,
    packaging: "30pcs/pkt"
  },
  {
    id: 6,
    name: "Nature Care Organic",
    size: "XXXL",
    badge: "XXXL",
    grade: "Organic",
    description: "Full-length organic pad maximum peace of mind, night and day.",
    tags: ["thick", "organic"],
    chips: ["Organic", "Full-Length", "Eco-Soft"],
    color: "#f5e6f2",
    image: img10,
    imageAlt: "Nature Care XXXL Organic Pad",
    mrp: 225,
    wholesale: 150,
    packaging: "10pcs/pkt"
  },
  {
    id: 7,
    name: "Nature Care Anion",
    size: "XXXL",
    badge: "XXXL",
    grade: "A Grade",
    description: "Maximum coverage premium anion pad for overnight confidence.",
    tags: ["thick", "anion"],
    chips: ["Wave Anion", "Premium Cotton", "A Grade"],
    color: "#d4edda",
    image: img3,
    imageAlt: "Nature Care XXXL Anion Pad",
    mrp: 300,
    wholesale: 200,
    packaging: "10pcs/pkt"
  },
  {
    id: 8,
    name: "Nature Care Bamboo",
    size: "XXXL",
    badge: "XXXL Bamboo",
    grade: "Bamboo",
    description: "Sustainable bamboo fiber pad for ultimate comfort and breathability.",
    tags: ["thick", "bamboo"],
    chips: ["Bamboo", "Eco-friendly", "Breathable"],
    color: "#e8f5e9",
    image: img12,
    imageAlt: "Nature Care XXXL Bamboo Pad",
    mrp: 300,
    wholesale: 200,
    packaging: "10pcs/pkt"
  },
  {
    id: 9,
    name: "Nature Care Bamboo",
    size: "XL, XXL",
    badge: "XL, XXL Bamboo",
    grade: "Bamboo",
    description: "Sustainable bamboo fiber pad for daily comfort and breathability.",
    tags: ["thin", "bamboo"],
    chips: ["Bamboo", "Eco-friendly", "Breathable"],
    color: "#e8f5e9",
    image: img12,
    imageAlt: "Nature Care XL, XXL Bamboo Pad",
    mrp: 225,
    wholesale: 150,
    packaging: "10pcs/pkt"
  }
];

export const FILTER_TABS = [
  { key: "all",    label: "All Products" },
  { key: "thick",  label: "Thick Pad"    },
  { key: "thin",   label: "Thin Pad"     },
  { key: "organic",label: "Organic Pad"  },
  { key: "anion",  label: "Anion Pad"    },
  { key: "bamboo", label: "Bamboo Pad"   },
  { key: "liner",  label: "Panty Liners" },
];

// WhatsApp deep links
export const WA_GENERAL = "https://wa.me/919944773882?text=Hi%2C%20I%27m%20interested%20in%20Nature%20Care%20Organic%20Sanitary%20Napkins";
export const WA_VENDOR  = "https://wa.me/919944773882?text=Hi%2C%20I%27d%20like%20to%20become%20a%20vendor%2Freseller%20for%20Nature%20Care%20Organic%20Sanitary%20Napkins";
