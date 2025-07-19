import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './guest.css';

const FirstTimeGuest = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_number: '',
    select_gender: '',
    message: '',
    how_heard: [],
    next_steps: [],
    first_time_guest: []
  });

  const handleCheckboxChange = (e, groupName) => {
    const value = e.target.value;
    const checked = e.target.checked;

    setFormData(prev => {
      const updatedArray = checked
        ? [...prev[groupName], value]
        : prev[groupName].filter(item => item !== value);

      return {
        ...prev,
        [groupName]: updatedArray
      };
    });
  };

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

    if (!formData.select_gender) {
      newErrors.select_gender = '*Please select gender';
    }

    if (!formData.message.trim()) {
      newErrors.message = '*Message is required';
    }

    if (formData.how_heard.length === 0) {
      newErrors.how_heard = '*Please select at least one way you heard about us';
    }

    if (formData.next_steps.length === 0) {
      newErrors.next_steps = '*Please select at least one next step';
    }

    if (formData.first_time_guest.length === 0) {
      newErrors.first_time_guest = '*Please select at least one option above';
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs.send(
        'service_b1kni6k',
        'template_fmxdukp',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_number: formData.user_number,
          select_gender: formData.select_gender,
          message: formData.message,
          how_heard: formData.how_heard.join(', '),
          next_steps: formData.next_steps.join(', '),
          first_time_guest: formData.first_time_guest.join(', ')
        },
        'eja84i-pVFqt5ioAL'
      ).then(() => {
        console.log('SUCCESS!');
        form.current.reset();
        setFormData({
          user_name: '',
          user_email: '',
          user_number: '',
          select_gender: '',
          message: '',
          how_heard: [],
          next_steps: [],
          first_time_guest: []
        });
        setErrors({});
      }).catch((error) => {
        console.log('FAILED...', error.text);
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="guest-form-container">
      <div className="guest-header-container">
        <p className="guest-header-title">Connect With Us</p>
        <div className="prayer-sub-container">
          <p className="prayer-subtitle">New to CCW?</p>
          <hr className="prayer-hr" />
        </div>
      </div>

      <div className="guest-form">
        <form className="guest-form-info" ref={form} onSubmit={sendEmail}>

          {/* FIRST TIME GUEST OPTIONS */}
          <div className="guest-new-container">
            <div className="guest-checkbox">
              <input
                type="checkbox"
                id="guest_new"
                value="I'm new to Church of Christ Wetaskiwin"
                onChange={(e) => handleCheckboxChange(e, 'first_time_guest')}
              />
              <label htmlFor="guest_new">{`I'm new to Church of Christ Wetaskiwin`}</label>
            </div>
            <div className="guest-checkbox">
              <input
                type="checkbox"
                id="guest_accepted"
                value="I have recently accepted Jesus"
                onChange={(e) => handleCheckboxChange(e, 'first_time_guest')}
              />
              <label htmlFor="guest_accepted">I have recently accepted Jesus</label>
            </div>
            <div className="guest-checkbox">
              <input
                type="checkbox"
                id="guest_rededicated"
                value="I have rededicated my life to Jesus"
                onChange={(e) => handleCheckboxChange(e, 'first_time_guest')}
              />
              <label htmlFor="guest_rededicated">I have rededicated my life to Jesus</label>
            </div>
          </div>
          {errors.first_time_guest && <p className="error-text">{errors.first_time_guest}</p>}

          {/* NAME */}
          <div className="guest-name-input">
            <input
              className="guest-name"
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
            />
            {errors.user_name && <p className="error-text">{errors.user_name}</p>}
          </div>

          {/* EMAIL */}
          <div className="guest-email-input">
            <input
              className="guest-email"
              type="email"
              name="user_email"
              placeholder="Email Address"
              value={formData.user_email}
              onChange={handleChange}
            />
            {errors.user_email && <p className="error-text">{errors.user_email}</p>}
          </div>

          {/* PHONE NUMBER */}
          <div className="guest-number-input">
            <input
              className="guest-number"
              type="text"
              name="user_number"
              placeholder="Phone Number"
              value={formData.user_number}
              onChange={handleChange}
            />
            {errors.user_number && <p className="error-text">{errors.user_number}</p>}
          </div>

          {/* GENDER SELECT */}
          <div className="guest-select-input-box">
            <select
              className="guest-select-item"
              name="select_gender"
              value={formData.select_gender}
              onChange={handleChange}
            >
              <option value="" disabled>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.select_gender && <p className="error-text">{errors.select_gender}</p>}
          </div>

          {/* HOW DID YOU HEAR ABOUT US */}
          <div className="guest-input-box">
            <p>How did you hear about us?</p>
            <div className="guest-box-container">
              {['Website', 'Social Media', 'Family/Friends', 'Other'].map((option, i) => (
                <div className="guest-checkbox" key={i}>
                  <input
                    type="checkbox"
                    id={`heard_${i}`}
                    value={option}
                    onChange={(e) => handleCheckboxChange(e, 'how_heard')}
                  />
                  <label htmlFor={`heard_${i}`}>{option}</label>
                </div>
              ))}
            </div>
            {errors.how_heard && <p className="error-text">{errors.how_heard}</p>}
          </div>

          {/* NEXT STEPS */}
          <div className="guest-input-box">
            <p>Next Steps...</p>
            <div className="guest-next-container">
              <div className="guest-checkbox">
                <input
                  type="checkbox"
                  id="step_biblestudy"
                  value="I'd like to join a Bible Study group"
                  onChange={(e) => handleCheckboxChange(e, 'next_steps')}
                />
                <label htmlFor="step_biblestudy">{`I'd like to join a Bible Study group`}</label>
              </div>
              <div className="guest-checkbox">
                <input
                  type="checkbox"
                  id="step_ministry"
                  value="I'd like to serve in a ministry"
                  onChange={(e) => handleCheckboxChange(e, 'next_steps')}
                />
                <label htmlFor="step_ministry">{`I'd like to serve in a ministry`}</label>
              </div>
              <div className="guest-checkbox">
                <input
                  type="checkbox"
                  id="step_baptism"
                  value="I'd like to be baptized"
                  onChange={(e) => handleCheckboxChange(e, 'next_steps')}
                />
                <label htmlFor="step_baptism">{`I'd like to be baptized`}</label>
              </div>
            </div>
            {errors.next_steps && <p className="error-text">{errors.next_steps}</p>}
          </div>

          {/* PRAYER MESSAGE */}
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

          {/* SUBMIT */}
          <div className="guest-input">
            <button type="submit" className="guest-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstTimeGuest;
