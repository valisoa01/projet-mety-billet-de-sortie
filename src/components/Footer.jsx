import React from 'react';
import '../styles/Footer.css';
import Myphone from '../assets/Images/phone.png';
import MyEmail  from '../assets/Images/Mail.png';
import MyPN from '../assets/Images/p.png';
import myFacebook from '../assets/Images/fb.png';
import myLinkedin from '../assets/Images/linkedin.png';
import myLogo from '../assets/Images/Logo.png';
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h3 className="footer__section1">Contact</h3>
        <p className="footer__contact-item">
          <img src= {Myphone} alt="Phone" className="footer__icon" />
          <p> 020 85 000 26 </p>
        </p>
        <p className="footer__contact-item">
          <img src={MyEmail} alt="Email" className="footer__icon" /> 
          <a href='info.madagasikara@passerellesnumeriques.org'>info.madagasikara@passerellesnumeriques.org </a>
        </p>
        <div className="footer__logo-container">

        <a href="https://www.passerellesnumeriques.org/fr/nos-actions/madagascar/" target='_blank' rel='noreferrer'>
            <img src={MyPN} alt="Passerelles numériques" width={"90"} height={"90"} />
          </a>
        </div>
      </div>

      <div className="footer__section">
        <h3>A propos</h3>
        <ul className="footer__links">
        <li><NavLink to="/privacy-policy">Politique de confidentialité</NavLink></li>
        <li><NavLink to="/Fonctionnement">Fonctionnement de l'application</NavLink></li>
        </ul>
      </div>

      <div className="footer__section">
        <h3>Nous suivre</h3>
        <div className="footer__social-icons">
          <a href="https://www.facebook.com/passerelles.numeriques.madagasikara/" target='_blank' rel='noreferrer'>
            <img src={myFacebook} alt="Facebook" />
          </a>
          <a href="https://mg.linkedin.com/showcase/passerelles-num%C3%A9riques-madagasikara/" target='_blank' rel='noreferrer'>
            <img src={myLinkedin}  alt="LinkedIn" />
          </a>
        </div>
        <div className="footer__logo-container">
          <a href='#'><img src={myLogo}alt="Billet de Sortie Logo" className="footer__logo" /></a>
        </div>
      </div>

 
      <div className="footer__bottom">
      <p className="footer__copyright">
        &copy; DevExplorer@PasserellesNumeriques.org. Tous droits réservés.
      </p>
      </div>
 
    </footer>
  );
};

export default Footer;
