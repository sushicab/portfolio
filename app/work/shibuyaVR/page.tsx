import React from "react";
import PageInfo from "@/components/PageInfo";
import exp from "constants";

const Page = () => {
  return (
    <div>
      <PageInfo
        iframeSrc="https://player.vimeo.com/video/929541977?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=584799"
        title="Shibuya VR <br />Immersive Point Cloud Adventure"
        subtitle="
        "
        textContent={`When we open our eyes and take in the world around us, imagine everything dissolving into the smallest particles, each one floating and interacting within the vast fabric of the universe.

 <br /> <br />Inspired by the idea that everything in the physical world—from people to architecture—is composed of atoms dancing in cosmic waves during every interaction, this project reimagines Shibuya, the bustling heart of Tokyo, as a universe of illuminated particles. By abstracting Shibuya’s familiar urban landscape into point cloud data, I sought to present my imagination of this atomic dance and immerse participants in it.
        <br />
        `}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/interactive design/shibuya VR/shibuya1.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/shibuya VR/shibuya5.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/shibuya VR/shibuya3.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/shibuya VR/shibuya4.jpg",
          },
        ]}
        textAdditional={
          "The 3D model is transformed into point cloud data using MeshLab, then brought into Unity for further development. To enhance the user experience, I designed a user interface (UI) for exploring the visual possibilities, featuring three pre-selected hero views of the scene. Four distinct point movements, driven by sine and cosine functions, introduce dynamic interactivity. A customizable color palette further invites users to explore and experiment with a variety of visual possibilities. <br><br>Two shaders define the visual experience: one creates an illuminated, dreamlike aesthetic, while the other with a more realistic sense and allows users to adjust point sizes. "
        }
        imageAdditional={[
          { src: "/img/projects/interactive design/shibuya VR/shibuya7.png" },
        ]}
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG <b> Concept & Interactive Designer & Developer</b>",
          "This is a personal research project for <a href=' https://www.aircord.co.jp/'  target=' _blank'  rel=' noopener noreferrer'  style={{ textDecoration: ' underline'  }}><em>aircord.inc</em></a>.",
        ]}
        videoCreditsText={[]}
        specialThanksText={[]}
        additionalVideoSrc="/img/projects/interactive design/shibuya VR/video1.MP4"
      />
    </div>
  );
};

export default Page;

// // export default function About() {
// //   return (
// //     <main>
// //       <div style={{ maxWidth: "100%" }}>
// //         <iframe
// //           src="https://player.vimeo.com/video/929541977?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=584799"
// //           width="100vw"
// //           height="786px"
// //           allow="autoplay; fullscreen; picture-in-picture"
// //           title="Vimeo video"
// //         ></iframe>
// //       </div>

// //       <p
// //         style={{
// //           margin: "20px",
// //           textAlign: "justify",
// //           marginTop: "100px",
// //           marginLeft: "250px",
// //           marginRight: "250px",
// //           marginBottom: "250px",
// //         }}
// //       >
// Envision Shibuya, a bustling and iconic district in Tokyo, undergoing a
// captivating metamorphosis into a space adorned with millions of
// illuminated particles, beckoning for uninhibited interaction. This
// ambitious project seeks to push the boundaries of creativity by
// exploring the vast potential of crafting a unique and immersive
// experience within the expansive canvas of virtual reality (VR).
// <br />
// <br />
// Central to this endeavor is the utilization of visualized point cloud
// data, a sophisticated technique that transforms the virtual landscape
// into a dynamic and responsive environment. Participants are not mere
// observers; they are active participants in this digital spectacle.A key
// element facilitating this interactive journey is a specially designed UI
// tablet. This device serves as the gateway for participants to exercise
// their creative agency, allowing them to customize various aspects of the
// luminous particles. From selecting vibrant colors to fine-tuning
// performance dynamics and adjusting geometric sizes, the UI tablet
// empowers individuals to shape the aesthetic and experiential dimensions
// of this virtual wonderland.
// //         <br />
// //         <br />
// //         As the project progresses, we eagerly anticipate delving deeper into the
// //         myriad possibilities for enhancing interactive and immersive experiences
// //         within the virtual domain. The fusion of technology, creativity, and
// //         user agency promises to redefine how we engage with and perceive virtual
// //         spaces, paving the way for a future where the boundaries between the
// //         physical and digital realms become even more fluid and enthralling.
// //       </p>
// //       <div
// //         style={{
// //           display: "flex",
// //           justifyContent: "space-between",
// //           flexWrap: "wrap",
// //           objectFit: "cover",
// //         }}
// //       >
// //         <img
// //           src="/img/projects/interactive design/shibuya VR/shibuya1.jpg"
// //           alt="Image 1"
// //           style={{
// //             width: "calc(50% - 100px)",
// //             marginBottom: "10px",
// //             marginLeft: "95px",
// //           }}
// //         />
// //         <img
// //           src="/img/projects/interactive design/shibuya VR//shibuya5.jpg"
// //           alt="Image 2"
// //           style={{
// //             width: "calc(50% - 100px)",
// //             marginBottom: "10px",
// //             marginRight: "95px",
// //           }}
// //         />
// //         <img
// //           src="/img/projects/interactive design/shibuya VR/shibuya3.jpg"
// //           alt="Image 3"
// //           style={{
// //             width: "calc(50% - 100px)",
// //             marginBottom: "20px",
// //             marginLeft: "95px",
// //           }}
// //         />
// //         <img
// //           src="/img/projects/interactive design/shibuya VR/shibuya4.jpg"
// //           alt="Image 4"
// //           style={{
// //             width: "calc(50% - 100px)",
// //             marginBottom: "20px",
// //             marginRight: "95px",
// //           }}
// //         />
// //       </div>
// //       <div style={{ maxWidth: "1440px", marginTop: "100px" }}>
// //         <iframe
// //           src="https://player.vimeo.com/video/638304696?badge=0"
// //           width="1440px"
// //           height="786px"
// //           allow="autoplay; fullscreen; picture-in-picture"
// //           title="Vimeo video"
// //         ></iframe>
// //       </div>
// //       <div style={{ display: "flex", justifyContent: "space-between" }}>
// //         <div style={{ width: "50%", padding: "100px", marginLeft: "80px" }}>
// //           <p style={{ marginBottom: "15px" }}>C R E D I T S</p>
// //           <p style={{ marginBottom: "15px" }}>
// //             YIFAN ZHUANG{" "}
// //             <strong> Interaction Design & System Development </strong>{" "}
// //           </p>
// //           <p style={{ marginBottom: "15px" }}>
// //             It is a research project for aircord.inc.{" "}
// //           </p>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }
