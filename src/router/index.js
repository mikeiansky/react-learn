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
import PromiseApp from '../pages/PromiseApp'
import ReduxSagaApp from "../redux-saga";

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
                    }
                ]
            },
            {
                path: '/promise',
                element: <PromiseApp/>,
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