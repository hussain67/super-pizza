import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cart: [
		// {
		// 	pizzaId: 42,
		// 	name: "Veg",
		// 	quantity: 4,
		// 	unitPrice: 8,
		// 	totalPrice: 32
		// }
	]
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			//Payload = newItem
			state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			//Payload = Id
			state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
		},
		// Payload Id
		increaseQuantity(state, action) {
			const item = state.cart.find(item => item.pizzaId === action.payload);
			item.quantity++;
			item.totalPrice = item.quantity * item.unitPrice;
		},
		decreaseQuantity(state, action) {
			const item = state.cart.find(item => item.pizzaId === action.payload);
			item.quantity--;
			if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
			item.totalPrice = item.quantity * item.unitPrice;
		},
		clearCart(state) {
			state.cart = [];
		}
	}
});

export const getCart = state => state.cart.cart;

export function getCurrentQuantityById(id) {
	return function (state) {
		const pizza = state.cart.cart.find(item => item.pizzaId === id);
		return pizza ? pizza.quantity : 0;
	};
}

export const getTotalCartQuantity = state =>
	state.cart.cart.reduce((sum, item) => {
		return (sum += item.quantity);
	}, 0);
export const getTotalCartPrice = state =>
	state.cart.cart.reduce((sum, item) => {
		return (sum += item.totalPrice);
	}, 0);

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
