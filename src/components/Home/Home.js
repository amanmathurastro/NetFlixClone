import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/API/movieApi";
import { API_KEY } from "../../common/API/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../store/movieSlice/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  const movieText = "Harry";

  const fetchMovies = async () => {
    try {
      const response = await movieApi.get(
        `?apikey=${API_KEY}&s=${movieText}&type=movie`
      );
      const data = response.data;
      dispatch(addMovies(data));
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="home">
      <MovieListing />
    </div>
  );
};

export default Home;
