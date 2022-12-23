import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../configs/config";
//creating our product Slice
const initialState = {
  loading: "idle", //idle, pending, success, failed
  products: [],
  // quantity: 0,
  error: null,
};

let module = "product";

export const fetchAllProducts = createAsyncThunk(
  `${module}/fetchAllProducts`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = "success";
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      });
  },
});

export const { addProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
