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
        <em>Stay at Home </em>
        is a short film that I directed, shot, and produced in 2023. Initially,
        my aim was to document the experience of staying at home while dealing
        with injured knees and COVID-19. This period of confinement led me to
        develop a deeper understanding and stronger connection with my family in
        China, who were grappling with the hardships brought on by severe
        lockdown measures due to COVID-19.
        <br />
        <br />
        The first draft of the film primarily consisted of footage depicting my
        attempts to care for myself, accompanied by a voice-over of me reading
        messages sent by my parents during their battle with COVID-19.
        <br />
        <br />
        Upon returning home to China, I was inspired to create the second draft
        of the film. During my two-week stay with my parents and grandmother, I
        finally took the opportunity to visit my grandfather's tomb, paying my
        respects to him. He had unfortunately passed away in January 2021, and I
        hadn't been able to see him due to the strict lockdown policies in China
        at the time. Editing together footage from my life in Tokyo with scenes
        from my time spent at home in China, I found that they intertwined.This
        juxtaposition underscored the surreal nature of memory, particularly
        when it comes to those people who have departed from this world sooner
        than you expected.
        <br />
        <br />
        This project reflects on my feelings about my family, hometown,
        memories, and the alienation of living away from home for a long time.
        It also explores thoughts about life and death and the journey of
        self-discovery.
        <br />
        <br />
        <b>short film/ documentary project, 2024</b>
        <br />
        <br />
        Coming soon
      </p>
    </main>
  );
}
