import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartReducer";
import designsReducer from "./designs/designsReducer";
export default configureStore({
    reducer:{
        cart: cartReducer, //Redux reducer for cart
        designs: designsReducer //Redux reducer for designs
    }
})