import React from 'react';
import PageInfo from '@/components/PageInfo';

const About = () => {
  return (
    <div>
      <PageInfo
        iframeSrc="https://player.vimeo.com/video/1062747045?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        title="Live Identiity"
        subtitle="A data visualization research project for <a href='https://aircord.co.jp/' style='text-decoration:underline' ><em> aircord inc,</em></a> <br/><br/> developed as part of  the  <a href=' https://www.aircord.co.jp/branding/'  target=' _blank'  rel=' noopener noreferrer' style='text-decoration:underline' ><em>aircord Visual Identity System</em></a>."
        textContent={` This project explores the fluid relationship between brand identity and environmental context by transforming real-time ecological factors—such as temperature, wind speed, visibility, cloud cover, and humidity—into an evolving identity. <br/><br/>

The design is rooted in the idea that identity—whether human or brand—is ever-changing and continuously shaped by its surroundings. Just as we are constantly influenced by the people and experiences around us, a brand's identity evolves in response to external factors. This dynamic interplay between our inner nature and the environment reflects the fluid and adaptive character that defines both individuals and brands. `}
        // imagePaths={[
        //   "/img/projects/CG/digital biotopia/bio2.png",
        //   "/img/projects/CG/digital biotopia/bio5.png",
        //   "/img/projects/CG/digital biotopia/bio4.png",
        //   "/img/projects/CG/digital biotopia/bio3.png",
        // ]}
        imagePaths={[
          {
            type: 'image',
            src: '/img/projects/CG/aircordLogo/6.png',
          },
          {
            type: 'image',
            src: '/img/projects/CG/aircordLogo/2.png',
          },
          {
            type: 'image',
            src: '/img/projects/CG/aircordLogo/3.png',
          },
          {
            type: 'image',
            src: '/img/projects/CG/aircordLogo/4.png',
          },
        ]}
        textAdditional={
          'Our design visually reflects current conditions: the blooming level responds to humidity and visibility, transparency mirrors cloud cover, colors shift with temperature, and wind speed gently influences the logo’s shape. Real-time environmental data is automatically pulled from VisualCrossing and updated every 30 minutes. This project is developed in Touchdesigner.'
        }
        imageAdditional={[{ src: '/img/projects/CG/aircordLogo/5.png' }]}
        // {["/img/projects/CG/aircordLogo/5.png"]}
        creditsText={[
          'C R E D I T S',
          'TOSHIYUKI HASHIMOTO <b>Creative Director/ Producer</b>',
          'YIFAN ZHUANG <b>Interactive VIsual Designer & System Developer</b>',
          'JIYU PARK (theshift) <b>UI Designer</b>',
          'IWASAKI OSAMU (aircord) <b>Techinical Director</b>',
          'Garden Eight <b>Art Director</b><br/>',
          "This project is part of the  <a href=' https://www.aircord.co.jp/branding/'  target=' _blank'  rel=' noopener noreferrer' style='text-decoration:underline' ><em>aircord Visual Identity System</em></a> which has been awarded <br/>in the Company Branding category at the <a href='https://ifdesign.com/en/winner-ranking/project/aircord-visual-identity-system/688989'  target=' _blank'  rel=' noopener noreferrer' style='text-decoration:underline' ><em>iF DESIGN AWARD 2025</em></a> .",
        ]}
        videoCreditsText={[]}
        specialThanksText={[]}
        additionalVideoSrc="https://player.vimeo.com/video/1062756466?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      />
    </div>
  );
};
export default About;
