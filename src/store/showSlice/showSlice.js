import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/API/movieApi";
import { API_KEY } from "../../common/API/movieApiKey";

export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apikey=${API_KEY}&s=${seriesText}&type=series`
    );
    const data = response.data;
    return data;
  }
);

const initialState = {
  shows: {},
};

const showSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncShows.pending]: () => {
      console.log("Fetching from API");
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      console.log("Fetched succesfully");
      return { ...state, shows: action.payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("Rejected Something went wrong");
    },
  },
});

export default showSlice.reducer;
export const getAllShows = (state) => state.shows.shows;
export const showsActions = showSlice.actions;
