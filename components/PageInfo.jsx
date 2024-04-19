import React from "react";
import styles from "./PageInfo.module.css";

const PageInfo = ({ iframeSrc, textContent, imagePaths, creditsText }) => {
  return (
    <main className="about-container">
      <div className="iframe-container">
        <iframe
          src={iframeSrc}
          width="100%"
          height="786px"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo video"
        ></iframe>
      </div>

      <p className="about-text">{textContent}</p>
      <div className="image-grid">
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            alt={`Image ${index + 1}`}
            className="image-item"
          />
        ))}
      </div>
      <div className="iframe-container">
        <iframe
          src={iframeSrc}
          width="100%"
          height="786px"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo video"
        ></iframe>
      </div>
      <div className="credits">
        <div className="credits-text">
          {creditsText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PageInfo;
