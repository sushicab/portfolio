'use client';

import React from 'react';
import ProjectHeader from '@/components/ProjectHeader';
import MediaGrid from '@/components/MediaGrid';

const HowToBeACloud = () => {
  const metadata = [
    { label: 'Year', value: '2025' },
    { label: 'Category', value: 'Interactive WebAR Experience' },
    { label: 'Contribution', value: 'Concept, UI/UX Design, Visual Design, CG, 3D Production' },
    { label: 'Collaborator', value: 'Yan He (Develeopment)' },
    { label: 'Exhibition', value: 'Tokyo Creative Salon 2025' },
    { label: 'Venue', value: 'Haneda Airport Terminal 1' },
    { label: 'Client', value: 'Haneda Airport' },
  ];

  const description = [
    'How to Be a Cloud is a meditative WebAR experience blurring the line between the tangible and the ephemeral. Through your smartphone, soft floating clouds appear in the real world. Tap the screen, and paper planes take flight, drifting gently around the clouds like a childhood memory of folding dreams and letting them go. Just like clouds, our thoughts are always shifting — soft, abstract, and fleeting.',
    'Together with Yan, we brought this project from concept to R&D to full implementation in 8th Wall. My role spans concept development, UI/UX design, visual design, and CG/3D production — crafting the floating clouds, paper plane animations, and the interactive system that brings this poetic experience to life.',
    'This project is part of Tokyo Creative Salon 2025 and exhibited at Haneda Airport Terminal 1 from March 13–20, 2025.',
  ];

  // Main media items
  const mediaItems = [
    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/hanedaCG.png',
      caption: 'Main Experience Video',
      width: 100 as const,
      aspectRatio: '16-9',
    },
    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/IG2.JPG',
      alt: 'How to Be a Cloud - Exhibition Photo',
      width: 100 as const,
      aspectRatio: 'original',
    },

    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/0129.jpg',
      alt: 'How to Be a Cloud - AR Experience 1',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/Group 3.png',
      alt: 'How to Be a Cloud - AR Experience 1',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'video' as const,
      src: '/img/projects/interactive design/webAR/vid-3.mp4',
      caption: 'Main Experience Video',
      width: 50 as const,
      aspectRatio: '3-4',
    },
    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/1.jpg',
      alt: 'How to Be a Cloud - AR Experience 1',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/2.jpg',
      alt: 'How to Be a Cloud - AR Experience 2',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/3.jpg',
      alt: 'How to Be a Cloud - AR Experience 3',
      width: 50 as const,
      aspectRatio: 'original',
    },
    {
      type: 'image' as const,
      src: '/img/projects/interactive design/webAR/5.png',
      alt: 'How to Be a Cloud - Interface Design',
      width: 100 as const,
      aspectRatio: 'original',
    },

    {
      type: 'video' as const,
      src: 'https://player.vimeo.com/video/1071371202?h=999f493600&badge=0&autopause=0&player_id=0&app_id=58479',
      caption: 'Behind the Scenes',
      width: 100 as const,
      aspectRatio: '16-9',
    },
  ];

  return (
    <div>
      <div style={{ width: '100%' }}>
        <video
          src="/img/projects/interactive design/webAR/vid-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <ProjectHeader title="How to Be A Cloud" description={description} metadata={metadata} />
      <MediaGrid items={mediaItems} layout="pair" />
    </div>
  );
};

export default HowToBeACloud;
