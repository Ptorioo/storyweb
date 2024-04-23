import React, { useState } from "react";
import Input from "../components/Input";
import MidSection from "../components/MidSection";

const Homepage = () => {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePlotGenerated = (newPlots) => {
    setPlots(newPlots);
    setLoading(false);
    document.querySelector(".input-container").classList.add("shrink");
    document.querySelector(".mid-section").classList.add("expand");
  };

  const handleLoading = () => {
    setLoading(true);
  };

  return (
    <div className="app-home">
      <Input onPlotGenerated={handlePlotGenerated} onLoading={handleLoading} />
      <MidSection plots={plots} loading={loading} />
    </div>
  );
};

export default Homepage;
