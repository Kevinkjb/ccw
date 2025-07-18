import Footer from "../../components/footer/Footer"
import PrayerForm from "../../components/prayer-form/PrayerForm"


const PrayerRequestPage = () => {
  return (
    <>
    <section className="hero-section">
        <h1 className='about-hero-title'>Prayer Requests</h1>
    </section>
      <PrayerForm/>
      <Footer/>
    </>
  )
}

export default PrayerRequestPage
