import React from "react";
import "./footer.css";

import footer_Logo from "../../assets/footer-logo.svg";
import twitter from "../../assets/icon-twitter.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import pinterest from "../../assets/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container section__padding container">
        <div className="footer__logo">
          <img src={footer_Logo} alt="" />
        </div>

        <div className="footer__links">
          <h3>features</h3>
          <p>Link shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>

        <div className="footer__links">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>

        <div className="footer__links">
          <h3>Company</h3>
          <p>About</p>
          <p>Our Teams</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

        <div className="footer__socials">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
          <a href="#">
            <img src={pinterest} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
