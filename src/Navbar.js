import { NavLink, Route, Routes } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './Navbar.css'
import Home from './Home'
import Jwellery from './Jwellery'
import Electronics from './Electronics'
import Menclothes from './Menclothes'
import Womanclothes from './Womanclothes'
import Item from './Item'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Jwellery">Jwellery</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/Mclothes">Menclothes</NavLink>
            </li>
            <li>
              <NavLink to="/Wclothes">Womanclothes</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path='/' element={<Home> </Home>}></Route>
          <Route path='/Jwellery' element={<Jwellery></Jwellery>}></Route>
          <Route path='/electronics' element={<Electronics></Electronics>}></Route>
          <Route path='/Mclothes' element={<Menclothes></Menclothes>}></Route>
          <Route path='/Wclothes' element={<Womanclothes></Womanclothes>}></Route>
          <Route path='/item' element={<Item></Item>}></Route>
        </Routes>
      </div>
    </nav>
  )
}

export default Navbar
