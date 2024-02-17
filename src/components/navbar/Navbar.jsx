import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds smooth scrolling behavior
    });
  };

  return (
    <nav className='nav-container'>
      <div className="main-nav">
        <div className="logo">
          <img className='logo-img' src={logo} alt="ccw logo" />
        </div>
        <ul className='nav-item'>
          <li className='nav-list'>
            <Link className='nav-link' to="/" onClick={scrollToTop}>Home</Link>
          </li>
          <li className='nav-list'>
            <Link className='nav-link' to="/about" onClick={scrollToTop}>About</Link>
          </li>
          <li className='nav-list'>
            <Link className='nav-link' to="/events" onClick={scrollToTop}>Events</Link>
          </li>
          <li className='nav-list'>
            <Link className='nav-link' to="/messages" onClick={scrollToTop}>Messages</Link>
          </li>
          <li className='nav-list'>
            <Link className='nav-link' to="/give" onClick={scrollToTop}>Give</Link>
          </li>
          <li className='nav-list'>
            <Link className='nav-link' to="/contact" onClick={scrollToTop}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
