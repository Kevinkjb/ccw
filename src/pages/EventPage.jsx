import Events from "../components/events/Events"
import Footer from "../components/footer/Footer"
import WeeklySchedule from "../components/schedule/WeeklySchedule"

const EventPage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1 className='about-hero-title'>Events</h1>
      </section>
      <WeeklySchedule/>
      <div className="events-page">
        <Events/>
        </div>
        <Footer/>
    </div>
  )
}

export default EventPage
