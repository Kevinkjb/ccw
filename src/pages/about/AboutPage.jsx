import headImage from '../../images/about.jpg'
import CoreValue from '../../components/core-values/CoreValue'
import Footer from '../../components/footer/Footer'
import sampleImage from '../../images/Image Coming Soon.png'
import AboutGallery from '../../components/about/AboutGallery'

const imageGallery = [
  {imgUrl: sampleImage},
  {imgUrl: sampleImage},
  {imgUrl: sampleImage},
  {imgUrl: sampleImage},
  {imgUrl: sampleImage},
  {imgUrl: sampleImage},
  {imgUrl: sampleImage},
  {imgUrl: sampleImage}
]

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

    {/* PRINCIPLES SECTION */}
    <section className='principles-section'>
    <div className="principles-info">
      <div className="commited">
        <h2 className='ccw-title-about'>We are commited to</h2>
        <div className="commited-info">
          <p className='commited-text'>Care</p>
          <p className='commited-text'>Mentor</p>
          <p className='commited-text'>Serve</p>
          <p className='commited-text'>Care</p>
        </div>
      </div>
      <div className="accountability">
        <h2 className='ccw-title-about'>We uphold accountability to</h2>
        <div className="accountability-info">
          <p className='accountability-text'>The Lord</p>
          <p className='accountability-text'>The Word</p>
          <p className='accountability-text'>The Leadership</p>
          <p className='accountability-text'>The Ministry</p>
        </div>
      </div>
      <div className="relationships">
        <h2 className='ccw-title-about'>Focus on family relationships</h2>
        <div className="relationships-info">
          <p className='relationships-text'>Belongingness</p>
          <p className='relationships-text'>Faith & Faithfulness</p>
          <p className='relationships-text'>Discipleship</p>
          <p className='relationships-text'>Protecting Testimonies</p>
        </div>
      </div>
    </div>
    </section>

      <CoreValue/>
      <section className="gallery-section">

        <div className="img-container">
          {imageGallery.map((img, index) =>(
            <AboutGallery
              key={index}
              img={img.imgUrl}
            />
          ))}

        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default AboutPage
