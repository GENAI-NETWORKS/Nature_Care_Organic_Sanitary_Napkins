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

// Export hero image (full pack display) and gallery images
export const heroImage   = img1;
export const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

// ── Product SKU Data ─────────────────────────────────────
export const PRODUCTS = [
  {
    id: 1,
    name: "Nature Care Ultra Thin Anion",
    size: "XL / 280 mm",
    badge: "XL",
    grade: "A Grade",
    description: "Ultra thin daily protection with powerful anion strip for freshness.",
    tags: ["thin", "anion"],
    chips: ["Ultra Thin", "Anion", "Cotton Top Sheet", "A Grade"],
    color: "#d4edda",
    image: img6,                    // 280mm ultra thin anion cotton A Grade
    imageAlt: "Nature Care XL 280mm Ultra Thin Anion Pad folded pack and open pad showing anion strip",
  },
  {
    id: 2,
    name: "Nature Care Cotton Organic",
    size: "XL / 280 mm",
    badge: "XL",
    grade: "Organic",
    description: "Pure organic cotton top sheet, gentle on sensitive skin.",
    tags: ["thin", "organic"],
    chips: ["Organic", "Cotton Top Sheet", "Gentle"],
    color: "#f5e6f2",
    image: img8,                    // 280mm cotton top sheet organic
    imageAlt: "Nature Care XL 280mm Cotton Top Sheet Organic Pad pack and open pad",
  },
  {
    id: 3,
    name: "Nature Care Wave Anion",
    size: "XXL / 320 mm",
    badge: "XXL",
    grade: "A Grade",
    description: "Wave-contoured anion pad offering extended overnight comfort.",
    tags: ["thick", "anion"],
    chips: ["Wave Anion", "Cotton", "A Grade"],
    color: "#d4edda",
    image: img7,                    // 320mm wave anion cotton A Grade
    imageAlt: "Nature Care XXL 320mm Wave Anion Cotton Pad folded and open",
  },
  {
    id: 4,
    name: "Nature Care Cotton Organic",
    size: "XXL / 320 mm",
    badge: "XXL",
    grade: "Organic",
    description: "Longer organic protection for heavier days without compromise.",
    tags: ["thick", "organic"],
    chips: ["Organic", "Cotton Top Sheet", "Breathable"],
    color: "#f5e6f2",
    image: img4,                    // 320mm cotton organic
    imageAlt: "Nature Care XXL 320mm Cotton Top Sheet Organic Pad",
  },
  {
    id: 5,
    name: "Nature Care Wave Anion Premium",
    size: "XXXL / 360 mm",
    badge: "XXXL",
    grade: "A Grade",
    description: "Maximum coverage premium anion pad for overnight confidence.",
    tags: ["thick", "anion"],
    chips: ["Wave Anion", "Premium Cotton", "A Grade"],
    color: "#d4edda",
    image: img3,                    // 360mm wave anion premium cotton A Grade
    imageAlt: "Nature Care XXXL 360mm Wave Anion Premium Cotton Pad",
  },
  {
    id: 6,
    name: "Nature Care Organic XXX-Long",
    size: "XXXL / 360 mm",
    badge: "XXXL",
    grade: "Organic",
    description: "Full-length organic pad maximum peace of mind, night and day.",
    tags: ["thick", "organic"],
    chips: ["Organic", "Full-Length", "Eco-Soft"],
    color: "#f5e6f2",
    image: img10,                   // 360mm organic
    imageAlt: "Nature Care XXXL 360mm Organic Pad",
  },
  {
    id: 7,
    name: "Nature Care Heavy Flow Thick",
    size: "XXL Thick",
    badge: "XXL+",
    grade: "A Grade",
    description: "Extra-absorbent thick pad engineered for heavy flow days.",
    tags: ["thick", "anion"],
    chips: ["Heavy Flow", "Extra Absorbent", "Leak Guard"],
    color: "#fff3e0",
    image: img9,                    // XXL thick
    imageAlt: "Nature Care XXL Thick Heavy Flow Pad with purple packaging",
  },
  {
    id: 8,
    name: "Nature Care Charcoal Panty Liner",
    size: "155 mm",
    badge: "Liner",
    grade: "Charcoal",
    description: "Bamboo charcoal liner for daily freshness and odor control.",
    tags: ["liner", "bamboo"],
    chips: ["Charcoal", "Bamboo", "Panty Liner"],
    color: "#e8eaf6",
    image: img2,                    // close-up pack shot
    imageAlt: "Nature Care Panty Liner packs close-up",
  },
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
