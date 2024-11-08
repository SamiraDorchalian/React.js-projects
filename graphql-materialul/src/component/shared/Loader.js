import React from "react";

import { ProgressBar } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <ProgressBar
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
      />
    </div>
  );
}

export default Loader;
