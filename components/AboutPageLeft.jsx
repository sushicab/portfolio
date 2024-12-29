import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Left Section */}
      <div className="about-left">
        <img
          src="/img/about/about.jpg"
          alt="Yifan Zhuang"
          className="profile-image"
        />
        <div>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/wandanle.z/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @wandanle.z
            </a>
          </p>
          <div className="about-page-mail">
            <p>
              Mail: <a href="mailto:hi@yifanzhuang.com">hi@yifanzhuang.com</a>
            </p>
          </div>
          {/* <p style={{ textDecoration: "underline" }}>
            <a href="mailto:hi@yifanzhuang.com"> CV upon request</a>
          </p> */}
          <p className="about-page-italic">
            Website design & developed by herself
          </p>
          {/* <div className="about-page-text-image">
              <img src="/img/about/meme.png" />
            </div> */}
        </div>
      </div>
      <div className="about-right">
        <h1 className="name-title">YIFAN ZHUANG</h1>
        <p className="introduction-text">
          Yifan Zhuang is a transdisciplinary artist, HCI researcher, and
          interactive designer. With a background in fine art, media design, and
          human-computer interaction, her work explores the intersection of art,
          design, science, and technology to address societal challenges and
          inspire meaningful conversations. Her goal is to create interactive
          experiences that bring human being closer.
        </p>
        <p className="introduction-text">
          Her work explores themes such as{" "}
          <span className="special-font">
            Emotion, Identity, Social Interaction, and Human Connection{" "}
          </span>{" "}
          . Whether creating fine art, wearable devices, or interactiive
          experiences, she aims to translate intangible concepts into tangible
          realities that resonate with diverse audiences. Her approach is
          informed by a deep curiosity about how technology can foster empathy,
          challenge societal norms, and deepen human connection. Her work has
          been presented at international conferences such as{" "}
          <span className="special-font">ACM SIGGRAPH (TEI, DIS) </span> and
          exhibited in various galleries in both Japan and China.
        </p>
        <p className="introduction-text">
          Currently based in Tokyo, Yifan works as an interactive designer and
          design engineer for multiple creative studios. She specializes in{" "}
          <span className="special-font">
            interactive technologies, data visualization, XR experience and
            visual design.{" "}
          </span>
        </p>

        <p className="introduction-text">
          Yifan holds a Master’s degree in{" "}
          <span className="special-font">
            Human-Computer Interaction and Interactive Design
          </span>{" "}
          from the Graduate School of Keio University and a Bachelor’s degree in{" "}
          <span className="special-font">
            Digital Communication and Media/ Multimedia{" "}
          </span>
          from Shanghai University. She continues to explore new possibilities
          at the intersection of creativity and technology, striving to push
          boundaries and inspire thoughtful engagement through her work.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
