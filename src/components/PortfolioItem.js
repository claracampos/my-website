import React, { useState } from "react";
import projects from "../projects/projects";

const PortfolioItem = props => {
  const { title, img, description, tech, url, github } = projects[props.index];
  const [qtyOfImgsLoaded, setQtyOfImgsLoaded] = useState(0);

  if (qtyOfImgsLoaded === projects.length) {
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
      <h1 className="intro-title">Loading web apps...</h1>
      {projects.map((project, index) => (
        <img
          src={project.img}
          alt={`Screenshot of "${project.title}"`}
          onLoad={() => setQtyOfImgsLoaded(index + 1)}
          loading="eager"
          className="d-none"
        />
      ))}
    </div>
  );
};

export default PortfolioItem;
