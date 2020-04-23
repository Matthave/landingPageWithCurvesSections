import React from 'react'
import footerMobie from '../images/bg-footer-top-mobile.svg';
import logo from '../images/icon-messages.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img className='curves' src={footerMobie} alt="curves" />
      <h3 className="footer__title">Newsletter</h3>
      <p className="footer__text">
        Newsletter
        To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
        send you spam or pass on your email address
      </p>
      <form action="" className="footer__form">
        <input type="text" className="footer__input" />
        <button className="footer__btn">Subscribe</button>
      </form>
      <div className="footer__logoWrap">
        <img src={logo} alt="" className="footer__logo" />
        <h2 className="footer__logoText">Huddles</h2>
      </div>
      <p className="footer__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia
        vestibulum a, ultrices quis sem.
      </p>
      <div className="footer__contactWrap">
        <div className="footer__contact">
          <img src={phone} alt="" className="footer__contactImg" />
        Phone: +1-543-123-4567
        </div>
        <div className="footer__contact">
          <img src={email} alt="" className="footer__contactImg" />
        exmaple@company.com
        </div>
      </div>
      <div className="footer__socialMedia">
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter-square"></i>
      </div>

    </footer>
  )
}

export default Footer