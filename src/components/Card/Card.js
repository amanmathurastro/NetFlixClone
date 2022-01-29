import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { Title, Poster, Year, imdbID } = props.data;
  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={Poster} alt={Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
