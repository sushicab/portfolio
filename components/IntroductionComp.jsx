import React from "react";

const IntroductionComp = () => {
  return (
    <div
      style={{
        width: "auto%",
        height: "auto",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "bottom",
        alignItems: "bottom",
        color: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%", marginLeft: "50px", marginTop: "50px" }}>
          <h1 style={{ marginBottom: "350px" }}>
            {" "}
            <a
              href="zhuangyifan01@gmail.com"
              style={{ textDecoration: "underline" }}
            >
              LET‘S WORK TOGETHER.
            </a>
          </h1>
        </div>
        <div
          style={{
            width: "50%",
            marginLeft: "100px",
            marginTop: "50px",
            marginRight: "50px",
          }}
        >
          <h1 style={{ marginBottom: "200px" }}>
            BORN IN 1996, JIANGSU, CHINA. GRADUATED FROM SHANGHAI UNIVERSITY AND
            COMPLETED HER MASTER’S DEGREE IN HUMAN-COMPUTER
            INTERACTION/INTERACTION DESIGN AT KEIO UNIVERSITY, TOKYO, JAPAN.
            MOTIVATED BY A FERVENT PASSION AND INSATIABLE CURIOSITY FOR
            INTERDISCIPLINARY EXPLORATION,HER ENDEAVORS SPAN A MULTITUDE OF
            DISCIPLINES, INCLUDING RESEARCH, CONCEPT DEVELOPMENT, MEDIA ART,
            PHOTOGRAPHY, FILM, 3D/CG, FINE ARTS, AND INTERACTION DESIGN,
            EXTENDING TO ART AND CREATIVE DIRECTION.
            <br />
            <br />
            <br />
            <br />
            <a href="https://www.instagram.com/wandanle.z/">
              instagram: @wandanle.z
            </a>
            <br />
            <a href="https://vimeo.com/user146633321">vimeo: @wandanle.z</a>
          </h1>
        </div>
      </div>
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
