import React from "react";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="credits">
            Developed by <a href="https://phpcoderbd.com">PHPCODERBD.COM</a>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  );
};

export default Footer;
