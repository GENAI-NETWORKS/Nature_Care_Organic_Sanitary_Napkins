import {
  HeartPulse, Droplet, ShieldCheck, Smile, Wind, Leaf, BadgeCheck, Sparkles,
} from "lucide-react";
import "./Benefits.css";

const BENEFITS = [
  {
    icon: <HeartPulse size={26} aria-hidden="true" />,
    title: "All-Day Comfort",
    desc: "Ergonomic design moulds gently to your body for movement-proof comfort from morning to night.",
    accent: "#c62828",
    glow: "rgba(198,40,40,0.18)",
  },
  {
    icon: <Droplet size={26} aria-hidden="true" />,
    title: "Odor Control",
    desc: "Anion technology neutralises odor at the source so you stay confident all day.",
    accent: "#1565c0",
    glow: "rgba(21,101,192,0.18)",
  },
  {
    icon: <ShieldCheck size={26} aria-hidden="true" />,
    title: "Leak Protection",
    desc: "Wide wings and multi-layer core guard against leaks, even on your heaviest days.",
    accent: "#7b3f6e",
    glow: "rgba(123,63,110,0.18)",
  },
  {
    icon: <Smile size={26} aria-hidden="true" />,
    title: "Reduced Irritation",
    desc: "Soft cotton top sheet eliminates the roughness that causes rashes and skin irritation.",
    accent: "#d4860a",
    glow: "rgba(212,134,10,0.18)",
  },
  {
    icon: <Wind size={26} aria-hidden="true" />,
    title: "Breathable Design",
    desc: "Air-permeable layers keep you cool and dry reducing heat and discomfort significantly.",
    accent: "#2e7d52",
    glow: "rgba(46,125,82,0.18)",
  },
  {
    icon: <Leaf size={26} aria-hidden="true" />,
    title: "Eco-Conscious",
    desc: "Organic and biodegradable materials mean caring for yourself and the planet simultaneously.",
    accent: "#4caf82",
    glow: "rgba(76,175,130,0.18)",
  },
  {
    icon: <BadgeCheck size={26} aria-hidden="true" />,
    title: "Dermatologically Gentle",
    desc: "No dyes, no synthetic fragrances safe for sensitive skin and young women.",
    accent: "#6a1b9a",
    glow: "rgba(106,27,154,0.18)",
  },
  {
    icon: <Sparkles size={26} aria-hidden="true" />,
    title: "Feminine Confidence",
    desc: "Feel fresh, protected, and confident every single day of your cycle unapologetically.",
    accent: "#ad1457",
    glow: "rgba(173,20,87,0.18)",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="benefits section-pad" aria-labelledby="benefits-heading">
      <div className="container">

        {/* Header */}
        <div className="benefits__head reveal">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title benefits__title" id="benefits-heading">
            8 Reasons to Switch to<br />
            <span className="benefits__title-highlight">Nature Care Organic</span>
          </h2>
          <p className="benefits__subtitle">
            Every pad is engineered with one purpose the most comfortable,<br />
            safe, and confident period experience possible.
          </p>
        </div>

        {/* Zigzag journey */}
        <div className="benefits__journey" role="list">
          {BENEFITS.map((b, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <div
                key={b.title}
                className={`bj-row bj-row--${side} reveal reveal-delay-${(i % 4) + 1}`}
                role="listitem"
              >
                {/* Number column */}
                <div className="bj-num-col">
                  <div className="bj-num" style={{ "--accent": b.accent, "--glow": b.glow }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < BENEFITS.length - 1 && <div className="bj-line" />}
                </div>

                {/* Card */}
                <article
                  className="bj-card"
                  style={{ "--accent": b.accent, "--glow": b.glow }}
                  aria-label={b.title}
                >
                  <div className="bj-card__icon-wrap">
                    <div className="bj-card__icon">{b.icon}</div>
                  </div>
                  <div className="bj-card__body">
                    <h3 className="bj-card__title">{b.title}</h3>
                    <p className="bj-card__desc">{b.desc}</p>
                  </div>
                  <div className="bj-card__glow" aria-hidden="true" />
                </article>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
