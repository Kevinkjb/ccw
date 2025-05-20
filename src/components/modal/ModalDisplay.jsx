import PropTypes from 'prop-types';
import './modal.css'
const Display = ({item, close}) => {
  return item ? (
        <div className="modal-container" onClick={() => { close()}}>
          <div className="modal-content" onClick={e => { e.stopPropagation()}}>
            <div className="closeButton">
                <button className='close-btn' onClick={close}>X</button>
            </div>
            <div className="modal-header">
                <h2>{item.eventTitle}</h2>
            </div>
            <div className="modal-body">
                <img className='event-image' src={item.imgUrl} alt={item.eventTitle} />
                <p className='event-modal-desc'>{item.description}</p>
                {/* <p className='event-modal-time'>Time: <i style={{textDecoration: 'underline', color: '#B58810'}}>{item.time}</i></p> */}
            </div>
          </div>
      </div>
  ) : null

}

Display.propTypes = {
  item: PropTypes.node,
  close: PropTypes.node,
  eventTitle: PropTypes.node
}.isRequired

export default Display
