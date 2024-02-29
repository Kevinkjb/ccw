import './about.css'
import headImage from '../../images/about.jpg'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div className='about-section'>
        <div className="about-container">
            <div className="about-details">
                <h2 className="about-title">About Our Church</h2>

                <p className="about-text">
                Welcome to Church of Christ Wetaskiwin, where our core purpose is rooted in the profound commitment to worship and serve God. 
                Established with a passion for spiritual growth and community, we believe that our existence is defined by our devotion to the Almighty.
                </p>
                <Link to="/about">
                    <button className="about-btn">Read More</button>
                </Link>

            </div>
            <div className="about-img-container">
                <img className='about-img' src={headImage} alt="CCW Image" />
                {/* <div className="box"></div> */}
            </div>
        </div>
    </div>
  )
}

export default About
