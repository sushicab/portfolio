'use client';

import React from 'react';
import Image from 'next/image';
import styles from './MediaGrid.module.css';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  caption?: string;
  width: 40 | 50 | 60 | 100;
  aspectRatio?: string | 'original'; // e.g., "4-5", "16-9", or "original" for natural ratio
}

interface MediaGridProps {
  items: MediaItem[];
  layout?: 'grid' | 'pair';
}

const MediaGrid: React.FC<MediaGridProps> = ({ items, layout = 'grid' }) => {
  // Check if URL is a YouTube or Vimeo embed URL
  const isVideoEmbedUrl = (url: string): boolean => {
    return (
      url.includes('youtube.com/embed/') ||
      url.includes('youtu.be/') ||
      url.includes('player.vimeo.com/video/')
    );
  };

  // Convert aspect ratio string to padding-bottom percentage
  const getAspectRatioPadding = (aspectRatio?: string | 'original'): string | undefined => {
    if (aspectRatio === 'original') {
      return undefined; // No padding, use natural aspect ratio
    }

    if (!aspectRatio) return '56.25%'; // Default 16:9

    const [width, height] = aspectRatio.split('-').map(Number);
    if (width && height) {
      return `${(height / width) * 100}%`;
    }
    return '56.25%'; // Fallback to 16:9
  };

  // Get the appropriate width class based on the item width
  const getWidthClass = (width: number): string => {
    switch (width) {
      case 40:
        return styles.item40;
      case 50:
        return styles.item50;
      case 60:
        return styles.item60;
      case 100:
        return styles.item100;
      default:
        return styles.item100;
    }
  };

  // Render pair layout with mixed widths
  if (layout === 'pair') {
    const renderItem = (item: MediaItem, index: number) => {
      const padding = getAspectRatioPadding(item.aspectRatio);
      const isOriginalRatio = item.aspectRatio === 'original';

      const content = isOriginalRatio ? (
        // Original aspect ratio - no wrapper needed
        item.type === 'video' ? (
          isVideoEmbedUrl(item.src) ? (
            <iframe
              className={styles.videoOriginal}
              src={item.src}
              title={item.caption || 'Video'}
              style={{ width: '100%', height: '400px', display: 'block', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className={styles.videoOriginal}
              src={item.src}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', height: 'auto', display: 'block' }}
            >
              Your browser does not support the video tag.
            </video>
          )
        ) : (
          <img
            className={styles.imageOriginal}
            src={item.src}
            alt={item.alt || ''}
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        )
      ) : (
        // Fixed aspect ratio with wrapper
        <div className={styles.wrapper} style={{ paddingBottom: padding }}>
          <div className={styles.content}>
            {item.type === 'video' ? (
              isVideoEmbedUrl(item.src) ? (
                <iframe
                  className={styles.video}
                  src={item.src}
                  title={item.caption || 'Video'}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video className={styles.video} src={item.src} autoPlay muted loop playsInline>
                  Your browser does not support the video tag.
                </video>
              )
            ) : (
              <Image
                className={styles.image}
                src={item.src}
                alt={item.alt || ''}
                fill
                sizes={item.width === 100 ? '100vw' : '50vw'}
                loading="lazy"
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
        </div>
      );

      // Full width items (width: 100)
      if (item.width === 100) {
        return (
          <div key={index} className={styles.fullWidthItem} style={{ marginBottom: '10px' }}>
            {content}
          </div>
        );
      }

      return content;
    };

    const renderElements: JSX.Element[] = [];
    let i = 0;

    while (i < items.length) {
      const currentItem = items[i];

      if (currentItem.width === 100) {
        // Full width item
        renderElements.push(renderItem(currentItem, i));
        i++;
      } else {
        // Pair of 50% width items
        const nextItem = items[i + 1];

        renderElements.push(
          <div key={`pair-${i}`} className={styles.pairRow}>
            <div className={styles.pairItem}>{renderItem(currentItem, i)}</div>
            {nextItem && nextItem.width !== 100 ? (
              <div className={styles.pairItem}>{renderItem(nextItem, i + 1)}</div>
            ) : (
              <div className={styles.pairItem} style={{ visibility: 'hidden' }} />
            )}
          </div>
        );

        i += nextItem && nextItem.width !== 100 ? 2 : 1;
      }
    }

    return <div className={styles.container}>{renderElements}</div>;
  }

  // Default grid layout
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {items.map((item, index) => {
          const padding = getAspectRatioPadding(item.aspectRatio);
          const isOriginalRatio = item.aspectRatio === 'original';

          return (
            <div key={index} className={`${styles.item} ${getWidthClass(item.width)}`}>
              {isOriginalRatio ? (
                // Original aspect ratio - no wrapper needed
                item.type === 'video' ? (
                  isVideoEmbedUrl(item.src) ? (
                    <iframe
                      className={styles.videoOriginal}
                      src={item.src}
                      title={item.caption || 'Video'}
                      style={{ width: '100%', height: '400px', display: 'block', border: 'none' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className={styles.videoOriginal}
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )
                ) : (
                  <img
                    className={styles.imageOriginal}
                    src={item.src}
                    alt={item.alt || ''}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                )
              ) : (
                // Fixed aspect ratio with wrapper
                <div className={styles.wrapper} style={{ paddingBottom: padding }}>
                  <div className={styles.content}>
                    {item.type === 'video' ? (
                      isVideoEmbedUrl(item.src) ? (
                        <iframe
                          className={styles.video}
                          src={item.src}
                          title={item.caption || 'Video'}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          className={styles.video}
                          src={item.src}
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <Image
                        className={styles.image}
                        src={item.src}
                        alt={item.alt || ''}
                        fill
                        sizes={`${item.width}vw`}
                        loading="lazy"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaGrid;
