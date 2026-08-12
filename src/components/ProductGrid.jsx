import { useState } from "react";
import { PRODUCTS, FILTER_TABS } from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.tags.includes(active));

  return (
    <section id="products" className="products section-pad" aria-labelledby="products-heading">
      <div className="container">
        {/* Header */}
        <div className="products__head reveal">
          <span className="section-label">Our Range</span>
          <h2 className="section-title" id="products-heading">
            Pure Care, Every Size
          </h2>
          <p className="section-desc" style={{ marginInline: "auto", textAlign: "center" }}>
            From daily liners to overnight protection every Nature Care pad is crafted for comfort,
            safety, and environmental respect.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className="products__filters reveal reveal-delay-1"
          role="tablist"
          aria-label="Filter products by type"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              className={`filter-tab${active === tab.key ? " active" : ""}`}
              role="tab"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div
          className="products__grid"
          role="tabpanel"
          aria-label={`${FILTER_TABS.find((t) => t.key === active)?.label} products`}
        >
          {filtered.length > 0 ? (
            filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))
          ) : (
            <p className="products__empty">No products found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}
