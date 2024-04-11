import { Autour_One } from "next/font/google";
import ImageSlider from "@/components/ImageSlider";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

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
        fragment
      </h1>
      <div>{/* <ImageSlider /> */}</div>
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
        <em>fragment</em> a tender film project crafted from the whispers of my
        travels and the echoes of the cities I've called home. For in every
        whisper of the wind and every ray of sunlight, we find solace in the
        gentle embrace of the world around us.
        <br />
        <br />
        Films shot in Bangkok, Shanghai, Seoul, Changzhou, Chiang Mai, Tokyo,
        Hang zhou, London, Yokohama, Margate
        <br />
        <br />
      </p>
    </main>
  );
}
