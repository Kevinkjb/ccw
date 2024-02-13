import PropTypes from 'prop-types';
import './message.css';

const LatestMessage = (props) => {
  const { messageTitle, datePosted, description, imgUrl } = props.data;

  return (
    <div className="message-container">
      <div>
        <h3 className='latest-title'>Latest Message</h3>
        <div className="message-content">
          <img className="message-img" src={imgUrl} alt="Message" />
          <div className="message-details">
            <h3 className='message-title'>{messageTitle}</h3>
            <div className="message-by">
              <span><strong>Message by:</strong> </span>
              <span>{messageTitle}</span>
            </div>
            <div className="date-posted">
              <span> <strong>Date Posted:</strong> </span>
              <span>{datePosted}</span>
            </div>
            <div className="description">
              <p><strong>Description:</strong></p>
              <p className='message-text'>{description}</p>
            </div>
            <button className="message-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

LatestMessage.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    messageTitle: PropTypes.string.isRequired,
    datePosted: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
  }).isRequired
};

export default LatestMessage;
