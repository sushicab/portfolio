import React from 'react';
import PageInfo from '@/components/PageInfo'; // Adjust the path as per your project structure

const Page = () => {
  return (
    <div>
      <PageInfo
        title="How to Be A Cloud"
        iframeSrc="https://player.vimeo.com/video/1071372740?h=47b883bf00&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        subtitle=" an interactive webAR experience "
        textContent={` Blurring the line between the tangible and the ephemeral, “How to Be a Cloud” blends live-action footage, CG and animation into a meditative journey through augmented space. Through your smartphone, endless soft, floating clouds appear in the real world—quiet, weightless, and just out of reach. Tap the screen, and paper planes take flight, drifting gently around the cloud.
        </br></br>
       This experience invites you to float between sky and ground, presence and imagination—where the invisible becomes visible, and the everyday becomes poetic.

        </br></br>
        "How to be a cloud" was exhibited from Mar.13 to Mar.20 at Haneda Airport terminal1 as part of Tokyo Creative Salon 2025.`}
        imagePaths={[
          {
            type: 'image',
            src: '/img/projects/interactive design/webAR/1.jpg',
          },
          {
            type: 'image',
            src: '/img/projects/interactive design/webAR/2.jpg',
          },
          {
            type: 'image',
            src: '/img/projects/interactive design/webAR/3.jpg',
          },
          {
            type: 'image',
            src: '/img/projects/interactive design/webAR/5.png',
          },
        ]}
        textAdditional={
          'Just like clouds, our thoughts are always shifting—soft, abstract, and fleeting. As we pass through the sky, our minds drift, reshaping and dissolving into something new, like vapor caught in the wind. We invite you to float with the clouds, weightless and untethered. With a tap, paper planes take flight—carrying thoughts, dreams, and fleeting moments, merging with the ever-changing sky.'
        }
        imageAdditional={[{ src: '/img/projects/interactive design/webAR/IG2.JPG' }]}
        creditsText={[
          'C R E D I T S',
          'YIFAN ZHUANG <b>Art Director & CG Designer & Graphic Designer<b/>',
          'YAN HE <b>Creative Director & WebAR Developer</b>',
          'Eleanor Ford <b>Art Curator</b>',
        ]}
        videoCreditsText={[
          'V I D E O   C R E D I T S',
          'YIFAN ZHUANG & YAN HE <b>Director & Videographer & Editor</b>',
          ,
        ]}
        specialThanksText={[
          'S P E C I A L   T H A N K S',
          'Haneda Innovative City',
          'Tokyo Creative Salon',
        ]}
        additionalVideoSrc="https://player.vimeo.com/video/1071371202?h=999f493600&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      />
    </div>
  );
};

export default Page;
