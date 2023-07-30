import React from "react";
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { history } from './utils'
import { lazy, Suspense } from 'react'
import "./App.css"

// 按需导入组件
const CV = lazy(() => import('./pages/CV'))
const CV_En = lazy(() => import('./pages/CV-En'))
const Blog = lazy(() => import('./pages/Blog'))

const App = () => {
  return (
      <HistoryRouter history={history}>
        <div className="App">
          <Suspense
              fallback={
                <div style={{textAlign: 'center', marginTop: 200}}>
                  loading...
                </div>
              }
          >
            <Routes>
              <Route path='/' element={<CV/>}></Route>
              <Route path='/cv-en' element={<CV_En />}></Route>
              <Route path='/blog' element={<Blog />}>
                {/* 二级路由 */}
                {/*<Route index element={<Home />}></Route>*/}
                {/*<Route path='article' element={<Article />}></Route>*/}
                {/*<Route path='publish' element={<Publish />}></Route>*/}
              </Route>
            </Routes>
          </Suspense>
        </div>
      </HistoryRouter>
  );
}

export default App;
