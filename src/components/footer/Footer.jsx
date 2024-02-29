import {Link} from 'react-router-dom'
import { FaFacebook, FaYoutube  } from "react-icons/fa";
import './footer.css';

import footerLogo from '../../images/logo.png'
const Footer = () => {
    
  return (
    <div className='footer-container'>
      <section className="footer-section">
        {/* FOOTER BRAND */}
        <div className="footer-brand">
            <div className="footer-logo">
                <img className='footer-logo-img' src={footerLogo} alt="" />
                <h4 className='footer-logo-title'>Church of Christ Wetaskiwin</h4>
            </div>
            <p className='footer-text'>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. </p>
            <div className="footer-social">
                <a className='footer-link' href="https://www.facebook.com/CCWetaskiwin" target='_blank'>
                    <FaFacebook className='footer-img'/>
                </a>
                <a className='footer-link' href="https://www.youtube.com/@ChurchofChristWetaskiwin" target='_blank'>
                    <FaYoutube className='footer-img'/>
                </a>
            </div>
        </div>
        {/* QUICK LINKS */}
        <div className="quick-links">
            <h4 className='footer-title'>Quick Links</h4>
            <ul className='quick-item'>
                <li className='footer-list'>
                    <Link to="/" className='footer-link'>Home</Link>
                </li>
                <li className='footer-list'>
                    <Link to="/about" className='footer-link'>About</Link>
                </li>
                <li className='footer-list'>
                    <Link to="/events" className='footer-link'>Events</Link>
                </li>
                <li className='footer-list'>
                    <Link to="/messages" className='footer-link'>Messages</Link>
                </li>
                <li className='footer-list'> 
                    <Link to="/give" className='footer-link'>Give</Link>
                </li>
                <li className='footer-list'>
                    <Link to="/contact" className='footer-link'>Contact Us</Link>
                </li>
            </ul> 
        </div>
        {/* SERVICES HOURS */}
        <div className="services-hours">
            <h4 className='footer-title'>Services Hours</h4>
            <div className="footer-hours">
                <p><span className='hours-span'>Wednesday Prayer Meeting: </span> 6:00PM</p>
                <p><span className='hours-span'>Sunday Service: </span> 10:00AM</p>
                <p><span className='hours-span'>Sunday School: </span> 10:00AM</p>
            </div>
        </div>
        {/* Have a question */}
        <div className="footer-address">
            <h4 className='footer-title'>Have a question?</h4>
            <div className="address-info">
                <p>
                    4708 50 Avenue <br />
                    Wetaskiwin, Alberta T9A 0R7
                </p>
                <p>
                    ccwetaskiwin@gmail.com
                </p>
                <p>(403) 913-4713</p>
            </div>
            <a className='direction-map' href="https://maps.app.goo.gl/bhFEkdqXwV6LmPmE6" target='_blank'>
                <button className="get-direction-btn">
                    Get Direction
                </button>
            </a>

        </div>
      </section>
    </div>
  )
}

export default Footer
