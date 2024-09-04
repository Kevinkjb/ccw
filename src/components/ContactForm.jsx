import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
  
    const validateForm = () => {
      const errors = {};
      const name = form.current['user_name'].value.trim();
      const email = form.current['user_email'].value.trim();
      const message = form.current['message'].value.trim();
      
      if (!name) {
        errors.name = '*Full Name is required';
      }
      
      if (!email) {
        errors.email = '*Email Address is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email Address is invalid';
      }
      
      if (!message) {
        errors.message = '*Message is required';
      }
  
      return errors;
    };
    const sendEmail = (e) => {
        e.preventDefault();
    
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
          setErrors(formErrors);
          return;
        }
    
        setErrors({});
        emailjs
          .sendForm('service_u1ky2u6', 'template_f81silx', form.current, {
            publicKey: 'eja84i-pVFqt5ioAL',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSuccessMessage('Message Sent!');
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  
  return (
    <div className="form-container">
        <div className="form-title">
            <h2>Contact Us</h2>
        </div>

        <form className="form" ref={form} onSubmit={sendEmail}>
            <div className="fname-input">
                <input className="fname" type="text" name="user_name" placeholder="Full Name"/>
                {errors.name && <p className='error-message'>{errors.name}</p>}
            </div>
            <div className="email-input">
                <input className="email" type="email" name="user_email" placeholder="Enter Your Email"/>
                {errors.email && <p className='error-message'>{errors.email}</p>}
            </div>
            <div className="message-input">
                <textarea className="text-message" name="message" placeholder="Message"></textarea>
                {errors.message && <p className='error-message'>{errors.message}</p>}
            </div>
            <div className="btn-container">
                <button className="form-btn">Submit</button>
            </div>
            {successMessage && <p className='success-message'>{successMessage}</p>}
        </form>

    </div>
  )
}

export default ContactForm
