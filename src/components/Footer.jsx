import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footerContent">
          <div className="footerRow">
            <h3>Pages</h3>
            <ul>
              <li>
                {" "}
                <Link className="footerLink" to="/">
                  Work
                </Link>
              </li>
              <li>
                {" "}
                <Link className="footerLink" to="/about">
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link className="footerLink" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerRow">
            <h3>Links</h3>
            <ul>
              <li>
                <a className="footerLink" href="https://opensea.io/SynapticEntropy">
                  OpenSea
                </a>
              </li>
            </ul>
          </div>
          <div className="footerRow">
            <h3>Contact</h3>
            <ul>
              <li>
                <a
                  className="footerLink"
                  href="https://www.instagram.com/synaptic.entropy.creations/"
                >
                  Instagam
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="footerLink" href="https://opensea.io/SynapticEntropy">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
