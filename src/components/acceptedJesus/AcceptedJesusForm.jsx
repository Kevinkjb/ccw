import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import yesImage from './accepted.png'
import Footer from '../footer/Footer';
const AcceptedJesusForm = () => {
    const form = useRef();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        user_name: '',
        user_lname: '',
        user_email: '',
        user_number: '',
        select_attend: '',
        user_city: ''
});
//   const handleCheckboxChange = (e, groupName) => {
//     const value = e.target.value;
//     const checked = e.target.checked;

//     setFormData(prev => {
//       const updatedArray = checked
//         ? [...prev[groupName], value]
//         : prev[groupName].filter(item => item !== value);

//       return {
//         ...prev,
//         [groupName]: updatedArray
//       };
//     });
//   };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const validateForm = () => {
  const newErrors = {};

    if (!formData.user_name.trim()) newErrors.user_name = '*First Name is required';
    if (!formData.user_lname.trim()) newErrors.user_lname = '*Last Name is required';

  if (!formData.user_email) {
    newErrors.user_email = '*Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
    newErrors.user_email = 'Email is invalid';
  }

  if (!formData.user_number.trim()) {
    newErrors.user_number = '*Phone number is required';
  } else if (!/^[+\d][\d-]{9,19}$/.test(formData.user_number)) {
  newErrors.user_number = 'Phone number format is invalid';
}

  if (!formData.select_attend) {
    newErrors.select_attend = '*Please select your online experience';
  }
    if (!formData.user_city) {
    newErrors.user_city = '*City is required';
  }


  return newErrors;
};

  const sendEmail = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .sendForm('service_i1htt4o', 'template_a8v4plk', form.current, {
          publicKey: 'eja84i-pVFqt5ioAL',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('Message Sent!')
            form.current.reset();
            setFormData({ user_name: '', user_lname: '', user_email: '', user_number: '', user_city: '',  select_attend: ''});
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
        <div className="guest-form-container">
            <div className="guest-header-container">
                <img style={{width: '40rem', maxWidth: '100%'}} className='yes-img' src={yesImage} alt="" />
            </div>
            <p className='accepted-text'>
               {` This is the most important decision of your life, and we’re so excited to walk with you on this new journey of faith. 
                You’re not alone—let us help you take your next steps as you grow closer to God. 
                Whether it's baptism, joining a Bible study, or connecting with a church family, 
                we’re here for you. We invite you to reach out and take the next step today!`}
            </p>
            <div className="guest-form">
                <form className='guest-form-info' ref={form} onSubmit={sendEmail}>

     
                <div className="guest-name-input">
                    <input
                    className="guest-name"
                    type="text"
                    name="user_name"
                    placeholder="First Name"
                    value={formData.user_name}
                    onChange={handleChange}
                    />
                    {errors.user_name && <p className="error-text">{errors.user_name}</p>}
                </div>
                <div className="guest-name-input">
                    <input
                    className="guest-name"
                    type="text"
                    name="user_lname"
                    placeholder="Last Name"
                    value={formData.user_lname}
                    onChange={handleChange}
                    />
                    {errors.user_lname && <p className="error-text">{errors.user_lname}</p>}
                </div>
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
                    <div className="guest-number-input">
                        <input
                        className="guest-number"
                        type="text"
                        name="user_number"
                        placeholder="Phone Number"
                        value={formData.user_number}
                           onChange={(e) => {
                            const value = e.target.value;
                            // Allow digits, +, and -
                            if (/^[\d+-]*$/.test(value)) {
                            setFormData({
                                ...formData,
                                user_number: value
                            });
                            }
                        }}
                        />
                        {errors.user_number && <p className="error-text">{errors.user_number}</p>}
                    </div>
                    <div className="guest-number-input">
                        <input
                        className="guest-number"
                        type="text"
                        name="user_city"
                        placeholder="Your City/Town"
                        value={formData.user_city}
                        onChange={handleChange}
                        />
                        {errors.user_city && <p className="error-text">{errors.user_city}</p>}
                    </div>
                    
                    <div className="guest-select-input-box">
                        <select
                            className='guest-select-item'
                            name="select_attend"
                            value={formData.select_attend}
                            onChange={handleChange}
                            required
                            >
                            <option value="" selected disabled>Which Service Did You Attend?</option>
                            <option value="online">Online Experience</option>
                            <option value="sunday">Sunday Service</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.select_attend && <p className="error-text">{errors.select_attend}</p>}
                    </div>
                    {/* NEXT STEPS */}
                    {/* <div className="guest-input-box">
                    <p>Next Steps...</p>
                    <div className="guest-next-container">
                    <div className="guest-checkbox">
                        <input
                        type="checkbox"
                        id="step_biblestudy"
                        value="I'd like to join a Bible Study group"
                        onChange={(e) => handleCheckboxChange(e, 'next_steps')}
                        />
                        <label htmlFor="step_biblestudy">{`Guide your walk with Jesus`}</label>
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
                    </div> */}

                <div className="guest-input">
                    <button type="submit" className="guest-button">Yes to Jesus</button>
                </div>
                </form>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default AcceptedJesusForm
