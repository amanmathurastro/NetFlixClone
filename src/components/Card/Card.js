import React from "react";
import "./Card.scss";

const Card = (props) => {
  const { Title, Poster, Year } = props.data;
  return (
    <div className="card-item">
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
    </div>
  );
};

export default Card;
