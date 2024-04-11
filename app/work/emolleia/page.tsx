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
        &quot;Emolleia was inspired by a poem titled "Shy Flower". 
        <br />
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
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "800px",
        }}
      >
        Three blooming transparent flowers form an accessory that can be worn
        around the shoulder. With a webcam turned on, the onlooker's facial
        expression will be detected and categorized. Depending on the facial
        expression, the Emolleia will perform five predefined correlated
        motions.
        <br />
        <br />
        Each of the three flowers has been equipped with an LED light unit
        inside to enable color changes, aiding in better expressing the wearer's
        emotions.
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
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "800px",
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
        <div>
          <h2
            style={{
              fontSize: "20px",
              fontStyle: "italic",
              marginLeft: "10px",
            }}
          >
            EMOLLEIA DEMO AT KMD FORUM 2021:
          </h2>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <iframe
              src="https://player.vimeo.com/video/663887880?badge=0&amp;autopause=0&amp"
              width="1200px"
              height="700px"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Vimeo video"
            ></iframe>
          </div>
        </div>

        <h2 className="text-1xl font-bold mb-4">
          More details in related publication:
        </h2>
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
            This project is in collaboration with NTT Media Intelligence
            Laboratory.
          </p>
        </div>
      </div>
    </main>
  );
}
