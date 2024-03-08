import {createBrowserRouter} from "react-router-dom"
import ReduxApp from '../redux/ReduxApp'
import NotFoundApp from '../pages/404error'
import About from '../pages/about'
import Menu from '../pages/menu'
import Login from '../pages/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>,
        children: [
            {
                path: '/redux',
                element: <ReduxApp/>,
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '*',
        element: <NotFoundApp/>
    }
])

export default router