import { Leaf, ShieldCheck, Wind, Sparkles } from "lucide-react";
import "./TrustStrip.css";

const BADGES = [
  {
    icon: <Leaf size={26} aria-hidden="true" />,
    title: "100% Natural",
    desc: "Made from certified natural and organic materials nothing harsh, nothing synthetic.",
    bg: "var(--green-pale)",
    color: "var(--green-mid)",
  },
  {
    icon: <ShieldCheck size={26} aria-hidden="true" />,
    title: "100% Protective",
    desc: "Superior leak-guard construction keeps you confident and comfortable all day.",
    bg: "var(--plum-pale)",
    color: "var(--plum)",
  },
  {
    icon: <Wind size={26} aria-hidden="true" />,
    title: "Breathable Cotton",
    desc: "Soft cotton top sheet allows air circulation, reducing heat and irritation.",
    bg: "#e3f3fb",
    color: "#2196a0",
  },
  {
    icon: <Sparkles size={26} aria-hidden="true" />,
    title: "Anion Strip Tech",
    desc: "Negative-ion strip actively helps reduce odor, bacteria, and discomfort.",
    bg: "#fff8e1",
    color: "var(--gold)",
  },
];

export default function TrustStrip() {
  return (
    <section className="trust" aria-labelledby="trust-heading">
      <div className="container">
        <div className="trust__intro reveal">
          <span className="section-label">About Us</span>
          <h2 className="section-title" id="trust-heading">
            Why Families Trust<br />Nature Care Organic
          </h2>
          <p>
            M.S.K. Agencies, Salem brings you Nature Care Organic Sanitary Napkins a brand
            built on the belief that feminine hygiene should be safe, natural, and kind to the
            earth. Distributed across Tamil Nadu with love by{" "}
            <strong>Ponmalar Senthil Kumar</strong>.
          </p>
        </div>

        <div className="trust__grid" role="list">
          {BADGES.map((b, i) => (
            <div
              key={b.title}
              className={`trust__badge reveal reveal-delay-${i + 1}`}
              role="listitem"
            >
              <div
                className="trust__badge-icon"
                style={{ background: b.bg, color: b.color }}
                aria-hidden="true"
              >
                {b.icon}
              </div>
              <h3 className="trust__badge-title">{b.title}</h3>
              <p className="trust__badge-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
