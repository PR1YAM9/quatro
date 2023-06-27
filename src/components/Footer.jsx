import React from "react";
import navLOGO from "../images/footer logo desktop.png";
import heart from "../images/Vector (5).png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div style={{ fontFamily: "Inter" }}>
      <div className="first-footer">
        <div
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#2CB67D" }}
        >
          <div
            className="d-flex"
            style={{ padding: "10px", alignItems: "baseline" }}
          >
            <div className="nav-items" style={{ marginRight: "5px" }}>
              <img src={navLOGO} alt="" />
            </div>
            <div className="nav-items">
              <Link to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </div>
            <div className="nav-items">
              <Link to="hello" spy={true} smooth={true} duration={500}>
                Services
              </Link>
            </div>
            <div className="nav-items">
              <Link to="work" spy={true} smooth={true} duration={500}>
                <p>Work</p>
              </Link>
            </div>
            <div className="nav-items">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </div>
            <div className="nav-items">
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="second-footer d-flex justify-content-center p-2"
        style={{ backgroundColor: "#125E3E", color: "white", fontSize: "12px" }}
      >
        <p style={{ marginRight: "25px" }}>
          © 2023 Qautro. All rights reserved.
        </p>
        <p>
          Made with <img src={heart} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Footer;
