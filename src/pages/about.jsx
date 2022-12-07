/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({ data, location }) => {
  const {
    allWpPage: { edges },
  } = data;
  const {
    node: { content },
  } = edges[0];

  return (
    <Layout location={location}>
      <SEO title="Connections" />
      <div className="container">
        <h1 className="visuallyhidden">About Me</h1>
        <div
          className="about__wrapper"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 23 } }) {
      edges {
        node {
          content
        }
      }
    }
  }
`;

AboutPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            content: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default AboutPage;
