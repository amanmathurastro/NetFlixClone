import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../../src/store/movieSlice/movieSlice";

const store = configureStore({
  reducer: { movies: moviesReducer },
});

export default store;
