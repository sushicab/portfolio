import React from "react";
import PageInfo from "@/components/PageInfo"; // Adjust the path as per your project structure

const Page = () => {
  return (
    <div>
      <PageInfo
        title="Exit.exe"
        iframeSrc="https://www.youtube.com/embed/ZZr9I5Jzdp0?si=vcfS-x4NANshT5ms"
        subtitle="a live audio-visual performance"
        textContent={`Memory is just a fleeting illusion, and home is a place we spend our whole lives searching for. 
          <br /><br /> <em>Exit.exe</em> is a visual diary we present with our most intimate selves, intertwining real footage from our hometown in Chongqing and Changzhou, China with surreal fragments, dreamlike childhood memories, and fleeting visions that shift between slumber and wakefulness. 
          <br /><br /> It was a one-hour live visual and sound performance held at Ultra Super New Kura in Shibuya, Tokyo.`}
        imagePaths={[
          {
            type: "image",
            src: "/img/projects/performance/exit/exit1.JPG",
          },
          {
            type: "image",
            src: "/img/projects/performance/exit/exit5.jpg",
          },
          {
            type: "image",
            src: "/img/projects/performance/exit/exit7.jpg",
          },
          {
            type: "image",
            src: "/img/projects/performance/exit/exit2.jpg",
          },
        ]}
        textAdditional={
          "We recreated scenes from childhood memories and past dreams using Unreal Engine. Spaces like the computer classroom, swimming pool, music room, and school hallway were modeled after our own school experiences in China from the 2000s. Rendered in a liminal space aesthetic, these environments provoking a looping, inescapable sensation, mirroring the surreal, unsettling feeling often found in nightmare."
        }
        imageAdditional={[{ src: "/img/projects/performance/exit/exit4.png" }]}
        creditsText={[
          "C R E D I T S",
          "YIFAN ZHUANG & YAN HE <b>Concept & Videographer & CG Artist & Editor<b/>",
          "Haruna <b>Sound Designer<b/>",
        ]}
        videoCreditsText={[]}
        specialThanksText={[]}
        additionalVideoSrc="https://www.youtube.com/embed/E0a-dcXvA9E?si=9MIbvPyokfIbj9xK"
      />
    </div>
  );
};

export default Page;
