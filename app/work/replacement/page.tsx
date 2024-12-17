import React from "react";
import ReplacementCarousel from "@/components/ReplacementCarousel";

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
        replacement
      </h1>
      <ReplacementCarousel />

      <div style={{ justifyContent: "center", display: "flex" }}></div>
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
        We’re obsessed with INSTAGRAM! Among us, I manage 4 accounts, Sara
        oversees 5, and Hope curates 3. As for Yumiko, she’s in a league of her
        own with 8 accounts.
        <br />
        <br />
        What sets each account apart? It’s hard to say. By creating new
        profiles, I have the freedom to construct different identities for
        someone named “Yifan”—whether or not you know them in real life. I can
        present Yifan as an ambitious photographer with an eye for the arts, a
        quiet student blending seamlessly into campus life, or a social media
        enthusiast documenting every moment with 10 stories a day. It’s not
        about who Yifan truly is, or what they are capable of—it’s about the
        Yifan I choose to present.
        <br />
        <br />
        This photography project was born from a curiosity to reflect on how
        social media has altered our sense of identity and how we perceive
        others. Cyber identity has transcended screens; it now replaces the
        impressions we once held of each other in memory. The image of{" "}
        <em>You</em> has become fragmented, dismantled, and reassembled,
        replaced by carefully curated personas. Through this project, I aim to
        explore how the digital world reshapes our authentic identities and,
        more fundamentally, challenges the question: <em>Who are we?</em>
        <br />
        <br />
      </p>
    </main>
  );
}
