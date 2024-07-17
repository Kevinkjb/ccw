import Footer from "../../components/footer/Footer"
import giving from '../../images/logo/love.png'
import './give.css'
const GivePage = () => {
  return (
    <div className="give-container">
      <section className="hero-section">
        <h1 className='about-hero-title'>Give</h1>
      </section>
      <div className="give-section">
        <div className="giving-verse">
          <div className="giving-title-container">
            <p className="chapter">2 Corinthians 9:7</p>
            <p className="verse">Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.</p>
          </div>
        </div>
        <div className="giving-content">
          <img className="giving-img" src={giving} alt="Giving" />
          <div className="giving-details">
            <h2 className="giving-title">Give</h2>
            <p className="etransfer"><strong>E-transfer to: </strong><span className="giving-email">ccwetaskiwin@gmail.com</span></p>
          </div>
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default GivePage
