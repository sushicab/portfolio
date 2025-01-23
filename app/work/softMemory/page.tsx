import { Autour_One } from "next/font/google";
import React from "react";
import SoftMemoryCarousel from "@/components/SoftMemoryCarousel";

export default function About() {
  return (
    <main style={{ paddingTop: "80px" }}>
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
      <div style={{ justifyContent: "center", display: "flex" }}></div>
      <p
       className="photograph-text"
      >
        <em>Soft Memory</em>, a Polaroid project born from my reverence for the
        ephemeral nature of memory. Photography, for me, transforms intangible
        and intimate moments into something tangible—a slice of time held in my
        hands. This ongoing project began when I was 18, driven by a quiet hope
        to preserve fleeting fragments of life.
        <br />
        <br />
        Some of the people captured in these photos no longer exist in this
        physical world, yet they remain within the tangible form of these images
        and, more profoundly, in my heart. Nan Goldin wrote in{" "}
        <em>The Ballad of Sexual Dependency</em>:{" "}
        <em>
          “I used to think that I could never lose anyone if I photographed them
          enough. In fact, my pictures show me how much I’ve lost.”
        </em>{" "}
        For me, it is different. I believe I have never truly lost anyone. I
        feel blessed to have shared moments with them; their presence continues
        to influence and shape me. I appreciate their presence and I deelpy
        cherish the moments we shared together.
      </p>
    </main>
  );
}
