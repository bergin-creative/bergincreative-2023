import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button } from '../components/patterns/button';

import homeAamftImg from '../images/homepage-aamft.jpg';
import homeLockHueImg from '../images/homepage-lock-hue.jpg';
import homeLogosImg from '../images/homepage-logos.jpg';
import homeNaeaImg from '../images/homepage-naea.jpg';
import homePingryImg from '../images/homepage-pingry.jpg';
import homeRedsImg from '../images/homepage-reds.jpg';
import homeRpcsAlumnaeImg from '../images/homepage-rpcs-alumnae.jpg';
import homeRpcsReportsImg from '../images/homepage-rpcs-reports.jpg';
import homeTronoxImg from '../images/homepage-tronox.jpg';

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className="container">
      <div className="homepage__wrapper">
        <div className="homepage__header">
          <h1>Josephine Bergin</h1>
          <h2>Graphic Designer</h2>
        </div>

        <div className="homepage__grid">
          <ul className="homepage__grid-list">
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeRpcsAlumnaeImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">
                      Roland Park Country School
                    </span>
                    <span className="homepage__grid-label-subtitle">
                      Alumnae magazine
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeNaeaImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">NAEA</span>
                    <span className="homepage__grid-label-subtitle">
                      Membership magazine
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeAamftImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">AAMFT</span>
                    <span className="homepage__grid-label-subtitle">
                      Membership magazine
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homePingryImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">
                      The Pingry School
                    </span>
                    <span className="homepage__grid-label-subtitle">
                      Alumni magazine
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeRpcsReportsImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">
                      Roland Park Country School
                    </span>
                    <span className="homepage__grid-label-subtitle">
                      Reports and collateral
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeTronoxImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">Tronox</span>
                    <span className="homepage__grid-label-subtitle">
                      Sustainability report
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeRedsImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">Reds</span>
                    <span className="homepage__grid-label-subtitle">
                      Mascot
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeLockHueImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">Lock Hue</span>
                    <span className="homepage__grid-label-subtitle">
                      Logo/branding
                    </span>
                  </p>
                </div>
              </Link>
            </li>
            <li className="homepage__grid-item">
              <Link className="homepage__grid-link" to="/">
                <img
                  className="homepage__grid-image"
                  src={homeLogosImg}
                  alt=""
                />
                <div className="homepage__grid-label">
                  <p className="homepage__grid-label-copy">
                    <span className="homepage__grid-label-title">Various</span>
                    <span className="homepage__grid-label-subtitle">
                      Identity projects
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <p className="homepage__intro">
          I’d love to help you find solutions through graphic design — design
          with meaning, creativity and heart that makes an impact. Read more
          about me <Link to="/about">here</Link>.
        </p>

        <Button
          classes="homepage__cta"
          ctaText="Send me an email"
          ctaUrl="/"
          isReversed
        />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
