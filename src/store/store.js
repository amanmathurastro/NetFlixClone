import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../../src/store/movieSlice/movieSlice";
import showsReducers from "../../src/store/showSlice/showSlice";

const store = configureStore({
  reducer: { movies: moviesReducer, shows: showsReducers },
});

export default store;
