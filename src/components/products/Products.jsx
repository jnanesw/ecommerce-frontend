import "./Products.css";

import Filter from "./Filter";
import ProductCard from "../shared/ProductCard";
import useProductFilter from "../../hooks/useProductFilter";
import Paginations from "../shared/Paginations";

import { Rings } from "react-loader-spinner";
import { Alert, AlertTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories, fetchProducts } from "../../store/actions";



function Products() {

  const {isLoading, errorMessage} = useSelector(
    (state) => state.errors
  );


  // console.log("isLoading: " + isLoading + ", errorMessage: " + errorMessage);

  const {products, categories, pagination} = useSelector(
    (state) => state.products
  )

  // console.log("Pagination Details: " + JSON.stringify(pagination));

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCategories())
  }, [dispatch])

  useProductFilter();

  console.log("From Products:", products);

  return (
    <>
      <Filter categories={categories ? categories : []} />
      <div className="product-list">
        {isLoading ? (
          <div className="loader-container">
            <Rings
              visible={true}
              height="120"
              width="120"
              color="#0EA5E9"
              ariaLabel="rings-loading"
            />
          </div>
        ) : errorMessage ? (
          <div className="alert-container">
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {errorMessage}
            </Alert>
          </div>
        ) : (
          Array.isArray(products) && products.length > 0 ? products.map((product, key) => {
            return <ProductCard key={key} product={product} />
          }) : <p>No products found.</p>
        )}
      </div>
      <div className="pagination-container">
        <Paginations
          numberOfPages={pagination?.totalPages} 
          totalProducts={pagination?.totalElements}
        />
      </div>
    </>
  );
}

export default Products;
