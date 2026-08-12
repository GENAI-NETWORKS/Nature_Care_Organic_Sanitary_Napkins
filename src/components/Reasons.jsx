import {
  Leaf, ShieldCheck, Droplets, Zap,
  SmilePlus, Wind, Recycle, Award,
} from "lucide-react";

import imgOrganic   from "../assets/reason_organic.png";
import imgChem      from "../assets/reason_chemical_free.png";
import imgAbsorb    from "../assets/reason_absorbent.png";
import imgAnion     from "../assets/reason_anion.png";
import imgComfort   from "../assets/reason_comfort.png";
import imgEco       from "../assets/reason_eco.png";
import imgRash      from "../assets/reason_rash_free.png";
import imgFresh     from "../assets/reason_fresh.png";

import "./Reasons.css";

const REASONS = [
  {
    num: "01",
    icon: <Leaf size={20} aria-hidden="true" />,
    image: imgOrganic,
    alt: "Organic cotton plant with lush green leaves and white bolls",
    title: "100% Organic Cotton",
    body: "Grown without pesticides or synthetic fertilisers pure, breathable, and gentle against skin.",
    accent: "#4caf82",
  },
  {
    num: "02",
    icon: <ShieldCheck size={20} aria-hidden="true" />,
    image: imgChem,
    alt: "Glowing green shield with leaf emblem chemical-free protection",
    title: "Zero Harsh Chemicals",
    body: "No dioxins, no fluorescent agents, no synthetic fragrance safe for your most sensitive skin.",
    accent: "#6ddfaa",
  },
  {
    num: "03",
    icon: <Droplets size={20} aria-hidden="true" />,
    image: imgAbsorb,
    alt: "Cross-section of absorption layers inside a pad",
    title: "Ultra-Fast Absorption",
    body: "Multi-layer core locks fluid in seconds with zero backflow even on heavy flow days.",
    accent: "#4ab5d4",
  },
  {
    num: "04",
    icon: <Zap size={20} aria-hidden="true" />,
    image: imgAnion,
    alt: "Glowing anion strip with negative ion particles floating around it",
    title: "Anion Strip Technology",
    body: "Negative ions actively inhibit bacteria and reduce odour at the source naturally.",
    accent: "#a78bfa",
  },
  {
    num: "05",
    icon: <SmilePlus size={20} aria-hidden="true" />,
    image: imgComfort,
    alt: "Woman sitting peacefully with warm aura period comfort",
    title: "Eases Period Discomfort",
    body: "Users report noticeably reduced cramping, bloating, and fatigue during their cycle.",
    accent: "#f472b6",
  },
  {
    num: "06",
    icon: <Wind size={20} aria-hidden="true" />,
    image: imgFresh,
    alt: "Fresh mint leaves and gentle air waves odour-free freshness",
    title: "All-Day Freshness",
    body: "Odour neutralised at the source, not masked feel confident and fresh throughout the day.",
    accent: "#34d399",
  },
  {
    num: "07",
    icon: <Recycle size={20} aria-hidden="true" />,
    image: imgEco,
    alt: "Globe surrounded by green leaves and recycling arrows eco friendly",
    title: "Eco-Friendly Packaging",
    body: "Biodegradable packaging and responsible sourcing care for you and the planet.",
    accent: "#86efac",
  },
  {
    num: "08",
    icon: <Award size={20} aria-hidden="true" />,
    image: imgRash,
    alt: "Soft feather touching smooth skin no rash, no irritation",
    title: "Dermatologically Safe",
    body: "Hypoallergenic surface layer tested for sensitive skin no rash, no itch, just comfort.",
    accent: "#fbbf24",
  },
];

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="reasons section-pad"
      aria-labelledby="reasons-heading"
    >
      {/* Decorative diagonal stripe background */}
      <div className="reasons__bg-pattern" aria-hidden="true" />

      <div className="container reasons__inner">

        {/* Header */}
        <div className="reasons__head reveal">
          <span className="section-label">Why Make the Switch?</span>
          <h2 className="section-title reasons__title" id="reasons-heading">
            8 Reasons to Switch to<br />
            <span className="reasons__title-highlight">Nature Care Organic</span>
          </h2>
          <p className="section-desc reasons__desc">
            Every pad is crafted with purpose for your body, your comfort, and the world around you.
          </p>
        </div>

        {/* 4-per-row card grid */}
        <div className="reasons__grid" role="list">
          {REASONS.map((r, i) => (
            <article
              key={r.num}
              className={`reason-card reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
              role="listitem"
              aria-label={r.title}
              style={{ "--accent": r.accent }}
            >
              {/* Number badge */}
              <span className="reason-card__num" aria-hidden="true">{r.num}</span>

              {/* Image */}
              <div className="reason-card__img-wrap">
                <img
                  src={r.image}
                  alt={r.alt}
                  loading="lazy"
                  className="reason-card__img"
                />
              </div>

              {/* Icon chip */}
              <div className="reason-card__icon" aria-hidden="true">
                {r.icon}
              </div>

              {/* Text */}
              <div className="reason-card__text">
                <h3 className="reason-card__title">{r.title}</h3>
                <p className="reason-card__body">{r.body}</p>
              </div>

              {/* Bottom accent bar */}
              <div className="reason-card__bar" aria-hidden="true" />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
