import "./Products.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/actions";

function Products() {
  const isLoading = false;
  const errorMessage = "";

  const products = useSelector(
    (state) => state.products
  )

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="product-list">
      {isLoading ? (
        <p>Content is Loading...</p>
      ) : errorMessage.length > 0 ? (
        <p>{errorMessage}</p>
      ) : (
        products && products.map((product, key) => {
          return <ProductCard key={key} product={product} />
        })
      )}
    </div>
  );
}

export default Products;
