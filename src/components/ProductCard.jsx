import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.productName}
        className="product-image"
      />
      <h3 className="product-title">{product.productName}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-pricing">
        <span className="original-price">${product.price}</span>
        <span className="discounted-price">${product.specialPrice}</span>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
