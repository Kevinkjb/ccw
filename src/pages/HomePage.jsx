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

    <>
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
                        We help people understand salvation by grace so they can live a significant life of
                        worship and service.
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
                        We want to see a movement of people devoted to worshipping God and faithfully
                        serving our community.
                    </p>
                </div>
            </div>
        </div>
      
    </div>
      <div className="events">
        <div className="title-container">
          <h3 className='events-title'>Upcoming Events</h3>
        </div>
            <div className="events-item">
            {eventsData.filter((item, index) => index < 1).map((item,index) => (
              <Events key={index} />
            ))}
            </div>
      </div>
      <Footer/>

    </div>
    </>
  )
}

export default HomePage
