import React from 'react' 
import {
  Route,
  Routes,
  NavLink,
} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

export default function App() {


  return <div>
    This is app ...  

    <div>
      <NavLink to="/">go to home</NavLink><br />
      <NavLink to="/about">go to about</NavLink>
    </div>

    <div>
      this is route content 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
    {/* content */}



  </div>

}
