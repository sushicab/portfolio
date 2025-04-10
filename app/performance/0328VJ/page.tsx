import React from "react";
import PageInfo from "@/components/PageInfo"; // Adjust the path as per your project structure

const Page = () => {
  return (
    <div>
      <PageInfo
        title="Aleph"
        iframeSrc="https://www.youtube.com/embed/AK1vuOjbtW4?si=uck0ZRBAffrVoKJy"
        subtitle=""
        textContent={`<em>Aleph</em> is a project we create as a visual experiment. Drawing inspiration from the dream diary we documented, then we collaborated with AI to generate scenes and turned them into animation.  
          <br /><br />
          Dream by yifan: <em>Another dimension. A large silver reflective sphere rests at the center of the table. Seven figures surround it — their faces obscured, only their forms are visible. The boundaries of the space begin to dissolve, melting into the void. Countless eyes appear, watching gently. Everything floats in the cosmos.</em>`}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/performance/0328VJ/1.webp",
          },
          {
            type: "image",
            src: "/img/projects/performance/0328VJ/6.webp",
          },
          {
            type: "image",
            src: "/img/projects/performance/0328VJ/8.jpg",
          },
          {
            type: "image",
            src: "/img/projects/performance/0328VJ/9.jpg",
          },
        ]}
        textAdditional={
          "These dreams are part of main visuals of Aleph, an one-hour visual show we created for the opening party of the  <a href=' https://fabcafe.com/events/tokyo-en/20250328-desktop-deadstock/'  target=' _blank'  rel=' noopener noreferrer' ><em>Desktop Deadstock Exhibition</em></a> at  <a href='https://fabcafe.com/'  target=' _blank'  rel=' noopener noreferrer' ><em>FabCafe Tokyo</em></a>  on March 28th. We mixed animations with generative visual and multiple effects."
        }
        imageAdditional={[{ src: "/img/projects/performance/0328VJ/5.png" }]}
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG & YAN HE <b>Concept & Visual <b/>",
          ,
        ]}
        videoCreditsText={[]}
        specialThanksText={[]}
        additionalVideoSrc="https://www.youtube.com/embed/_ybWf2xHwlw?si=i78yUG85d7PORHHk"
      />
    </div>
  );
};

export default Page;
