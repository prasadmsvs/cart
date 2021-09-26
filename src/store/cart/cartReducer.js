import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products:[]
    },
    reducers: {
        add: (state, action) => {
            state.products.push(action.payload);
        },
        del: (state, action) => {
            state.products.splice(action.payload, 1);
        }
    }
});

export const {add, del} = cartSlice.actions;
export default cartSlice.reducer;
