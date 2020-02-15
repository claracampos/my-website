import React from "react";
import { Link } from "react-router-dom";

const NavButton = props => {
  const { label, url } = props;

  return (
    <Link to={url} className="btn btn-dark nav-button">
      {label}
    </Link>
  );
};

export default NavButton;
