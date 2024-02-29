import headImage from '../../images/about.jpg'
import CoreValue from '../../components/core-values/CoreValue'
import Footer from '../../components/footer/Footer'
import AboutGallery from '../../components/about/AboutGallery'
import imageOne from "./images/Arnold's Baptism.jpg"
import imageTwo from "./images/Carl Baptism.jpg"
import imageThree from "./images/Church of Christ in PH.jpg"
import imageFour from "./images/Dinner Night at Church.jpg"
import imageFive from "./images/Dinner Night Womens.jpg"
import imageSix from "./images/Family Day 2024.jpg"
import imageSeven from "./images/camping.png"
import imageEight from "./images//camping 2022.jpg"

const imageGallery = [
  {imgUrl: imageOne},
  {imgUrl: imageTwo},
  {imgUrl: imageThree},
  {imgUrl: imageFour},
  {imgUrl: imageFive},
  {imgUrl: imageSix},
  {imgUrl: imageSeven},
  {imgUrl: imageEight}
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
                  At Church of Christ Wetaskiwin, we are more than just a gathering of individuals; 
                  we are a community united by the common goal of worshipping and serving God.
                   Our mission is to create an environment where believers can deepen their relationship with God, 
                  express their love through worship, and serve others with a spirit of humility.
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
        <div className="principles-img-container">
          <img className='about-img-logo' src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9kdVFmQS9NQUZpRzhkdVFmQS8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAMlhOy4GQS0UweA2JaI9IUukfpXAX2RQbW7R9G-RRwV3&exp=1709191296&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAO2J-vCn98Mz2i9fgYXm-wwBLPQ_gkxbXSu1eHPKpnbG" alt="logo img" />
        </div>
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
