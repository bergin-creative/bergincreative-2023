/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkDetailPage = ({ data, location }) => {
  const {
    allWpWorkDetailPage: { nodes },
  } = data;
  const {
    title,
    workDetail: { heading, images },
  } = nodes[0];

  return (
    <Layout location={location}>
      <SEO title={title} />
      <div className="container">
        <div className="work__wrapper">
          <h1
            className="work__heading"
            dangerouslySetInnerHTML={{ __html: heading }}
          />

          <ul className="work__images-list">
            {images.map((img) => (
              <li className="work__images-item" key={img.image.sourceUrl}>
                <img
                  src={img.image.sourceUrl}
                  alt={img.image.altText}
                  className="work__images-img"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    allWpWorkDetailPage(filter: { id: { eq: $id } }) {
      nodes {
        title
        workDetail {
          heading
          images {
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

WorkDetailPage.propTypes = {
  data: PropTypes.shape({
    allWpWorkDetailPage: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          workDetail: PropTypes.shape({
            heading: PropTypes.string,
            images: PropTypes.arrayOf(
              PropTypes.shape({
                image: PropTypes.shape({
                  altText: PropTypes.string,
                  sourceUrl: PropTypes.string,
                }),
              })
            ),
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default WorkDetailPage;
