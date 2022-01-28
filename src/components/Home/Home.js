import React, { useEffect } from "react";
import ContentListing from "../ContentListing/ContentListing";
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
      <ContentListing datatype="movies" />
      <ContentListing datatype="shows" />
    </div>
  );
};

export default Home;
