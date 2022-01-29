import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/API/movieApi";
import { API_KEY } from "../../common/API/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movie/fetchAsyncMovies",
  async (movieText) => {
    const response = await movieApi.get(
      `?apikey=${API_KEY}&s=${movieText}&type=movie`
    );
    const data = response.data;
    return data;
  }
); ////thunk for async call from api

export const fetchAsyncMoviesOrShowDeatils = createAsyncThunk(
  "movie/fetchAsyncMoviesOrShowDeatils",
  async (id) => {
    const response = await movieApi.get(
      `?apikey=${API_KEY}&i=${id}&plot='full'`
    );
    const data = response.data;
    return data;
  }
); ////thunk for async call from api

const initialState = {
  movies: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovieOrShow: (state, action) => {
      state.selectedMovieOrShow = {};
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
    [fetchAsyncMoviesOrShowDeatils.pending]: () => {
      //loading state will show

      console.log("Fetching data from API");
    },
    [fetchAsyncMoviesOrShowDeatils.fulfilled]: (state, action) => {
      console.log("Fetched Successfully");
      return { ...state, selectedMovieOrShow: action.payload };
    },
  },
});

export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const getDeatils = (state) => state.movies.selectedMovieOrShow;
export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
