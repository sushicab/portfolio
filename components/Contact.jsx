import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div>
        <h2 className="contact-title">Get in touch</h2>
      </div>
      <div className="contact-links">
        <ul>
          <li>
            <a
              href="mailto:zhuangyifan01@gmail.com" // Corrected the mailto link
              className="contact-link"
            >
              Mail
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/wandanle.z/"
              className="contact-link"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="https://vimeo.com/your_vimeo" className="contact - link">
              Vimeo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
