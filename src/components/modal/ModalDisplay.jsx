import PropTypes from 'prop-types';
import './modal.css'
const Display = ({shown, close}) => {
  return shown ? (
        <div className="modal-container" onClick={() => { close()}}>
          <div className="modal-content" onClick={e => { e.stopPropagation()}}>
            <div className="closeButton">
                <button className='close-btn' onClick={close}>X</button>
            </div>
            <div className="modal-header">
                <h2>Event Title</h2>
            </div>
            <div className="modal-body">
                <p>No event currently</p>
            </div>
          </div>
      </div>
  ) : null

}

Display.propTypes = {
  shown: PropTypes.bool.isRequired,
  close: PropTypes.bool.isRequired
}.isRequired

export default Display
