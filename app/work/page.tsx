import { Covered_By_Your_Grace } from 'next/font/google';
import Image from 'next/image';
import { useState } from "react"; 
import Link from 'next/link';
import WorkPageLink from "@/components/WorkPageLink";
import IntroductionComp from "@/components/IntroductionComp"


const Rows = [
  {
    rowTitle: '(Interactive Experience)',
    Cards: [
      {
        title: 'Shibuya in VR',
        description: 'Immersive Point Cloud Adventure',
        imgUrl: '/img/workpage/shibuyaVR1.png',
       // path:'/work/idream',
      },
      {
        title: 'I dream, I dreamt',
        description: 'Interactive Installation ',
        imgUrl: '/img/workpage/emolleia1.jpg',
        path: "/work/idream",
      },
      {
        title: 'Emolleia',
        description: 'Interactive Wearable Device ',
        imgUrl: '/img/workpage/idream4.jpg',
      },
      {
        title: 'Gender Shell',
        description: 'AR Interactive Experience',
        imgUrl: '/img/workpage/gender1.png',
      },
    ],
  },
  {
    rowTitle: '( Digital Work/ CG )',
    Cards: [
      {
        title: 'Digital Biotopia  ',
        description: '3D Art Work/ AI Research',
        imgUrl: '/img/workpage/bio1.png',
      },
      {
        title: 'I dream, I dreamt',
        description: '3D Animation',
        imgUrl: '/img/workpage/dreamCG1.png',
      },
    ],
  },
  {
    rowTitle: '(Photography)',
    Cards: [
      {
        title: 'Replacement  ',
        description: '2021',
        imgUrl: '/img/workpage/replacement 2.jpg',
      },
      {
        title: 'Mirror Mirror',
        description: '2016-2020 ',
        imgUrl: '/img/workpage/mirror3.jpg',
      },
      {
        title: 'fragment',
        description: '2018 ',
        imgUrl: '/img/workpage/fragment8.jpg',
      },
      {
        title: 'Soft Memory',
        description: '2015',
        imgUrl: '/img/workpage/soft18.jpg',
      },
    ],
  },
  {
    rowTitle: '(Fine Arts)',
    Cards: [
      {
        title: 'What is love?',
        description: 'Mixed Material/ 2023',
        imgUrl: '/img/workpage/whatislove1.jpg',
      },
      {
        title: 'Distant Lover ',
        description: 'Oil Painting/ 2019',
        imgUrl: '/img/workpage/distantlover.jpg',
      },
      {
        title: 'Lotus',
        description: 'LACQUER PAINTING/2017 ',
        imgUrl: '/img/workpage/lotus1.jpg',
      },
      {
        title: 'Liquid Painting',
        description: '2024',
        imgUrl: '/img/workpage/liquid1.jpg',
      },
    ],
  },
  {
    rowTitle: '(Short Film)',
    Cards: [
      {
        title: 'Stay at Home',
        description: 'Short Film Project/ coming soon',
        imgUrl: '/img/workpage/stayathome7.png',
      },
     
    ],
  },
];

  

function Card({ title, description, imgUrl, path }:any ) {
  return (
    <div
      style={{
        padding: '8px',
        width: '100%'
      }}
    >
      <Image
        src={imgUrl}
        alt={`${title + description} card`}
        style={{ height: '426px', width: '100%', objectFit:"cover"}} width={1280} height={1280}
      />
      <div style={{fontWeight:"bold"}}>
      <h2>{title}</h2>
      </div>
      <div className="text-gray-500 text-base">
      <p>{description}</p>
      </div>
    </div>
  );
}
// function Card({ title, description, imgUrl, path }:any ) {
//     return (
//       <Link href={path}>
//           <div
//             style={{
//               padding: '8px',
//               width: '100%'
//             }}
//           >
//             <Image
//               src={imgUrl}
//               alt={`${title + description} card`}
//               style={{ height: '426px', width: '100%', objectFit:"cover"}} width={1280} height={1280}
//             />
//             <div style={{fontWeight:"bold"}}>
//               <h2>{title}</h2>
//             </div>
//             <div className="text-gray-500 text-base">
//               <p>{description}</p>
//             </div>
//           </div>
//       </Link>
//     );
//   }

// function Row({ rowTitle, Cards }:any) {
//   return (
//     <>
//       <h1 style={{fontSize:"50px", textAlign:"center",fontStyle:'italic'}}>{rowTitle}</h1>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           width: '100%',
//           marginBottom: '100px',
//           marginTop: '30px',
//         }}
//       >
//         {Cards.map((card:any) => (
//           <Card key={card.title} {...card} />
//         ))}
//       </div>
//     </>
//   );
// }

function Row({ rowTitle, Cards }: any) {
    return (
      <>
        {/* Style for large screens */}
        <div className="hidden md:block"> {/* Hide on small screens */}
          <h1 style={{ fontSize: "50px", textAlign: "center", fontStyle: 'italic', marginBottom: '60px', marginTop: '100px' }}>{rowTitle}</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            {Cards.map((card: any) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
  
        {/* Style for mobile screens */}
        <div className="md:hidden"> {/* Hide on medium and larger screens */}
          <h1 className="text-3xl font-italic text-center mt-10 mb-6">{rowTitle}</h1>
          <div className="flex flex-wrap justify-between mb-12">
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
    <div style={{padding: '50px'}}>
      {Rows.map((row) => (
        <Row key={row.rowTitle} {...row} />
      ))}
      <div style={{ marginTop: '50px' }}> {/* Adjust margin top as needed */}
        <IntroductionComp />
      </div>
    </div>
  );
}
