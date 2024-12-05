import ContactForm from "../../components/ContactForm"
import Footer from "../../components/footer/Footer"
import './contact.css'
const ContactPage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1 className='contact-hero-title'>Contact Us</h1>
      </section>
      <div className="contact-container">
        <div className="contact-content">
          {/* CONTACT MAP */}
          <div className="contact-map">
            <iframe 
              className="google-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4805.686629374867!2d-113.367113!3d52.969233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53754f152e24f2a3%3A0x81f16da56f5a061a!2sChurch%20of%20Christ%20Wetaskiwin!5e0!3m2!1sen!2sca!4v1733376205482!5m2!1sen!2sca" 
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
