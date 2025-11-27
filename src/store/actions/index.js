import api from "../../api/api"

export const fetchProducts = (queryString="") => async (dispatch) => {
    try {
        dispatch({type: "IS_FETCHING"})
        // console.log("Came here already!")
        const {data} = await api.get(`/public/products?pageSize=8&${queryString}&pageNumber=1`);
        // const response = await api.get(`/public/products`);
        console.log("API Response:", data);

        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageSize: data.pageSize,
            pageNumber: data.pageNumber+1 || 1,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });

        dispatch({type: "IS_SUCCESS"})
    } catch (error) {
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch the details...",
        })
        console.log("Action fetchProducts: " + error)
    }
};

export const fetchCategories = () => async (dispatch) => {
    try {
        dispatch({ type: "CATEGORY_LOADER" });
        // dispatch({type: ""})
        const {data} = await api.get("/public/categories");
        // console.log("Category Response: " + data)

        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageSize: data.pageSize,
            pageNumber: data.pageNumber+1  || 1,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });

        dispatch({ type: "IS_SUCCESS" });

    } catch (error) {
        console.log(error)
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch categories..."
        })
    }
}