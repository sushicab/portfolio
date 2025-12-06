'use client';

import React from 'react';
import ProjectHeader from '@/components/ProjectHeader';
import MediaGrid from '@/components/MediaGrid';

const ExitExe = () => {
  const metadata = [
    { label: 'Year', value: '2025' },
    { label: 'Category', value: 'Live Audio-Visual Performance' },
    { label: 'Role', value: 'Concept, Visual' },
    { label: 'Collaborator', value: 'Yan He, Haruna' },
    { label: 'Venue', value: 'Ultra Super New Kura Galley, Shibuya, Tokyo' },
  ];

  const description = [
    'Memory is just a fleeting illusion, and home is a place we spend our whole lives searching for. Exit.exe is a visual diary we present with our most intimate selves, intertwining real footage from our hometown in Chongqing and Changzhou, China with surreal fragments, dreamlike childhood memories, and fleeting visions that shift between slumber and wakefulness.',
    'We recreated scenes from childhood memories and past dreams using Unreal Engine. Spaces like the computer classroom, swimming pool, music room, and school hallway were modeled after our own school experiences in China from the 2000s. Rendered in a liminal space aesthetic, these environments provoking a looping, inescapable sensation, mirroring the surreal, unsettling feeling often found in nightmare.',
    'It was an one-hour live A/V performance held at Ultra Super New Kura on March.1st, 2025.',
  ];

  const mediaItems = [
    {
      type: 'image' as const,
      src: '/img/projects/performance/exit/exit1.JPG',
      alt: 'Exit.exe Performance Scene 1',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'image' as const,
      src: '/img/projects/performance/exit/exit5.jpg',
      alt: 'Exit.exe Performance Scene 2',
      width: 50 as const,
      aspectRatio: 'original',
    },

    {
      type: 'video' as const,
      src: '/img/projects/performance/exit/vid-3.mp4',
      alt: 'Exit.exe Performance Scene 1',
      width: 100 as const,
      aspectRatio: 'original',
    },
    {
      type: 'video' as const,
      src: '/img/projects/performance/exit/IG1.mp4',
      alt: 'Exit.exe Performance Scene 1',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'image' as const,
      src: '/img/projects/performance/exit/img-2.png',
      alt: 'Exit.exe Performance Scene 1',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/ZZr9I5Jzdp0?si=vcfS-x4NANshT5ms',
      caption: 'Main Performance',
      width: 100 as const,
      aspectRatio: '16-9',
    },
    {
      type: 'image' as const,
      src: '/img/projects/performance/exit/exit4.png',
      alt: 'Exit.exe CG Environment',
      width: 100 as const,
      aspectRatio: 'original',
    },
    {
      type: 'video' as const,
      src: 'https://www.youtube.com/embed/E0a-dcXvA9E?si=9MIbvPyokfIbj9xK',
      caption: 'Behind the Scenes',
      width: 100 as const,
      aspectRatio: '16-9',
    },
  ];

  return (
    <div>
      <div style={{ width: '100%' }}>
        <video
          src="/img/projects/performance/exit/vid-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <ProjectHeader title="Exit.exe" description={description} metadata={metadata} />
      <MediaGrid items={mediaItems} layout="pair" />
    </div>
  );
};

export default ExitExe;
