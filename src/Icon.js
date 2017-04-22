import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import s from './style/line.scss';

export default class Icon extends Component {
  render() {
    const style = this.props.size ? { width: this.props.size, height: this.props.size }
      : { width: '20px', height: '20px' };
    switch (this.props.name) {
      case "success":
        return (
          <svg version="1.1" viewBox="0 0 512 512" style={style}>
            <path fill="#049e51"
              d="M489,255.9c0-0.2,0-0.5,0-0.7c0-1.6,0-3.2-0.1-4.7c0-0.9-0.1-1.8-0.1-2.8c0-0.9-0.1-1.8-0.1-2.7  c-0.1-1.1-0.1-2.2-0.2-3.3c0-0.7-0.1-1.4-0.1-2.1c-0.1-1.2-0.2-2.4-0.3-3.6c0-0.5-0.1-1.1-0.1-1.6c-0.1-1.3-0.3-2.6-0.4-4  c0-0.3-0.1-0.7-0.1-1C474.3,113.2,375.7,22.9,256,22.9S37.7,113.2,24.5,229.5c0,0.3-0.1,0.7-0.1,1c-0.1,1.3-0.3,2.6-0.4,4  c-0.1,0.5-0.1,1.1-0.1,1.6c-0.1,1.2-0.2,2.4-0.3,3.6c0,0.7-0.1,1.4-0.1,2.1c-0.1,1.1-0.1,2.2-0.2,3.3c0,0.9-0.1,1.8-0.1,2.7  c0,0.9-0.1,1.8-0.1,2.8c0,1.6-0.1,3.2-0.1,4.7c0,0.2,0,0.5,0,0.7c0,0,0,0,0,0.1s0,0,0,0.1c0,0.2,0,0.5,0,0.7c0,1.6,0,3.2,0.1,4.7  c0,0.9,0.1,1.8,0.1,2.8c0,0.9,0.1,1.8,0.1,2.7c0.1,1.1,0.1,2.2,0.2,3.3c0,0.7,0.1,1.4,0.1,2.1c0.1,1.2,0.2,2.4,0.3,3.6  c0,0.5,0.1,1.1,0.1,1.6c0.1,1.3,0.3,2.6,0.4,4c0,0.3,0.1,0.7,0.1,1C37.7,398.8,136.3,489.1,256,489.1s218.3-90.3,231.5-206.5  c0-0.3,0.1-0.7,0.1-1c0.1-1.3,0.3-2.6,0.4-4c0.1-0.5,0.1-1.1,0.1-1.6c0.1-1.2,0.2-2.4,0.3-3.6c0-0.7,0.1-1.4,0.1-2.1  c0.1-1.1,0.1-2.2,0.2-3.3c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0.1-1.8,0.1-2.8c0-1.6,0.1-3.2,0.1-4.7c0-0.2,0-0.5,0-0.7  C489,256,489,256,489,255.9C489,256,489,256,489,255.9z" id="XMLID_3_"/>
            <g fill="none" stroke="#FFFFFF" strokeWidth={30} strokeMiterlimit={10}>
              <line x1="213.6" x2="369.7" y1="344.2" y2="188.2"/>
              <line x1="233.8" x2="154.7" y1="345.2" y2="266.1"/>
            </g>
          </svg>
        );
      case "error":
        return (
          <svg version="1.1" viewBox="0 0 50 50" style={style}>
            <circle fill="#e23f33" cx="25" cy="25" r="25"/>
            <polyline fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeMiterlimit={10} points="16,34 25,25 34,16"/>
            <polyline fill="none" stroke="#FFFFFF" strokeWidth={3} strokeLinecap="round" strokeMiterlimit={10}  points="16,16 25,25 34,34"/>
          </svg>
        )
      default:
        return null;
    }
  }
}
