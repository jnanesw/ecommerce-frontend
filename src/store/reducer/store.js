import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./ErrorReducer";

const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer
    },
    preloadedState: {},
});

export default store;