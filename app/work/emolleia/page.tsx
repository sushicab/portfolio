export default function About() {
  return (
    <main>
      <div
        className="container"
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          margin: "0 auto",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/626239850?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
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
        Emolleia
      </h2>
      <p
        style={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "40px",
          fontStyle: "italic",
        }}
      >
        &quot;'Emolleia' was inspired by a poetry 'Shy Flower'. 
        <br />
        To the little shy flower;
        <br />
        hiding beneath brush &quot;
        <br />
        petals extended
        <br />
        smiles
        <br />
        pink-white colors
        <br />
        for the butterfly she drew"
      </p>
      <p
        style={{
          margin: "20px",
          textAlign: "justify",
          marginLeft: "200px",
          marginRight: "200px",
        }}
      >
        Three blooming transparent flowers shape accessory can be wearing around
        the shoulder. With a web camera turned on, the onlooker's facial
        expression will be detected and categorized, according to the facial
        expression, the Emolleia will perform five pre-definded correlated
        motion.
        <br />
        <br />
        Each of three flower has been equipped LED light unit inside in order to
        perform color change to assist better express wearer's emotion. 
      </p>
      <div style={{ padding: "200px", textAlign: "center" }}>
        <img
          src="/img/projects/interactive design/emolleia/emolleia3.jpg"
          alt="Description of your image"
        />
      </div>
      <p
        style={{
          margin: "20px",
          textAlign: "justify",
          marginLeft: "200px",
          marginRight: "200px",
          marginBottom: "100px",
        }}
      >
        We sought to explore more possibilities that people can do to express
        their emotion through not only facial or body language, but also
        non-verbal language and wearable devices. We present the concept, design
        and prototype implementation of Emolleia,a kinetic display consisting of
        three flowers (the 3D model, components and software will be
        open-sourced).We conducted a user survey with 50 participants to elicit
        potential use and application cases. In the emotion elicitation study
        with the same participants, we evaluated8 designed animated motions of
        Emolleia regarding their perceived emotional qualities using the
        self-assessment Manikin.Several animated motions show significant
        differences for perceived valence and arousal. The aim of this study is
        to explore more possibilities utilizing wearables to assist on emotion
        expressing, ultimately enhance our conversation efficiency or even
        social life.
      </p>
      <div>
        <div style={{ padding: "50px", display: "flex", marginLeft: "400px" }}>
          <img
            src="/img/projects/interactive design/emolleia/emolleia1.jpg"
            alt="Description of your image"
            style={{
              width: "calc(70%)",
              marginBottom: "10px",
              marginLeft: "130px",
            }}
          />
        </div>
        <div style={{ padding: "50px", display: "flex", marginRight: "400px" }}>
          <img
            src="/img/projects/interactive design/emolleia/emolleia1.jpg"
            alt="Description of your image"
            style={{
              width: "calc(70%)",
              marginBottom: "10px",
              marginLeft: "170px",
            }}
          />
        </div>
      </div>
      <div style={{}}>
        <p
          style={{
            margin: "20px",
            textAlign: "justify",
            marginLeft: "220px",
            marginRight: "220px",
            marginBottom: "100px",
          }}
        >
          - PROTOTYPE <br></br>The device was constructed by three main parts,
          flowers, servo motors case and a steel chain to fix the device on the
          body. The 3d printing flowers are fixed at the stem and consist of
          five petals with a diameter of 6 [cm]. We chose Elastic 50A resin as
          flower’s material since the softness allows the prototype to bend over
          and reform motion freely, the special transparency of this material
          also matched our designed sketch.
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/img/projects/interactive design/emolleia/flower_base.jpg"
            alt="Description of image 1"
            style={{
              width: "35%",
              height: "auto",
            }}
          />
          <img
            src="/img/projects/interactive design/emolleia/emolleia2.jpg"
            alt="Description of image 2"
            style={{
              width: "35%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <p
        style={{
          margin: "20px",
          textAlign: "justify",
          marginLeft: "220px",
          marginRight: "220px",
          marginBottom: "100px",
          marginTop: "80px",
        }}
      >
        - USER STUDY <br></br>To explore potential use cases, self-expression
        possibilities and the general perception of the prototype, we conducted
        a series of online survey. After watching eight animated motions,
        participants rated the arousal and valence for each. Based on the
        mapping to the emotion model, we picked three obviously distinguishable
        animated motions for our next stage user studies.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/img/projects/interactive design/emolleia/userstudy.jpg"
          alt="Description of image 1"
          style={{
            width: "70%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{
          margin: "20px",
          textAlign: "justify",
          marginLeft: "200px",
          marginRight: "200px",
          marginBottom: "100px",
          marginTop: "80px",
        }}
      >
        <h2
          style={{ fontSize: "20px", fontStyle: "italic", marginLeft: "15px" }}
        >
          EMOLLEIA DEMO AT KMD FORUM 2021:
        </h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            src="https://player.vimeo.com/video/663887880?badge=0&amp;autopause=0&amp"
            width="1211px%"
            height="700px"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo video"
          ></iframe>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "50%", padding: "100px", marginLeft: "100px" }}>
          <p style={{ marginBottom: "15px" }}>C R E D I T S</p>
          <p style={{ marginBottom: "15px" }}>
            YIFAN ZHUANG <strong> Researcher & Lead Designer </strong>{" "}
          </p>
          <p style={{ marginBottom: "15px" }}>
            KEITARO TSUCHIYA <strong>Electrical & Mechanical Designer</strong>
          </p>
          <p style={{ marginBottom: "15px" }}>
            TAKURO NAKAO <strong>3D Modeler & Technical Support</strong>
          </p>
          <p style={{ marginBottom: "15px" }}>
            JIAWEN HAN <strong>Data Analysis</strong>
          </p>
        </div>
        <div style={{ width: "50%", padding: "100px", marginRight: "100px" }}>
          <p style={{ marginBottom: "15px" }}>V I D E O C R E D I T S</p>
          <p style={{ marginBottom: "15px" }}>
            YIFAN ZHUANG <strong> Direction & Shooting & Edit</strong>
          </p>
          <p style={{ marginBottom: "15px" }}>
            DALEN WANG <strong>Hair & Makeup</strong>
          </p>
          <p style={{ marginBottom: "15px" }}>
            SIYU MA <strong>Model</strong>
          </p>
          <p style={{ marginBottom: "15px", marginTop: "50px" }}>
            S P E C I A L T H A N K S
          </p>
          <p style={{ marginBottom: "15px" }}>KAI KUNZE</p>
          <p style={{ marginBottom: "15px" }}>GEIST LAB </p>
          <p style={{ marginBottom: "15px" }}>
            Graduate School of Keio Media Design
          </p>
          <p style={{ marginBottom: "15px", marginTop: "50px" }}>
            C O L L A B O R A T I O N:
          </p>
          <p style={{ marginBottom: "15px" }}>
            Emolleia Flowers project is in collaboration with NTT Media
            Intelligence Laboratories.
          </p>
        </div>
      </div>
    </main>
  );
}
