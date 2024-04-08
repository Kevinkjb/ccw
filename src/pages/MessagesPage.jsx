
import messageData from '../components/components-data/data'
import Footer from "../components/footer/Footer"
import AllMessages from "../components/messages/AllMessages"
import basicTruth from '../images/02-04-2024 - Basic Truths of Christianity.png'
import WhyLookForLiving from '../images/Why do you look for the living among the dead.png'
import ExposingSin from '../images/Bro. Marvin March 24.png'
import membership from '../images/02-25-2024 - Membership.png'
import liveAndShare from '../images/BRO. Bong Easter Sunday.png'
import rightVsWrong from '../images/Right vs Wrong Debunking False Ideas.png'
import midstOfDifficulty from '../images/03-03-2024 - In The Midst of Difficulties - James 1.png'
// import manSinDeath from '../images/Man, Sin, and Death.png'
// import discipleship from '../images/Discipleship.png'
// import relationship from "../images/1-21-2024 - Let's Talk About Relationship.png"

const allMessage = [
    {
      messageTitle: 'Why Do You Look For The Living Among The Dead',
      videoUrl: "https://www.youtube.com/watch?v=Vx0k90z6Epg",
      imgUrl: WhyLookForLiving,
      messageBy: 'Marvin Risto',
      datePosted: 'March 31, 2024',
      imageSlide: 'https://www.canva.com/design/DAGA7C3TuKs/VTZo3jT-ca_E7Xv1SJRYIw/view?utm_content=DAGA7C3TuKs&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'In their fright the women bowed down with their faces to the ground, but the men said to them, “Why do you look for the living among the dead?'
    },
    {
      messageTitle: 'Exposing the Sin of Partiality',
      videoUrl: "https://www.youtube.com/watch?v=zMimW6xPe_c",
      imgUrl: ExposingSin,
      messageBy: 'Marvin Risto',
      datePosted: 'March 24, 2024',
      imageSlide: 'https://www.canva.com/design/DAGAM6-Fdl0/BZXlDxApXVmI4fG6ypKjKw/view?utm_content=DAGAM6-Fdl0&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: '“Now let the fear of the Lord be on you. Judge carefully, for with the Lord our God there is no injustice or partiality or bribery.”'
    },
    {
      messageTitle: 'Live and Share',
      videoUrl: "https://www.youtube.com/watch?v=qulJzmvWjtY",
      imgUrl: liveAndShare,
      messageBy: 'Bong Aguiao',
      datePosted: 'March 17, 2024',
      imageSlide: 'https://www.canva.com/design/DAF_uLqK3gk/elct-xN-nl7m1ZuIQFnv0A/view?utm_content=DAF_uLqK3gk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'Go and make disciple of all nations baptizing them in the name of the Father, the Son and the Holy Spirit'
    },
    {
      messageTitle: 'Right vs Wrong',
      videoUrl: "https://www.youtube.com/watch?v=Y585jD5C07Y",
      imgUrl: rightVsWrong,
      messageBy: 'Boni Somook',
      datePosted: 'March 10, 2024',
      imageSlide: 'https://www.canva.com/design/DAF-4yKlZYk/03mX073ap8QwK4LUSxYWrQ/view?utm_content=DAF-4yKlZYk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: ' Believers in humble circumstances ought to take pride in their high position. But the rich should take pride in their humiliation- since they will pass away like wild flower. '
    },
    {
      messageTitle: 'In the Midst of Difficulties',
      videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/372532832352882",
      imgUrl: midstOfDifficulty,
      imageSlide: 'https://www.canva.com/design/DAF-m9nzpAY/3Mcs6crJNoXxL-EIDupAUg/view?utm_content=DAF-m9nzpAY&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      messageBy: 'Harry Nietes',
      description: '"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.”'
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=F0YRa9gVwtM&t=2244s",
      imgUrl: membership,
      messageBy: 'Ted Matira',
      imageSlide: 'https://www.canva.com/design/DAF9ua8OCJg/dR6b9Wglj07SMPchRcO0cA/view?utm_content=DAF9ua8OCJg&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'so in Christ we, though many, form one body, and each member belongs to all the others.'
    },
    {
      videoUrl: "https://www.youtube.com/embed/-EcCtP8Rx38?si=aG6oBHXHWvpV23VN",
      imgUrl: basicTruth,
      messageBy: 'Ted Matira',
      imageSlide: 'https://www.canva.com/design/DAF7xTSIPBE/kN4ZsWKbm4Jrpvfrk51NCQ/view?utm_content=DAF7xTSIPBE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'There are many things about God and God’s existence that will go beyond reasons and that will require FAITH to BELIEVE. '
    },
    // {
    //   videoUrl: "https://fb.watch/qrTqKakIhM/",
    //   imgUrl: manSinDeath,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF8Z-jo1iA/4fgCXwRrRwsG6wbDUYpxCA/view?utm_content=DAF8Z-jo1iA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'God would like us to enjoy eternity with Him, but there’s one thing that can hinder us to get there - SIN.  '
    // },
    // {
    //   videoUrl: "https://fb.watch/qrTvHVpND1/",
    //   imgUrl: discipleship,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF7BJQC4qA/lIGbFPqCFH8Vditywr_nqw/view?utm_content=DAF7BJQC4qA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'Everyone joining the family of God are expected to not just profess the faith but divinely UNITE him/her self to Christ.'
    // },
    // {
    //   videoUrl: "https://fb.watch/qrTyd8Up5G/",
    //   imgUrl: relationship,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF6dfANZ6o/IoPawmKPKFJN028rUlN4vw/view?utm_content=DAF6dfANZ6o&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'He came to mend our hearts and consecrate us to a new and living way in full assurance of faith and trust.'
    // },
   

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
              <a href={item.imageSlide}>
              <img className="message-img" src={item.imgUrl} alt="Message" />
              </a>
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
                <div className="messages-link">
                  <a className='youtube-link' href={item.videoUrl} target='_blank'>Watch</a>
                  <a className='slide-link' href={item.imageSlide} target='_blank'>View Slide</a>
                </div>
                
              
                {/* <a  href={item.imageSlide}>View Slide</a> */}
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
              imageSlide={item.imageSlide}
            />
          ))
        }
      </div>
    

      <Footer/>
    </div>
  )
}

export default MessagesPage
