import React from "react";
import PageInfo from "@/components/PageInfo"; // Adjust the path as per your project structure

const Page = () => {
  return (
    <div>
      <PageInfo
        title="i dream, i dreamt"
        iframeSrc="https://player.vimeo.com/video/638304049?h=369837fcf8"
        subtitle=' "All that we all see or seem </br></br>
        
        Is but a dream within a dream?"
        
        </br></br>-- <i>A Dream Within a Dream</i> Allan Kaprow'
        textContent={` <em>i dream, i dreamt</em> is an immersive interactive installation that explores the dreamscape of an artificial brain, "no.01". The installation responds to participants’ actions to createa a dynamic interplay between dream, memory and brain activity. 

        </br></br>
        Inspired by Sigmund Freud' s psychoanalysis, Edgar Allan Poe' s poetry, and Dalí' s surrealism, this installation captures the abstract essence of dreams as a synthesis of fragmented daily experience and their connection to body. It invites participants to explore how external stimuli may influence the dream-generation process.
        </br></br>
        We exist as components within the dreams of others, just as we perceive
        others'  existence as integral elements in our own dreams.`}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/interactive design/idream/idream1.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/idream/idream2.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/idream/File 3.jpg",
          },
          {
            type: "image",
            src: "/img/projects/interactive design/idream/File 2.jpg",
          },
        ]}
        textAdditional={
          "The installation features key elements such as 3D-printed organs, a transparent brain, a webcam, a microphone, and interactive film. The organs are 3D-printed with white resin, while the brain is made from Elastic 50A.<br><br> We incorporated conductive materials into the organs, enabling touch-triggered interactions.Four animations, one effect, real-time visual changes, and sound alterations can be triggered through these organs. All visual interactions are controlled using Arduino and TouchDesigner."
        }
        imageAdditional={[
          { src: "/img/projects/interactive design/idream/dream10.png" },
        ]}
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG <b>Concept & Interactive Designer & CG Artist<b/>",
          "HUA MA <b>Technical Director</b>",
          "ZIYUE WANG <b>Engineer</b>",
          "SIYU MA <b>Literature & Theory Advisor</b>",
          "YINGTING HUANG <b>Sound Designer</b>",
        ]}
        videoCreditsText={[
          "V I D E O   C R E D I T S",
          "YIFAN ZHUANG <b>Director & Videographer & Editor</b>",
          "YINGTING HUANG <b>Sound Designer</b>",
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
        additionalVideoSrc="https://player.vimeo.com/video/638304696?badge=0"
      />
    </div>
  );
};

export default Page;
