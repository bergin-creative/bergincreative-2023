import React from 'react';
import PropTypes from 'prop-types';

import { IconExternal } from '../icons/external';

export const Button = ({
  classes,
  ctaText,
  ctaUrl,
  isReversed,
  isSolid,
  hasIcon,
  onClick,
  targetBlank,
}) => {
  if (onClick) {
    return (
      <button
        className={`button ${isReversed && 'button--reversed'} ${
          isSolid && 'button--solid'
        } ${classes && classes}`}
        type="button"
        aria-label="show more stores"
        onClick={onClick}
      >
        <span>{ctaText}</span>
      </button>
    );
  }

  return (
    <a
      className={`button ${isReversed && 'button--reversed'} ${
        isSolid && 'button--solid'
      } ${classes && classes}`}
      href={ctaUrl}
      target={targetBlank ? '_blank' : null}
      rel={targetBlank ? 'noopener noreferrer' : null}
    >
      <span>{ctaText}</span>{' '}
      {hasIcon && <IconExternal className="button__icon" />}
    </a>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string,
  hasIcon: PropTypes.bool,
  isReversed: PropTypes.bool,
  isSolid: PropTypes.bool,
  onClick: PropTypes.func,
  targetBlank: PropTypes.bool,
};

Button.defaultProps = {
  classes: null,
  ctaUrl: '',
  hasIcon: false,
  isReversed: false,
  isSolid: false,
  onClick: null,
  targetBlank: null,
};
