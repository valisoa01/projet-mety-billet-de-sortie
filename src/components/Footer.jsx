import React from 'react';
import '../styles/Footer.css';
import Myphone from '../assets/Images/phone.png';
import MyEmail  from '../assets/Images/Mail.png';
import MyPN from '../assets/Images/p.png';
import myTwitter from '../assets/Images/twiter.png';
import myFacebook from '../assets/Images/fb.png';
import myLinkedin from '../assets/Images/linkedin.png';
import myLogo from '../assets/Images/Logo.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h3 className="footer__section1">Contact</h3>
        <p className="footer__contact-item">
          <img src= {Myphone} alt="Phone" className="footer__icon" />
          <a href='#'> 020 85 000 26 </a>
        </p>
        <p className="footer__contact-item">
          <img src={MyEmail} alt="Email" className="footer__icon" /> 
          <a href='https://gmail.com'>copyrightByDevExplorer@PasserellesNumerique.org </a>
        </p>
        <div className="footer__logo-container">
          <img src={MyPN} alt="PN Logo" className="footer__logo" />
        </div>
      </div>

      <div className="footer__section">
        <h3>A propos</h3>
        <ul className="footer__links">
          <li><a href="/privacy-policy">Politique de confidentialité</a></li>
          <li><a href="/app-features">Fonctionnalité de l’application</a></li>
        </ul>
      </div>

      <div className="footer__section">
        <h3>Nous suivre</h3>
        <div className="footer__social-icons">
          <a href="https://twitter.com">
            <img src={myTwitter} alt="Twitter" />
          </a>
          <a href="https://facebook.com">
            <img src={myFacebook} alt="Facebook" />
          </a>
          <a href="https://linkedin.com">
            <img src={myLinkedin}  alt="LinkedIn" />
          </a>
        </div>
        <div className="footer__logo-container">
          <img src={myLogo}alt="Billet de Sortie Logo" className="footer__logo" />
        </div>
      </div>

      <div className="footer__bottom">
        <p>© copyrightByDevExplorer@PasserellesNumerique.org</p>
      </div>
    </footer>
  );
};

export default Footer;
