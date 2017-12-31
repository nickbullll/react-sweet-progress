import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { prefixClass, STATUSES, COLOR_MAP } from './constants';
import s from './style/progress.scss';
import Line from './Line';
import Circle from './Circle';
import Icon from './Icon';

export default class Progress extends Component {
  static propTypes = {
    percent: PropTypes.number,
    status: PropTypes.oneOf([STATUSES.ACTIVE, STATUSES.SUCCESS,
      STATUSES.DEFAULT, STATUSES.ERROR]),
    theme: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string,
    symbolClassName: PropTypes.string,
    type: PropTypes.string
  }

  static defaultProps = {
    percent: 0
  }

  constructor(props) {
    super(props);

    this.state = {
      status: props.status || STATUSES.ACTIVE
    };
  }

  getSymbolByStatus(status, size) {
    switch (status) {
      case STATUSES.SUCCESS:
        return <Icon name="success" size={size} />;
      case STATUSES.ERROR:
        return <Icon name="error" size={size} />;
      default:
        return [`${this.props.percent}`,'%'];
    }
  }

  render() {
    const {
      percent, status, theme, style, className, symbolClassName, type,
      width, strokeWidth
    } = this.props;
    let progressStatus = null;

    if (percent === 0) {
      progressStatus = STATUSES.DEFAULT;
    } else if (percent >= 100 && !status) {
      progressStatus = STATUSES.SUCCESS;
    } else {
      progressStatus = status || STATUSES.ACTIVE;
    }

    const themeProgress = theme && theme[progressStatus];
    const progressColor = themeProgress ? themeProgress.color : COLOR_MAP[progressStatus];
    const outlineColor = themeProgress ? themeProgress.outlineColor: "#efefef"
    if (type === 'circle') {
      const circleSize = width || 132;
      const fontSize = (circleSize * 0.16) + 6;
      const symbolSize = fontSize * 1.25;
      const symbol = (themeProgress && themeProgress.symbol) ||
        this.getSymbolByStatus(progressStatus, symbolSize);
        console.log(style)
      const circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize,
        ...style.circle
      };

      const valueStyle = {
        ...style.value
      };

      const percentStyle = {
        ...style.percent
      }
      const circleWidth = strokeWidth || 6;
      const gapPos = 'top';
      const gapDeg = 0;

      return (
        <div className={`${prefixClass}-circle-outer`} style={circleStyle}>
          <Circle
            percent={percent}
            strokeWidth={circleWidth}
            strokeColor={progressColor}
            outlineColor={outlineColor}
            prefixClass={prefixClass}
            gapDegree={gapDeg}
            gapPosition={gapPos}
          />
          <div className={s[`${prefixClass}-symbol-absolute`]}>
            <div style={valueStyle} className={cx(s[`${prefixClass}-symbol`], symbolClassName)}>{symbol.props?symbol:symbol[0]}</div>
            {!symbol.props?(
              <div style={percentStyle} className="">{symbol[1]}</div>
            ):null}
          </div>
        </div>
      );
    }
    const symbol = (themeProgress && themeProgress.symbol) ||
      this.getSymbolByStatus(progressStatus);
    return (
      <div className={cx(s[`${prefixClass}`], className)} style={style}>
        <Line
          prefixClass={prefixClass}
          percent={percent}
          status={progressStatus}
          background={progressColor}
        />
        <div className={cx(s[`${prefixClass}-symbol`], symbolClassName)}>{symbol}</div>
      </div>
    );
  }
}
