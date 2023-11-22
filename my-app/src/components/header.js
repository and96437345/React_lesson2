import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <div className="header__row row">
            <div className="header__logo">
              <img src="" alt="" className="header__img" />
            </div>
            <nav className="header__menu menu">
              <ul className="menu__list">
                <li className="menu__item"><Link to="/">Home</Link></li>
                <li className="menu__item"><Link to="/catalog">Catalog</Link></li>
                <li className="menu__item"><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
}

export default Header;