import React from "react";
import "./Welcome.css";
import image from "./Images/clip.png";
export default function Welcome(props) {

  return (
    <div className="widget">
      <span className="widget-left">
        <header className="title">
          Welcome to your dashboard
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </span>
      <span className="widget-right">
        <img src={image} className="image"/>
        <span className="welcome-values">
          <p><b className="value-number">45</b> NEW LEADS</p>
          <p><b className="value-number">124</b> QUOTES CREATED</p>
          <p><b className="value-number">10</b> PENDING ORDERS</p>
        </span>
      </span>
    </div>
  );
};