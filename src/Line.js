import React, { PropTypes } from 'react';
import cx from 'classnames';
import { STATUSES } from './constants';
import s from './style/line.scss';

function Line({ prefixClass, percent, className, status, background, trailColor }) {
  const classes = cx(s[`${prefixClass}-line`], className);
  const innerClasses = cx(s[`${prefixClass}-line-inner`], {
    [s[`${prefixClass}-line-inner-status-${status}`]]: !!status
  });
  const progressStyle = {
    width: `${percent}%`,
    backgroundColor: background
  };
  const trailStyle = {
    backgroundColor: trailColor
  };

  return (
    <div className={classes} style={trailStyle}>
      <div className={innerClasses} style={progressStyle}></div>
    </div>
  );
}

Line.propTypes = {
  prefixClass: PropTypes.string,
  percent: PropTypes.number,
  className: PropTypes.className,
  status: PropTypes.oneOf([STATUSES.ACTIVE, STATUSES.SUCCESS,
    STATUSES.DEFAULT, STATUSES.ERROR]),
  background: PropTypes.string,
  trailColor: PropTypes.string,
};

export default Line;
