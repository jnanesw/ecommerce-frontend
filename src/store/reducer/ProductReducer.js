const initialState = {
    products: [],
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
                    pageSize: action.pageSize,
                    pageNumber: action.pageNumber,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage,
                }
            }
    
        default:
            return state;
    }
}