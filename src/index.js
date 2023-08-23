import React from 'react';
import ReactDOM from 'react-dom/client';

// 样式初始化
import "reset-css"
// UI框架样式
// 全局样式
import './assets/styles/global.scss'
// 特殊组件样式
import 'reveal.js/dist/reveal.css';  // 这里导入了在ppt中就不用导入了

import App from './App';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from './utils'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </React.StrictMode>
);
