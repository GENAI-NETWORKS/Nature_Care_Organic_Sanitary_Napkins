import { galleryImages } from "../data/products";
import "./Gallery.css";

const GALLERY_META = [
  { label: "Full product range all Nature Care pack sizes",                    large: true  },
  { label: "Nature Care packs close-up bold Tamil packaging",                  large: false },
  { label: "XXXL 360mm Wave Anion Premium Cotton Pad folded & open",           large: false },
  { label: "XXL 320mm Cotton Top Sheet Organic Pad folded & open",             large: false },
  { label: "XXL 320mm Cotton Top Sheet Organic Pad alternate view",            large: false },
  { label: "XL 280mm Ultra Thin Anion Cotton Pad folded & open with anion strip",large: true },
  { label: "XXL 320mm Wave Anion Cotton Pad showing anion strip detail",       large: false },
  { label: "XL 280mm Cotton Top Sheet Organic Pad folded & unfolded",          large: false },
  { label: "XXL Thick Heavy Flow Pad with purple packaging",                     large: false },
  { label: "XXXL 360mm Organic Pad folded & full length open",                 large: false },
];

export default function Gallery() {
  return (
    <section className="gallery section-pad" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="gallery__head reveal">
          <span className="section-label">Gallery</span>
          <h2 className="section-title" id="gallery-heading">
            See Every Product, Up Close
          </h2>
          <p className="section-desc" style={{ marginInline: "auto", textAlign: "center" }}>
            Real shots of Nature Care Organic pads every size, every variety, straight from
            M.S.K. Agencies, Salem.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((src, i) => {
            const meta = GALLERY_META[i] ?? { label: `Nature Care product ${i + 1}`, large: false };
            return (
              <div
                key={i}
                className={`gallery__item reveal reveal-delay-${(i % 4) + 1}${meta.large ? " gallery__item--large" : ""}`}
              >
                <img
                  src={src}
                  alt={meta.label}
                  className="gallery__photo"
                  loading="lazy"
                />
                <div className="gallery__overlay">
                  <p className="gallery__overlay-text">{meta.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
