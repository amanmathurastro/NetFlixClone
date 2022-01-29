import React, { useEffect } from "react";
import ContentListing from "../ContentListing/ContentListing";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies } from "../../store/movieSlice/movieSlice";
import { fetchAsyncShows } from "../../store/showSlice/showSlice";
import Loader from "../Loader/Loader";

const Home = () => {
  const isLoading = useSelector((state) => state.movies.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies("harry"));
    dispatch(fetchAsyncShows("friends"));
  }, [dispatch]);

  return (
    <div className="home">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ContentListing datatype="movies" />
          <ContentListing datatype="shows" />
        </>
      )}
    </div>
  );
};

export default Home;
