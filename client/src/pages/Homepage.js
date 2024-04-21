import React, { useState } from "react";
import Input from "../components/Input";
import PlotContainer from "../components/PlotContainer";

const Homepage = () => {
  const [plot, setPlot] = useState("");

  const handlePlotGenerated = (newPlot) => {
    setPlot(newPlot);
    document.querySelector(".input-container").classList.add("shrink");
  };

  return (
    <div>
      <Input onPlotGenerated={handlePlotGenerated} />
      {plot && (
        <div className="plot-wrapper">
          <PlotContainer plot={plot} />
        </div>
      )}
    </div>
  );
};

export default Homepage;
