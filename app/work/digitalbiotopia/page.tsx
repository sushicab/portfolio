import React from 'react';
import PageInfo from '@/components/PageInfo';

const About = () => {
  return (
    <div>
      <PageInfo
        iframeSrc="https://player.vimeo.com/video/925335453?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="DIGITAL BIOTOPIA"
        subtitle=""
        textContent={`During the early rise of <em>Midjourney</ em>, as it gained popularity in the creative world, debates emerged about AI’s potential to replace human creativity. While many viewed AI as a threat to artistic expression, I found it difficult to align with that perspective.
        <br />
        <br />
        <br />
        This tension inspired me to explore how AI could enhance, rather than diminish, creativity. Using <em>Midjourney</ em>, I envisioned an indoor world where nature and humanity peacefully coexist. I expanded this concept in Blender, adding imaginative elements—moss, tiny creatures, and other micro-level details—to a larger macro-scale environment. This attention to both the intimate and expansive aspects enriched the scene, bringing it to life.
        <br />
        <br />
        <br />
        My goal was to explore how AI can be integrated into the creative process, finding ways to collaborate with it to reach our full potential while ensuring that human creativity remains central. 
        <br />
        <br />
        <br />`}
        // imagePaths={[
        //   "/img/projects/CG/digital biotopia/bio2.png",
        //   "/img/projects/CG/digital biotopia/bio5.png",
        //   "/img/projects/CG/digital biotopia/bio4.png",
        //   "/img/projects/CG/digital biotopia/bio3.png",
        // ]}
        imagePaths={[
          {
            type: 'image',
            src: '/img/projects/CG/digital biotopia/bio2.png',
          },
          {
            type: 'image',
            src: '/img/projects/CG/digital biotopia/bio5.png',
          },
          {
            type: 'image',
            src: '/img/projects/CG/digital biotopia/bio4.png',
          },
          {
            type: 'image',
            src: '/img/projects/CG/digital biotopia/bio3.png',
          },
        ]}
        textAdditional={
          'Much like the invention of photography and the washing machine, which initially raised fears of replacing painters and workers, technological advancements often open new possibilities and redefine the meaning of the work we do. I believe AI, too, can serve as a mirror to better understand ourselves and our creativity, allowing us to embrace it as a collaborator rather than an adversary.'
        }
        imageAdditional={[]}
        creditsText={[
          'C R E D I T S',
          'YIFAN ZHUANG <b>Concept & 3D Artist</b>',
          'This is a personal research project for theshift.tokyo.',
        ]}
        videoCreditsText={[]}
        specialThanksText={[]}
        additionalVideoSrc="/img/projects/CG/digital biotopia/1211_2.mp4"
      />
    </div>
  );
};
export default About;
