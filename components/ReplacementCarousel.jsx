import React from 'react';
import EmblaCarousel from '@/components/EmblaCarousel';

const ReplacementCarousel = () => {
  const images = [
    '/img/projects/photography/replacement/2.jpg',
    '/img/projects/photography/replacement/3.jpg',
    '/img/projects/photography/replacement/1.jpg',
  ];

  return <EmblaCarousel images={images} />;
};

export default ReplacementCarousel;
