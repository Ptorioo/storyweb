import React from "react";

const PlotContainer = ({ paragraph, keywords }) => {
  return (
    <div className="plot-container">
      <p>{paragraph}</p>
      <br />
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlotContainer;
