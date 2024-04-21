import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = ({ className }) => {
  return (
    <div className={`loader-container ${className}`}>
      <Bars
        height="60"
        width="80"
        color="rgb(230, 230, 230)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
