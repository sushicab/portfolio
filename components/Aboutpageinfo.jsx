const Aboutpageinfo = () => {
  return (
    <div className="about-page-info">
      <div className="items-left">
        <img
          alt={"yifan"}
          src="/img/about/about.jpg"
          fill
          style={{ maxWidth: "70%&quot;}}
        />
      </div>

      <div className="items-right">
        {/* Add fixed dimensions and overflow properties */}
        <h2 className="text-1xl font-bold mb-1">Education Background:</h2>
        <div className="mb-8">
          {/* Adjust font size here */}
          <p className="mb-2">
            <span style={{ marginRight: "50px&quot;}}>2019 - 2021</span> MA at
            Graduate School of Keio University, major HCI (Human-Computer
            Interaction) & Interactive Design
          </p>
          <p className="mb-2">
            <span style={{ marginRight: "50px&quot;}}>2014 - 2018</span> BA at
            Shanghai University, major Digital Communication and
            Media/Multimedia
          </p>
        </div>

        <h2 className="text-1xl font-bold mb-2">Work Experience:</h2>
        <div>
          {&quot;"}
          {/* Adjust font size here */}
          <p className="mb-2">
            <span style={{ marginRight: "30px&quot;}}>2022 - Present</span>{&quot;"}
            Interactive Designer, aircord.inc, Tokyo, JP
          </p>
          <p className="mb-2">
            <span style={{ marginRight: "30px&quot;}}>2022 - Present</span> 3D
            Artist/Researcher, The Shift, Tokyo, JP
          </p>
          <p className="mb-2">
            <span style={{ marginRight: "30px&quot;}}>2021 - 2022</span> Research
            Assistant, Graduate School of Keio University, Kanagawa, JP
          </p>
          <p className="mb-2">
            <span style={{ marginRight: "30px&quot;}}>2020 - 2021</span> Account
            Executive, Helixes.inc , Tokyo, JP
          </p>
          <p className="mb-2">
            <span style={{ marginRight: "30px&quot;}}>2018 - 2019</span> Account
            Executive, GTB (WPP), Shanghai, CN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutpageinfo;
