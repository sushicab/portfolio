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
          "4. AI Integration in Creative Workflow <br /> A core objective of this project is to embed AI generation into our creative workflow. We seek to redefine how AI can be an integral collaborator, influencing and enhancing our traditional creative processes. The symbiosis between human ingenuity and artificial intelligence becomes a driving force behind the project's evolution.  <br /><br /><br />5. Enhancing Imaginative Capabilities<br /> Beyond experimentation, our project aims to explore the transformative potential of AI in augmenting imaginative capabilities. We inspect how AI-driven insights and perspectives can push the boundaries of our creative thinking."
        }
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG Art Director & 3D ARTIST",
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

// export default function About() {
//   return (
//     <main>
//       <div
//         className="container"
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           margin: "0 auto",
//         }}
//       >
//         <iframe
//           src="https://player.vimeo.com/video/925335453?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//           allow="autoplay; fullscreen; picture-in-picture"
//           title="Vimeo video"
//         ></iframe>
//       </div>
//       <h2
//         style={{
//           marginTop: "80px",
//           fontSize: "50px",
//           textAlign: "center",
//           fontStyle: "italic",
//         }}
//       >
//         Digital Biotopia
//       </h2>
//       <p
//         style={{
//           margin: "20px",
//           textAlign: "justify",
//           marginLeft: "300px",
//           marginRight: "300px",
//           marginBottom: "100px",
//           marginTop: "80px",
//         }}
//       >
//         Overview In major metropolises like Tokyo, concrete buildings often
//         dominate, making integrating nature into the daily experience
//         challenging. In this project, we embark on a creative journey where
//         artificial intelligence takes center stage in creativity to imagine an
//         indoor experience that mimics the senses of nature. This is an
//         exploration of embedding AI into creative workflows by The Shift..
//         <br />
//         <br />
//         <br />
//         1. AI Imagination: Using the power of artificial intelligence
//         (Midjourney), we task the system with imagining a digital garden that
//         transcends the boundaries of conventional creativity. AI becomes the
//         visionary architect, imagining a space where the organic and the indoor
//         experience converge.
//         <br />
//         <br />
//         <br />
//         2. 3D Recreation: Translating the AI-generated concepts into an
//         ecosystem, we recreated the imagined visual in 3d software (blender).
//         Every element, from the flora to the intricate microcosms, is crafted to
//         breathe life into this futuristic space.
//         <br />
//         <br />
//         <br />
//         3. Microscopic Exploration: Exploring beyond the macroscopic view, we
//         dig into the micro level of this intricate ecosystem. This microscopic
//         exploration adds layers of complexity and richness to the orginic int
//         erior experience.
//       </p>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//           objectFit: "cover",
//           padding: "20px",
//         }}
//       >
//         <img
//           src="/img/projects/CG/digital biotopia/bio2.png"
//           alt="Image 1"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "10px",
//             marginLeft: "95px",
//           }}
//         />
//         <img
//           src="/img/projects/CG/digital biotopia/bio5.png"
//           alt="Image 2"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "10px",
//             marginRight: "95px",
//           }}
//         />
//         <img
//           src="/img/projects/CG/digital biotopia/bio4.png"
//           alt="Image 3"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "20px",
//             marginLeft: "95px",
//           }}
//         />
//         <img
//           src="/img/projects/CG/digital biotopia/bio3.png"
//           alt="Image 4"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "20px",
//             marginRight: "95px",
//           }}
//         />
//       </div>
//       <p
//         style={{
//           margin: "20px",
//           textAlign: "justify",
//           marginLeft: "300px",
//           marginRight: "300px",
//           marginBottom: "200px",
//           marginTop: "100px",
//         }}
//       >
//         4. AI Integration in Creative Workflow: A core objective of this project
//         is to embed AI generation into our creative workflow. We seek to
//         redefine how AI can be an integral collaborator, influencing and
//         enhancing our traditional creative processes. The symbiosis between
//         human ingenuity and artificial intelligence becomes a driving force
//         behind the project's evolution.
//         <br />
//         <br />
//         <br />
//         5. Enhancing Imaginative Capabilities: Beyond experimentation, our
//         project aims to explore the transformative potential of AI in augmenting
//         imaginative capabilities. We inspect how AI-driven insights and
//         perspectives can push the boundaries of our creative thinking
//       </p>
//       <div style={{ marginTop: "100px", width: "100vw", height: "100vh" }}>
//         <img src="/img/projects/CG/digital biotopia/Untitled.png" alt="" />
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div style={{ padding: "150px", marginLeft: "80px" }}>
//           <p style={{ marginBottom: "15px" }}>C R E D I T S</p>
//           <p style={{ marginBottom: "15px" }}>
//             YIFAN ZHUANG <strong> Art Director & 3D ARTIST </strong>{" "}
//           </p>
//           <p style={{ marginBottom: "15px" }}>
//             This is a research project for theshift.tokyo{" "}
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
