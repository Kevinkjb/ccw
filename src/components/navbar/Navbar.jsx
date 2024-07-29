import { Link , useLocation} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo/logo.png';
import { useEffect } from 'react';

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false)
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const closeMobile = () =>{
    scrollToTop()
    setNavToggle(false)
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds smooth scrolling behavior
    });
  };
  useEffect(() => {
    // Extract the last part of the pathname as the activeItem
    const lastPath = location.pathname.split('/').pop();
    setActiveItem(lastPath || 'item1'); // Default to 'item1' if no path
  }, [location.pathname]);

  return (
    <nav className='nav-container'>
      <div className="main-nav ">
        <div className="logo">
          <Link className='brand' to="/">
            <img className='logo-img' src={logo} alt="ccw logo" />
          </Link>
        </div>
        <ul className={`nav-item ${navToggle ? 'active' : ''}`}>
          <li className='nav-list'>
            <Link 
            className={activeItem === 'item1' ? 'active' : 'nav-link'}
            to="/" 
            onClick={closeMobile}>
            Home
            </Link>
          </li>
          <li className='nav-list'>
            <Link 
            className={activeItem === 'about' ? 'active' : 'nav-link'}
            to="/about" 
            onClick={closeMobile}>About</Link>
          </li>
          <li className='nav-list'>
            <Link 
            className={activeItem === 'events' ? 'active' : 'nav-link'}
            to="/events" 
            onClick={closeMobile}>Events</Link>
          </li>
          <li className='nav-list'>
            <Link 
            className={activeItem === 'messages' ? 'active' : 'nav-link'}
            to="/messages" 
            onClick={closeMobile}>Messages</Link>
          </li>
          <li className='nav-list'>
            <Link 
            className={activeItem === 'give' ? 'active' : 'nav-link'}
            to="/give" 
            onClick={closeMobile}>Give</Link>
          </li>
          <li className='nav-list'>
            <Link 
            className={activeItem === 'contact' ? 'active' : 'nav-link'}
            to="/contact" 
            onClick={closeMobile}>Contact Us</Link>
          </li>
        </ul>
        <div className="burger-menu" onClick={() => setNavToggle(!navToggle)}>
          {navToggle ? <IoCloseSharp className='burger-item'/> : <GiHamburgerMenu className='burger-item'/>}
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
