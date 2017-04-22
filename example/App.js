import React, { Component, PropTypes } from 'react';
import s from './style.scss';
import ProgressTemplate from './ProgressTemplate';
import './style.scss';

export default class App extends Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.h1}>React Sweet Progress</div>
        <div className={s.h2}>https://github.com/abraztsov/react-sweet-progress</div>
        <div className={s.circles}>
          <ProgressTemplate
            percent={100}
            type="circle"
          />
          <ProgressTemplate
            type="circle"
            theme={{
              success: {
                symbol: '🤰',
                color: '#d666eb'
              },
              active: {
                symbol: '🥗',
                color: 'rgb(141, 189, 87)'
              },
              default: {
                symbol: '😋'
              }
            }}
          />
          <ProgressTemplate
            percent={100}
            type="circle"
            status="error"
            strokeWidth={3}
          />
        </div>
        <ProgressTemplate
          percent={70}
        />
        <ProgressTemplate
          status="error"
          percent={40}
        />
        <ProgressTemplate
          theme={{
            success: {
              symbol: '🏄‍',
              color: 'rgb(223, 105, 180)'
            },
            active: {
              symbol: '😀',
              color: '#fbc630'
            },
            default: {
              symbol: '😱',
              color: '#fbc630'
            }
          }}
        />
      </div>
    )
  }
};
