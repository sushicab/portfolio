import React from 'react';
import parse from 'html-react-parser';

const PageInfo2 = ({
  title,
  topImage,
  subtitle,
  textContent,
  imagePaths,
  textAdditional,
  imageAdditional,
  creditsText,
}) => {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div
        style={{
          maxWidth: '100vw',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          marginTop: '20px',
        }}
      >
        <img
          className="page-info-image-additional"
          src={topImage} // ✅ Use the correct prop
          alt="Top Image"
        />
      </div>
      <h2 className="page-info-title">{parse(title)}</h2>
      <p className="page-info-subtitle">{parse(subtitle)}</p>
      <p className="page-info-text-content">{parse(textContent)}</p>
      <div className="page-info-image-grid">
        {imagePaths.map((image, index) =>
          image.type === 'image' ? (
            <img
              className="page-info-image"
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
            />
          ) : (
            <video className="page-info-image" key={index} controls autoPlay loop>
              <source src={image.src} type="video/mp4" />
            </video>
          )
        )}
      </div>
      <p className="page-info-text-additional">{parse(textAdditional)}</p>
      <div
        style={{
          maxWidth: '100vw',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          marginTop: '20px',
        }}
      >
        <img
          className="page-info-image-additional"
          src={imageAdditional} // ✅ Use the correct prop
          alt="imageAdditional"
        />
      </div>

      <div className="page-info-credits-container">
        <div className="page-info-credits">
          <p>{typeof creditsText === 'string' ? parse(creditsText[0]) : creditsText[0]}</p>
          {creditsText.slice(1).map((credit, index) => (
            <p key={index}>{parse(credit)}</p>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PageInfo2;
