import React from "react";
import PageInfo from "@/components/PageInfo";

const About = () => {
  return (
    <div>
      <PageInfo
        iframeSrc="https://player.vimeo.com/video/925335453?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="Digital Biotopia"
        subtitle=""
        textContent={`Overview In major metropolises like Tokyo, concrete buildings often
        dominate, making integrating nature into the daily experience
        challenging. In this project, we embark on a creative journey where
        artificial intelligence takes center stage in creativity to imagine an
        indoor experience that mimics the senses of nature. This is an
        exploration of embedding AI into creative workflows by The Shift..
        <br />
        <br />
        <br />
        1. AI Imagination         <br /> Using the power of artificial intelligence
        (Midjourney), we task the system with imagining a digital garden that
        transcends the boundaries of conventional creativity. AI becomes the
        visionary architect, imagining a space where the organic and the indoor
        experience converge.
        <br />
        <br />
        <br />
        2. 3D Recreation         <br />Translating the AI-generated concepts into an
        ecosystem, we recreated the imagined visual in 3d software (blender).
        Every element, from the flora to the intricate microcosms, is crafted to
        breathe life into this futuristic space.
        <br />
        <br />
        <br />
        3. Microscopic Exploration <br /> Exploring beyond the macroscopic view, we
        dig into the micro level of this intricate ecosystem. This microscopic
        exploration adds layers of complexity and richness to the orginic int
        erior experience.
        <br />
        <br />
        <br />
`}
        // imagePaths={[
        //   "/img/projects/CG/digital biotopia/bio2.png",
        //   "/img/projects/CG/digital biotopia/bio5.png",
        //   "/img/projects/CG/digital biotopia/bio4.png",
        //   "/img/projects/CG/digital biotopia/bio3.png",
        // ]}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/CG/digital biotopia/bio2.png",
          },
          {
            type: "image",
            src: "/img/projects/CG/digital biotopia/bio5.png",
          },
          {
            type: "image",
            src: "/img/projects/CG/digital biotopia/bio4.png",
          },
          {
            type: "image",
            src: "/img/projects/CG/digital biotopia/bio3.png",
          },
        ]}
        textAdditional={
          "4. AI Integration in Creative Workflow <br /> A core objective of this project is to embed AI generation into our creative workflow. We seek to redefine how AI can be an integral collaborator, influencing and enhancing our traditional creative processes. The symbiosis between human ingenuity and artificial intelligence becomes a driving force behind the project' s evolution.  <br /><br /><br />5. Enhancing Imaginative Capabilities<br /> Beyond experimentation, our project aims to explore the transformative potential of AI in augmenting imaginative capabilities. We inspect how AI-driven insights and perspectives can push the boundaries of our creative thinking."
        }
        imageAdditional={[]}
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG <b>Creative Director & 3D Artist<b/>",
          "YIFAN ZHUANG <b>Concept & 3D Artist<b/>",
          "This is a research project for theshift.tokyo",
        ]}
        videoCreditsText={[]}
        specialThanksText={[]}
        additionalVideoSrc="/img/projects/CG/digital biotopia/1211_2.mp4"
      />
    </div>
  );
};

export default About;
