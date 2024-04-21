import React, { useState } from "react";
import Input from "../components/Input";
import PlotContainer from "../components/PlotContainer";

const Homepage = () => {
  const [plots, setPlots] = useState([]);

  const handlePlotGenerated = (newPlots) => {
    setPlots(newPlots);
    document.querySelector(".input-container").classList.add("shrink");
  };

  return (
    <div>
      <Input onPlotGenerated={handlePlotGenerated} />
      {plots.length > 0 && (
        <div className="plot-wrapper">
          {plots.map((plot, index) => (
            <PlotContainer
              key={index}
              paragraph={plot.paragraph}
              keywords={plot.keywords}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
