import React from 'react';
import PropTypes from 'prop-types';

export const IconInstagram = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <title>Instagram icon</title>
    <path
      d="M18.4,7.6c-0.8,0-1.5-0.6-1.5-1.4s0.6-1.5,1.4-1.5c0.8,0,1.5,0.6,1.5,1.4c0,0,0,0,0,0.1C19.8,6.9,19.1,7.6,18.4,7.6
	 M17.7,24c3.5,0,6.3-2.8,6.3-6.3l0,0V6.3C24,2.8,21.2,0,17.7,0l0,0H6.3C2.8,0,0,2.8,0,6.3v11.3C0,21.1,2.8,24,6.3,24L17.7,24
	 M17.6,2.9c1.9,0,3.4,1.5,3.4,3.4v11.3c0,1.9-1.5,3.4-3.4,3.4H6.3c-1.9,0-3.4-1.5-3.4-3.4V6.3C3,4.5,4.5,3,6.3,3l12.4-0.1H17.6z
	 M12.1,18.3c3.5,0,6.3-2.8,6.3-6.3s-2.8-6.3-6.3-6.3c-3.5,0-6.3,2.8-6.3,6.3c0,0,0,0,0,0C5.7,15.5,8.6,18.3,12.1,18.3L12.1,18.3
	 M12.1,8.6c1.9,0,3.4,1.5,3.4,3.4s-1.5,3.4-3.4,3.4s-3.4-1.5-3.4-3.4S10.2,8.6,12.1,8.6"
    />
  </svg>
);

IconInstagram.propTypes = {
  className: PropTypes.string,
};

IconInstagram.defaultProps = {
  className: '',
};
