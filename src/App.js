import React from "react";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { history } from './utils'
import { lazy, Suspense } from 'react'
import "./App.scss"

// 按需导入组件
const CV = lazy(() => import('./pages/CV'))
const CVEn = lazy(() => import('./pages/CV-En'))
const Blog = lazy(() => import('./pages/Blog'))
const NEDefense = lazy(() => import('./pages/NEDefense'))
const RPiOpen = lazy(() => import('./pages/RPiOpen'))
const RPiDefense = lazy(() => import('./pages/RPiDefense'))
const Setting = lazy(() => import('./pages/Setting'))

const App = () => {
  return (
      <HistoryRouter history={history}>
        <div className="App">
          <Suspense
              fallback={
                <div className="loading-container">
                  加载中...
                </div>
              }
          >
            <Routes>
              <Route path='/' element={<CV/>}></Route>
              <Route path='/cv-en' element={<CVEn />}></Route>
              <Route path='/blog' element={<Blog />}></Route>
              <Route path="/blog/ne-defense" element={<NEDefense />}/>
              <Route path="/blog/rpi-open" element={<RPiOpen />}/>
              <Route path="/blog/rpi-defense" element={<RPiDefense />}/>
              <Route path="/blog/setting" element={<Setting />}/>
            </Routes>
          </Suspense>
        </div>
      </HistoryRouter>
  );
}

export default App;
