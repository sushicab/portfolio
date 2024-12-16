import { Autour_One } from "next/font/google";
import React from "react";
import SoftMemoryCarousel from "@/components/SoftMemoryCarousel";

export default function About() {
  return (
    <main style={{ paddingTop: "80px&quot;}}>
      <h1
        style={{
          fontSize: "40px",
          fontStyle: "italic",
          textAlign: "center",
          marginTop: "100px",
          marginBottom: "30px",
        }}
      >
        Soft Memory
      </h1>
      <SoftMemoryCarousel />
      <div></div>
      <div style={{ justifyContent: "center", display: "flex&quot;}}></div>
      <p
        style={{
          textAlign: "left",
          width: "60%",
          height: "auto",
          margin: "auto",
          marginTop: "80px",
          marginBottom: "150px",
        }}
      >
        <em>Soft Memory</em>, a Polaroid project born from deep appreciation for
        uncertainty, each image is a portal to cherished moments and lost
        fragments of time.
        <br />
        <br />
        In <em>Soft Memoryr</em>, I invite you to join me on a journey through
        the snapshots of yesteryears, where every image tells a story and every
        frame holds a piece of my heart. Explore the beauty of ineffable
        connection that forges between past and present.
      </p>
    </main>
  );
}
