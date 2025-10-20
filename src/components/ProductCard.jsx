import { useState } from "react";
import "./ProductCard.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
      <div onClick={handleProductView({product})}>
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
      <button className={`bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
                        text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36 flex justify-center`}
                        
                        disabled={!isAvailable || btnLoader}
                        >
          <ShoppingCartIcon />
          {isAvailable ? "Add to Cart" : "Out Of Stock"}
      </button>
    </div>
  );
}

export default ProductCard;
