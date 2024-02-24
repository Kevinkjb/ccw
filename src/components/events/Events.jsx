import PropTypes from 'prop-types';
import { useState } from 'react';
import './events.css'
import Display from '../modal/ModalDisplay';
const Events = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const {imgUrl, eventMonths, eventDays} = props.events
  return (
    <div className='events-container'>
      <section className="events-section">

        <div className="events-content">
            <div className="event-item">
                <img onClick={() => setOpenModal(!openModal)} className='events-img' src={imgUrl} alt="events image" />
                <div className="event-date">
                    <h5 className='event-day'>{eventDays}</h5>
                    <p className='event-month'>{eventMonths}</p>
                </div>  
            </div>
        </div>
      </section>
      {openModal && <Display modalClose={setOpenModal}/>}
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
