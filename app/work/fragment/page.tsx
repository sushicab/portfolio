import { Autour_One } from 'next/font/google';
import FragmentCarousel from '@/components/FragmentCarousel';
import React from 'react';

export default function About() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <h1
        style={{
          fontSize: '40px',
          fontStyle: 'italic',
          textAlign: 'center',
          marginTop: '100px',
          marginBottom: '30px',
        }}
      >
        Fragment
      </h1>
      <FragmentCarousel />
      <div></div>
      <div style={{ justifyContent: 'center', display: 'flex' }}></div>
      <p className="photograph-text">
        <em>Fragment</em>, a tender film project born from the whispers of my travels and the echoes
        of the cities I’ve called home. Just as I cherish the memories shared with people, I’ve
        discovered an intimate, personal connection with cities—each one leaving its mark, a soft
        trace of its presence in my heart.
        <br />
        <br />
        Films shot in Shanghai, Bangkok, Seoul, Changzhou, Chiang Mai, Tokyo, Hang zhou, London,
        Yokohama, Margate..
        <br />
        <br />
      </p>
    </main>
  );
}
