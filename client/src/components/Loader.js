import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-positioner">
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
    </div>
  );
};

export default Loader;
