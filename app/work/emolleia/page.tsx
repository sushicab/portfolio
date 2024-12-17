import React from "react";
import PageInfo from "@/components/PageInfo";
import EmolleiaPageInfo from "@/components/EmolleiaPageInfo";

const Page = () => {
  return (
    <div style={{ paddingTop: "80px" }}>
      <EmolleiaPageInfo
        iframeSrc="https://player.vimeo.com/video/626239850?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="Emolleia"
        subtitle=' 
               Shy Flower
              <br />
              <br />
              To the little shy flower;
              <br />
              hiding beneath brush "
              <br />
              petals extended
              <br />
              smiles
              <br />
              pink-white colors
              <br />
              for the butterfly she drew'
        textContent={`<em>Emolleia</em> is a 3D-printed wearable that dynamically responds to onlookers'  facial expressions through motions and light. This project investigates how wearable technology can enhance emotional expression and social interaction, with an attempt to bridge fashion, design and technology. 
              <br />
              <br />
              Drawing inspiration from nature—where animals shift hues and plants transform to communicate or adapt—this project explores the unspoken language of emotions. <em>Emolleia</em> reflects these transformations, enabling users to express emotions through fluid changes in color, shape, and movement. `}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/emolleia3.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/emolleia1.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/emo11.png",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/emolleia2.jpg",
          },
        ]}
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG <b> Research Leader & Concept & Designer </b>",
          "KEITARO TSUCHIYA <b>Electrical & Mechanical Designer </b>",
          "TAKURO NAKAO <b>3D Modeler & Technical Support</b>",
          "JIAWEN HAN <b>Data Analyst</b>",
        ]}
        videoCreditsText={[
          "V I D E O C R E D I T S",
          "YIFAN ZHUANG <b>Director & Videographer & Editor</b>",
          "DALEN WANG <b>Hair & Makeup Artist</b>",
          "Marissa MA <b>Model</b>",
        ]}
        specialThanksText={[
          "S P E C I A L  T H A N K S",
          "KAI KUNZE",
          "GEIST LAB",
          "Graduate School of Keio Media Design",
          "C O L L A B O R A T I O N:",
          "<em>Emolleia</ em>  project is in collaboration with NTT Media Intelligence Laboratories.",
        ]}
        textAdditional={
          "Three blooming transparent flowers form an accessory that can be worn around the shoulder. With a webcam turned on, the onlooker' s facial expression will be detected and categorized.  Each of the three flowers has been equipped with an LED light unit inside to enable color changes, aiding in better expressing the wearer' s emotions."
        }
      />
    </div>
  );
};
export default Page;

{
  /* <PageInfo
        iframeSrc="https://player.vimeo.com/video/626239850?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title=" Emolleia"
        subtitle=' 
        Emolleia was inspired by a poem titled "Shy Flower"
        <br />
        <br />
        To the little shy flower;
        <br />
        hiding beneath brush "
        <br />
        petals extended
        <br />
        smiles
        <br />
        pink-white colors
        <br />
        for the butterfly she drew' 
        textContent={`        Three blooming transparent flowers form an accessory that can be worn
        around the shoulder. With a webcam turned on, the onlooker' s facial
        expression will be detected and categorized. Depending on the facial
        expression, the Emolleia will perform five predefined correlated
        motions.
        <br />
        <br />
        Each of the three flowers has been equipped with an LED light unit
        inside to enable color changes, aiding in better expressing the wearer' s
        emotions.`}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/emolleia3.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/emolleia1.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/2.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/emolleia/emolleia2.jpg",
          },
        ]}
        creditsText={
          [
            // "C R E D I T S",
            // "YIFAN ZHUANG <b>Researcher & Lead Designer</b>",
            // "KEITARO TSUCHIYA <b>Electrical & Mechanical Designer </b>",
            // "TAKURO NAKAO <b>3D Modeler & Technical Support</b>",
            // "JIAWEN HAN <b>Data Analysis</b>",
          ]
        }
        videoCreditsText={
          [
            // "V I D E O C R E D I T S",
            // "YIFAN ZHUANG <b>Direction & Shooting & Edit</b>",
            // "DALEN WANG <b>Hair & Makeup</b>",
            // "SIYU MA <b>Model</b>",
          ]
        }
        specialThanksText={
          [
            // "S P E C I A L  T H A N K S",
            // "KAI KUNZE",
            // "GEIST LAB",
            // "Graduate School of Keio Media Design",
            // "C O L L A B O R A T I O N:",
            // "' Emolleia'  project is in collaboration with NTT Media Intelligence Laboratories.",
          ]
        }
        additionalVideoSrc={[]}
        textAdditional={
          "We sought to explore more possibilities that people can do to express their emotion through not only facial or body language, but also non-verbal language and wearable devices.  <br />  <br />The aim of this study is to explore more possibilities utilizing wearables to assist on emotion expressing, ultimately enhance our conversation efficiency or even social life."
        }
      />
      <div>
        <p className="page-info-text-content">
          - PROTOTYPE <br></br>
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
      </div>
      <div>
        <h2 className="page-info-text">EMOLLEIA DEMO AT KMD FORUM 2021:</h2>
        <div className="page-info-iframe">
          <iframe
            src="https://player.vimeo.com/video/663887880?badge=0&amp;autopause=0&amp"
            width="1200px"
            height="700px"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo video"
          ></iframe>
        </div>
      </div>
      <div className="page-info-credits-container">
        <div className="page-info-credits">
          <p>C R E D I T S</p>
          <p>
            YIFAN ZHUANG <strong> Researcher & Lead Designer </strong>{" "}
          </p>
          <p>
            KEITARO TSUCHIYA <strong>Electrical & Mechanical Designer</strong>
          </p>
          <p>
            TAKURO NAKAO <strong>3D Modeler & Technical Support</strong>
          </p>
          <p>
            JIAWEN HAN <strong>Data Analysis</strong>
          </p>
        </div>
        <div className="page-info-credits">
          <p>V I D E O C R E D I T S</p>
          <p>
            YIFAN ZHUANG <strong> Direction & Shooting & Edit</strong>
          </p>
          <p>
            DALEN WANG <strong>Hair & Makeup</strong>
          </p>
          <p>
            SIYU MA <strong>Model</strong>
          </p>{" "}
          <br></br>
          <p>S P E C I A L T H A N K S</p>
          <p>KAI KUNZE</p>
          <p>GEIST LAB </p>
          <p>Graduate School of Keio Media Design</p>
          <br></br>
          <p>C O L L A B O R A T I O N:</p>
          <p>
            This project is in collaboration with NTT Media Intelligence
            Laboratory.
          </p> */
}
{
  /* </div> */
}
