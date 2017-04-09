import React, { PropTypes } from 'react';
import cx from 'classnames';
import { STATUSES } from './constants';
import s from './style/line.scss';

function Line({ prefixClass, percent, className, status, background }) {
  const classes = cx(s[`${prefixClass}-line`], className);
  const innerClasses = cx(s[`${prefixClass}-line-inner`], {
    [s[`${prefixClass}-line-inner-status-${status}`]]: status
  });
  const style = {
    width: `${percent}%`,
    backgroundColor: background
  };

  return (
    <div className={classes}>
      <div className={innerClasses} style={style}></div>
    </div>
  );
}

Line.propTypes = {
  prefixClass: PropTypes.string,
  percent: PropTypes.number,
  className: PropTypes.className,
  status: PropTypes.oneOf([STATUSES.ACTIVE, STATUSES.SUCCESS,
    STATUSES.DEFAULT, STATUSES.ERROR]),
  background: PropTypes.string
};

export default Line;
