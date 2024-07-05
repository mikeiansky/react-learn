import React from 'react' 
import {
  Route,
  Routes,
  NavLink,
  Navigate
} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'
import './App.css'

export default function App() {


  return <div>
    This is app ...  

    <div>
      <Header/>
    </div>

    <div>
      <NavLink to="/home">go to home</NavLink><br />
      <NavLink to="/about">go to about</NavLink><br />
      <NavLink to="/test">go to test</NavLink><br />
    </div>

    <div>
      this is route content 
      <Routes>
        <Route path='/home/*' element={<Home />} />
        <Route replace path='/about' element={<About />} />
        <Route path='/test/*' element={<Test />} />
        <Route path='/' element={<Navigate to="/home"/>}/>
      </Routes>

    </div>
    {/* content */}



  </div>

}
