import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state) => {

        },
    }
})

export const {add, remove} = CartSlice.actions

export default CartSlice.reducer;