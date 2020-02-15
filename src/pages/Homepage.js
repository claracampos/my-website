import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../media/logo.jpg";
import grid from "../media/grid.jpg";

const Homepage = props => {
  const { start, setStart } = props;

  const [logoImgLoaded, setLogoImgLoaded] = useState(false);
  const [gridImgLoaded, setGridImgLoaded] = useState(false);

  if (logoImgLoaded && gridImgLoaded) {
    return (
      <div className="min-100vh d-flex flex-column justify-content-between align-items-center text-terminal">
        <img
          src={logo}
          alt="Clara Campos, Software Developer"
          className="logo mt-4"
        />
        <div>
          {!start && (
            <button
              onClick={() => {
                setStart(true);
              }}
              className="btn btn-outline-dark start-button px-4 py-3"
            >
              START
            </button>
          )}
          {start && (
            <div className="d-flex flex-column">
              <Link to="/about" className="text-terminal">
                > About
              </Link>
              <Link to="/portfolio" className="text-terminal">
                > Portfolio
              </Link>
              <a
                href="https://claralearnstocode.wordpress.com"
                target="blank"
                className="text-terminal"
              >
                > Blog
              </a>
            </div>
          )}
        </div>
        <img
          src={grid}
          alt="grid"
          className="vh-25 w-100"
          onLoad={() => setGridImgLoaded(true)}
        />
      </div>
    );
  }

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
      <p className="text-terminal">Loading...</p>
      <div className="d-none">
        <img
          src={logo}
          alt="Clara Campos, Software Developer"
          onLoad={() => setLogoImgLoaded(true)}
          loading="eager"
        />
        <img
          src={grid}
          alt="Blue light grid"
          onLoad={() => setGridImgLoaded(true)}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Homepage;
