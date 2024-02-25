
import messageData from '../components/components-data/data'
import Footer from "../components/footer/Footer"
import AllMessages from "../components/messages/AllMessages"
import basicTruth from '../images/02-04-2024 - Basic Truths of Christianity.png'
import sampleImage from '../images/Image Coming Soon.png'
const allMessage = [
    {
      videoUrl: "https://www.youtube.com/embed/-EcCtP8Rx38?si=aG6oBHXHWvpV23VN",
      imgUrl: basicTruth
    },
    {
        videoUrl: "https://www.youtube.com/embed/QLFAPAElvnk",
        imgUrl: sampleImage
    },
    {
      videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCCWetaskiwin%2Fvideos%2F382811670933559%2F&show_text=false&width=560&t=0",
      imgUrl: sampleImage
    },
   

]
const MessagesPage = () => {
  

  return (
    <div>
      <section className="hero-section">
        <h1 className='about-hero-title'>Messages</h1>
      </section>
      {messageData.map((item) => (
        <>
          <div className="message-container">
            <div className='message-section'>
            <h3 className='latest-title'>Latest Message</h3>
            <div className="message-content">
              {/* <iframe 
                className="latest-video"
                src={item.videoUrl} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen="true"
              >
              </iframe> */}
              <img className="message-img" src={item.imgUrl} alt="Message" />
             
              <div className="message-details">
                <h3 className='message-title'>{item.messageTitle}</h3>
                <div className="message-by">
                  <span><strong>Message by:</strong> </span>
                  <span>{item.messageBy}</span>
                </div>
                <div className="date-posted">
                  <span> <strong>Date Posted:</strong> </span>
                  <span>{item.datePosted}</span>
                </div>
                <div className="description">
                  <p><strong>Description:</strong></p>
                  <p className='message-text'>{item.description}</p>
                </div>
              </div>
        </div>
      </div>
    </div>
        </>
      ))}
      
      <div className="all-messages">
        {
          allMessage.map((item, index) => (
            <AllMessages
              key={index}
              video={item.videoUrl}
              image={item.imgUrl}
            />
          ))
        }
      </div>
    

      <Footer/>
    </div>
  )
}

export default MessagesPage
