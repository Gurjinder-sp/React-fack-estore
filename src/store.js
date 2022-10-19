import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login/loginSlice";
import productSlice from "./features/products/productSlice";
import modalSlice from "./features/modalSlice";
import cartSlice from "./features/cart/cartSlice";


export const store = configureStore({
    reducer: {
        login: loginSlice,
        products: productSlice,
        modal: modalSlice,
        cart: cartSlice
    }
})