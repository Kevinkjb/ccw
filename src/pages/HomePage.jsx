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
    <div>
      <HeroSection heroTitle="Welcome To CCW"/>
      <About/>
      <OnlineInfo/>
      {messageData.map((item, index) => (
        <LatestMessage key={index} data={item}/>
      ))}
      <CoreValue/>
      <div className="events">
        <h3 className='events-title'>Events</h3>
        <div className="events-item">
        {eventsData.filter((item, index) => index < 3).map((item,index) => (
          <Events key={index} events={item}/>
        ))}
        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default HomePage
