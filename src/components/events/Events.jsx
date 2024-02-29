import PropTypes from 'prop-types';
import { useState } from 'react';
import './events.css'
import Display from '../modal/ModalDisplay';

const currentEvent = [
  {
    eventTitle: 'Easter Escape Room',
    description: 'No current description yet.',
    date: 'No current date yet.'
  },
  {
    eventTitle: "Women's Outing in Canmore",
    description: 'No current description yet.',
    date: 'May 3-4th 2024'
  }
]

const Events = (props) => {
    const [openModal, setOpenModal] = useState(false)

    const {imgUrl, eventMonths, eventDays} = props.events
  return (
    <div className='events-container'>
      <section className="events-section">

        <div className="events-content">
            <div className="event-item" >
                <img onClick={() => setOpenModal(!openModal)} className='events-img' src={imgUrl} alt="events image" />
                <div className="event-date">
                    <h5 className='event-day'>{eventDays}</h5>
                    <p className='event-month'>{eventMonths}</p>
                </div>  
            </div>
        </div>
      </section>
      {openModal && 
      currentEvent.map((item, index) => (
        <Display 
          key={index}
          shown={openModal} 
          close={() => {setOpenModal(false)}} 
          eventTitle={item.eventTitle} 
          description={item.description} 
        />
      ))

      }
    </div>
  )
}
Events.propTypes = {
    events: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        eventMonths: PropTypes.string.isRequired,
        eventDays: PropTypes.string.isRequired
    }).isRequired
}

export default Events
