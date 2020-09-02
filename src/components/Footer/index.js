import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <main className="flex-fill"></main>
      <footer id="sticky-footer">
        <div className="container text-center">
          <small>&copy 2020 Justin Ramirez</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
