import PropTypes from 'prop-types';
import { useState } from 'react';
import './events.css'
import Display from '../modal/ModalDisplay';
import eventsData from '../components-data/events'


const Events = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const onItemClick = (id) => {
    const item = eventsData.find(item => item.id === id)
    setSelectedItem(item)
  }

  return (
    <>
      {
        eventsData.map(item => (
          <>
            <div className='events-container'>
              <section className="events-section">
                <div className="events-content">
                <div className="event-item" >
                  <img onClick={() => onItemClick(item.id)} className='events-img' src={item.imgUrl} alt="events image" />
                  <div className="event-date">
                      <h5 className='event-day'>{item.eventDays}</h5>
                      <p className='event-month'>{item.eventMonths}</p>

                  </div>
                  </div>
                </div> 
              </section>
            </div>
          </>
        ))
      }
      {selectedItem && 
        <Display 
          item={selectedItem} 
          close={() => {setSelectedItem(false)}} 
        />
      }
    </>


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
