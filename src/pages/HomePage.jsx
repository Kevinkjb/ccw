import About from "../components/about/About"
import OnlineInfo from "../components/church-resource/OnlineInfo"
import HeroSection from "../components/hero/HeroSection"
import LatestMessage from "../components/messages/LatestMessage"
import messageData from '../components/components-data/data'
import Events from "../components/events/Events"
import eventsData from '../components/components-data/events'
import CoreValue from "../components/core-values/CoreValue"
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
      <CoreValue/>
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
