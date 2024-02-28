import PropTypes from 'prop-types';
import './modal.css'
const Display = ({modalClose, closeOutside}) => {
  return (
    <div className="modal-background">
      <div className="modal-container" onClick={() => closeOutside()}>
        <div className="modal-content">
        <div className="closeButton">
            <button className='close-btn' onClick={() => modalClose(false)}>X</button>
        </div>
        <div className="modal-header">
            <h2>Event Title</h2>
        </div>
        <div className="modal-body">
            <p>No event currently</p>
        </div>
        </div>


      </div>
    </div>
  )
}

Display.propTypes = {
    modalClose: PropTypes.bool.isRequired,
    closeOutside: PropTypes.bool.isRequired
}.isRequired

export default Display
