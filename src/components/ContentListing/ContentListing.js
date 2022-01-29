import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../store/movieSlice/movieSlice";
import { getAllShows } from "../../store/showSlice/showSlice";
import Card from "../Card/Card";
import "./ContentListing.scss";
import Slider from "react-slick";

const ContentListing = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    vertical: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      {/* <Slider {...settings}> */}
      {/* {render} */}
      <div className="card">{render}</div>
      {/* </Slider> */}
    </div>
  );
};

export default ContentListing;
