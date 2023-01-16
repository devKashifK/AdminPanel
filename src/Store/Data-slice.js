import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "Data",
  initialState: {
    data: {},
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    addProduct: (state, action) => {
      state.data.productsPage.products = [
        ...state.data.productsPage.products,
        action.payload,
      ];
    },
  },
});

export const dataAction = DataSlice.actions;
export default DataSlice;
