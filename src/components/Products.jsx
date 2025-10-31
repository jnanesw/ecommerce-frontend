import "./Products.css";

import Filter from "./Filter";
import ProductCard from "./ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions";


function Products() {

  const {isLoading, errorMessage} = useSelector(
    (state) => state.errors
  );

  console.log("isLoading: " + isLoading + ", errorMessage: " + errorMessage);

  const {products} = useSelector(
    (state) => state.products
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
      ) : errorMessage ? (
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
