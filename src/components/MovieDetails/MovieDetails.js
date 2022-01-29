import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMoviesOrShowDeatils } from "../../store/movieSlice/movieSlice";
import { getDeatils } from "../../store/movieSlice/movieSlice";
import { removeSelectedMovieOrShow } from "../../store/movieSlice/movieSlice";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const { imdbId } = useParams();
  console.log(imdbId);
  const dispatch = useDispatch();
  const data = useSelector(getDeatils);

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowDeatils(imdbId));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [imdbId, dispatch]);

  // console.log(details);
  return (
    <div className="movies-section">
      <div className="movie-leftsection">
        <img src={data.Poster} alt={data.Title} />
      </div>
      <div className="movie-rightsection">
        <h2 className="title">{data.Title}</h2>
        <div className="movie-rating">
          <span className="rating">
            <i class="fa fa-star "></i>Rating : {data.imdbRating}
          </span>
          <span className="voting">
            <i class="fa fa-thumbs-up"></i>Votes : {data.imdbVotes}
          </span>
          <span className="year">
            <i class="fa fa-calendar"></i>Released : {data.Released}
          </span>
        </div>
        <div className="movie-plot">
          <div>
            Plot: <span className="plot">{data.Plot}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
