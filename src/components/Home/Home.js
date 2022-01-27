import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../store/movieSlice/movieSlice";
import { fetchAsyncShows } from "../../store/showSlice/showSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className="home">
      <MovieListing datatype="movies" />
      <MovieListing datatype="shows" />
    </div>
  );
};

export default Home;
