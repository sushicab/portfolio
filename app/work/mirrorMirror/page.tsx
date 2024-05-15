import { Autour_One } from 'next/font/google';
import React from 'react';
import MirrorCarousel from '@/components/MirrorCarousel';

export default function About() {
  return (
    <main>
      <h1
        style={{
          fontSize: '40px',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '100px',
          marginBottom: '30px',
        }}
      >
        mirror mirror
      </h1>
      <MirrorCarousel />
      <div></div>
      <div style={{ justifyContent: 'center', display: 'flex' }}></div>
      <p
        style={{
          textAlign: 'left',
          width: '60%',
          height: 'auto',
          margin: 'auto',
          marginTop: '80px',
          marginBottom: '200px',
        }}
      >
        <em>mirror mirror</em> is a photography project that I continued doing
        from 2016 to 2022. This project documents the adolescent experiences of
        my friends -- those tender time between 18 and 24 -- through a mosaic of
        their photographs, reflections, doubts, and the spectrum of emotions
        they lived through.
        <br />
        <br />
        Thinking about the essence of adolescence has been a persistent pursuit
        for me. It’s a phase rife with tumult, pain, confusion, fervor, and
        affection—a whirlwind of emotions converging simultaneously. Those faces
        in the photos, they are my dear friends, roommates, classmates, and
        occasionally, strangers whose paths intersect with mine.In capturing
        their existence and emotional landscapes, I find myself in their eyes.
        <br />
      </p>
    </main>
  );
}
