import React from "react";
import Loader from "./Loader";
import PlotContainer from "./PlotContainer";

const MidSection = ({ plots, loading }) => {
  return (
    <section className="mid-section">
      {loading && <Loader />}
      {!loading && plots.length > 0 && (
        <div className="plot-wrapper">
          {plots.map((plot, index) => (
            <PlotContainer key={index} paragraph={plot.paragraph} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MidSection;
