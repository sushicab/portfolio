import React from 'react';
import PageInfo from '@/components/PageInfo';
import ProjectHeader from '@/components/ProjectHeader';
import MediaGrid from '@/components/MediaGrid';

const ainomori = () => {
  const metadata = [
    { label: 'Year', value: '2025' },
    {
      label: 'Contribution',
      value: 'Visual Design & Motion Design & Visual System Implementation',
    },
    {
      label: 'Collaborator',
      value: 'Diana Ganea, Hanako Lowery,Yan He',
    },
    {
      label: 'Category',
      value: 'Research Project',
    },
  ];

  // Grid layout items - with variable widths (now empty since video is hero)
  const gridItems: any[] = [];

  // Pair layout items - will be displayed 2 per row
  const pairItems = [
    {
      type: 'image' as const,
      src: '/img/projects/ainomori/img_6.webp',
      alt: 'Ainomori pair 4',
      width: 100 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/ainomori/img_1.png',
      alt: 'Ainomori pair 1',
      width: 50 as const, // Width ignored in pair layout
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/ainomori/img_2.png',
      alt: 'Ainomori pair 2',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },

    {
      type: 'video' as const,
      src: '/img/projects/ainomori/2.mp4',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/ainomori/img_4.png',
      alt: 'Ainomori pair 4',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/ainomori/img_3.png',
      alt: 'Ainomori pair 4',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'video' as const,
      src: '/img/projects/ainomori/4.mov',
      alt: 'Ainomori pair 4',
      width: 50 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'image' as const,
      src: '/img/projects/ainomori/img_7.webp',
      alt: 'Ainomori pair 4',
      width: 100 as const,
      aspectRatio: 'original', // Maintains original aspect ratio
    },
    {
      type: 'video' as const,
      src: '/img/projects/ainomori/aino_5.mp4',
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
          src="/img/projects/ainomori/1.mp4"
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
        title="AINOMORI"
        description={[
          'Ai no Mori examines the environmental memory of Akishima, Tokyo, a place at risk by a new data centre development that is being built on the citys green space to power the increasing demand for AI in Japan. It is just one of similar developments being proposed in the country.',
          "Uses AI as both tool and subject, we tried to reproduce a memory reconstruction engine simulating remembrance of a place it has never truly known. It stitches together fragments—images, sounds, phrases—suggesting how machines might try (and fail) to preserve what their own growth destroys. We are working toward an open-source platform where Akishima's residents can upload their memories as a participatory archive of resistance.",
        ]}
        metadata={metadata}
      />

      {/* Remove the first video from gridItems since it's now the hero */}
      {gridItems.length > 0 && <MediaGrid items={gridItems} />}
      <MediaGrid items={pairItems} layout="pair" />
    </>
  );
};

export default ainomori;
