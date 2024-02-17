import headImage from '../../images/about.jpg'
import CoreValue from '../../components/core-values/CoreValue'
import Footer from '../../components/footer/Footer'
import './aboutPage.css'

const AboutPage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1 className='about-hero-title'>Who We Are</h1>
      </section>
      {/* ABOUT SECTION */}
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
              </div>
              <div className="about-img-container">
                  <img className='about-img' src={headImage} alt="CCW Image" />
                  {/* <div className="box"></div> */}
              </div>
          </div>
    </div>
      <CoreValue/>
      <section className="gallery-section">

        <div className="img-container">
          <div className="one"></div>
          <div className="one"></div>
          <div className="one"></div>
          <div className="one"></div>
          <div className="one"></div>
          <div className="one"></div>
          <div className="one"></div>
          <div className="one"></div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutPage
