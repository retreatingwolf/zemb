import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  // </React.StrictMode>
);

// 如果你想要测试某个函数的性能, 可以将一个函数传递给reportWebVitals,
// 如:reportWebVitals(console.log)
// 或者发送一个analytics endpoint, 详情见https://bit.ly/CRA-vitals
reportWebVitals();
