import React from "react";

const PlotContainer = ({ plot }) => {
  return (
    <div className="plot-container">
      <h2>Generated Plot</h2>
      <br />
      <p>{plot}</p>
    </div>
  );
};

export default PlotContainer;
