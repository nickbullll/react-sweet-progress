import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { prefixClass, STATUSES } from './constants';
import s from './style/progress.scss';
import Line from './Line';
import Icon from './Icon';

export default class Progress extends Component {
  static propTypes = {
    percent: PropTypes.number,
    status: PropTypes.oneOf([STATUSES.ACTIVE, STATUSES.SUCCESS,
      STATUSES.DEFAULT, STATUSES.ERROR]),
    theme: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string,
    symbolClassName: PropTypes.string
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

  getSymbolByStatus(status) {
    switch (status) {
      case STATUSES.SUCCESS:
        return <Icon name="success" />;
      case STATUSES.ERROR:
        return <Icon name="error" />;
      default:
        return `${this.props.percent}%`;
    }
  }

  render() {
    const {
      percent, status, theme, style, className, symbolClassName
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
    const symbol = (themeProgress && themeProgress.symbol) ||
      this.getSymbolByStatus(progressStatus);

    return (
      <div className={cx(s[`${prefixClass}`], className)} style={style}>
        <Line
          prefixClass={prefixClass}
          percent={percent}
          status={progressStatus}
          background={themeProgress && themeProgress.color}
        />
        <div className={cx(s[`${prefixClass}-symbol`], symbolClassName)}>{symbol}</div>
      </div>
    );
  }
}
