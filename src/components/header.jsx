import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { IconInstagram } from './icons/instagram';

const Header = ({ location }) => (
  <header className="header" role="banner">
    <div className="container">
      <nav className="nav" role="navigation">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/"
              activeStyle={{ borderBottom: '2px solid #010000' }}
            >
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link
              className="nav__link"
              to="/about"
              activeStyle={{ borderBottom: '2px solid #010000' }}
            >
              About
            </Link>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="mailto:bergincreative@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="https://www.instagram.com/josephinebergindesign/"
              aria-label="Josephine Bergin Design on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {location.pathname !== '/' && location.pathname !== '/about/' && (
      <p className="header__site-header">
        <Link to="/">Josephine Bergin</Link>
      </p>
    )}
  </header>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default Header;
