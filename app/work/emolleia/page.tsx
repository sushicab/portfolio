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
          "YIFAN ZHUANG <b> Research Lead & Concept & Designer </b>",
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
