import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

//Create Store
const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer
	}
});
console.log(store.getState());
export default store;
