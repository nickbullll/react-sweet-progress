import React, { Component, PropTypes } from 'react';
import { Progress } from '../src';
import './style.scss';

export default class ProgressTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: props.percent || 0
    }
  }

  onDecClick = () => {
    this.setState({ percent: this.state.percent - 10 > 0 ? this.state.percent - 10 : 0 });
  }

  onIncClick = () => {
    this.setState({ percent: this.state.percent + 10 < 100 ? this.state.percent + 10 : 100 });
  }

  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 20px 0' }}>
        <button onClick={this.onDecClick}>-</button>
        <button onClick={this.onIncClick}>+</button>
        <Progress
          percent={this.state.percent}
          status={this.props.status}
          theme={this.props.theme}
          type={this.props.type}
          width={this.props.width}
          strokeWidth={this.props.strokeWidth}
          style={{ margin: '0 0 0 10px' }}
        />
      </div>
    )
  }
}
