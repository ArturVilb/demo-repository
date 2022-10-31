import React from "react";
import './style.css'

const Hero = () => {
  return (
    <div>
      <div>
        <div className="container-fluid hero">
          <div className="logo">
            <img src="/Assets/logo.png" alt="logo" />
          </div>
          <div className="text">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>News</p>
            <p>Pages</p>
            <p>
              <a
                href="#"
                id="show-login">
                Contact
              </a>
            </p>
          </div>
          <div className="search">
            <img src="/Assets/search.png" alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
