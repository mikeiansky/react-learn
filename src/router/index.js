import {createBrowserRouter} from "react-router-dom"
import ReduxApp from '../redux/ReduxApp'
import NotFoundApp from '../pages/404error'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Login from '../pages/Login'
import BaseSyntax from '../pages/BaseSyntax'
import BaseApp from '../pages/base'
import Iterator from '../pages/base/Iterator'
import Normal from '../pages/base/Normal'
import Generator from '../pages/base/Generator'
import AsyncApp from '../pages/base/AsyncApp'
import PromiseApp from '../pages/PromiseApp'
import ReactApp from '../pages/react'
import ReduxSagaApp from "../redux-saga";
import ReactNormal from '../pages/react/ReactNormal'
import ReactState from '../pages/react/ReactState'
import ReactImmer from '../pages/react/ReactImmer'
import ReactReducer from '../pages/react/ReactReducer'
import ReactContext from '../pages/react/ReactContext'
import Info from "../pages/info/info";
import Style from '../style'
import ZustandApp from '../zustand/ZustandApp'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>,
        children: [
            {
                path: '/redux',
                element: <ReduxApp/>,
            },
            {
                path: '/saga',
                element: <ReduxSagaApp/>,
            },
            {
                path: '/base',
                element: <BaseApp/>,
                children: [
                    {
                        path: '/base/iterator',
                        element: <Iterator/>
                    },
                    {
                        path: '/base/normal',
                        element: <Normal/>
                    },
                    {
                        path: '/base/generator',
                        element: <Generator/>
                    },
                    {
                        path: '/base/async',
                        element: <AsyncApp/>
                    }
                ]
            },
            {
                path: '/promise',
                element: <PromiseApp/>,
            },
            {
                path: '/react',
                element: <ReactApp/>,
                children: [
                    {
                        path: '/react/normal',
                        element: <ReactNormal/>
                    },
                    {
                        path: '/react/state',
                        element: <ReactState/>
                    },
                    {
                        path: '/react/immer',
                        element: <ReactImmer/>
                    },
                    {
                        path: '/react/reducer',
                        element: <ReactReducer/>
                    },
                    {
                        path: '/react/context',
                        element: <ReactContext/>
                    }
                ]
            },
            {
                path: "/style",
                element: <Style/>
            },
            {
                path: '/info',
                element: <Info/>
            },
            {
                path: "/zustand",
                element: <ZustandApp/>
            }
        ]
    },
    {
        path: '/login/:id',
        element: <Login/>
    },
    {
        path: '/about/',
        element: <About/>
    },
    {
        path: '*',
        element: <NotFoundApp/>
    }
])

export default router