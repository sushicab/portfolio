import React from 'react';
import PageInfo from '@/components/PageInfo';

const About = () => {
  return (
    <div>
      <PageInfo
        iframeSrc="https://www.youtube.com/embed/E0jKyai6RDo?si=uU7RNo7WsKHRz8HN"
        title="A-Un"
        subtitle="an interactive installation for Lexus Milan Design Week 2025"
        textContent={`At the <em>2025 Lexus Milan Design Week</ em>, I contributed as an <em>Interactive Visual Designer</ em> for a large-scale immersive installation that fused Japanese craftsmanship and advanced technology. The centerpiece was a 35km hand-woven bamboo screen that responded to the heartbeat of nearby visitors, embodying the Japanese concept of "A-Un no Kokyu"—a state of silent, synchronized harmony. </ br></ br> The installation went on to win <em>2nd place in the ence AwardAudi (Fuorisalone Award 2025)</ em> and received the Design Schools Special Mention, standing out among over 1,000 exhibitors.`}
        imagePaths={[
          {
            type: 'image',
            src: '/img/projects/interactive design/Lexus/3.png',
          },
          {
            type: 'image',
            src: '/img/projects/interactive design/Lexus/7.png',
          },
          {
            type: 'image',
            src: '/img/projects/interactive design/Lexus/5.png',
          },
          {
            type: 'image',
            src: '/img/projects/interactive design/Lexus/6.png',
          },
        ]}
        textAdditional={
          'I was responsible for designing and prototyping the heartbeat visualization system, laying the foundational visual language and interaction logic used in the final experience. My early-stage visual demo, developed in TouchDesigner, was selected and featured in the official Lexus concept video, which served as the main promotional material for the event.'
        }
        imageAdditional={[{ src: '/img/projects/interactive design/Lexus/1.png' }]}
        creditsText={[
          'C R E D I T S',
          'Takeshi Nozoe (SIX Inc).  <b>Creative Director</b>',
          'Tatsuki Ikezawa (STUDE0)  <b>Art Director</b>',
          'Toshiyuki Hashimoto  <b>Technical Producer</b>',
          'Osamu Iwasaki  <b> Technical Director / Hardware Developer </b>',
          'Seiya Nakano  <b> Projection Mapping / Interactive Visual Director </b>',
          'Hisaki Ito  <b> Technical Director / Software Developer </b>',
          'Yifan Zhuang  <b> Interactive Visual Designer </b>',
          'Motoki Umetsu    <b> Interactive Visual Designer </b>',
          'Shoya Dozono   <b> Data Visualization Designer </b>',
        ]}
        videoCreditsText={[]}
        specialThanksText={[]}
        additionalVideoSrc="https://www.youtube.com/embed/xWDnQMb4sDc?si=578vvrVPB8mMj-HQ"
      />
    </div>
  );
};

export default About;
