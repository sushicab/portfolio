import { Autour_One } from "next/font/google";

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
        Liquid Painting
      </h1>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img
          src="/img/projects/fine arts/liquid painting/liquid1.jpg"
          alt="lotus"
          style={{
            width: "70%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
      >
        <img
          src="/img/projects/fine arts/liquid painting/liquid2.jpg"
          alt="lotus"
          style={{
            width: "70%",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "50px" }}
      >
        <img
          src="/img/projects/fine arts/liquid painting/liquid3.jpg"
          alt="lotus"
          style={{
            width: "70%",
            height: "auto",
          }}
        />
      </div>
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
        <em>Liquid Painting</em> / 2023
        <br />
        <br />
        148 x 105mm, liquid paints on paper board.
        <br />
        <br />
        Three liquid painting created as the foundational material for a
        generative visual research project
        <a
          href="https://theshift.tokyo/research/remix/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontStyle: "italic" }}
        >
          Remix
        </a>
        created by theshift.tokyo, exploring the dynamic interplay of organic
        forms and computational processes.
      </p>
    </main>
  );
}
