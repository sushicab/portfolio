import { Covered_By_Your_Grace } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import WorkPageLink from "@/components/WorkPageLink";
import IntroductionComp from "@/components/IntroductionComp";
import React from "react";
import { link } from "fs";

const Rows = [
  {
    rowTitle: "(Interactive Experience)",
    Cards: [
      {
        title: "Emolleia",
        description: "Interactive Wearable Device/ 2021 ",
        imgUrl: "/img/workpage/emolleia4.png",
        path: "/work/emolleia",
      },
      {
        title: "i dream, i dreamt",
        description: "Interactive Installation/ 2021 ",
        imgUrl: "/img/workpage/idream4.jpg",
        path: "/work/idream",
      },
      {
        title: "Shibuya in VR",
        description: "VR Point Cloud Experience/ 2022",
        imgUrl: "/img/workpage/shibuyaVR1.png",
        path: "/work/shibuyaVR",
      },
      {
        title: "AR Experience",
        description: "Augmented Reality projects",
        imgUrl: "/img/workpage/gender1.png",
        path: "/work/AR",
      },
    ],
  },
  {
    rowTitle: "(3D Visuals)",
    Cards: [
      {
        title: "Digital Biotopia  ",
        description: "3D Art Work/ AI Research/ 2023",
        imgUrl: "/img/workpage/bio1.png",
        path: "/work/digitalbiotopia",
      },
      {
        title: "I dream, I dreamt",
        description: "3D Animation/ 2021",
        imgUrl: "/img/workpage/dreamCG1.png",
        path: "/work/idreamCG",
      },
    ],
  },
  {
    rowTitle: "(Photography)",
    Cards: [
      {
        title: "Replacement  ",
        description: "2021",
        imgUrl: "/img/projects/photography/replacement/2.jpg",
        path: "/work/replacement",
      },
      {
        title: "Mirror Mirror",
        description: "2016-2020 ",
        imgUrl: "/img/workpage/mirror3.jpg",
        path: "/work/mirrorMirror",
      },
      {
        title: "Fragment",
        description: "2018 ",
        imgUrl: "/img/workpage/fragment8.jpg",
        path: "/work/fragment",
      },
      {
        title: "Soft Memory",
        description: "2015",
        imgUrl: "/img/workpage/soft18.jpg",
        path: "/work/softMemory",
      },
    ],
  },
  {
    rowTitle: "(Fine Arts)",
    Cards: [
      {
        title: "What is love?",
        description: "Mixed Material/ 2023",
        imgUrl: "/img/workpage/whatislove1.jpg",
        path: "/work/whatislove",
      },
      {
        title: "Liquid Painting",
        description: "for ' Remix' / 2023",
        imgUrl: "/img/workpage/liquid1.jpg",
        path: "/work/liquidPainting",
      },
      {
        title: "Distant Lover ",
        description: "Oil Painting/ 2019",
        imgUrl: "/img/workpage/distantlover.jpg",
        path: "/work/distantLover",
      },
      {
        title: "Lotus",
        description: "Lacquer Painting/ 2017 ",
        imgUrl: "/img/workpage/lotus1.jpg",
        path: "/work/lotus",
      },
    ],
  },
  {
    rowTitle: "(Short Film)",
    Cards: [
      {
        title: "Stay at Home",
        description: "Short Film Project/ coming soon",
        imgUrl: "/img/workpage/stayathome7.png",
        path: "/work/stayatHome",
      },
    ],
  },
];

function Card({ title, description, imgUrl, path }: any) {
  return (
    <div style={{ padding: "8px", width: "100%" }}>
      <Link href={path}>
        <Image
          src={imgUrl}
          alt={`${title} - ${description} card`}
          style={{ height: "426px", width: "100%", objectFit: "cover" }}
          width={1280}
          height={1280}
        />
        <div style={{ fontWeight: "bold" }}>
          <h2>{title}</h2>
        </div>
        <div className="text-gray-500 text-base">
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
function Row({ rowTitle, Cards }: any) {
  return (
    <>
      {/* Style for large screens */}
      <div className="hidden md:block">
        {" "}
        {/* Hide on small screens */}
        <h1
          style={{
            fontSize: "50px",
            textAlign: "center",
            fontStyle: "italic",
            marginBottom: "60px",
            marginTop: "100px",
          }}
        >
          {rowTitle}
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {Cards.map((card: any) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* Style for mobile screens */}
      <div className="md:hidden">
        {" "}
        {/* Hide on medium and larger screens */}
        <h1
          className="text-3xl text-center mt-20 mb-6"
          style={{
            fontStyle: "italic",
          }}
        >
          {rowTitle}
        </h1>
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
      <div style={{ marginTop: "50px" }}>
        {" "}
        <IntroductionComp />
      </div>
    </main>
  );
}
