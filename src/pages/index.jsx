/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button } from '../components/patterns/button';

const IndexPage = ({ data, location }) => {
  const {
    allWpPage: { edges },
  } = data;
  const {
    node: {
      homepage: { homepageGrid, introCopy },
    },
  } = edges[0];
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <div className="container">
        <div className="homepage__wrapper">
          <div className="homepage__header">
            <h1>Josephine Bergin</h1>
            <h2>Graphic Designer</h2>
          </div>

          <div className="homepage__grid">
            <ul className="homepage__grid-list">
              {homepageGrid.map((gridItem) => (
                <li
                  className="homepage__grid-item"
                  key={gridItem.image.sourceUrl}
                >
                  <Link
                    className="homepage__grid-link"
                    to={gridItem.detailPageUrl}
                  >
                    <img
                      className="homepage__grid-image"
                      src={gridItem.image.sourceUrl}
                      alt={gridItem.image.altText}
                    />
                    <div className="homepage__grid-label">
                      <p className="homepage__grid-label-copy">
                        <span className="homepage__grid-label-title">
                          {gridItem.client}
                        </span>
                        <span className="homepage__grid-label-subtitle">
                          {gridItem.project}
                        </span>
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p
            className="homepage__intro"
            dangerouslySetInnerHTML={{ __html: introCopy }}
          />

          <Button
            classes="homepage__cta"
            ctaText="Send me an email"
            ctaUrl="mailto:bergincreative@gmail.com"
            isReversed
            targetBlank
          />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpPage(filter: { databaseId: { eq: 20 } }) {
      edges {
        node {
          homepage {
            homepageGrid {
              image {
                altText
                sourceUrl
              }
              client
              project
              detailPageUrl
            }
            introCopy
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWpPage: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            homepage: PropTypes.shape({
              homepageGrid: PropTypes.arrayOf(
                PropTypes.shape({
                  client: PropTypes.string,
                  detailPageUrl: PropTypes.string,
                  image: PropTypes.shape({
                    altText: PropTypes.string,
                    sourceUrl: PropTypes.string,
                  }),
                  project: PropTypes.string,
                })
              ),
              introCopy: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default IndexPage;
