import React, { useState } from "react";

const PortfolioItem = props => {
  const { title, img, description, tech, url, github } = props.project;
  const [imgLoaded, setImgLoaded] = useState(false);

  if (imgLoaded) {
    return (
      <div className="px-3 py-2">
        <img
          src={img}
          alt={`Screenshot of "${title}"`}
          className="portfolio-image rounded mb-3"
        />
        <h3 className="project-title">{title}</h3>
        <p className="text-monospace small-text text-center mb-2">
          {description}
          <br />
          Built on: {tech}
        </p>
        <a
          href={github}
          target="blank"
          className="btn btn-outline-dark text-monospace font-weight-bold py-1 mx-2"
        >
          GitHub
        </a>
        <a
          href={url}
          target="blank"
          className="btn btn-outline-dark text-monospace font-weight-bold py-1 mx-2"
        >
          Open App
        </a>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <img
        src={img}
        alt={`Screenshot of "${title}"`}
        onLoad={() => setImgLoaded(true)}
        loading="eager"
        className="d-none"
      />
      <h1 className="intro-title">Loading web apps...</h1>
    </div>
  );
};

export default PortfolioItem;
