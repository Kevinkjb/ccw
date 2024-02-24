import PropTypes from 'prop-types';

const Display = ({modalClose}) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-content">
        <div className="closeButton">
            <button className='close-btn' onClick={() => modalClose(false)}>X</button>
        </div>
        <div className="modal-header">
            <h2>Modal Title</h2>
        </div>
        <div className="modal-body">
            <p>This is modal test</p>
        </div>
        </div>


      </div>
    </div>
  )
}

Display.propTypes = {
    modalClose: PropTypes.bool.isRequired
}.isRequired

export default Display
