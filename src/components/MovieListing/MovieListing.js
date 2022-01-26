import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../store/movieSlice/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  let render = "";
  render =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div>
        <h1>no movies</h1>
      </div>
    );

  return (
    <div className="movielist-wrapper">
      <div className="heading">
        <h2>MOVIES</h2>
      </div>
      <div className="movie-card">{render}</div>
    </div>
  );
};

export default MovieListing;
