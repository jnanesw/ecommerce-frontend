import "./Products.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions";

function Products() {
  const isLoading = false;
  const errorMessage = "";

  const products = useSelector(
    (state) => state.products.products
  )

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])

  // console.log("From Products:", products);

  return (
    <div className="product-list">
      {isLoading ? (
        <p>Content is Loading...</p>
      ) : errorMessage.length > 0 ? (
        <p>{errorMessage}</p>
      ) : (
        Array.isArray(products) && products.length > 0 ? products.map((product, key) => {
          return <ProductCard key={key} product={product} />
        }) : <p>No products found.</p>
      )}
    </div>
  );
}

export default Products;
