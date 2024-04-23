import React from "react";

const ProjectInfo = ({
  iframeSrc,
  title,
  subtitle,
  textContent,
  imagePaths,
  creditsText,
  videoCreditsText,
  specialThanksText,
}) => {
  return (
    <main>
      <div style={{ maxWidth: "1440px" }}>
        <iframe
          src={iframeSrc}
          width="1440px"
          height="786px"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo video"
        ></iframe>
      </div>
      <h2
        style={{
          marginTop: "50px",
          fontSize: "50px",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "40px",
          fontStyle: "italic",
        }}
      >
        {subtitle}
      </p>
      <p
        style={{
          margin: "20px",
          textAlign: "justify",
          marginLeft: "200px",
          marginRight: "200px",
          marginBottom: "100px",
        }}
      >
        {textContent}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Image ${index + 1}`}
            style={{
              width: "calc(50% - 100px)",
              marginBottom: "10px",
              marginLeft: index % 2 === 0 ? "95px" : 0,
              marginRight: index % 2 !== 0 ? "95px" : 0,
            }}
          />
        ))}
      </div>
      <div style={{ maxWidth: "1440px", marginTop: "100px" }}>
        <iframe
          src="https://player.vimeo.com/video/638304696?badge=0"
          width="1440px"
          height="786px"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo video"
        ></iframe>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%", padding: "150px", marginLeft: "100px" }}>
          <p style={{ marginBottom: "15px" }}>{creditsText[0]}</p>
          {creditsText.slice(1).map((credit, index) => (
            <p key={index} style={{ marginBottom: "15px" }}>
              {credit}
            </p>
          ))}
        </div>
        <div style={{ width: "50%", padding: "150px", marginRight: "100px" }}>
          <p style={{ marginBottom: "15px" }}>{videoCreditsText[0]}</p>
          {videoCreditsText.slice(1).map((credit, index) => (
            <p key={index} style={{ marginBottom: "15px" }}>
              {credit}
            </p>
          ))}
          <p style={{ marginBottom: "15px", marginTop: "50px" }}>
            {specialThanksText[0]}
          </p>
          {specialThanksText.slice(1).map((thanks, index) => (
            <p key={index} style={{ marginBottom: "15px" }}>
              {thanks}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectInfo;
