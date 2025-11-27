import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { Rings } from "react-loader-spinner";
import { FaExclamationTriangle } from "react-icons/fa";

import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";

function Home(){
    const dispatch = useDispatch();
    const {products} = useSelector(
        (state) => state.products
    );
    const {isLoading, errorMessage} = useSelector((state) => state.errors);

    // console.log("Data from Home: ", products)

    useEffect(()=>{
        // console.log("This has been called in Home.jsx")
        dispatch(fetchProducts(""));
        // console.log("This has been called in Home.jsx")
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4">
            <div className="py-6">
                <HeroBanner />
            </div>
            
            <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-4xl font-bold"> Products</h1>
                    <span className="text-slate-700">
                        Discover our handpicked selection of top-rated items just for you!
                    </span>
                </div>

                {isLoading ? (
                    <div className="loader-container2">
                        <Rings
                        visible={true}
                        height="120"
                        width="120"
                        color="#0EA5E9"
                        // ariaLabel="rings-loading"
                        />
                    </div>
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px]">
                        <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                        <span className="text-slate-800 text-lg font-medium">
                            {errorMessage}
                        </span>
                    </div>
                ) : (
            <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                      {Array.isArray(products) && products.length > 0
                        ? products.slice(0, 8).map((item, i) =>
                            item ? <ProductCard key={item.id || i} product={item} /> : null
                            )
                        : <p>No products found.</p>
                     }
                    </div>
                    )}
            </div>
        </div>
    )
}

export default Home;