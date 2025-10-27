import { useState } from "react";
import "./ProductCard.css";

import ProductButton from "./ProductButton";
import ProductViewModal from "./ProductViewModal";

function ProductCard({ product }) {

  const isAvailable = product.quantity && Number(product.quantity) > 0;
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const [selectedViewProduct, setSelectedViewProduct] = useState("");
  const btnLoader = false;

  const handleProductView = (product) => {
            setSelectedViewProduct(product);
            setOpenProductViewModal(true);
    };

  return (
    <div className="product-card" >
      <div onClick={() => handleProductView({product})}>
        <img
        src={product.image}
        alt={product.productName}
        className="product-image"
      />
      </div>
      <h3 onClick={()=>{}} className="product-title">{product.productName}</h3>
      <p className="product-description">{product.description}</p>
      {
        product.specialPrice ? (
        <div className="product-pricing">
          <span className="original-price">${Number(product.price).toFixed(2)}</span>
          <span className="discounted-price">${Number(product.specialPrice).toFixed(2)}</span>
        </div> ) : (
          <div className="product-pricing">
            <span className="original-price">${Number(product.price).toFixed(2)}</span>
          </div>
        )
      }
      <ProductButton
      isAvailable = {isAvailable}
      btnLoader = {btnLoader}
      />

      <ProductViewModal 
        isOpen = {openProductViewModal}
        setIsOpen = {setOpenProductViewModal}
        product = {product}
        isAvail = {isAvailable}
      />
    </div>
  );
}

export default ProductCard;
