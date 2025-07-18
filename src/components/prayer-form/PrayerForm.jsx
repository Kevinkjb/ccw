import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// import { FiPhone } from "react-icons/fi";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaFacebook } from "react-icons/fa";
import './prayer-form.css'



const PrayerForm = () => {
      const form = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_number: '',
    select_prayer: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = '*Name is required';
    if (!formData.user_email) {
        newErrors.user_email = '*Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
        newErrors.user_email = 'Email is invalid';
    }
    if (!formData.user_number.trim()) {
        newErrors.user_number = '*Phone number is required';
    } else if (!/^\d{10,15}$/.test(formData.user_number)) {
        newErrors.user_number = 'Phone number should be 10-15 digits';
    }
    if (!formData.select_prayer) {
        newErrors.select_prayer = '*Please let us know if you’d like us to follow up';
    }
    if (!formData.message.trim()) newErrors.message = '*Message is required';

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm('service_a6qwaqn', 'template_sg9a1ag', form.current, {
          publicKey: 'eja84i-pVFqt5ioAL',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('Message Sent!')
            form.current.reset();
            setFormData({ user_name: '', user_email: '', user_number: '', message: '',  select_prayer: ''});
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <>
      <div className="prayer-container">
        <div className="prayer-content">
          <div className="prayer-contact-info">
            {/* CONTACT HEADER SECTION */}
            <div className="prayer-header">
                <div className="prayer-title-container">
                    <h2 className="prayer-title">{`Need Prayer? You're Not Alone.`}</h2>
                    <div className="prayer-sub-container">
                        <p className="prayer-subtitle">Prayer Request</p>
                        <hr className="prayer-hr"/>
                    </div>
                    <p className='prayer-header-text'>
                        {`As a church family, we believe in the power of prayer and the strength of community. 
                        Whether you're facing a difficult season or simply need someone to stand with you in faith, we are here for you.
                    
                        `}
                
                    </p>
                    <p className='prayer-header-text'> Every request you submit is kept confidential and shared only with our trusted prayer team. 
                      We’re honored to support you and believe in the power of prayer to bring comfort, healing, and hope.
                    </p>
                    <p className='prayer-header-text'>Let us pray for you. You are loved, and you are not alone.</p>
                    <p className='prayer-header-text'>“Carry each other’s burdens, and in this way you will fulfill the law of Christ.” – Galatians 6:2</p>
                </div>
            </div>
            {/* <div className="prayer-details">
              <div className="prayer-phone">
                <div className="prayer-icon-container">
                  <FiPhone className="prayer-phone-icon" />
                </div>
    
              </div>
              <div className="prayer-phone">
                <div className="prayer-icon-container">
                  <FaFacebook className="prayer-phone-icon" />
                </div>

              </div>
              <div className="prayer-phone">
                <div className="prayer-icon-container">
                  <HiOutlineMail className="prayer-email-icon" />
                </div>
              </div>
            </div> */}
          </div>
          <div className="prayer-form">
            <form className='prayer-form-info' ref={form} onSubmit={sendEmail}>
              <div className="prayer-name-input">
                <input
                  className="pr-name"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
                {errors.user_name && <p className="error-text">{errors.user_name}</p>}
              </div>
              <div className="prayer-email-input">
                <input
                  className="pr-email"
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  value={formData.user_email}
                  onChange={handleChange}
                />
                {errors.user_email && <p className="error-text">{errors.user_email}</p>}
              </div>
              <div className="select-input-box">
                <select
                    className='prayer-select-item'
                    name="select_prayer"
                    value={formData.select_prayer}
                    onChange={handleChange}
                    required
                    >
                    <option value="" selected disabled>Would you likes us to follow up with you?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                {errors.select_prayer && <p className="error-text">{errors.select_prayer}</p>}
              </div>
                
              <div className="prayer-number-input">
                <input
                  className="pr-number"
                  type="text"
                  name="user_number"
                  placeholder="Phone Number"
                  value={formData.user_number}
                  onChange={handleChange}
                />
                {errors.user_number && <p className="error-text">{errors.user_number}</p>}
              </div>
              <div className="prayer-message-input">
                <textarea
                  className="pr-message"
                  name="message"
                  placeholder="How can we pray for you?"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>
              <div className="prayer-input">
                <button type="submit" className="prayer-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrayerForm
