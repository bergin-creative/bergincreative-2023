import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import connections1 from '../images/work-connections-1.jpg';
import connections2 from '../images/work-connections-2.jpg';
import connections3 from '../images/work-connections-3.jpg';
import connections4 from '../images/work-connections-4.jpg';
import connections5 from '../images/work-connections-5.jpg';
import connections6 from '../images/work-connections-6.jpg';
import connections7 from '../images/work-connections-7.jpg';

const Connections = () => (
  <Layout>
    <SEO title="Connections" />
    <div className="container">
      <div className="work__wrapper">
        <h1>Connections</h1>
        <p>
          <i>Connections</i>, alumnae magazine for Roland Park Country school
        </p>
        <ul className="work__images-list">
          <li className="work__images-item">
            <img src={connections1} alt="" className="work__images-img" />
          </li>
          <li className="work__images-item">
            <img src={connections2} alt="" className="work__images-img" />
          </li>
          <li className="work__images-item">
            <img src={connections3} alt="" className="work__images-img" />
          </li>
          <li className="work__images-item">
            <img src={connections4} alt="" className="work__images-img" />
          </li>
          <li className="work__images-item">
            <img src={connections5} alt="" className="work__images-img" />
          </li>
          <li className="work__images-item">
            <img src={connections6} alt="" className="work__images-img" />
          </li>
          <li className="work__images-item">
            <img src={connections7} alt="" className="work__images-img" />
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default Connections;
