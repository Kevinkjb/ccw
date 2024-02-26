
const ContactForm = () => {
  return (
    <div className="form-container">
        <div className="form-title">
            <h2>Contact Us</h2>
        </div>

        <form className="form" >
            <div className="fname-input">
                <input className="fname" type="text" name="fname" placeholder="Full Name"/>
            </div>
            <div className="email-input">
                <input className="email" type="email" name="email" placeholder="Enter Your Email"/>
            </div>
            <div className="message-input">
                <textarea className="text-message" name="message" placeholder="Message"></textarea>
            </div>
            <div className="btn-container">
                <button className="form-btn">Submit</button>
            </div>

        </form>

    </div>
  )
}

export default ContactForm
