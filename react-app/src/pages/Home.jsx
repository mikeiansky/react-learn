import React from 'react'
import News from './News'
import Messages from './Messages'
import {Route, Routes, NavLink, Navigate} from 'react-router-dom'


export default class Home extends React.Component {


    render(){

        return <div>This is Home ... 
            <div>
            <NavLink to='news'>go to news</NavLink> <br/>
            <NavLink to='message'>go to message</NavLink> <br/>
            </div>
            <div>
                <Routes>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/message/*' element={<Messages/>}/>
                    <Route path='/' element={<Navigate to="news"/>}/>
                </Routes>
            </div>
            <div>
                home end ...
            </div>

        </div>
    }

}



