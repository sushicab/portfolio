import { Autour_One } from "next/font/google";

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
        Lotus
      </h1>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img
          src="/img/projects/fine arts/lotus/lotus1.jpg"
          alt="lotus"
          width="50%"
          height="auto"
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
        <em>Lotus</em> - Lacquer painting 1m x 1m on the blackboard.
        <br />
        <br />
        Material: eggshell, lacquer, sand, colors, etc.
        <br />
        <br />
        10 weeks, experimental work.
        <br />
        <br />
        Lacquer painting is a form of painting with lacquer that was practiced
        in China and Japan for decoration.
      </p>
    </main>
  );
}
