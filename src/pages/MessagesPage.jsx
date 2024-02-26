
import messageData from '../components/components-data/data'
import Footer from "../components/footer/Footer"
import AllMessages from "../components/messages/AllMessages"
import basicTruth from '../images/02-04-2024 - Basic Truths of Christianity.png'
import manSinDeath from '../images/Man, Sin, and Death.png'
import discipleship from '../images/Discipleship.png'
import relationship from "../images/1-21-2024 - Let's Talk About Relationship.png"

const allMessage = [
    {
      videoUrl: "https://www.youtube.com/embed/-EcCtP8Rx38?si=aG6oBHXHWvpV23VN",
      imgUrl: basicTruth,
      messageBy: 'Ted Matira',
      description: 'There are many things about God and God’s existence that will go beyond reasons and that will require FAITH to BELIEVE. '
    },
    {
      videoUrl: "https://fb.watch/qrTqKakIhM/",
      imgUrl: manSinDeath,
      messageBy: 'Ted Matira',
      description: 'God would like us to enjoy eternity with Him, but there’s one thing that can hinder us to get there - SIN.  '
    },
    {
      videoUrl: "https://fb.watch/qrTvHVpND1/",
      imgUrl: discipleship,
      messageBy: 'Ted Matira',
      description: 'Everyone joining the family of God are expected to not just profess the faith but divinely UNITE him/her self to Christ.'
    },
    {
      videoUrl: "https://fb.watch/qrTyd8Up5G/",
      imgUrl: relationship,
      messageBy: 'Ted Matira',
      description: 'Everyone joining the family of God are expected to not just profess the faith but divinely UNITE him/her self to Christ.'
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
                <a className='youtube-link' href="https://youtube.com/live/F0YRa9gVwtM?feature=share" target='_blank'>Watch</a>
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
              description={item.description}
              message={item.messageBy}
            />
          ))
        }
      </div>
    

      <Footer/>
    </div>
  )
}

export default MessagesPage
