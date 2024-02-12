import './hero.css'
import { useEffect, useRef } from 'react';
import video from '../../videos/CCW video.mp4'
const HeroSection = () => {
  const vidRef = useRef();

  useEffect(() => { 
    vidRef.current.play(); 
  },[]);



  return (
    <div>
      <section className='hero-container'>
        <div className="hero-content">
        <h1 className='hero-title'>Welcome to CCW</h1>
        </div>
        <video
          className='video-frame'
          src={video}
          ref={ vidRef }
          muted
          autoPlay
          loop 
        />
      </section>

    </div>
  )
}

export default HeroSection
