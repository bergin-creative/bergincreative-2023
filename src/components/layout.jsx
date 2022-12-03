import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import '../styles/main.scss';

import Header from './header';

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <a className="skip-link" href="#main">
        skip to main content
      </a>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      <main className="main" id="main" role="main">
        {children}
      </main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Layout;
