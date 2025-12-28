const initialState = {
    products: [],
    categories: null,
    pagination: {}
}

export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            // console.log("PN From FP: " + action.pageNumber + " And TE from FP: " + action.totalElements)
            return{
                ...state,
                products: action.payload,
                pagination: {
                    ...state.pagination,
                    pageSize: action.pageSize,
                    pageNumber: action.pageNumber,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages || data.meta?.totalPages,
                    lastPage: action.lastPage,
                }
            }
        
        case "FETCH_CATEGORIES":
            // console.log("PN From FC: " + action.pageNumber + " And TE from FC: " + action.totalElements)
            return {
                ...state,
                categories: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                },
            }
    
        default:
            return state;
    }
}