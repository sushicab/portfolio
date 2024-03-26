const Aboutpageinfo = () => {
  return (
    <div style={{ display: "flex", fontSize: "14px" }}>
      {/* Left Side - Image */}
      <div style={{ width: "50vw", marginRight: "10px" }}>
        <img src="/img/about/IMG_1582.JPG" style={{ maxWidth: "80%" }} />
      </div>

      {/* Right Side - Text */}
      <div
        className="items-right"
        style={{
          width: "50vw",
          height: "auto",
          overflow: "hidden",
          paddingBottom: "80px",
        }}
      >
        {/* Add fixed dimensions and overflow properties */}
        <h2 className="text-1xl font-bold mb-1">Education Background:</h2>
        <div className="mb-8" style={{ fontSize: "14px" }}>
          {" "}
          {/* Adjust font size here */}
          <p className="mb-2">
            <span className="font-regular mr-10">2019 - 2021</span> MA at
            Graduate School of Keio University, major HCI (Human-Computer
            Interaction)
          </p>
          <p className="mb-2">
            <span className="font-regular mr-10">2014 - 2018</span> BA at
            Shanghai University, major Digital Communication and
            Media/Multimedia
          </p>
        </div>

        <h2 className="text-1xl font-bold mb-2">Work Experience:</h2>
        <div style={{ fontSize: "14px" }}>
          {" "}
          {/* Adjust font size here */}
          <p className="mb-2">
            <span className="font-regular mr-10">2022 - Present</span>{" "}
            Interaction Designer, aircord.inc, Tokyo, JP
          </p>
          <p className="mb-2">
            <span className="font-regular mr-10">2022 - Present</span> 3D
            Artist/Researcher, The Shift, Tokyo, JP
          </p>
          <p className="mb-2">
            <span className="font-regular mr-10">2021 - 2022</span> Research
            Assistant, Graduate School of Keio University, Kanagawa, JP
          </p>
          <p className="mb-2">
            <span className="font-regular mr-10">2018 - 2019</span> Account
            Executive, GTB (WPP), Shanghai, CN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutpageinfo;
