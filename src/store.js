import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";

//Create Store
const store = configureStore({
	reducer: {
		user: userReducer
	}
});
console.log(store.getState());
export default store;
