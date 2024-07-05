import React from 'react'
import Header from './Header'
// import Menu from './Menu'
// import Content from './Content'
import {
  Route,
  Routes,
  Link,
} from "react-router-dom"
import Home from './Home'
import About from './About'

export default function App() {


  return <div>
    This is app ...

    {/* header */}
    <Header />

    {/* menu */}
    {/* <Menu /> */}

    <div>
      <Link to="/">go to home</Link><br />
      <Link to="/about">go to about</Link>
    </div>

    <div>
      this is route content
      {/* <Content /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
    {/* content */}



  </div>

}
