import React from 'react';

const Footer = () => {
    return (
      <div className="footer">
      <div className="container">
        <div className="footer__row row">
          <div className="footer__logo">
            <img src="" alt="" className="header__img" />
          </div>
          <nav className="footer__menu menu">
            <ul className="menu__list">
              <li className="menu__item"><a href="">Home</a></li>
              <li className="menu__item"><a href="">Catalog</a></li>
              <li className="menu__item"><a href="">About</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    );
}

export default Footer;