import React from "react";
import PageInfo from "@/components/PageInfo"; // Adjust the path as per your project structure

const Page = () => {
  return (
    <div>
      <PageInfo
        iframeSrc="https://player.vimeo.com/video/638304049?h=369837fcf8"
        title="i dream, i dreamt"
        subtitle='"All that we all see or seem
        <br />
        Is but a dream within a dream?"
        <br />
        -- <i>A Dream Within a Dream</i> Allan Kaprow'
        textContent={`"Dreamt, I Dream" unfolds as an immersive interactive
        artistic creation of mine, inviting you into the realm of dream
        generation through the artificial brain 'no.01'. By responding to
        stimuli from the external world initiated by participants, this
        installation unveils the subjective interplay of memory and brain
        activities. The surreal experience of transforming disconnected and
        incongruent signals into a visually cohesive narrative is rekindled.
        <br />
        <br />
        Various layers of animation and sound are activated through contact with
        3D-printed eye, nose, lip, ear, and hand replicas representing
        surrounding body organs. Equipped with cameras, electroacoustic
        transducers, and touch sensors, the installation processes live video
        and audience voices, fostering real-time interaction with participants.
        In this immersive journey, participants not only experience but also
        shape the dream generating process, blurring the lines between
        experiencer and creator.
        <br />
        <br />
        We exist as components within the dreams of others, just as we perceive
        others' existence as integral elements in our own dreams.`}
        imagePaths={[
          "/img/projects/interactive design/idream/idream1.jpg",
          "/img/projects/interactive design/idream/idream2.jpg",
          "/img/projects/interactive design/idream/idream3.jpg",
          "/img/projects/interactive design/idream/idream4.jpg",
        ]}
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG Creative Direction & Interaction Design & CG Animation",
          "HUA MA Technical Direction",
          "ZIYUE WANG Engineer",
          "SIYU MA Literature & Theory Advisor",
          "YINGTING HUANG Sound Design",
        ]}
        videoCreditsText={[
          "V I D E O   C R E D I T S",
          "YIFAN ZHUANG Direction & Shooting & Edit",
          "YINGTING HUANG Sound Design",
        ]}
        specialThanksText={[
          "S P E C I A L   T H A N K S",
          "KEITARO TSUCHIYA",
          "ETHAN SALLEY",
          "XIARU MENG",
          "YAN HE",
          "GEIST LAB",
          "GRADUATE SCHOOL OF KEIO MEDIA DESIGN",
        ]}
      />
    </div>
  );
};

export default Page;

// export default function About() {
//   return (
//     <main>
//       <div style={{ maxWidth: "1440px" }}>
//         <iframe
//           src="https://player.vimeo.com/video/638304049?h=369837fcf8"
//           width="1440px"
//           height="786px"
//           allow="autoplay; fullscreen; picture-in-picture"
//           title="Vimeo video"
//         ></iframe>
//       </div>
//       <h2
//         style={{
//           marginTop: "50px",
//           fontSize: "50px",
//           textAlign: "center",
//           fontStyle: "italic",
//         }}
//       >
//         i dream, i dreamt
//       </h2>
//       <p
//         style={{
//           textAlign: "center",
//           marginTop: "40px",
//           marginBottom: "40px",
//           fontStyle: "italic",
//         }}
//       >
//         &quot;All that we all see or seem
//         <br />
//         Is but a dream within a dream?&quot;
//         <br />
//         -- <i>A Dream Within a Dream</i> Allan Kaprow
//       </p>
//       <p
//         style={{
//           margin: "20px",
//           textAlign: "justify",
//           marginLeft: "200px",
//           marginRight: "200px",
//           marginBottom: "100px",
//         }}
//       >
//         &quot;<i>Dreamt, I Dream</i>&quot; unfolds as an immersive interactive
//         artistic creation of mine, inviting you into the realm of dream
//         generation through the artificial brain 'no.01'. By responding to
//         stimuli from the external world initiated by participants, this
//         installation unveils the subjective interplay of memory and brain
//         activities. The surreal experience of transforming disconnected and
//         incongruent signals into a visually cohesive narrative is rekindled.
//         <br />
//         <br />
//         Various layers of animation and sound are activated through contact with
//         3D-printed eye, nose, lip, ear, and hand replicas representing
//         surrounding body organs. Equipped with cameras, electroacoustic
//         transducers, and touch sensors, the installation processes live video
//         and audience voices, fostering real-time interaction with participants.
//         In this immersive journey, participants not only experience but also
//         shape the dream generating process, blurring the lines between
//         experiencer and creator.
//         <br />
//         <br />
//         We exist as components within the dreams of others, just as we perceive
//         others' existence as integral elements in our own dreams.
//       </p>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           flexWrap: "wrap",
//         }}
//       >
//         <img
//           src="/img/projects/interactive design/idream/idream1.jpg"
//           alt="Image 1"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "10px",
//             marginLeft: "95px",
//           }}
//         />
//         <img
//           src="/img/projects/interactive design/idream/idream2.jpg"
//           alt="Image 2"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "10px",
//             marginRight: "95px",
//           }}
//         />
//         <img
//           src="/img/projects/interactive design/idream/idream4.jpg"
//           alt="Image 3"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "20px",
//             marginLeft: "95px",
//           }}
//         />
//         <img
//           src="/img/projects/interactive design/idream/idream3.jpg"
//           alt="Image 4"
//           style={{
//             width: "calc(50% - 100px)",
//             marginBottom: "20px",
//             marginRight: "95px",
//           }}
//         />
//       </div>
//       <div style={{ maxWidth: "1440px", marginTop: "100px" }}>
//         <iframe
//           src="https://player.vimeo.com/video/638304696?badge=0"
//           width="1440px"
//           height="786px"
//           allow="autoplay; fullscreen; picture-in-picture"
//           title="Vimeo video"
//         ></iframe>
//       </div>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div style={{ width: "50%", padding: "150px", marginLeft: "100px" }}>
//           <p style={{ marginBottom: "15px" }}>C R E D I T S</p>
//           <p style={{ marginBottom: "15px" }}>
//             YIFAN ZHUANG{" "}
//             <strong>
//               {" "}
//               Creative Direction & Interaction Design & CG Animation{" "}
//             </strong>{" "}
//           </p>
//           <p style={{ marginBottom: "15px" }}>
//             HUA MA <strong>Technical Direction</strong>
//           </p>
//           <p style={{ marginBottom: "15px" }}>
//             ZIYUE WANG <strong>Engineer</strong>
//           </p>
//           <p style={{ marginBottom: "15px" }}>
//             SIYU MA <strong>Literature & Theory Advisor</strong>
//           </p>
//           <p style={{ marginBottom: "15px" }}>
//             YINGTING HUANG <strong>Sound Design</strong>
//           </p>
//         </div>
//         <div style={{ width: "50%", padding: "150px", marginRight: "100px" }}>
//           <p style={{ marginBottom: "15px" }}>V I D E O C R E D I T S</p>
//           <p style={{ marginBottom: "15px" }}>
//             YIFAN ZHUANG <strong> Direction & Shooting & Edit</strong>
//           </p>
//           <p style={{ marginBottom: "15px" }}>
//             YINGTING HUANG <strong>Sound Design</strong>
//           </p>
//           <p style={{ marginBottom: "15px", marginTop: "50px" }}>
//             S P E C I A L T H A N K S
//           </p>
//           <p style={{ marginBottom: "15px" }}>KEITARO TSUCHIYA</p>
//           <p style={{ marginBottom: "15px" }}>ETHAN SALLEY</p>
//           <p style={{ marginBottom: "15px" }}>XIARU MENG</p>
//           <p style={{ marginBottom: "15px" }}>YAN HE</p>
//           <p style={{ marginBottom: "15px" }}>GEIST LAB</p>
//           <p style={{ marginBottom: "15px" }}>
//             GRADUATE SCHOOL OF KEIO MEDIA DESIGN
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
