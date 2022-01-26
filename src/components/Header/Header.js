import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        <div className="logo">NetFlix</div>
      </Link>
      <div className="icon">
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
