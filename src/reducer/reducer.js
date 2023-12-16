import { createSlice } from "@reduxjs/toolkit";





const listSlice = createSlice({
    name:"list",
    initialState:0,
    reducers:{
        increment: state => state + 1,
        decrement: state => state - 1
        
    }
})

export const listAction = listSlice.actions;
export const listReducer = listSlice.reducer;
export const listSelector = (state) => state.listReducer  