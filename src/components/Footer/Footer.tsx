import React from 'react';
import {
  SlSocialFacebook,
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialInstagram
} from 'react-icons/sl';
import { Title } from '@components/Title';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div className="b-footer">
      <div className="b-footer__body">
        <div className="b-footer__container">
          <Title />
          <p className="b-footer__container__text">
            Kudasai is the most comprehensive online destination for watching
            anime, making it the largest anime streaming platform available.
          </p>
        </div>
        <div className="b-footer__container">
          <h4 className="b-footer__container__title">Our Site</h4>
          <ul className="b-footer__container__ul">
            <li className="b-ul__li">Catalogue</li>
            <li className="b-ul__li">New episodes</li>
            <li className="b-ul__li">News</li>
            <li className="b-ul__li">Contact Me</li>
          </ul>
        </div>
        <div className="b-footer__container">
          <h4 className="b-footer__container__title">Help</h4>
          <ul className="b-footer__container__ul">
            <li className="b-ul__li">About me</li>
            <li className="b-ul__li">FAQ</li>
            <li className="b-ul__li">Security</li>
          </ul>
        </div>
        <div className="b-footer__container">
          <h4 className="b-footer__container__title">
            Be the{' '}
            <span className="b-footer__container__title--span">first</span> to
            know about news!
          </h4>
          <p>
            Only current news. We don{"'"}t like spam either :{')'}
          </p>
          <form className="b-footer__container__form">
            <input
              className="b-form__input"
              type="text"
              placeholder="Your email"
            />
            <button className="b-form__btn">Follow</button>
          </form>
          <div className="b-socialMedia">
            <button className="b-socialMedia__btn">
              <SlSocialFacebook />
            </button>
            <button className="b-socialMedia__btn">
              <SlSocialInstagram />
            </button>
            <button className="b-socialMedia__btn">
              <SlSocialTwitter />
            </button>
            <button className="b-socialMedia__btn">
              <SlSocialYoutube />
            </button>
          </div>
        </div>
      </div>
      <p className="b-footer__p">Made with 🖤 and ☕ by AbigailSC</p>
    </div>
  );
};

export default Footer;
