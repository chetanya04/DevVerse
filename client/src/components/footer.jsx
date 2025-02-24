import React, { useState } from 'react';
import styles from "../footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';
import logo2 from "../assets/log2.png"

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src={logo2} width={128} height={52} alt="Cling logo" />
          <p className={styles.para}>At Cling connect, we bring people together by creating meaningful connections across various domains. together by creating meaningful connections across various domains</p>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h3>Quick Links</h3>  
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/chat">Chat</a></li>
              <li><a href="/account">Account</a></li>
              <li><a href="/categories">categories</a></li>
            </ul>
          </div>
          <div>
            <h3>Support</h3>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/inquiry">Inquiry</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerSubscribe}>
          <form onSubmit={handleSubscribe}>
            <input
            className='email'
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.subscribe}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.footerDown}>
        <p>&copy; Cling Connect All Rights Reserved</p>
        <div>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
      <a href="#top" className={styles.backToTop}><FontAwesomeIcon icon={faSortUp} /></a>
    </footer>
  );
};

export default Footer;