import React, {lazy} from "react"
import {Navigate} from "react-router-dom"
// 统一管理路由

// TODO： webpack 默认不支持模块引入，暂时先尽可能确保类名不重复吧
import './index.scss'

// 按需导入组件
const Home = lazy(() => import('../pages/Home'))
const CV = lazy(() => import('../pages/CV'))
const CVEn = lazy(() => import('../pages/CV-En'))
const Blog = lazy(() => import('../pages/Blog'))
const NEDefense = lazy(() => import('../pages/NEDefense'))
const RPiOpen = lazy(() => import('../pages/RPiOpen'))
const RPiDefense = lazy(() => import('../pages/RPiDefense'))
const Setting = lazy(() => import('../pages/Setting'))
const MusicFrontend = lazy(() => import('../pages/MusicFrontend'))
const NotesShow = lazy(() => import('../pages/NotesShow'))
const A11yFrontend = lazy(() => import('../pages/A11yFrontend'))

const withLoadingComponents = (comp) => (
    <React.Suspense fallback={
        <div className="loading-container">
            <div className="loading-trans">
                <span className="loading-span">加载中...</span>
            </div>
        </div>
    }>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/cv"/>
    },
    {
        path: "/",
        element: withLoadingComponents(<Home/>),
        children: [
            {
                path: "/cv",
                element: withLoadingComponents(<CV/>)
            },
            {
                path: "/cv-en",
                element: withLoadingComponents(<CVEn/>)
            },
            {
                path: "/blog",
                element: withLoadingComponents(<Blog/>)
            },
            {
                path: "/blog/ne-defense",
                element: withLoadingComponents(<NEDefense/>)
            },
            {
                path: "/blog/rpi-open",
                element: withLoadingComponents(<RPiOpen/>)
            },
            {
                path: "/blog/rpi-defense",
                element: withLoadingComponents(<RPiDefense/>)
            },
            {
                path: "/blog/setting",
                element: withLoadingComponents(<Setting/>)
            },
            {
                path: "/blog/music-frontend",
                element: withLoadingComponents(<MusicFrontend/>)
            },
            {
                path: "/blog/show",
                element: withLoadingComponents(<NotesShow/>)
            },
            {
                path: "/blog/a11y-frontend",
                element: withLoadingComponents(<A11yFrontend/>)
            }
        ]
    }

]

export default routes
