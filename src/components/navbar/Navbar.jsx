import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import './navbar.css';
import logo from '../../images/logo/logo 2.webp';
import { useState, useEffect, useRef } from 'react';
import arrowDown from './images/icon-arrow-down.svg';
import arrowUp from './images/icon-arrow-up.svg';
import NewsLetter from '../components-data/pdf-files/APRIL 2025 (1080 x 1280 px).pdf';
// ABOUT DROPDOWN SECTION
// eslint-disable-next-line react/prop-types
const EventsToggle = ({ eventsDropDown }) => {
  if (!eventsDropDown) return null;
  return (
    <div className='event-box'>
      <div className='event-container'>
        <div className='event-items'>
          <p><a href={NewsLetter} className='news-link' target='_blank'>Newsletter</a></p>
          <p><Link className='news-link' to="/events">Events</Link></p>
        </div>
      </div>
    </div>
  );
};
// ABOUT DROPDOWN SECTION
// eslint-disable-next-line react/prop-types
const AboutToggle = ({ aboutNavToggle }) => {
  if (!aboutNavToggle) return null;
  return (
    <div className='nav-box'>
      <div className='navbox-container'>
        <div className='navbox-items'>
          <p><Link className='news-link' to="/about">About Us</Link></p>
          {/* <p><Link className='news-link' to="/events">Our Elders</Link></p> */}
          <p><Link className='news-link' to="/whatwebelieve">What We Believe</Link></p>
          <p><Link className='news-link' to="/mission">Our Mission/Values</Link></p>
          <p><Link className='news-link' to="/give">Give</Link></p>
        </div>
      </div>
    </div>
  );
};
// CONNECT DROPDOWN SECTION
// eslint-disable-next-line react/prop-types
const ConnectToggle = ({ connectDropdown }) => {
  if (!connectDropdown) return null;
  return (
    <div className='connect-box'>
      <div className='connect-container'>
        <div className='connect-items'>
          <p><Link className='news-link' to="/prayerrequest">How can we pray for you?</Link></p>
          <p><Link className='news-link' to="/guest">First Time Guest?</Link></p>
          <p><Link className='news-link' to="/yestoJesus">I accepted Jesus</Link></p>
          <p><Link className='news-link' to="/events">Join our Bible Study Group</Link></p>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [aboutNavToggle, setAboutNavToggle] = useState(false);
  const [eventsDropDown, setEventsDropDown] = useState(false);
  const [connectDropdown, setConnectDropdown] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(); // ✅ Single ref for dropdowns

  const closeMobile = () => {
    scrollToTop();
    setNavToggle(false);
  };

  // ✅ Close both dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAboutNavToggle(false);
        setEventsDropDown(false);
        setConnectDropdown(false)
        setNavToggle(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ✅ Close both dropdowns on route change
  useEffect(() => {
    setAboutNavToggle(false);
    setEventsDropDown(false);
    setConnectDropdown(false);
    const lastPath = location.pathname.split('/').pop();
    setActiveItem(lastPath || 'item1');
  }, [location]);

  // ✅ Close dropdowns if you open another
  const handleAboutClick = () => {
    setAboutNavToggle(!aboutNavToggle);
    setEventsDropDown(false);
    setConnectDropdown(false);
  };

  const handleCompanyClick = () => {
    setEventsDropDown(!eventsDropDown);
    setAboutNavToggle(false);
    setConnectDropdown(false);
  };
    const handleConnectClick = () => {
    setConnectDropdown(!connectDropdown);
    setAboutNavToggle(false);
    setEventsDropDown(false);
  };

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY >= 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={scroll ? 'nav-container sticky' : 'nav-container'} >
      <nav className='navbar' >
        <div className="logo">
          <Link className='brand' to="/">
            <img className='logo-img' src={logo} alt="ccw logo" />
          </Link>
        </div>
        <ul className={`nav-item ${navToggle ? 'active' : ''}`} ref={dropdownRef}>
          <li className='nav-list'>
            <Link className={activeItem === 'item1' ? 'active' : 'nav-link'} to="/" onClick={closeMobile}>Home</Link>
          </li>
          {/* CONNECT SECTION */}
          <div className="nav-drop">
            <li className='dropdown' onClick={handleConnectClick}>
              {`Connect`}
              <img className='dropdown-icon' src={!connectDropdown ? arrowDown : arrowUp} alt="dropdown" />
            </li>
            <ConnectToggle connectDropdown={connectDropdown} />
          </div>
          {/* ABOUT SECTION */}
          <div className="nav-drop">
            <li className='dropdown' onClick={handleAboutClick}>
              More Info
              <img className='dropdown-icon' src={!aboutNavToggle ? arrowDown : arrowUp} alt="dropdown" />
            </li>
            <AboutToggle aboutNavToggle={aboutNavToggle} />
          </div>

          <li className='nav-list'>
            <Link className={activeItem === 'messages' ? 'active' : 'nav-link'} to="/messages" onClick={closeMobile}>Messages</Link>
          </li>
          {/* <li className='nav-list'>
            <Link className={activeItem === 'give' ? 'active' : 'nav-link'} to="/give" onClick={closeMobile}>Give</Link>
          </li> */}
          {/* EVENTS SECTION */}
          <div className="nav-drop">
            <li className='dropdown' onClick={handleCompanyClick}>
              {`What's New`}
              <img className='dropdown-icon' src={!eventsDropDown ? arrowDown : arrowUp} alt="dropdown" />
            </li>
            <EventsToggle eventsDropDown={eventsDropDown} />
          </div>
          

          <li className='nav-list'>
            <Link className={activeItem === 'contact' ? 'active' : 'nav-link'} to="/contact" onClick={closeMobile}>Contact Us</Link>
          </li>
        </ul>

        <div className="burger-menu" onClick={() => setNavToggle(!navToggle)}>
          {navToggle ? <IoCloseSharp className='burger-item' /> : <GiHamburgerMenu className='burger-item' />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
