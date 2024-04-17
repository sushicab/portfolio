import { Autour_One } from "next/font/google";
import React from "react";
import SoftMemoryCarousel from "@/components/SoftMemoryCarousel";

export default function About() {
  return (
    <main>
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
      {/* <SoftMemoryCarousel /> */}
      <div></div>
      <div style={{ justifyContent: "center", display: "flex" }}></div>
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
        a timeless medium, as a delicate dance of uncertainty, the steadfast
        preservation of colors and memories, and the ineffable connection it
        forges between past and present.
        <br />
        <br />
        Each snapshot is a window to the past, a tangible vessel carrying
        emotions and experiences frozen in time. As I hold these Polaroids in my
        hands, I feel the weight of nostalgia wash over me, each image a portal
        to cherished moments and lost fragments of time.
        <br />
        <br />
        In <em>Soft Memoryr</em>, I invite you to join me on a journey through
        the snapshots of yesteryears, where every image tells a story and every
        frame holds a piece of my heart. Explore the beauty of impermanence and
        the enduring power of memory as we traverse the landscapes of emotion
        captured on Polaroid film.
      </p>
    </main>
  );
}
