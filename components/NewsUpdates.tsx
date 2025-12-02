'use client';

import React from 'react';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  link?: string;
}

interface NewsUpdatesProps {
  items?: NewsItem[];
}

// Sample data - replace with your actual news items
const defaultNewsItems: NewsItem[] = [
  {
    id: '1',
    title: 'TOUCHDESIGNER EVENT TOKYO 2025',
    category: 'Presentation',
    date: 'NOV 22',
    thumbnail: '/img/about/talk.jpg',
    link: 'https://derivative.ca/community-post/touchdesigner-event-tokyo-2025/72796',
  },
  {
    id: '2',
    title: 'YURAYURA:A/V LIVE SAX PERFORMANCE',
    category: 'Performance',
    date: 'Oct 25',
    thumbnail: '/img/about/yurayura2.png',
    link: '/news/digital-art-feature',
  },
  {
    id: '3',
    title: 'EXIT.EXE: A/V PERFORMANCE',
    category: 'Performance',
    date: 'MAR 1',
    thumbnail: '/img/about/exit.JPG',
    link: '/performance/Exit',
  },
  {
    id: '4',
    title: 'HOW TO BE A CLOUD?: Web AR Experience in Haneda Airport',
    category: 'Exhibition',
    date: 'MAR 15',
    thumbnail: '/img/about/haneda2.jpg',
    link: '/news/digital-art-feature',
  },
];

const NewsItem: React.FC<{ item: NewsItem }> = ({ item }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = (
    <>
      {/* Desktop Layout */}
      {!isMobile && (
        <div
          style={{
            display: 'flex',
            alignItems: 'stretch',
            paddingTop: '25px',
            paddingBottom: '25px',
            borderTop: '1px solid black',
            gap: '30px',
            width: '100%',
          }}
        >
          {/* Left: Thumbnail Image (35%) */}
          <div style={{ width: '35%', flexShrink: 0, marginLeft: '2rem' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '16/9',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#F5F5F5',
              }}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  // Fallback for missing images
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Middle: Title and Category (flex grow) */}
          <div
            style={{
              flex: '1 1 auto',
              paddingRight: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <h3
              style={{
                color: 'black',
                textAlign: 'left',
                textTransform: 'uppercase',
                order: 0,
                marginTop: 0,
                marginBottom: 'auto',
                fontFamily: 'Helveticaneue, Arial, sans-serif',
                fontSize: '3.5rem',
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '0.5px',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontFamily: 'argent-pixel-cf, sans-serif',
                fontStyle: 'italic',
                fontSize: '1rem',
                fontWeight: 'normal',
                color: '#666',
                margin: '0',
                marginTop: 'auto',
              }}
            >
              {item.category}
            </p>
          </div>

          {/* Right: Date */}
          <div
            style={{
              minWidth: '100px',
              textAlign: 'right',
              flexShrink: 0,
              alignSelf: 'flex-start',
            }}
          >
            <p
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: '3rem',
                fontWeight: 'normal',
                textTransform: 'uppercase',
                color: 'black',
                margin: '0',
                lineHeight: 1,
              }}
            >
              {item.date}
            </p>
          </div>
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <div
          style={{
            paddingTop: '10px',
            paddingBottom: '10px',
            borderTop: '1px solid black',
            width: '100%',
          }}
        >
          {/* Mobile: Thumbnail */}
          <div style={{ width: '100%', marginBottom: '15px' }}>
            <div
              style={{
                width: '100%',
                aspectRatio: '16/9',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#F5F5F5',
              }}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                style={{
                  objectFit: 'cover',
                }}
                onError={(e) => {
                  // Fallback for missing images
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Mobile: Title */}
          <div>
            <h3
              style={{
                color: 'black',
                textAlign: 'left',
                textTransform: 'uppercase',
                marginTop: 0,
                marginBottom: '8px',
                fontFamily: 'Helveticaneue, Arial, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '0.3px',
              }}
            >
              {item.title}
            </h3>

            {/* Mobile: Category and Date on same line */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'argent-pixel-cf, sans-serif',
                  fontStyle: 'italic',
                  fontSize: '0.9rem',
                  fontWeight: 'normal',
                  color: '#666',
                  margin: '0',
                }}
              >
                {item.category}
              </p>
              <p
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 'normal',
                  textTransform: 'uppercase',
                  color: 'black',
                  margin: '0',
                  letterSpacing: '1px',
                }}
              >
                {item.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return item.link ? (
    <a
      href={item.link}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
        transition: 'opacity 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
    >
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
};

const NewsUpdates: React.FC<NewsUpdatesProps> = ({ items = defaultNewsItems }) => {
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
    <section style={{ width: '100%', margin: '0 auto', padding: isMobile ? '0' : '0 2rem' }}>
      {/* Section Header */}
      <h2
        className="tk-argent-pixel-cf"
        style={{
          fontFamily: 'argent-pixel-cf, sans-serif',
          fontSize: isMobile ? '2rem' : '3rem',
          fontStyle: 'italic',
          textAlign: 'left',
          color: 'black',
          fontWeight: 'normal',
          margin: isMobile ? '0 0 10px 0' : '20px 0 10px 0',
        }}
      >
        (NEWS)
      </h2>

      {/* News Items */}
      <div style={{ width: '100%' }}>
        {items.map((item, index) => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>

      {/* Bottom spacing */}
      <div style={{ height: '100px' }} />
    </section>
  );
};

export default NewsUpdates;
