'use client';

import { useState } from 'react';
import React from 'react';

const Rows = [
  {
    rowTitle: '(Performance)',
    Cards: [
      {
        imgUrl: '/img/visualGallery/yurayura.mp4',
        path: '/performance/Exit',
      },
      {
        imgUrl: '/img/visualGallery/yurayura2.mp4',
        path: '/performance/1817',
      },
      {
        imgUrl: '/img/visualGallery/particles.mp4',
        path: '/performance/Exit',
      },
      {
        imgUrl: '/img/visualGallery/visual3.jpg',
        path: '/performance/1817',
      },
      {
        imgUrl: '/img/workpage/exit.exe East.PNG',
        path: '/performance/Exit',
      },
      {
        imgUrl: '/img/workpage/Danny.png',
        path: '/performance/1817',
      },
      // {
      //   imgUrl: "/img/workpage/1.webp",
      //   path: "/performance/0328VJ",
      // },
    ],
  },
];

interface CardProps {
  imgUrl: string; // Supports both images (.jpg, .png, .webp) and videos (.mp4, .mov, .webm, .ogg, .avi)
  path: string;
  onClick: (imgUrl: string) => void;
}

function Card({ imgUrl, path, onClick }: CardProps) {
  // Check if the URL is a video file
  const isVideo =
    imgUrl &&
    (imgUrl.endsWith('.mp4') ||
      imgUrl.endsWith('.webm') ||
      imgUrl.endsWith('.ogg') ||
      imgUrl.endsWith('.mov') ||
      imgUrl.endsWith('.avi'));

  // Detect if mobile
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ padding: isMobile ? '1px' : '2px', width: '100%' }}>
      <div
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onClick(imgUrl);
        }}
        style={{
          cursor: 'pointer',
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {isVideo ? (
          <video
            src={imgUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLVideoElement>) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLVideoElement>) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imgUrl}
            alt="Gallery image"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
interface RowProps {
  rowTitle: string;
  Cards: Array<{
    imgUrl: string;
    path: string;
    title?: string;
  }>;
}

function Row({ rowTitle, Cards }: RowProps) {
  return (
    <>
      {/* Style for large screens */}
      <div className="hidden md:block">
        {' '}
        {/* Hide on small screens */}
        <h1
          style={{
            fontSize: '50px',
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '60px',
            marginTop: '100px',
          }}
        >
          {rowTitle}
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {Cards.map((card: any, index: number) => (
            <Card key={`card-${index}`} {...card} onClick={() => {}} />
          ))}
        </div>
      </div>

      {/* Style for mobile screens */}
      <div className="md:hidden">
        {' '}
        {/* Hide on medium and larger screens */}
        <h1
          className="text-3xl text-center mt-20 mb-6"
          style={{
            fontStyle: 'italic',
          }}
        >
          {rowTitle}
        </h1>
        <div>
          {Cards.map((card: any, index: number) => (
            <Card key={`card-${index}`} {...card} onClick={() => {}} />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Work() {
  // Flatten all cards from all rows into a single array
  const allCards = Rows.flatMap((row) => row.Cards);

  // Lightbox state
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Handle escape key to close lightbox
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage]);

  return (
    <main>
      <style jsx global>{`
        .masonry-gallery {
          display: flex;
          gap: 8px;
          padding: 0 1rem;
          width: 100%;
          margin: 6rem auto 2rem auto;
        }

        .column {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        .masonry-item {
          width: 100%;
        }

        /* Lightbox styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: scaleIn 0.3s ease;
        }

        .lightbox-image {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
        }

        .lightbox-video {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 90vh;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Responsive layout */
        @media (max-width: 768px) {
          .masonry-gallery {
            flex-direction: column;
            padding: 0.8rem;
            gap: 12px;
            margin: 4rem auto 2rem auto;
          }

          .column {
            width: 100%;
            gap: 12px;
          }

          .lightbox-content {
            border-radius: 8px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .masonry-gallery {
            padding: 0 0.75rem;
            gap: 10px;
            margin: 5rem auto 2rem auto;
          }

          .column {
            gap: 10px;
          }
        }

        @media (min-width: 1025px) and (max-width: 1280px) {
          .masonry-gallery {
            padding: 0 1rem;
            gap: 12px;
          }
        }
      `}</style>

      <div className="masonry-gallery">
        {/* Column 1 */}
        <div className="column">
          {allCards
            .filter((_, index) => index % 3 === 0)
            .map((card, index) => (
              <div key={`col1-${index}`} className="masonry-item">
                <Card {...card} onClick={setLightboxImage} />
              </div>
            ))}
        </div>

        {/* Column 2 */}
        <div className="column">
          {allCards
            .filter((_, index) => index % 3 === 1)
            .map((card, index) => (
              <div key={`col2-${index}`} className="masonry-item">
                <Card {...card} onClick={setLightboxImage} />
              </div>
            ))}
        </div>

        {/* Column 3 */}
        <div className="column">
          {allCards
            .filter((_, index) => index % 3 === 2)
            .map((card, index) => (
              <div key={`col3-${index}`} className="masonry-item">
                <Card {...card} onClick={setLightboxImage} />
              </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {lightboxImage.endsWith('.mp4') ||
            lightboxImage.endsWith('.webm') ||
            lightboxImage.endsWith('.ogg') ||
            lightboxImage.endsWith('.mov') ||
            lightboxImage.endsWith('.avi') ? (
              <video
                src={lightboxImage}
                className="lightbox-video"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={lightboxImage} alt="Enlarged view" className="lightbox-image" />
            )}
          </div>
        </div>
      )}

      <div style={{ marginTop: '50px' }}></div>
    </main>
  );
}
