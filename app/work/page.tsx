'use client';

import Link from 'next/link';
import IntroductionComp from '@/components/IntroductionComp';
import React from 'react';

const Rows = [
  {
    Cards: [
      {
        title: 'Ai no Mori',
        description: 'Visual Design/ 2025',
        imgUrl: '/img/workpage/ainomori_video.mp4',
        path: '/work/shibuyaVR',
      },
      {
        title: 'A Poem to Alien',
        description: 'Interactive Insallation/ 2025',
        imgUrl: '/img/workpage/img-3.jpg',
        path: '/work/lexus',
        originalRatio: true,
      },

      {
        title: '1817',
        description: 'Audio Visual Performance/ 2025',
        imgUrl: '/img/workpage/18172.mp4',
        path: '/performance/1817',
      },
    ],
  },

  {
    Cards: [
      {
        title: 'How To Be A Cloud',
        description: 'Web AR/ 2025',
        imgUrl: '/img/workpage/cloud.mp4',
        path: '/work/webAR',
      },
      {
        title: 'Exit',
        description: 'Audio Visual Performance/ 2025',
        imgUrl: '/img/workpage/exit.exe East.PNG',
        path: '/work/webAR',
        originalRatio: true,
      },
      {
        title: 'Skyn--Soft Pulse',
        description: 'Interactive Insallation/ 2025',
        imgUrl: '/img/workpage/skyn.mp4',
        path: '/work/lexus',
        originalRatio: true,
      },
    ],
  },

  {
    Cards: [
      // {
      //   title: 'AR Experience',
      //   description: 'Augmented Reality projects',
      //   imgUrl: '/img/workpage/gender1.png',
      //   path: '/work/AR',
      //   smallSize: true,
      // },
      // {
      //   title: 'I dream, I dreamt',
      //   description: '3D Animation/ 2021',
      //   imgUrl: '/img/workpage/dreamCG1.png',
      //   path: '/work/idreamCG',
      // },
      {
        title: '3D:Mix',
        description: '3D Printing Experiment/ 2024',
        imgUrl: '/img/workpage/render1.png',
        path: '/work/3DMix',
      },
      {
        title: 'Digital Biotopia  ',
        description: '3D Art Work/ 2023',
        imgUrl: '/img/workpage/11.22.mov',
        path: '/work/digitalbiotopia',
        originalRatio: true,
      },
      {
        title: 'Shibuya in VR',
        description: 'VR Point Cloud Experience/ 2022',
        imgUrl: '/img/workpage/shibuyaVR.mp4',
        path: '/work/shibuyaVR',
      },
      {
        title: 'Live Identity',
        description: 'Data Visualisation/ 2024',
        imgUrl: '/img/workpage/5.png',
        path: '/work/aircordLogo',
        smallSize: true,
      },
    ],
  },
  {
    Cards: [
      {
        title: 'A-Un',
        description: 'Interactive Insallation/ 2025',
        imgUrl: '/img/workpage/lexus3.png',
        path: '/work/lexus',
      },

      {
        title: 'Emolleia',
        description: 'Interactive Wearable Device/ 2021 ',
        imgUrl: '/img/workpage/emolleia2.mp4',
        path: '/work/emolleia',
      },
      {
        title: 'i dream, i dreamt',
        description: 'Interactive Installation/ 2021 ',
        imgUrl: '/img/workpage/idream4.jpg',
        path: '/work/idream',
      },
    ],
  },

  {
    Cards: [
      {
        title: 'Replacement  ',
        description: '2021',
        imgUrl: '/img/projects/photography/replacement/2.jpg',
        path: '/work/replacement',
      },
      {
        title: 'Mirror Mirror',
        description: '2016-2020 ',
        imgUrl: '/img/workpage/mirror3.jpg',
        path: '/work/mirrorMirror',
      },
      {
        title: 'Fragment',
        description: '2018 ',
        imgUrl: '/img/workpage/fragment8.jpg',
        path: '/work/fragment',
      },
      {
        title: 'Soft Memory',
        description: '2015',
        imgUrl: '/img/workpage/soft18.jpg',
        path: '/work/softMemory',
      },
    ],
  },
  {
    Cards: [
      {
        title: 'What is love?',
        description: 'Mixed Material/ 2023',
        imgUrl: '/img/workpage/whatislove1.jpg',
        path: '/work/whatislove',
      },
      {
        title: 'Liquid Painting',
        description: "for ' Remix' / 2023",
        imgUrl: '/img/workpage/liquid1.jpg',
        path: '/work/liquidPainting',
      },
      {
        title: 'Distant Lover ',
        description: 'Oil Painting/ 2019',
        imgUrl: '/img/workpage/distantlover.jpg',
        path: '/work/distantLover',
      },
      {
        title: 'Lotus',
        description: 'Lacquer Painting/ 2017 ',
        imgUrl: '/img/workpage/lotus1.jpg',
        path: '/work/lotus',
      },
    ],
  },
  {
    Cards: [
      {
        title: 'Stay at Home',
        description: 'Short Film Project/ coming soon',
        imgUrl: '/img/workpage/stayathome7.png',
        path: '/work/stayatHome',
      },
    ],
  },
];

function Card({ title, description, imgUrl, path, smallSize, originalRatio }: any) {
  // Check if the URL is a video file
  const isVideo =
    imgUrl &&
    (imgUrl.endsWith('.mp4') ||
      imgUrl.endsWith('.webm') ||
      imgUrl.endsWith('.ogg') ||
      imgUrl.endsWith('.mov') ||
      imgUrl.endsWith('.avi'));

  return (
    <div style={{ padding: '8px', width: '100%' }}>
      <Link href={path}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          {isVideo ? (
            <video
              src={imgUrl}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={imgUrl}
              alt={`${title} - ${description} card`}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
              loading="lazy"
            />
          )}
        </div>
        <div
          style={{
            fontWeight: 'bold',
            marginTop: '4px',
          }}
        >
          <h2>{title}</h2>
        </div>
        <div className="text-gray-500 text-base">
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
function Row({ Cards }: any) {
  return (
    <>
      {/* Style for large screens */}
      <div className="hidden md:block">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '40px',
          }}
        >
          {Cards.map((card: any) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* Style for mobile screens */}
      <div className="md:hidden">
        <div style={{ marginBottom: '30px' }}>
          {Cards.map((card: any) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Work() {
  return (
    <main>
      <div className="work-cards-style">
        {Rows.map((row, index) => (
          <Row key={index} {...row} />
        ))}
      </div>
      <div style={{ marginTop: '50px' }}>
        {' '}
        <IntroductionComp />
      </div>
    </main>
  );
}
