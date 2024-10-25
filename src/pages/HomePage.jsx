import About from "../components/about/About"
import OnlineInfo from "../components/church-resource/OnlineInfo"
import HeroSection from "../components/hero/HeroSection"
import LatestMessage from "../components/messages/LatestMessage"
import messageData from '../components/components-data/data'
import Events from "../components/events/Events"
import eventsData from '../components/components-data/events'
import mission from '../images/gallery/mission.jpg'
import vision from '../images/gallery/worship.jpg'
import Footer from "../components/footer/Footer"



const HomePage = () => {

  return (
    <div className="main">
      <HeroSection heroTitle="Church of Christ"/>
      <About/>
      <OnlineInfo/>
      {messageData.map((item, index) => (
        <LatestMessage key={index} data={item}/>
      ))}
       <div className="core-container">
        <div className="core-home-page">
            <div className="core-content-one">
                <div className="mission-content">
                    <h3 className="core-title">Mission</h3>
                    <p className='core-text'>
                        Our Mission is to obey Jesus{`'`}s GREAT COMMISSION by helping people to understand salvation 
                        by Grace and by walking alongside someone to live in a new and living way of life <span className='core-verse'>(Matthew 28:18-20; Hebrews 10:19-25)</span>. 
                    </p>
                </div>
                <div className="mission-img">
                    <img className='core-value-img' src={mission} alt="Mission value" />
                </div>

            </div>
            <div className="core-content-two">
                <div className="vision-img">
                    <img className='core-value-img' src={vision} alt="Vision value" />
                </div>
                <div className="vision-content">
                    <h3 className="core-title">Vision</h3>
                    <p className='core-text'>
                        Our vision is to be a thriving community of believers, 
                        passionately committed to worshipping and serving God. 
                        We aspire to be a light in the world, bringing hope, love, and transformation to individuals and communities <span className='core-verse'>(Romans 12:1-2)</span>.
                    </p>
                </div>
            </div>
        </div>
      
    </div>
      <div className="events">
        <div className="title-container">
          <h3 className='events-title'>Events</h3>
        </div>
            <div className="events-item">

            {eventsData.filter((item, index) => index < 1).map((item,index) => (
              <Events key={index} />
            ))}
            </div>
      </div>
      <Footer/>

    </div>
  )
}

export default HomePage
