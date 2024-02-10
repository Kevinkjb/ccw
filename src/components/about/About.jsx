import './about.css'
import headImage from '../../images/about.jpg'
const About = () => {
  return (
    <div className='about-section'>
        <div className="about-container">
            <div className="about-details">
                <h2 className="about-title">About Our Church</h2>
                <h4 className="about-sub-title">We exist to worship and serve God.</h4>
                <p className="about-text">
                    Integer nec bibendum lacus. 
                    Suspendisse dictum enim sit amet libero malesuada feugiat. 
                    Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. 
                    Curabitur rhoncus auctor eleifend. 
                    Fusce venenatis diam urna, eu pharetra arcu varius ac. 
                    Etiam cursus turpis lectus, id iaculis risus tempor id. 
                    Phasellus fringilla nisl sed sem scelerisque, 
                    eget aliquam magna vehicula.nteger nec bibendum lacus.
                </p>
                <button className="about-btn">Read More</button>
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
