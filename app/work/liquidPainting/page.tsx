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
        Liquid Painting
      </h1>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <img
          src='/img/projects/fine arts/liquid painting/liquid1.jpg'
          alt='lotus'
          style={{
            width: '70%',
            height: 'auto',
          }}
        />
      </div>
      <div
        style={{ justifyContent: 'center', display: 'flex', marginTop: '50px' }}
      >
        <img
          src='/img/projects/fine arts/liquid painting/liquid2.jpg'
          alt='lotus'
          style={{
            width: '70%',
            height: 'auto',
          }}
        />
      </div>
      <div
        style={{ justifyContent: 'center', display: 'flex', marginTop: '50px' }}
      >
        <img
          src='/img/projects/fine arts/liquid painting/liquid3.jpg'
          alt='lotus'
          style={{
            width: '70%',
            height: 'auto',
          }}
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
        <em>Liquid Painting</em> / 2023
        <br />
        <br />
        148 x 105mm, liquid paints on paper board.
        <br />
        <br />A practice for a generative visual research project
        &apos;Remix&apos; created by theshift.tokyo
      </p>
    </main>
  );
}
