import React from "react";
import Styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContainer}>
        <div className={Styles.socialIcons}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>

        <div className={Styles.footerLinks}>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>

          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>

          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>

          <ul>
            <li>Media Centre</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <p className={Styles.copyRight}>© 1997-2026 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
