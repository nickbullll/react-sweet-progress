import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './style/circle.scss';

export default class Circle extends Component {
  static propTypes = {
    prefixClass: PropTypes.string,
    percent: PropTypes.number,
    className: PropTypes.className,
    strokeWidth: PropTypes.number,
    strokeColor: PropTypes.string,
    trailColor: PropTypes.string,
    style: PropTypes.object
  }

  getPathStyles() {
    const { prefixClass, percent, strokeWidth, gapDegree = 0, gapPosition } = this.props;
    const radius = 50 - (strokeWidth / 2);
    const beginPositionX = 0;
    const beginPositionY = -radius;
    const endPositionX = 0;
    const endPositionY = -2 * radius;
    const pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
     a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
     a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
    const len = Math.PI * 2 * radius;
    const trailPathStyle = {
      strokeDasharray: `${len - gapDegree}px ${len}px`,
      strokeDashoffset: `-${gapDegree / 2}px`,
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
    };
    const strokePathStyle = {
      strokeDasharray: `${(percent / 100) * (len - gapDegree)}px ${len}px`,
      strokeDashoffset: `-${gapDegree / 2}px`,
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
    };
    return { pathString, trailPathStyle, strokePathStyle };
  }

  render() {
    const {
      prefixClass, strokeWidth, strokeColor, trailColor, style, className, ...restProps
    } = this.props;
    const classes = cx(s[`${prefixClass}-circle`], className);
    const { pathString, trailPathStyle, strokePathStyle } = this.getPathStyles();
    delete restProps.percent;
    delete restProps.gapDegree;
    delete restProps.gapPosition;
    return (
      <svg
        className={classes}
        viewBox="0 0 100 100"
        style={style}
        {...restProps}
      >
        <path
          d={pathString}
          stroke={trailColor}
          strokeWidth={strokeWidth}
          fillOpacity="0"
          style={trailPathStyle}
        />
        <path
          d={pathString}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fillOpacity="0"
          ref={(path) => { this.path = path; }}
          style={strokePathStyle}
        />
      </svg>
    );
  }
}
