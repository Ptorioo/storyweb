import React, { useState } from "react";
import Input from "../components/Input";

const Homepage = () => {
  const [plot, setPlot] = useState("");

  const handlePlotGenerated = (newPlot) => {
    setPlot(newPlot);
  };

  return (
    <div>
      <Input onPlotGenerated={handlePlotGenerated} />
      {plot && <div>{plot}</div>}
    </div>
  );
};

export default Homepage;
