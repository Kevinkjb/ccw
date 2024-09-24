/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './rental-page.css'
import { useState } from "react"
import { CiCirclePlus, CiCircleMinus   } from "react-icons/ci";
import Footer from '../../components/footer/Footer';
import facility from '../../components/components-data/pdf-files/CCW Facility Rental (2024).pdf.pdf';
import imageOne from './images/CCW Facility Rental (2024)(1).png'

import imageThree from './images/CCW Facility Rental (2024)(3).png'
import imageFour from './images/rental2.png'
import imageFive from './images/image1.jpg'
import imageTwo from './images//image2.jpg'
const FaqItem = ({answer, question}) => {
    const [show, setShow] = useState(false);
    const toggleItem = () =>{
      setShow(!show)
    }
    return(
      
      <div className="faq-section">
  
      <div className="faqs-list">
        <div className={`faq-item ${show ? "faq-toggle" : ""}`}>
            <div className="faq-question" onClick={toggleItem}>
                <p className='question'>{question}</p>
                {
                  show ? <CiCircleMinus className="faq-icon"/> : <CiCirclePlus className="faq-icon"/> 
                }
            </div>
            <div className="faq-answer">
                <p className='answer'>{answer}</p>
            </div>
        </div>
        <hr style={{height: '1px', border: 'none', borderTop: '1px solid gray'}}/>
      </div>
  
    </div>
    )
  }
const FaqAccordian = ({data}) => {
    return(
        <>
      <div className="faq-section">
      {
        data.map((item) => (
          <FaqItem
            key={item.id}
            answer={item.answer}
            question={item.question}
          />
        ))
      }
    </div>
        </>

    )
}
const data = [
    {   
        id: 1,
        question: 'What is included in my booking?',
        answer: 'Booking include use of the parking lot, basement hall, kitchen, and restrooms.',
    },
    {
        id: 2,
        question: 'Can we use the kitchen?',
        answer: `Our kitchen doesn't have an exhaust, so cooking is prohibited. You can use it to heat up your pre-cooked food, bake, and wash dishes.`,
    },
    {
        id: 3,
        question: 'What equipment is available for renters to use?',
        answer: '6 x 6ft rectangular tables and 50 chairs. Sound mixer, microphone, projector, and linens available for rent.',
    },
    {
        id: 4,
        question: 'How do I gain access to the venue for my event?',
        answer: "An authorized member of the admin team will open the facility for any visits before the event. The key will be provided to the renter on the day of the event, or prior based on what is discussed. Failure to return the keys will result in the loss of your damage deposit.",
    },
    {
        id: 5,
        question: 'illum maiores aperiam consequuntur facere similique voluptatum?',
        answer: `The timeline for completing a web development project depends on various factors, such as project complexity, scope, and client requirements. We'll provide you with a detailed project timeline during the initial consultation, outlining milestones and estimated completion dates to ensure transparency and alignment.`,
    },
    {
        id: 6,
        question: 'Can we serve alcohol in the event?',
        answer: `Alcohol is prohibited within facility grounds.`,
    },
    {
        id: 7,
        question: 'What is the seating capacity of the basement hall?',
        answer: `60 people`,
    },
    {
        id: 8,
        question: 'What about parking?',
        answer: `We offer a large parking lot that can accommodate up to 40 vehicles. There is also extra parking available to the public across the street.`,

    }
  ]
const RentalPage = () => {
   
  return (
    <>
    {/* RENTAL HERO SECTION */}
      <div className="rental-hero">
        <h1 className='rental-hero-title'>Facility Rentals</h1>
      </div>
    {/* RENTAL GALLERY IMAGE */}
      <div className="rental-gallery">
        <div className="image-one">
          <img className='rental-image-one' src={imageOne} alt="Rental Image One" />
        </div>
        <div className="image-two">
          <img className='rental-image-one' src={imageTwo} alt="Rental Image Two" />
        </div>
        <div className="image-three">
          <img className='rental-image-one' src={imageThree} alt="Rental Image Three" />
        </div>
        <div className="image-four">
          <img className='rental-image-one' src={imageFour} alt="Rental Image Four" />
        </div>
        <div className="image-five">
          <img className='rental-image-one' src={imageFive} alt="Rental Image Five" />
        </div>
      </div>
    {/* RENTAL RATES SECTION  */}
    <div className="rental-rates">
        <div className="rental-section">
            <h2 className='rates-title'>Rental Rates</h2>
            <div className="rates-info">
                <div className="rates-details">
                    <p>Basement Hall (Less than 4 hours)</p>
                    <p>$100</p>
                </div>
                <div className="rates-details">
                    <p>Basement Hall (More than 4 hours)</p>
                    <p>$150</p>
                </div>
                <div className="rates-details">
                    <p>Sanctuary Hall (Full Day)</p>
                    <p>$300</p>
                </div>
                <div className="rates-details">
                    <p>Usage of Sound Equipment</p>
                    <p>$50</p>
                </div>
                <div className="damage-deposit">
                    <p>Damage Deposit</p>
                    <p>$100</p>
                </div>
                <p className='deposit-info'>
                    * A $100.00 damage deposit is required for all bookings. 
                    The damage is held by the Recreation Ministry and once the facility has been checked, 
                    the damage deposit is returned to the main contact person.
                </p>
                <p className='cleaning-fee'>A cleaning of $50 - 150 will be charge depending on how the facility is left after the rental time.</p>
            </div>
        </div>
    </div>
    {/* RENTAL FAQ SECTION */}
    <div className="rentals-faq">
        <div className="rental-faq-section">
            <h2 className='rental-faq-title'>FAQ</h2>
            <div className="faq-container">
                <FaqAccordian data={data}/>
            </div>
        </div>

    </div>
    <div className="faq-inquire-container">
        <div className="inquire-section">
            <p className='inquire-title'>Want to rent our facility?</p>
            <a href={facility} target='_blank' rel="noopener noreferrer">
                <button className="faq-inquire-btn">Inquire Now</button>
            </a>
            
        </div>
        <p>Complete the facility rental form and send to ccwetaskiwin@gmail.com</p>
    </div>
    <Footer/>
    </>
  )
}

export default RentalPage
