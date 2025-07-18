import FirstTimeGuest from "../../components/first-time-guest/FirstTimeGuest"
import Footer from "../../components/footer/Footer"


const FirstTimeGuestPage = () => {
  return (
    <div>
    <section className="hero-section">
        <h1 className='about-hero-title'>New to CCW?</h1>
    </section>

      <FirstTimeGuest/>
      <Footer/>
    </div>
  )
}

export default FirstTimeGuestPage
