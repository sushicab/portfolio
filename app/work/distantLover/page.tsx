import { Autour_One } from 'next/font/google';

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
        Distant Lover
      </h1>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <img
          src='/img/projects/fine arts/distantlover.jpg'
          alt='lotus'
          style={{ width: '50%', height: 'auto' }}
        />
      </div>
      <p
        style={{
          textAlign: 'left',
          width: '60%',
          height: 'auto',
          margin: 'auto',
          marginTop: '80px',
          marginBottom: '150px',
        }}
      >
        <em>Distant Lover</em> / 2019
        <br />
        <br />
        148 x 105mm, oil on canvas.
        <br />
        <br />
        Love is tender, gentle, subtle, unpredictable but strong. Love is when I
        look you in the eyes, I only dare to do Eskimo Kiss.
        <br />
        <br />
        Exhibition:
        <br />
        <br />
        &apos;Boys Love Life&apos; in Picaresque Art Gallery, Tokyo, Japan June/
        2020
      </p>
    </main>
  );
}
