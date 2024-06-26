import React from "react";
import parse from "html-react-parser";

const EmolleiaPageInfo = ({
  iframeSrc,
  title,
  subtitle,
  textContent,
  imagePaths,
  textAdditional,
  creditsText,
  videoCreditsText,
  specialThanksText,
}) => {
  return (
    <main>
      <div
        style={{
          maxWidth: "1440px",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <iframe
          className="page-info-iframe"
          src={iframeSrc}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo video"
        ></iframe>
      </div>
      <h2 className="page-info-title">{parse(title)}</h2>
      <p className="page-info-subtitle">{parse(subtitle)}</p>
      <p className="page-info-text-content">{parse(textContent)}</p>
      <div className="page-info-image-grid">
        {imagePaths.map((image, index) =>
          image.type === "image" ? (
            <img
              className="page-info-image"
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
            />
          ) : (
            <video className="page-info-image" key={index} controls autoPlay>
              <source src={image.src} type="video/mp4" />
            </video>
          )
        )}
      </div>
      <p className="page-info-text-additional">{parse(textAdditional)}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <img
          src="/img/projects/interactive design/emolleia/f2motion.png"
          alt="Description of image 1"
          style={{
            width: "80%",
            height: "auto",
            marginTop: "40px",
          }}
        />
      </div>

      <div>
        <p className="page-info-text-content">
          <br></br>
          <br></br>- PROTOTYPE <br></br>
          <br></br>The device was constructed by three main parts, flowers,
          servo motors case and a steel chain to fix the device on the body. The
          3d printing flowers are fixed at the stem and consist of five petals
          with a diameter of 6 [cm]. We chose Elastic 50A resin as flower’s
          material since the softness allows the prototype to bend over and
          reform motion freely, the special transparency of this material also
          matched our designed sketch.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "60px",
            marginTop: "60px",
          }}
        >
          <img
            src="/img/projects/interactive design/emolleia/flower_base.jpg"
            alt="Description of image 1"
            style={{
              width: "40%",
              height: "auto",
            }}
          />
          <img
            src="/img/projects/interactive design/emolleia/sketch.jpg"
            alt="Description of image 2"
            style={{
              width: "40%",
              height: "auto",
            }}
          />
        </div>

        <p className="page-info-text-content">
          - USER STUDY <br></br>
          <br></br>To explore potential use cases, self-expression possibilities
          and the general perception of the prototype, We conducted a user
          survey with 50 participants to elicit potential use and application
          cases. We evaluated 8 designed animated motions of Emolleia regarding
          their perceived emotional qualities using the self-assessment Manikin.
          Several animated motions show significant differences for perceived
          valence and arousal. Based on the mapping to the emotion model, we
          picked three obviously distinguishable animated motions for our next
          stage user studies.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <img
            src="/img/projects/interactive design/emolleia/userstudy.jpg"
            alt="Description of image 1"
            style={{
              width: "80%",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="/img/projects/interactive design/emolleia/userstudy2.jpg"
            alt="Description of image 1"
            style={{
              width: "80%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div>
        <h2
          style={{
            marginTop: "10vh",
            marginLeft: "8vw",
            fontSize: "16px",
            fontStyle: "italic",
          }}
        >
          EMOLLEIA DEMO AT KMD FORUM 2021:
        </h2>
        <div className="page-info-iframe">
          <iframe
            src="https://player.vimeo.com/video/663887880?badge=0&amp;autopause=0&amp"
            width="1200px"
            height="auto"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo video"
          ></iframe>
        </div>
      </div>

      <div className="page-info-credits-container">
        <div className="page-info-credits">
          <p>
            {typeof creditsText === "string"
              ? parse(creditsText[0])
              : creditsText[0]}
          </p>
          {creditsText.slice(1).map((credit, index) => (
            <p key={index}>{parse(credit)}</p>
          ))}
        </div>
        <div>
          <div className="page-info-credits">
            <p>{videoCreditsText[0]}</p>
            {videoCreditsText.slice(1).map((credit, index) => (
              <p key={index}>{parse(credit)}</p>
            ))}
          </div>
          <div className="page-info-credits">
            <p>
              {typeof specialThanksText[0] === "string"
                ? parse(specialThanksText[0])
                : specialThanksText[0]}
            </p>
            {specialThanksText.slice(1).map((thanks, index) => (
              <p key={index} style={{ marginBottom: "15px" }}>
                {parse(thanks)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmolleiaPageInfo;
