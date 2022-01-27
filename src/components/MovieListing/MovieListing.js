import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../store/movieSlice/movieSlice";
import { getAllShows } from "../../store/showSlice/showSlice";
import Card from "../Card/Card";
import "./MovieListing.scss";

const MovieListing = (props) => {
  let datatype = props.datatype;
  console.log(datatype);
  let getData;

  if (datatype === "movies") {
    getData = getAllMovies;
  } else if (datatype === "shows") {
    getData = getAllShows;
  }

  const stateData = useSelector(getData);
  // console.log(stateData);
  let render = "";
  render =
    stateData.Response === "True" ? (
      stateData.Search.map((dataElm, index) => {
        return <Card key={index} data={dataElm} />;
      })
    ) : (
      <div>
        <h1>no record found</h1>
      </div>
    );

  return (
    <div className="wrapper">
      <div className="heading">
        <h2>{datatype.toUpperCase()}</h2>
      </div>
      <div className="card">{render}</div>
    </div>
  );
};

export default MovieListing;
