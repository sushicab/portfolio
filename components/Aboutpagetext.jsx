const Aboutpagetext = () => {
  return (
    <div className="about-page-text">
      {/* Left Side - Text */}
      <div className="text-column">
        <h2 className="text-1xl font-bold mb-4">Conference Publication:</h2>
        <div className="mb-8">
          <p className="mb-2">
            <a
              href="https://dl.acm.org/doi/abs/10.1145/3490149.3505581"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              [1] Yifan Zhuang, Keitaro Tsuchiya, Takuro Nakao, Jiawen Han,
              Megumi Isoga, Shinya Shimizu, and Kai Kunze. 2022. Emolleia –
              Wearable Kinetic Flower Display for Expressing Emotions. In
              Sixteenth International Conference on Tangible, Embedded, and
              Embodied Interaction (TEI ’22), February 13–16, 2022
            </a>
          </p>
          <br></br>
          <p className="mb-2">
            <a
              href="https://dl.acm.org/doi/abs/10.1145/3393914.3395900"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              [2]Labeling: The Reflective Design of Socialized Gender
              Classification
            </a>
          </p>
        </div>

        <h2 className="text-1xl font-bold mb-4">Exhibition Experience:</h2>
        <div>
          <p>2021 Keio Media Design Forum, Tokyo, JP</p>
          <p>2020 ‘Boys Lovelife’ at PR Picaresque Gallery, Tokyo, JP</p>
          <p>2019 ‘KAWAII of the World’ at PR Picaresque Gallery, Tokyo, JP</p>
          <p>2018 ‘Things About Depression’, Beijing, CN</p>
          <br></br>
        </div>

        <h2 className="text-1xl font-bold mb-4">Language:</h2>
        <p>English, Japanese, Chinese</p>
      </div>

      {/* Right Side - Image */}
      <div className="image-column">
        <div
          style={{
            width: "50vw",
            height: "auto",
          }}
        >
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
          <div style={{ marginBottom: "100px" }}>
            <p>
              Mail: <a href="mailto:hi@yifanzhuang.com">hi@yifanzhuang.com</a>
            </p>
          </div>
          <p style={{ textDecoration: "underline" }}>
            <a href="mailto:hi@yifanzhuang.com"> CV upon request</a>
          </p>
          <div className="about-page-text.text-column">
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "lighter",
                fontSize: "30px",
                marginTop: "50px",
              }}
            >
              Website design & developed by herself
            </p>
            {/* <div className="about-page-text-image">
              <img src="/img/about/meme.png" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpagetext;
