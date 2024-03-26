import React from "react";

const IntroductionComp = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "800px",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "bottom",
        alignItems: "bottom",
        color: "white", // Set text color to white for visibility
      }}
    >
      <h1 style={{ marginBottom: "550px" }}>HI</h1>
      <h1
        style={{
          fontSize: "10rem",
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "9px",
        }}
      >
        YIFAN ZHUANG
      </h1>
    </div>
  );
};

export default IntroductionComp;
