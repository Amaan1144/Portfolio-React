import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Amaan</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/amaanansari/" className="footer__social-icon footer__social-link" target="_blank">
                <i class='bx bxl-linkedin'></i>
                </a>

                <a href="https://www.instagram.com/__amaan.12/" className="footer__social-icon footer__social-link" target="_blank">
                <i class='bx bxl-instagram' ></i>
                </a>

                <a href="https://twitter.com/MohdAmaanAnsa17" className="footer__social-icon footer__social-link" target="_blank">
                <i class='bx bxl-twitter' ></i>
                </a>
            </div>

            <span className="footer__copy">&#169; The SoloDeveloper. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
