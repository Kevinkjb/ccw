import PropTypes from 'prop-types';

const AllMessages = ({video, image}) => {

  return (

      <div className="messages-container">
        <div className="video-content">
        <iframe 
            className="message-video"
            src={video} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen="true"
            >
        </iframe>
        </div>
        <div className="messages-slide">
            <img className='messages-img' src={image} alt="sample" />
        </div>
      </div>

  )
}
AllMessages.propTypes = {
    video: PropTypes.node,
    image: PropTypes.node
}

export default AllMessages
