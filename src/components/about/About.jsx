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
                    Welcome to Church of Christ, where our core purpose is rooted in the profound commitment to worship and serve God. 
                    Established with a passion for spiritual growth and community, 
                    we worship in spirit and in truth and holding on to grace that we may serve acceptably, 
                    with reverence and awe <span className='about-verse'>(John 4:23-24; Hebrews 12:28)</span>.
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
