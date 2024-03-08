import {createBrowserRouter} from "react-router-dom"
import ReduxApp from '../redux/ReduxApp'
import NotFoundApp from '../pages/404error'
import About from '../pages/About'
import Menu from '../pages/Menu'
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