import { useState } from "react";
import "./OrderModal.css";

export default function OrderModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ownerWhatsappNumber = "919944773882"; // Placeholder for owner's WhatsApp number
    
    const message = `*New Order Request*\n\n*Product Details:*\nName: ${product.name}\nSize: ${product.size}\nPackaging: ${product.packaging}\n\n*Customer Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nAddress: ${formData.address}`;
    
    const whatsappUrl = `https://wa.me/${ownerWhatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <h2>Place Order</h2>
        <div className="modal-product-info">
          <img src={product.image} alt={product.name} className="modal-product-img" />
          <div>
            <h3>{product.name}</h3>
            <p>{product.size}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Full Address</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} required rows="2"></textarea>
          </div>
          <button type="submit" className="submit-btn btn-wa">Order via WhatsApp</button>
        </form>
      </div>
    </div>
  );
}
