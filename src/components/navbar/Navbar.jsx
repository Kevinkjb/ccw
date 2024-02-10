import {Link} from 'react-router-dom'
import './navbar.css'
import logo from '../../images/logo.png'
const Navbar = () => {
  return (
    <nav  className='nav-container'>
      <div className="main-nav">
        <div className="logo">
          <img className='logo-img' src={logo} alt="ccw logo" />
        </div>
        <ul className='nav-item'>
          <li className='nav-list'>
              <Link className='nav-link' to="/">Home</Link>
          </li>
          <li className='nav-list'>
              <Link className='nav-link' to="/about">About</Link>
          </li>
          <li className='nav-list'>
              <Link className='nav-link' to="/events">Events</Link>
          </li>
          <li className='nav-list'>
              <Link className='nav-link' to="/messages">Messages</Link>
          </li>
          <li className='nav-list'>
              <Link className='nav-link' to="/give">Give</Link>
          </li>
          <li className='nav-list'>
              <Link className='nav-link' to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
