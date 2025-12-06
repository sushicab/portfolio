import React from 'react';
import ProjectHeader from '@/components/ProjectHeader';
import MediaGrid from '@/components/MediaGrid';

const skyn = () => {
  const metadata = [
    { label: 'Year', value: '2025' },
    {
      label: 'Contribution',
      value: ' Visual Design ',
    },
    {
      label: 'Collaborator',
      value: 'UltraSuperNew',
    },
    {
      label: 'Category',
      value: 'Interactive Installation',
    },
    {
      label: 'Client',
      value: 'UltreSuperNew, SKYN',
    },
  ];

  // Grid layout items - with variable widths (now empty since video is hero)
  const gridItems: any[] = [];

  // Pair layout items - will be displayed 2 per row
  const pairItems = [
    {
      type: 'video' as const,
      src: '/img/projects/skyn/skyn_r_5.mp4',
      alt: 'Ainomori pair 2',
      width: 100 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/skyn/img-1.jpg',
      alt: 'Ainomori pair 4',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'video' as const,
      src: '/img/projects/skyn/skyn_7.mp4',
      alt: 'Ainomori pair 1',
      width: 50 as const, // Width ignored in pair layout
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'video' as const,
      src: '/img/projects/skyn/skyn.mp4',
      alt: 'Ainomori pair 4',
      width: 100 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/skyn/img-2.jpg',
      alt: 'Ainomori pair 1',
      width: 50 as const, // Width ignored in pair layout
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'video' as const,
      src: '/img/projects/skyn/skyn_r_2.mp4',
      alt: 'Ainomori pair 2',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
  ];

  return (
    <>
      {/* Hero Video - Full width above ProjectHeader */}
      <div style={{ width: '100%' }}>
        <video
          src="/img/projects/skyn/skyn_r_4.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <ProjectHeader
        title="SKYN SOFT PULSE"
        description={[
          'Soft Pulse is an interactive installation exploring the invisible connection between couples. Pairs of adults — strangers and established couples — were connected to heart-rate sensors, seated back to back with all visual and auditory cues removed. The installation translates this intimate data into an immersive experience through real-time sensors, data visualization, and synchronized light bulbs — making the intangible bond between partners visible and felt.',
          'My role in this project is to develop the two-stage visual system in TouchDesigner, translating real-time heart rate data into immersive projections. Stage one visualizes the searching phase — chaotic, fragmented rhythms pulse through digital space as heartbeats seek connection. Stage two transforms when synchronization occurs — visuals shift into harmonic, glowing forms with soft, warm tones, reflecting the emotional resonance between partners.',
          'Soft Pulse was exhibited at UltraSuperNew Kura Gallery in Shibuya, Tokyo from December 24th-26th, 2025.',
        ]}
        metadata={metadata}
      />

      {/* Remove the first video from gridItems since it's now the hero */}
      {gridItems.length > 0 && <MediaGrid items={gridItems} />}
      <MediaGrid items={pairItems} layout="pair" />
    </>
  );
};

export default skyn;
