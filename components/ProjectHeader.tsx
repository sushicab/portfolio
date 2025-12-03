import React from 'react';
import styles from './ProjectHeader.module.css';

interface MetadataItem {
  label: string;
  value: string;
}

interface ProjectHeaderProps {
  title: string;
  description: string | string[];
  metadata: MetadataItem[];
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, description, metadata }) => {
  // Convert description to array if it's a string
  const descriptionArray = Array.isArray(description) ? description : [description];

  return (
    <header className={styles.container}>
      {/* Left Column - Title */}
      <div className={styles.titleColumn}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      {/* Middle Column - Metadata */}
      <div className={styles.metadataColumn}>
        {metadata.length > 0 && (
          <dl className={styles.metadata}>
            {metadata.map((item, index) => (
              <div key={index} className={styles.metadataItem}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {/* Right Column - Description */}
      <div className={styles.descriptionColumn}>
        {descriptionArray.map((paragraph, index) => (
          <p key={index} className={styles.description}>
            {paragraph}
          </p>
        ))}
      </div>
    </header>
  );
};

export default ProjectHeader;
