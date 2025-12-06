'use client';

import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

interface FooterProps {
  featuredImage?: string;
  currentDate?: string;
  name?: string;
  email?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    threads?: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  featuredImage,
  currentDate,
  name = 'YOUR NAME',
  email = 'hello@example.com',
  socialLinks = {
    instagram: 'https://instagram.com',
    linkedin: 'https://x.com',
    threads: 'https://threads.net',
  },
}) => {
  // Get current date if not provided
  const displayDate =
    currentDate ||
    new Date().toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      {/* Left Column - Featured Image */}
      <div className={styles.leftColumn}>
        {featuredImage && (
          <div className={styles.featuredImage}>
            <Image src={featuredImage} alt="Featured" fill style={{ objectFit: 'cover' }} />
          </div>
        )}
      </div>

      {/* Middle Column - Contact & Social */}
      <div className={styles.middleColumn}>
        <a href={`mailto:${email}`} className={styles.emailLink}>
          ( e-mail ✉ )
        </a>

        <div className={styles.socialSection}>
          <div className={styles.socialLabel}>FOLLOW ON SOCIAL</div>
          <div className={styles.socialLinks}>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              IG.
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LI.
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Date & Copyright */}
      <div className={styles.rightColumn}>
        <div className={styles.dateDisplay}>{displayDate}</div>

        <div className={styles.copyright}>
          <div className={styles.logo}>⬡</div>
          <div className={styles.rights}>
            <span className={styles.allRights}>All Rights Reserved.</span>
            <span className={styles.copyrightText}>
              ©{currentYear} {name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
