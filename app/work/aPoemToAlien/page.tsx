import React from 'react';
import ProjectHeader from '@/components/ProjectHeader';
import MediaGrid from '@/components/MediaGrid';

const aPoemToAlien = () => {
  const metadata = [
    { label: 'Year', value: '2025' },
    {
      label: 'Contribution',
      value: 'Concet & Visual Design & Interactive Design & System Implementation',
    },
    {
      label: 'Collaborator',
      value: 'Yan He',
    },
    {
      label: 'Category',
      value: 'Interactive Installation',
    },
    {
      label: 'Client',
      value: 'UltreSuperNew',
    },
  ];

  // Grid layout items - with variable widths (now empty since video is hero)
  const gridItems: any[] = [];

  // Pair layout items - will be displayed 2 per row
  const pairItems = [
    {
      type: 'image' as const,
      src: '/img/projects/apoemToAlien/img-3.jpg',
      alt: 'Ainomori pair 4',
      width: 100 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'video' as const,
      src: '/img/projects/apoemToAlien/vid-1.mov',
      alt: 'Ainomori pair 2',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/apoemToAlien/img-1.jpg',
      alt: 'Ainomori pair 1',
      width: 50 as const, // Width ignored in pair layout
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/apoemToAlien/img-4.jpg',
      alt: 'Ainomori pair 4',
      width: 100 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/apoemToAlien/img-5.jpg',
      alt: 'Ainomori pair 1',
      width: 50 as const, // Width ignored in pair layout
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'video' as const,
      src: '/img/projects/apoemToAlien/vid-3.mov',
      alt: 'Ainomori pair 2',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },

    {
      type: 'video' as const,
      src: '/img/projects/apoemToAlien/vid-4.mov',
      alt: 'Ainomori pair 4',
      width: 100 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
  ];

  return (
    <>
      {/* Hero Video - Full width above ProjectHeader */}
      <div style={{ width: '100%' }}>
        <video
          src="/img/projects/apoemToAlien/vid-2.mov"
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
        title="A POEM TO ALIEN"
        description={[
          'A Poem to Alien is an interactive light installation that transmits messages to the unknown beyond. Using Leap Motion to capture hand gestures, the work transforms movement into real-time visual patterns — lines, circles, and squares — projected onto walls as a shared symbolic language. ',
          "Inspired by ancient signals and speculative interstellar communication, audiences compose their own secret messages through intuitive gestures. The interaction is smooth and latency-minimized through an optimized frame pipeline, with gestures directly modulating color shift, opacity, blend modes, and geometric transformations in real-time. Created for UltraSuperNew's opening in Shibuya, Tokyo.",
        ]}
        metadata={metadata}
      />

      {/* Remove the first video from gridItems since it's now the hero */}
      {gridItems.length > 0 && <MediaGrid items={gridItems} />}
      <MediaGrid items={pairItems} layout="pair" />
    </>
  );
};

export default aPoemToAlien;
