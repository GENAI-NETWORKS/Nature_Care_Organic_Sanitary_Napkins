import { MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "../assets/image.png";
import { WA_GENERAL } from "../data/products";
import "./Footer.css";

const NAV_LINKS = [
  { href: "#home",      label: "Home"            },
  { href: "#products",  label: "Products"        },
  { href: "#why-anion", label: "Why Anion?"      },
  { href: "#benefits",  label: "Benefits"        },
  { href: "#vendor",    label: "Become a Vendor" },
];

const scrollTo = (e, href) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer" aria-label="Site footer and contact information">
      {/* Contact info + nav + map */}
      <div className="container footer__contact">
        <div className="footer__contact-inner">
          {/* Brand + contact */}
          <div>
            <div className="footer__brand" aria-label="Nature Care Organic">
              <img src={logo} alt="Nature Care Organic logo" className="footer__brand-logo" />
              <span className="footer__brand-name">Nature Care Organic</span>
            </div>

            <p className="footer__tagline">
              M.S.K. Agencies, Salem bringing natural, organic feminine care to Tamil Nadu
              women with love and care.
              <br />
              <span lang="ta">"தரணியையும் தாய்மையையும் காப்போம்"</span>
            </p>

            <address className="footer__contact-items" style={{ fontStyle: "normal" }}>
              <div className="footer__contact-item">
                <MapPin size={16} className="footer__contact-item-icon" aria-hidden="true" />
                <span>
                  91/23 North Street, 3rd Cross,<br />
                  Pachapatti Main Road,<br />
                  Salem – 636 001, Tamil Nadu, India
                </span>
              </div>

              <div className="footer__contact-item">
                <Phone size={16} className="footer__contact-item-icon" aria-hidden="true" />
                <span>
                  Ponmalar Senthil Kumar{" "}
                  <a href="tel:+919944773882" aria-label="Call Ponmalar Senthil Kumar">
                    +91 99447 73882
                  </a>
                </span>
              </div>

              <div className="footer__contact-item">
                <MessageCircle size={16} className="footer__contact-item-icon" aria-hidden="true" />
                <a
                  href={WA_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp us"
                >
                  WhatsApp: +91 99447 73882
                </a>
              </div>
            </address>
          </div>

          {/* Nav column */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h4>Quick Links</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => scrollTo(e, l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Map */}
          <div className="footer__map">
            <h4>Find Us</h4>
            <div className="footer__map-frame">
              <iframe
                title="M.S.K. Agencies location map Salem, Tamil Nadu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62660.2447285988!2d78.1282234!3d11.6612586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1add4585ab7%3A0x62ef31a06af2fd4b!2sSalem%2C%20Tamil%20Nadu%20636001!5e0!3m2!1sen!2sin!4v1700000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Salem, Tamil Nadu M.S.K. Agencies location"
              />
            </div>
          </div>
        </div>
      </div>


      {/* Bottom bar */}
      <div className="container footer__bottom">
        <p>© {year} M.S.K. Agencies, Salem. All rights reserved.</p>
        <nav className="footer__bottom-links" aria-label="Footer utility links">
        </nav>
      </div>

      {/* Powered by */}
      <div className="footer__powered-by">
        <p>
          Powered by{" "}
          <a
            href="https://genaitechnology.in/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gen-AI Tech IT Solutions Salem – official website"
          >
            Gen-AI Tech | IT Solutions Salem
          </a>
        </p>
      </div>
    </footer>
  );
}
