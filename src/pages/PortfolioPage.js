import React, { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioItem from "../components/PortfolioItem";
import chatImg from "../media/proj-chat.jpg";
import hamletImg from "../media/proj-hamlet.jpg";
import travelImg from "../media/proj-travel.jpg";

const PortfolioPage = () => {
  const projects = [
    {
      title: "You've Got Mail!",
      description: "A chat app based on the movie of the same name.",
      tech: "Node.js and Socket.io.",
      url: "http://chat-youvegotmail.herokuapp.com/",
      github: "https://github.com/claracampos/youve-got-mail",
      img: chatImg
    },
    {
      title: "Travel Minutes",
      description:
        "Sign in with your Google account and document your trips in a minimalist journal.",
      tech: "React and Firebase.",
      url: "https://travelminutes.netlify.com/",
      github: "https://github.com/claracampos/travel-minutes",
      img: travelImg
    },
    {
      title: "Hamlet Helper",
      description:
        "Read Shakespeare's Hamlet with a click-triggered dictionary.",
      tech: "React and the Merriam-Webster API.",
      url: "https://hamlethelper.netlify.com/",
      github: "https://github.com/claracampos/hamlet-helper",
      img: hamletImg
    }
  ];

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
          {start && <PortfolioItem project={projects[index]} />}
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
