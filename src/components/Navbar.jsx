import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/image.png";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#home",    label: "Home"           },
  { href: "#products",label: "Products"       },
  { href: "#why-anion",label:"Why Anion?"    },
  { href: "#benefits",label: "Benefits"       },
  { href: "#vendor",  label: "Become a Vendor"},
  { href: "#contact", label: "Contact"        },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close drawer on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setDrawerOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`} role="banner">
        <div className="container navbar__inner">
          {/* Logo */}
          <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, "#home")} aria-label="Nature Care Organic home">
            <img src={logo} alt="Nature Care Organic logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">
              <strong>Nature Care Organic</strong>
              <span>Sanitary Napkins · M.S.K. Agencies</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="navbar__links" aria-label="Primary navigation">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="navbar__actions">
            <button
              className="navbar__hamburger"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation">
          <div
            className="mobile-drawer__backdrop"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-drawer__panel" ref={drawerRef}>
            <button
              className="mobile-drawer__close"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={22} aria-hidden="true" />
            </button>

            <nav className="mobile-drawer__links" aria-label="Mobile navigation">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
                  {l.label}
                </a>
              ))}
            </nav>

            <p className="mobile-drawer__brand">Nature Care Organic · M.S.K. Agencies</p>

          </div>
        </div>
      )}
    </>
  );
}
