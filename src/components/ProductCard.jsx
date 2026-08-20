import "./ProductCard.css";

export default function ProductCard({ product, index = 0 }) {
  const delay = (index % 4) + 1;

  return (
    <article
      className={`product-card reveal reveal-delay-${delay}`}
      aria-label={`${product.name} ${product.size}`}
    >
      {/* Product Image */}
      <div className="product-card__img" aria-hidden="true">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product-card__photo"
          loading="lazy"
        />
      </div>

      {/* Badges */}
      <span className="product-card__badge">{product.badge}</span>
      <span className="product-card__grade">{product.grade}</span>

      {/* Body */}
      <div className="product-card__body">
        <p className="product-card__size">{product.size}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        {/* Spec chips */}
        <ul className="product-card__chips" aria-label="Product specifications">
          {product.chips.map((chip) => (
            <li key={chip} className="product-card__chip">{chip}</li>
          ))}
        </ul>

        {/* Pricing & Packaging */}
        <div className="product-card__pricing">
          <span className="price-label">MRP:</span>
          <span className="price-value"><span className="rupee">₹</span>{product.mrp}/-</span>
          
          <span className="price-label">Wholesale:</span>
          <span className="price-value"><span className="rupee">₹</span>{product.wholesale}/-</span>
          
          <span className="price-label">Packaging:</span>
          <span className="price-value">{product.packaging}</span>
        </div>
      </div>
    </article>
  );
}
