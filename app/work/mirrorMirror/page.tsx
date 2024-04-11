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
        mirror mirror
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
        <em>mirror mirror</em> is a photography project that I continued doing
        from 2016 to 2020. It serves as a poignant collection, encapsulating the
        adolescent experiences of my friends—those tender years between 18 and
        24—through a mosaic of their photographs, reflections, inquiries, and
        the spectrum of emotions they navigate.
        <br />
        <br />
        Thinking about the essence of adolescence has been a persistent pursuit
        for me. It's a phase rife with tumult, pain, confusion, fervor, and
        affection—a whirlwind of emotions converging simultaneously. Amidst this
        chaos, I sought to unearth its unique significance, thus birthing
        <em>mirror mirror</em> Through this endeavor, I embark on a journey to
        document the lives of friends who share the same age bracket as me. They
        are companions, roommates, classmates, and occasionally, strangers whose
        paths intersect with mine. Yet, in capturing their existence and
        emotional landscapes, I find myself peering into the depths of my own
        soul.
        <br />
        <br />
      </p>
    </main>
  );
}
