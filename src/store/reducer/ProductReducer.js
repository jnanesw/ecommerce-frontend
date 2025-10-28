const initialState = {
    products: null,
    categories: null,
    pagination: {}
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return{
                ...state,
                products: action.payload,
                pagination: {
                    ...state.pagination,
                    pageSize: data.pageSize,
                    pageNumber: data.pageNumber,
                    totalElements: data.totalElements,
                    totalPages: data.totalPages,
                    lastPage: data.lastPage,
                }
            }
    
        default:
            return state;
    }
}