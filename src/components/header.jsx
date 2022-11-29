import React from 'react';
import { Link } from 'gatsby';

import { IconInstagram } from './icons/instagram';

const Header = () => (
  <header className="header" role="banner">
    <div className="container">
      <nav className="nav" role="navigation">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/work">
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/about">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/https://www.instagram.com/josephinebergindesign/"
              aria-label="Josephine Bergin Design on Instagram"
            >
              <IconInstagram />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
