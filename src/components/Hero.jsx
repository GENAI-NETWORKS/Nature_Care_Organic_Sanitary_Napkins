import { useRef, useEffect } from "react";
import { Leaf, MessageCircle, CheckCircle2, Wind, Sparkles } from "lucide-react";
import { WA_GENERAL, heroImage } from "../data/products";
import "./Hero.css";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Hero() {
  useReveal();

  const scrollToProducts = (e) => {
    e.preventDefault();
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero" aria-label="Hero">
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />
      <div className="hero__blob hero__blob--3" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Left: content */}
        <div className="hero__content">
          <div className="hero__eyebrow reveal">
            <Leaf size={13} aria-hidden="true" />
            M.S.K. Agencies, Salem
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            Nature Care<br />
            <span>Organic</span> Sanitary<br />
            Napkins
          </h1>

          <p className="hero__tagline reveal reveal-delay-2" lang="ta">
            "தரணியையும் தாய்மையையும் காப்போம்"
          </p>

          <p className="hero__sub reveal reveal-delay-2">
            Protecting the Earth and Motherhood 100% Natural. 100% Protective.
            Care that respects your body and the earth.
          </p>

          <div className="hero__ctas reveal reveal-delay-3">
            <a href="#products" className="btn-primary" onClick={scrollToProducts}>
              <Leaf size={18} aria-hidden="true" />
              Explore Products
            </a>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="hero__trust reveal reveal-delay-4" aria-label="Trust indicators">
            {[
              { icon: <CheckCircle2 size={13} aria-hidden="true" />, text: "100% Natural" },
              { icon: <Wind size={13} aria-hidden="true" />,         text: "Breathable" },
              { icon: <Sparkles size={13} aria-hidden="true" />,     text: "Anion Tech" },
              { icon: <Leaf size={13} aria-hidden="true" />,         text: "Eco-Friendly" },
            ].map((b) => (
              <span key={b.text} className="hero__trust-badge">
                {b.icon} {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right: decorative card */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card">
            <div className="hero__float-badge">New Range 2025</div>
            <div className="hero__card-img">
              <img
                src={heroImage}
                alt="Nature Care Organic Sanitary Napkins full product range display showing all pack sizes"
                className="hero__card-photo"
              />
            </div>
            <p className="hero__card-title">Nature Care Organic</p>
            <p className="hero__card-sub">Premium Sanitary Napkins<br />For Every Need</p>
            <div className="hero__float-leaf">
              <Sparkles size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
