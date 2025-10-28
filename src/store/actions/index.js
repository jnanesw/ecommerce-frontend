import api from "../../api/api"


export const fetchProducts = () => async (dispatch) => {
    try {
        const {data} = await api.get(`/public/products`);
        // console.log("API Response:", data);

            dispatch({
                type: "FETCH_PRODUCTS",
                payload: data.content,
                pageSize: data.pageSize,
                pageNumber: data.pageNumber,
                totalElements: data.totalElements,
                totalPages: data.totalPages,
                lastPage: data.lastPage,
            });
        
    } catch (error) {
        console.log("Action fetchProducts: " + error)
    }
};