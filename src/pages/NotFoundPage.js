import React from "react";
import NavButton from "../components/NavButton";

const NotFoundPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-100vh p-3">
      <h1 className="text-terminal">GAME OVER</h1>
      <p className="text-terminal mb-5">404 - Page not found.</p>
      <NavButton label="> Homepage" url="/" />
    </div>
  );
};

export default NotFoundPage;
