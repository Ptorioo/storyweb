import React, { useState } from "react";
import Input from "../components/Input";
import PlotContainer from "../components/PlotContainer";
import Loader from "../components/Loader";

const Homepage = () => {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaderClass, setLoaderClass] = useState("");

  const handlePlotGenerated = (newPlots) => {
    setPlots(newPlots);
    setLoading(false);
    document.querySelector(".input-container").classList.add("shrink");
  };

  const handleLoading = () => {
    setLoading(true);
    document.querySelector(".input-container").classList.add("loading");
    setLoaderClass("expand");
  };

  return (
    <div className="app-home">
      <Input onPlotGenerated={handlePlotGenerated} onLoading={handleLoading} />
      {!loading && plots.length > 0 && (
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
      {loading && <Loader className={loaderClass} />}
    </div>
  );
};

export default Homepage;
