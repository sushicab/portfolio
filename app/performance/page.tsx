import { Covered_By_Your_Grace } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { link } from "fs";

const Rows = [
  {
    rowTitle: "(Interactive Experience)",
    Cards: [
      {
        title: "Shibuya in VR",
        description: "VR Point Cloud Experience/ 2022",
        imgUrl: "/img/workpage/shibuyaVR1.png",
        path: "/work/shibuyaVR",
      },
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
        title: "AR Experience",
        description: "Augmented Reality projects",
        imgUrl: "/img/workpage/gender1.png",
        path: "/work/AR",
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
      <div style={{ marginTop: "50px" }}> </div>
    </main>
  );
}
