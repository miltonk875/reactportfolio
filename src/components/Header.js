import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const pathname = window.location.pathname;
  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none" />
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="img/profile-img.jpg"
              alt
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <Link to="/">Milton Chowdhury</Link>
            </h1>
            <div className="social-links mt-3 text-center">
              <Link to="#" className="facebook" title="Facebook">
                <i className="bx bxl-facebook" />
              </Link>
              <Link to="#" className="google-plus" title="Skype">
                <i className="bx bxl-skype" />
              </Link>
              <Link to="#" className="linkedin" title="LinkedIn">
                <i className="bx bxl-linkedin" />
              </Link>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <Link
                  to="/home"
                  className={
                    pathname.includes("home")
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i className="bx bx-home" /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={
                    pathname.includes("about")
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i className="bx bx-user" /> <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className={
                    pathname.includes("resume")
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className={
                    pathname.includes("portfolio")
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={
                    pathname.includes("services")
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i className="bx bx-server" /> <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={
                    pathname.includes("contact")
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i className="bx bx-envelope" /> <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
