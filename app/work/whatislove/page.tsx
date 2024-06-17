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
        What is love?
      </h1>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img
          src="/img/projects/fine arts/what is love/whatislove1.jpg"
          alt="whatislove"
          style={{
            width: "50%",
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
        What is LOVE？
        <br />
        .
        <br />
        .
        <br />
        .
        <br />
        .
        <br />
        .....oil paint, acyclic, Sonnet 116, wax, tears, red thread, petals,
        softness, crayon, ink, Xuan paper, and love. 24cm * 33cm on canvas.
      </p>
    </main>
  );
}
