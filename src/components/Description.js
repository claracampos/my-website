import React from "react";

const Description = props => {
  return (
    <div className="mt-5 description pb-3">
      <h3 class="description-heading">{props.heading}</h3>
      <p class="bg-white p-2 m-0">{props.children}</p>
    </div>
  );
};

export default Description;
