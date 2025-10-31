import api from "../../api/api"

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch({type: "IS_FETCHING"})

        const {data} = await api.get(`/public/products`);
        // const response = await api.get(`/public/products`);
        // console.log("API Response:", response);

        dispatch({
            type: "FETCH_PRODUCTS",
            payload: data.content,
            pageSize: data.pageSize,
            pageNumber: data.pageNumber,
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

export const fetchCatefories = () => async (dispatch) => {
    try {
        dispatch({ type: "CATEGORY_LOADER" });
        // dispatch({type: ""})
        const {data} = await api.get("/public/categories");
        console.log("Category Response: " + data)

        dispatch({
            type: "FETCH_CATEGORIES",
            payload: data.content,
            pageSize: data.pageSize,
            pageNumber: data.pageNumber,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage,
        });

        dispatch({ type: "IS_SUCCESS" });

    } catch (error) {
        console.log(error)
        dispatch({
            type: "IS_ERROR",
            payload: error?.response?.data?.message || 
        })
    }
}