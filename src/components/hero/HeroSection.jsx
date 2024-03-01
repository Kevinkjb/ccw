import './hero.css'
import PropTypes from 'prop-types';
// import { useEffect, useRef } from 'react';
// import video from '../../videos/CCW video.mp4'
const HeroSection = (props) => {

  // const vidRef = useRef();

  // useEffect(() => { 
  //   vidRef.current.play(); 
  // },[]);

  return (
    <div>
      <section className='hero-container'>
        <div className="hero-content">
          <div className="title-section">
            <h3 className='hero-sub'>Welcome to</h3>
            <h1 className='hero-title'>{props.heroTitle}</h1>
            <h4 className="hero-sub-title"><q>We exist to worship and serve God.</q></h4>
          </div>
        </div>
        {/* <video
          className='video-frame'
          src={video}
          ref={ vidRef }
          muted
          autoPlay
          loop 
        /> */}
      </section>

    </div>
  )
}
HeroSection.propTypes = {
  heroTitle: PropTypes.string.isRequired,
};

export default HeroSection
