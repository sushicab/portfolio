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
        Lotus
      </h1>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "40px" }}
      >
        <img
          src="/img/projects/fine arts/lotus/lotus1.jpg"
          alt="lotus"
          style={{
            width: "60%",
            height: "auto",
          }}
        />
      </div>
      <p
        style={{
          textAlign: "left",
          width: "70%",
          height: "auto",
          margin: "auto",
          marginTop: "80px",
          marginBottom: "150px",
        }}
      >
        <em>Lotus</em> - Lacquer painting on the black board.
        <br />
        <br />
        Size: 1m x 1m
        <br />
        <br />
        Material: eggshell, lacquer, sand, colors, etc.
        <br />
        <br />
        10 weeks, experimental work.
        <br />
        <br />
        Lacquer painting is a traditional art form that originated in East Asia,
        particularly in China, Japan, and Korea. It involves applying multiple
        layers of natural lacquer, often derived from the sap of the lacquer
        tree, onto a surface such as wood, paper, or metal. Each layer is
        carefully applied and allowed to dry before the next layer is added.
      </p>
    </main>
  );
}
