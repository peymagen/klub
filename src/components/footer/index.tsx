import React from "react";
import styles from "./footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoSection}>
        <Image
          src="/bankerKlub-white-logo.png"
          width={180}
          height={35}
          alt="logo"
        />
        <div className={styles.socials}>
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>
      <div className={styles.topSection}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            You are building India’s future, we would like to fuel yours
          </h2>
          <p className={styles.subText}>
            Our weekly expert newsletter on stories that matter to your money:
          </p>
          <form
            className={styles.newsletter}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className={styles.right}>
          <div className={styles.column}>
            <h4>Knowledge Repository</h4>
            <ul>
              <li>Bonds</li>
              <li>IPA</li>
              <li>Mutual Funds</li>
              <li>Portfolio Management Services</li>
              <li>Wealth Monitor</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>About</h4>
            <ul>
              <li>Team</li>
              <li>Careers</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Investment</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Legal</h4>
            <ul>
              <li>Contact</li>
              <li>Disclaimer</li>
              <li>ODR Portal</li>
              <li>Privacy</li>
              <li>Returns & cancellation</li>
              <li>Security</li>
              <li>Terms & Disclosure</li>
              <li>KYC Check</li>
              <li>Scheme documents</li>
              <li>Fraud Notice</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
