import React from 'react';
import parse from 'html-react-parser';

const PageInfo = ({
  iframeSrc,
  title,
  subtitle,
  textContent,
  imagePaths,
  textAdditional,
  creditsText,
  videoCreditsText,
  specialThanksText,
  additionalVideoSrc,
}) => {
  return (
    <main>
      <div
        style={{
          maxWidth: '1440px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          marginTop: '20px',
        }}
      >
        <iframe
          className='page-info-iframe'
          src={iframeSrc}
          allow='autoplay; fullscreen; picture-in-picture'
          title='Vimeo video'
        ></iframe>
      </div>
      <h2 className='page-info-title'>{parse(title)}</h2>
      <p className='page-info-subtitle'>{parse(subtitle)}</p>
      <p className='page-info-text-content'>{parse(textContent)}</p>
      <div className='page-info-image-grid'>
        {imagePaths.map((image, index) =>
          image.type === 'image' ? (
            <img
              className='page-info-image'
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
            />
          ) : (
            <video
              className='page-info-image'
              key={index}
              controls
              autoPlay
              loop
            >
              <source src={image.src} type='video/mp4' />
            </video>
          )
        )}
      </div>
      <p className='page-info-text-additional'>{parse(textAdditional)}</p>

      <div
        style={{
          maxWidth: '1440px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          marginTop: '20px',
        }}
      >
        {typeof additionalVideoSrc === 'string' &&
        additionalVideoSrc.endsWith('.mp4') ? (
          <video
            className='page-info-video'
            src={additionalVideoSrc}
            controls
            autoPlay
            loop
            style={{ marginTop: '150px', maxWidth: '100%' }}
          ></video>
        ) : (
          <iframe
            className='page-info-iframe'
            src={additionalVideoSrc}
            allow='autoplay; fullscreen; picture-in-picture'
            title='Vimeo video'
            style={{ marginTop: '150px' }}
          ></iframe>
        )}
      </div>

      <div className='page-info-credits-container'>
        <div className='page-info-credits'>
          <p>
            {typeof creditsText === 'string'
              ? parse(creditsText[0])
              : creditsText[0]}
          </p>
          {creditsText.slice(1).map((credit, index) => (
            <p key={index}>{parse(credit)}</p>
          ))}
        </div>
        <div>
          <div className='page-info-credits'>
            <p>{videoCreditsText[0]}</p>
            {videoCreditsText.slice(1).map((credit, index) => (
              <p key={index}>{parse(credit)}</p>
            ))}
          </div>
          <div className='page-info-credits'>
            <p>
              {typeof specialThanksText[0] === 'string'
                ? parse(specialThanksText[0])
                : specialThanksText[0]}
            </p>
            {specialThanksText.slice(1).map((thanks, index) => (
              <p key={index} style={{ marginBottom: '15px' }}>
                {parse(thanks)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageInfo;
