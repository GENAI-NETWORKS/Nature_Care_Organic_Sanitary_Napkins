import { Users, CheckCircle2, Home } from "lucide-react";
import { WA_VENDOR } from "../data/products";
import "./VendorCTA.css";

const PERKS = [
  "Work from the comfort of your home, set your own hours",
  "Zero upfront stock risk direct distribution model",
  "Earn attractive commissions on every sale",
  "Full training and marketing support provided",
  "Join a fast-growing network of women resellers",
];

export default function VendorCTA() {
  return (
    <section id="vendor" className="vendor section-pad" aria-labelledby="vendor-heading">
      <div className="container vendor__inner">
        {/* Content */}
        <div className="vendor__content reveal">
          <span className="section-label">Become a Vendor</span>
          <h2 className="section-title" id="vendor-heading">
            Work from Home.<br />Earn with Nature Care.
          </h2>

          <p className="vendor__tagline" lang="ta">
            "வீட்டிலிருந்தபடியே வேலை செய்து பணம் சம்பாதிக்க விரும்புபவர்கள்"
          </p>
          <p className="vendor__tagline-en">
            Work from home and earn vendors and resellers welcome across Tamil Nadu
          </p>

          <p className="vendor__desc">
            M.S.K. Agencies is actively onboarding women entrepreneurs and resellers across Tamil
            Nadu. No experience needed if you believe in natural, safe products for women, this
            is your opportunity to build a meaningful income while making a difference.
          </p>

          <ul className="vendor__perks" aria-label="Reseller benefits">
            {PERKS.map((p) => (
              <li key={p} className="vendor__perk">
                <span className="vendor__perk-icon" aria-hidden="true">
                  <CheckCircle2 size={14} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href={WA_VENDOR}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            aria-label="Join as a vendor or reseller via WhatsApp"
          >
            <Users size={18} aria-hidden="true" />
            Join as a Vendor on WhatsApp
          </a>
        </div>

        {/* Visual card */}
        <div className="vendor__visual reveal reveal-delay-2">
          <div className="vendor__card">
            <div className="vendor__card-icon" aria-hidden="true">
              <Home size={36} />
            </div>
            <h3 className="vendor__card-title">Home-Based Reseller</h3>
            <p className="vendor__card-sub">
              Join Tamil Nadu's fastest growing organic feminine care network
            </p>

            <div className="vendor__card-stats" aria-label="Reseller programme highlights">
              <div className="vendor__stat">
                <span className="vendor__stat-num">₹0</span>
                <span className="vendor__stat-label">Startup Cost</span>
              </div>
              <div className="vendor__stat">
                <span className="vendor__stat-num">100%</span>
                <span className="vendor__stat-label">Work from Home</span>
              </div>
              <div className="vendor__stat">
                <span className="vendor__stat-num">Fast</span>
                <span className="vendor__stat-label">Onboarding</span>
              </div>
              <div className="vendor__stat">
                <span className="vendor__stat-num">Good</span>
                <span className="vendor__stat-label">Margins</span>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
