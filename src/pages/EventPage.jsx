import Events from "../components/events/Events"
import eventsData from '../components/components-data/events'
import Footer from "../components/footer/Footer"

const EventPage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1 className='about-hero-title'>Events</h1>
      </section>
      <div className="events-page">
        {eventsData.map((item,index) => (
          <Events key={index} events={item}/>
        ))}
        </div>
        <Footer/>
    </div>
  )
}

export default EventPage
