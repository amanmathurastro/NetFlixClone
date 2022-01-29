import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../store/movieSlice/movieSlice";
import { fetchAsyncShows } from "../../store/showSlice/showSlice";

const Header = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(fetchAsyncMovies(inputText));
    dispatch(fetchAsyncShows(inputText));
    setInputText("");
    
  };
  const inputSearchHandler = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="header">
      <Link to="/" className="link">
        <div className="logo">NetFlix</div>
      </Link>
      <form className="search-bar" onSubmit={submitHandler}>
        <input
          className="search-input"
          type="text"
          placeholder="Search your Movies or Shows"
          onChange={inputSearchHandler}
          value={inputText}
        />
        <button type="submit" className="search-button">
          <i class="fa fa-search"></i>
        </button>
      </form>
      <div className="icon">
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
