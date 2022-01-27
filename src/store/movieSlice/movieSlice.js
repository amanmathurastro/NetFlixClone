import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/API/movieApi";
import { API_KEY } from "../../common/API/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apikey=${API_KEY}&s=${movieText}&type=movie`
    );
    const data = response.data;
    return data;
  }
); ////thunk for async call from api

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      //loading state will show

      console.log("Fetching data from API");
    },

    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("Fetched Successfully");
      return { ...state, movies: action.payload };
    },

    [fetchAsyncMovies.rejected]: () => {
      /// rejected state

      console.log("Request Rejected from API");
    },
  },
});

export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const { addMovies } = movieSlice.actions;
