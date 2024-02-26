import PropTypes from 'prop-types';

const AllMessages = ({video, image, description, message}) => {

  return (

      <div className="messages-container">
        <div className="messages-slide">
            <img className='messages-img' src={image} alt="sample" />
            <div className="messages-details">
              <p className='messageBy'><span >Message By: </span>{message}</p>
              <div className="text-info">
                <p ><strong>Description:</strong>  </p>
                <p className='prev-text'>{description}</p>
              </div>
              <a className='youtube-link' href={video} target='_blank'>Watch</a>
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
    message: PropTypes.node
}

export default AllMessages
