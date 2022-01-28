import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../store/movieSlice/movieSlice";
import { getAllShows } from "../../store/showSlice/showSlice";
import Card from "../Card/Card";
import "./ContentListing.scss";

const ContentListing = (props) => {
  let contentType = props.datatype;
  console.log(contentType);
  let getData;

  if (contentType === "movies") {
    getData = getAllMovies;
  } else if (contentType === "shows") {
    getData = getAllShows;
  }

  const contentResponseArr = useSelector(getData);
  // console.log(stateData);
  let render = "";
  render =
    contentResponseArr.Response === "True" ? (
      contentResponseArr.Search.map((dataElm, index) => {
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
        <h2>{contentType.toUpperCase()}</h2>
      </div>
      <div className="card">{render}</div>
    </div>
  );
};

export default ContentListing;
