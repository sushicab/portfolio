import { Covered_By_Your_Grace } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Rows = [
  {
    rowTitle: '(Interactive Experience)',
    Cards: [
      {
        title: 'Shibuya in VR',
        description: 'VR Point Cloud Experience/ 2022',
        imgUrl: '/img/workpage/shibuyaVR1.png',
        path: '/work/shibuyaVR',
      },
      {
        title: 'Emolleia',
        description: 'Interactive Wearable Device/ 2021 ',
        imgUrl: '/img/workpage/emolleia4.png',
        path: '/work/emolleia',
      },
      {
        title: 'i dream, i dreamt',
        description: 'Interactive Installation/ 2021 ',
        imgUrl: '/img/workpage/idream4.jpg',
        path: '/work/idream',
      },

      {
        title: 'AR Experience',
        description: 'Augmented Reality projects',
        imgUrl: '/img/workpage/gender1.png',
        path: '/work/AR',
      },
    ],
  },
];

function Card({ title, description, imgUrl, path }: any) {
  return (
    <div style={{ width: '100%' }}>
      <Link href={path}>
        <Image src={imgUrl} alt={`${title} - ${description} card`} />

        {/* Title with spacing above image */}
        <h2>{title}</h2>

        {/* Description with subtle spacing */}
        <p>{description}</p>
      </Link>
    </div>
  );
}
function Row({ rowTitle, Cards }: any) {
  return (
    <>
      {/* Style for large screens */}
      <div className="hidden md:block">
        {' '}
        {/* Hide on small screens */}
        <h1>{rowTitle}</h1>
        <div>
          {Cards.map((card: any) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* Style for mobile screens */}
      <div className="md:hidden">
        {' '}
        {/* Hide on medium and larger screens */}
        <h1>{rowTitle}</h1>
        <div>
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
        {Rows.map((row) => (
          <Row key={row.rowTitle} {...row} />
        ))}
      </div>
      <div> </div>
    </main>
  );
}
