import React from "react";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "160px",
        }}
      >
        <h2>Get in touch</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "right",
          minHeight: "70vh",
        }}
      >
        <ul>
          <li>
            <a
              href="zhuangyifan01@gmail.com"
              style={{ textDecoration: "underline" }}
            >
              Mail
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/wandanle.z/"
              style={{ textDecoration: "underline" }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://vimeo.com/your_vimeo"
              style={{ textDecoration: "underline" }}
            >
              Vimeo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
