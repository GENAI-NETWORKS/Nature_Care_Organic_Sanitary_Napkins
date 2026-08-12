import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ProductGrid from "./components/ProductGrid";
import WhyAnion from "./components/WhyAnion";
import VendorCTA from "./components/VendorCTA";
import Reasons from "./components/Reasons";
import Footer from "./components/Footer";

// ── Global scroll-reveal observer ───────────────────────────
// We attach it once in App so every component can use .reveal
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    // Observe all current + future .reveal elements via MutationObserver
    const attachReveal = () => {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    attachReveal();

    const mutObs = new MutationObserver(attachReveal);
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObs.disconnect();
    };
  }, []);
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <ProductGrid />
        <WhyAnion />
        <Reasons />
        <VendorCTA />
      </main>
      <Footer />
    </>
  );
}
