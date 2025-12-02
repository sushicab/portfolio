import React from 'react';
import parse from 'html-react-parser';

const EmolleiaPageInfo = ({
  iframeSrc,
  title,
  subtitle,
  textContent,
  imagePaths,
  textAdditional,
  creditsText,
  videoCreditsText,
  specialThanksText,
}) => {
  return (
    <main>
      <div
        style={{
          maxWidth: '100vw',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          marginTop: '20px',
        }}
      >
        <iframe
          className="page-info-iframe"
          src={iframeSrc}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Vimeo video"
        ></iframe>
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
            <video className="page-info-image" key={index} controls autoPlay>
              <source src={image.src} type="video/mp4" />
            </video>
          )
        )}
      </div>
      <p className="page-info-text-additional">{parse(textAdditional)}</p>

      <div className="page-info-image-additional-emolleia">
        <img
          src="/img/projects/interactive design/emolleia/emoSystem.png"
          alt="Description of image 1"
        />
      </div>

      <div>
        <p className="page-info-text-content">
          <br></br>
          <br></br>
          <strong>
            <em>[ DESIGN SKTCH ]</em>
          </strong>{' '}
          <br></br>
          <br></br>Three transparent, blooming flowers form a wearable shoulder accessory equipped
          with a webcam that detects and categorizes onlookers' facial expressions. Each flower
          contains an LED unit that changes color to better express the wearer’s emotions. The
          design' s outlook was inspired by the skeleton flower, a unique blossom with transparent
          petals that turn white when raindrops fall on it. Through this design, I aim to highlight
          how interaction creates change, just as we live within a delicate web of connections,
          constantly shaped and reshaped by our interactions with one another.
        </p>

        <div className="page-info-image-additional-emolleia">
          <img
            src="/img/projects/interactive design/emolleia/design4.png"
            alt="Description of image 1"
          />
        </div>
        <p className="page-info-text-content">
          <br></br>
          <br></br>
          <strong>
            <em>[ MATERIAL EXPLORATION ]</em>
          </strong>{' '}
          <br></br>
          <br></br>To achieve natural blooming motions, we experimented with Shape Memory Alloy on
          paper petals, silicone, and 3D-printed Elastic 50A material. We also tested resistive
          strings to control motion speed and improve performance dynamics.
        </p>
        <div className="page-info-image-additional-emolleia">
          <img
            src="/img/projects/interactive design/emolleia/material.png"
            alt="Description of image 1"
          />
        </div>

        <p className="page-info-text-content">
          <br></br>
          <br></br>
          <strong>
            <em>[ PROTOTYPE ]</em>
          </strong>{' '}
          <br></br>
          <br></br>The prototype consists of three main components: flowers, a servo motor casing,
          and a steel chain to secure the device on the body. Each flower features five 3D-printed
          petals, made from soft Elastic 50A resin. This material was chosen for its flexibility,
          enabling smooth bending motions, and its transparency, aligning with the design' s
          aesthetic vision.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '60px',
            marginTop: '60px',
          }}
        >
          <img
            src="/img/projects/interactive design/emolleia/flower_base.png"
            alt="Description of image 1"
            style={{
              width: '43%',
              height: 'auto',
              marginRight: '10px',
            }}
          />
          <img
            src="/img/projects/interactive design/emolleia/flower_base2.png"
            alt="Description of image 2"
            style={{
              width: '43%',
              height: 'auto',
            }}
          />
        </div>

        <p className="page-info-text-content">
          <strong>
            <em>[ USER STUDY 1: ELICITATION SURVEY ]</em>
          </strong>{' '}
          <br></br>
          <br></br>The study involved 50 participants and assessed personality traits using the I-E
          scale (27 average, 15 introverted, 8 extroverted). Most participants (69%) responded
          positively to wearing the device, with one highlighting its potential for mood tracking.
          Concerns about size and convenience were noted, but social acceptance was promising, with
          62% willing to wear it at home and 47% among friends.
          <br></br>
          <br></br>
          Extroverts showed a greater willingness to wear the <em>Emolleia</em> device compared to
          introverts and participants with average personality traits. The primary use cases
          involved self-expression (mood, emotions) and notifications (weather, reminders). Most
          feedback focused on using <em>Emolleia</em> for emotional communication and social
          interaction, such as monitoring family members’ well-being.
        </p>
        <div className="page-info-image-additional-emolleia">
          <img
            src="/img/projects/interactive design/emolleia/userstudy.jpg"
            alt="Description of image 1"
          />
        </div>
        <p className="page-info-text-content">
          <strong>
            <em>[ USER STUDY 2: CONVERSATIONAL USE CASE ]</em>
          </strong>{' '}
          <br></br>
          <br></br>This study evaluated Emolleia' s potential to improve conversational efficiency
          and encourage self-expression. A facial tracking camera was used to recognize seven facial
          expressions (e.g., happy, sad, surprise) and trigger Emolleia' s motion in three ways:
          correlated, contrary, or reflecting the onlooker' s expression. Due to limitations from a
          prior study, only five emotions (happy, sad, surprise, neutral, and disgust) were selected
          and linked to corresponding motions (a, g, c, d). The device' s color scheme was inspired
          by Robert Plutchik' s Emotional Wheel, visually representing emotions.
          <br></br>
          <br></br>
          Six new participants (4 female, aged 21-28) was recruited. Most of Participants were from
          Asia countries. In post-conversation interviews, participants praised Emolleia for
          encouraging emotional expression and enhancing conversational enjoyment. Some found the
          device helpful for recognizing others' emotions, while others felt more at ease during
          interactions. Overall, Emolleia was perceived as a valuable tool for fostering comfort and
          connection in social settings.
        </p>
        <div className="page-info-image-additional-emolleia">
          <img
            src="/img/projects/interactive design/emolleia/userstudy2.jpg"
            alt="Description of image 1"
          />
        </div>
      </div>
      <div>
        <h2
          style={{
            marginTop: '10vh',
            marginLeft: '8vw',
            fontSize: '16px',
            fontStyle: 'italic',
          }}
        >
          EMOLLEIA DEMO AT KMD FORUM 2021:
        </h2>
        <div
          style={{
            maxWidth: '100vw',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            marginTop: '20px',
          }}
        >
          <iframe
            className="page-info-iframe"
            src="https://player.vimeo.com/video/663887880?badge=0&amp;autopause=0&amp"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo video"
          ></iframe>
        </div>
      </div>

      <div className="page-info-credits-container">
        <div className="page-info-credits">
          <p>{typeof creditsText === 'string' ? parse(creditsText[0]) : creditsText[0]}</p>
          {creditsText.slice(1).map((credit, index) => (
            <p key={index}>{parse(credit)}</p>
          ))}
        </div>
        <div>
          <div className="page-info-credits">
            <p>{videoCreditsText[0]}</p>
            {videoCreditsText.slice(1).map((credit, index) => (
              <p key={index}>{parse(credit)}</p>
            ))}
          </div>
          <div className="page-info-credits">
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
          <h2>
            <em>
              <strong>More details in related publication:</strong>
            </em>
          </h2>
          <div className="AR-credits">
            <p>
              <a
                href="https://dl.acm.org/doi/10.1145/3490149.3505581"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                Emolleia – Wearable Kinetic Flower Display for Expressing Emotions
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmolleiaPageInfo;
