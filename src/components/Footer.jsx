import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footerContent">
          <div className="footerRow">
            <h3>pages</h3>
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
              <h3>links</h3>
          </div>
          <div className="footerRow">
              <h3>social</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
