import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">NetFlix</div>
      <div className="icon">
        <CopyrightIcon />
        <span className="footer-text">The Aman Inc. Pvt. Ltd. Product</span>
      </div>
    </div>
  );
};

export default Footer;
