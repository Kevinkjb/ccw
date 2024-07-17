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
                <p>{item.description}</p>
                <p>{item.date}</p>
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
