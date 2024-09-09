import PropTypes from 'prop-types';

const AllMessages = ({video, image, description, message, imageSlide}) => {

  return (

      <div className="messages-container">
        <div className="messages-slide">
            <a href={imageSlide}>
            <img className='messages-img' src={image} alt="Message" />
            </a>
            
            <div className="messages-details">
              <p className='messageBy'><span >Message By: </span>{message}</p>
              <div className="text-info">
                <p ><strong>Description:</strong>  </p>
                <p className='prev-text'>{description}</p>
              </div>
              <div className="messages-link">
                  <a className='youtube-link' href={video} target='_blank'>Watch</a>
                  <a className='slide-link' href={imageSlide} target='_blank'>View Slide</a>
                </div>
            </div>
        </div>

        {/* <div className="video-content">
        <iframe 
            className="message-video"
            src={video} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen="true"
            >
        </iframe>
        </div> */}
      </div>

  )
}
AllMessages.propTypes = {
    image: PropTypes.node,
    video: PropTypes.node,
    description: PropTypes.node,
    message: PropTypes.node,
    imageSlide: PropTypes.none
}

export default AllMessages
