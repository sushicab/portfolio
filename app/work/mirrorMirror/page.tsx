import { Autour_One } from 'next/font/google';
import React from 'react';
import MirrorCarousel from '@/components/MirrorCarousel';

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
        mirror mirror
      </h1>
      <MirrorCarousel />
      <div></div>
      <div style={{ justifyContent: 'center', display: 'flex' }}></div>
      <p className="photograph-text">
        <em>mirror mirror</em> is a photography project that I continued doing from 2016 to 2022.
        This project documents the adolescent experiences of my friends -- those tender time between
        18 and 24 -- through the photographs of them, and their warmness, softness, and the spectrum
        of emotions they lived through.
        <br />
        <br />
        Adolescence has always fascinated me. It is a time of turbulence, confusion, pain, and
        fervent affection, where we begin questioning our identities more than ever. It is also the
        transition from youth to adulthood—a period marked by inevitable mistakes and learning the
        harsh realities of the world in ways we never imagined. The faces in these photos are my
        dear friends, roommates, classmates, and, at times, strangers whose paths briefly crossed
        with mine. Through capturing their existence and emotional landscapes, I found pieces of
        myself reflected in their eyes.
        <br />
        <br />
        When I revisit this project, I feel deeply moved. It reminds me of how much my friends and I
        have grown, of the resilience we carried as we navigated those uncertain years. I am proud
        that we made it through—these images stand as a warm record of our experiences, our growth,
        and the fleeting beauty of that shared chapter of life.
      </p>
    </main>
  );
}
