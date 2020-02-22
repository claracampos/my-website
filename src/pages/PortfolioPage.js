import React, { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioItem from "../components/PortfolioItem";
import projects from "../projects/projects";

const PortfolioPage = () => {
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center p-3 console">
      <h1 className="portfolio-title">Portfolio</h1>
      <div class="media-query-size">
        <div className="screen mt-2 rounded d-flex flex-column justify-content-center">
          {!start && (
            <div className="px-3">
              <h1 className="intro-title mb-4">Choose your adventure!</h1>
              <p className="text-center text-monospace">
                Press the WHITE button to START.
              </p>
              <p className="text-center text-monospace">
                Use the YELLOW buttons to NAVIGATE.
              </p>
              <p className="text-center text-monospace">
                Press the RED button to EXIT.
              </p>
            </div>
          )}
          {start && <PortfolioItem index={index} />}
        </div>
        <div className="d-flex flex-row justify-content-between mt-3 px-2 button-row">
          <Link to="/" className="btn btn-danger control-button">
            x
          </Link>

          <div className="d-flex flex-row">
            <button
              onClick={() => {
                setStart(true);
              }}
              className="btn btn-light control-button"
            >
              {""}
            </button>
            <button
              onClick={() => {
                setIndex(index > 0 ? index - 1 : projects.length - 1);
              }}
              className="btn btn-warning control-button"
            >
              {"<"}
            </button>
            <button
              onClick={() => {
                setIndex(index < projects.length - 1 ? index + 1 : 0);
              }}
              className="btn btn-warning control-button"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
