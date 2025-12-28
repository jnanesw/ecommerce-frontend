import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../store/actions";

function useProductFilter(){
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        const params = new URLSearchParams(searchParams);

        const pageNumber = searchParams.get("pageNumber") ?
                Number(searchParams.get("pageNumber")) : 1 ;

        // console.log("PN from PFilter: ", pageNumber);
        
        const sortOrder = searchParams.get("sortby") || "asc";
        const categoryParams = searchParams.get("category") || null;
        const keyword = searchParams.get("keyword") || null;

        params.set("sortBy", "price");
        params.set("sortOrder", sortOrder);

        if (categoryParams) {
            params.set("category", categoryParams);
        }

        if (keyword) {
            params.set("keyword", keyword);
        }

        const queryString = params.toString();
        // console.log("Query String", queryString);

        dispatch(fetchProducts(queryString));
    }, [dispatch, searchParams])
}

export default useProductFilter;