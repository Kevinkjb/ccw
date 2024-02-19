import ContactForm from "../../components/ContactForm"
import Footer from "../../components/footer/Footer"
import './contact.css'
const ContactPage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1 className='about-hero-title'>Contact Us</h1>
      </section>
      <div className="contact-container">
        <div className="contact-content">
          {/* CONTACT MAP */}
          <div className="contact-map">
            <iframe 
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.850641394132!2d-113.36976342271596!3d52.969101202882136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53754e3ec9dc9ca5%3A0x348d82b68ebdb998!2sLifegate%20Community%20Church!5e0!3m2!1sen!2sca!4v1708322480177!5m2!1sen!2sca" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              >
            </iframe>
          </div>
          {/* CONTACT INFO */}
          <div className="contact-info">
            <h2 className="contact-title">Contact Info</h2>
            <div className="contact-details">
              <div className="address">
                <p className="contact-text">Address:</p>
                <p>
                  4708 50 Avenue <br />
                  Wetaskiwin, Alberta T9A 0R7
                </p>
              </div>
              <div className="email-info">
                <p className="contact-text">Email:</p>
                <p>ccwetaskiwin@gmail.com</p>
              </div>
              <div className="phone">
                <p className="contact-text">Phone:</p>
                <p>(403) 913-4713</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactPage
