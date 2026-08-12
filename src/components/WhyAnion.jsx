import { Zap, Shield, Wind, SmilePlus, Droplets, Leaf } from "lucide-react";

// Generated illustrations
import imgBacteria from "../assets/anion_bacteria.png";
import imgNoRash   from "../assets/anion_no_rash.png";
import imgFresh    from "../assets/anion_fresh.png";
import imgComfort  from "../assets/anion_comfort.png";
import imgAbsorb   from "../assets/anion_absorb.png";
import imgNatural  from "../assets/anion_natural.png";

import "./WhyAnion.css";

const CARDS = [
  {
    tag: "Anion Science",
    icon: <Zap size={18} aria-hidden="true" />,
    image: imgBacteria,
    alt: "Glowing negative-ion particles forming a protective shield against bacteria",
    title: "Kills odor-causing bacteria",
    sub: "Negative ions actively inhibit bacterial growth in the moisture zone without chemicals.",
    wide: true,
  },
  {
    tag: "Skin Care",
    icon: <Shield size={18} aria-hidden="true" />,
    image: imgNoRash,
    alt: "Soft feather gently touching smooth skin no irritation, no rash",
    title: "No rashes. No itch.",
    sub: "Cotton + anion layer keeps skin calm all day.",
    wide: false,
  },
  {
    tag: "Freshness",
    icon: <Wind size={18} aria-hidden="true" />,
    image: imgFresh,
    alt: "Fresh botanical leaves and clean air waves odor neutralised naturally",
    title: "Stays fresh for hours",
    sub: "Odor neutralised at the source not masked.",
    wide: false,
  },
  {
    tag: "Wellness",
    icon: <SmilePlus size={18} aria-hidden="true" />,
    image: imgComfort,
    alt: "Woman resting peacefully with a warm comfort glow period ease",
    title: "Eases period discomfort",
    sub: "Users report reduced cramping, headache & stress.",
    wide: false,
  },
  {
    tag: "Absorption",
    icon: <Droplets size={18} aria-hidden="true" />,
    image: imgAbsorb,
    alt: "Water droplets instantly absorbed into multi-layer pad cross-section",
    title: "Locks moisture in seconds",
    sub: "Multi-layer core pulls fluid away fast zero backflow.",
    wide: false,
  },
  {
    tag: "Pure & Natural",
    icon: <Leaf size={18} aria-hidden="true" />,
    image: imgNatural,
    alt: "Organic cotton plant with glowing natural certification chemical free",
    title: "Zero harsh chemicals",
    sub: "No dioxins, no synthetic fragrance, no fluorescent agents.",
    wide: false,
  },
];

const STATS = [
  { num: "100%",  label: "Natural Materials" },
  { num: "8+",    label: "Anion Benefits"    },
  { num: "0",     label: "Harsh Chemicals"   },
];

export default function WhyAnion() {
  return (
    <section
      id="why-anion"
      className="why-anion section-pad"
      aria-labelledby="why-anion-heading"
    >
      <div className="container">

        {/* Header */}
        <div className="why-anion__head reveal">
          <span className="section-label">The Science of Care</span>
          <h2 className="section-title" id="why-anion-heading">
            Why Anion Strip Technology?
          </h2>
          <p className="why-anion__kicker">
            One <strong>tiny green strip.</strong> A world of difference.
          </p>
        </div>

        {/* Bento grid */}
        <div className="anion-bento">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className={`anion-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              aria-label={card.title}
            >
              <div className="anion-card__bg" aria-hidden="true">
                <img src={card.image} alt={card.alt} loading="lazy" />
                <div className="anion-card__gradient"></div>
              </div>

              <div className="anion-card__content">
                <div className="anion-card__top">
                  <span className="anion-card__tag">{card.tag}</span>
                  <div className="anion-card__icon-chip" aria-hidden="true">
                    {card.icon}
                  </div>
                </div>

                <div className="anion-card__bottom">
                  <h3 className="anion-card__title">{card.title}</h3>
                  <p className="anion-card__sub">{card.sub}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Stat strip */}
        <div className="why-anion__stats reveal" aria-label="Key statistics">
          {STATS.map((s) => (
            <div key={s.label} className="why-anion__stat">
              <span className="why-anion__stat-num">{s.num}</span>
              <span className="why-anion__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
