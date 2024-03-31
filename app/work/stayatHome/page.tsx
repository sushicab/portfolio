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
        Stay at Home
      </h1>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img
          src="/img/projects/short film/screenshot/stayathome1.png"
          alt="lotus"
          width="100%"
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
        <em>Stay at Home</em>
        <br />
        <br />
        short film/ documentary project, 2024
        <br />
        <br />
        Coming soon
      </p>
    </main>
  );
}
