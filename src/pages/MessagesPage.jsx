import messageData from '../components/components-data/data'
import Footer from "../components/footer/Footer"
import AllMessages from "../components/messages/AllMessages"
import WhyLookForLiving from '../images/message/Why do you look for the living among the dead.png'
import suffering from "../images/message/Suffering for God's Glory.png"
import LoveYourNeighbor from '../images/message/Royal Law April 7 2024.png'
import FaithAndDeed from '../images/message/04.14.24 - Faith & Deeds.png'
import RestrainYourTongue from '../images/message/04-21 Restrain Your Tongue.png'
import inHisTime from '../images/message/inhistime.png';
import togetherness from '../images/message/07.14.2024 - Togetherness - Bro. Boni Somook.png'
import faithful from '../images/message/08.04.2024 - Faithful to the End - Bro. Ted Matira.png'
import alienated from '../images/message/08.10.2024 - Alienated to this World - Bro. Marvin Risto.png'
import newHope from '../images/message/Sept 08 Message.png'
// import ExposingSin from '../images/message/Bro. Marvin March 24.png'
// import rightVsWrong from '../images/Right vs Wrong Debunking False Ideas.png'
// import basicTruth from '../images/02-04-2024 - Basic Truths of Christianity.png'
// import membership from '../images/02-25-2024 - Membership.png'
// import midstOfDifficulty from '../images/03-03-2024 - In The Midst of Difficulties - James 1.png'
// import manSinDeath from '../images/Man, Sin, and Death.png'
// import discipleship from '../images/Discipleship.png'
// import relationship from "../images/1-21-2024 - Let's Talk About Relationship.png"
// import liveAndShare from '../images/message/BRO. Bong Easter Sunday.png'
// import ValuesOfWisdom from '../images/message/The Values of Wisdom.png'
import togetherTwo from '../images/message/07.28.2024 - Bro. Boni Somook.png'

const allMessage = [
    {
      messageTitle: "New Hope to Real-World Believers",
      videoUrl: "https://www.youtube.com/watch?v=4Zx44Tk4DPs",
      imgUrl: newHope,
      messageBy: 'Bro. Harry Nietes',
      datePosted: 'Sept 08, 2024',
      imageSlide: 'https://www.canva.com/design/DAGQL1u-eWg/GrU9gKdXcU3KkVOpwTPOvg/view?utm_content=DAGQL1u-eWg&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: '1 Peter 4:1a “Therefore, since Christ has suffered in the flesh, arm yourselves also with the same purpose. '
    },
    {
      messageTitle: "Suffering for God's Glory ",
      videoUrl: "https://www.youtube.com/watch?v=gFz4PlZ4E3o",
      imgUrl: suffering,
      messageBy: 'Bro. Rodolfo Aguiao',
      datePosted: 'Sept 01, 2024',
      imageSlide: 'https://www.canva.com/design/DAGPhypDufE/Uut3-3RCZN12sIpygpDwhg/view?utm_content=DAGPhypDufE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: '1 Peter 3:17 Remember, it is better to suffer for doing good, if that is what God wants, than to suffer for doing wrong!'
    },
    {
      messageTitle: 'Alienated to this World',
      videoUrl: "https://www.youtube.com/watch?v=4k3lhPcg4IY",
      imgUrl: alienated,
      messageBy: 'Bro. Marvin Risto',
      datePosted: 'Aug 11, 2024',
      imageSlide: 'https://www.canva.com/design/DAGNedD8itM/JAOS4-l3k6NGkxo5FG3BdA/view?utm_content=DAGNedD8itM&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: '1 John 2: 15 Do not love the world or anything in the world. If anyone loves the world, love for the Father is not in them. 16 For everything in the world—the lust of the flesh, the lust of the eyes, and the pride of life—comes not from the Father but from the world. 17 The world and its desires pass away, but whoever does the will of God lives forever.'
  },
  {
      messageTitle: 'Faithful To The End',
      videoUrl: "https://www.youtube.com/watch?v=0gAJ9aOM0vc",
      imgUrl: faithful,
      messageBy: 'Ptr. Ted Matira',
      datePosted: 'Aug 04, 2024',
      imageSlide: 'https://www.canva.com/design/DAGMtnEEXRE/T_9aFb4nSB1BPilqeGj8fQ/view?utm_content=DAGMtnEEXRE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy, 9 for you are receiving the end result of your faith, the salvation of your souls.'
  },
  {
    messageTitle: 'Togetherness Pt.2',
    videoUrl: "https://www.youtube.com/watch?v=p7oyaDtWx10",
    imgUrl: togetherTwo,
    messageBy: 'Bro. Boni Somook',
    datePosted: 'July 28, 2024',
    imageSlide: 'https://www.canva.com/design/DAGMQKx-TY8/dh89DTX04y3kBVx9wPzL1w/view?utm_content=DAGMQKx-TY8&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    description: 'Now that you have purified yourselves by obeying the truth so that you have sincere love for each other, love one another deeply, from the heart.'
  },
    {
      messageTitle: 'Togetherness',
      videoUrl: "https://www.youtube.com/watch?v=PBrBWzaYgVg",
      imgUrl: togetherness,
      messageBy: 'Bro. Boni Somook',
      datePosted: 'July 14, 2024',
      imageSlide: 'https://www.canva.com/design/DAGK8FCT9DM/_7DbXYHoc6tmvtRb6d0kfA/view?utm_content=DAGK8FCT9DM&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'Now that you have purified yourselves by obeying the truth so that you have sincere love for each other, love one another deeply, from the heart.'
    },
    {
      messageTitle: 'In His Time',
      videoUrl: "https://www.youtube.com/watch?v=HN7pFGzeqdw",
      imgUrl: inHisTime,
      messageBy: 'Sis. Loverlee Matira',
      datePosted: 'May 26, 2024',
      imageSlide: 'https://www.canva.com/design/DAGGVwOH8WA/jElDUuSF5IEQIBcW7pH4Mw/view?utm_content=DAGGVwOH8WA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'Be patient, then, brothers and sisters, until the Lord’s coming. See how the farmer waits for the land to yield its valuable crop, patiently waiting for the autumn and spring rains.'
    },

    {
      messageTitle: 'Restrain Your Tongue',
      videoUrl: "https://www.youtube.com/watch?v=xYaWlaXb1S4",
      imgUrl: RestrainYourTongue,
      messageBy: 'Sis. Mabel Somook',
      datePosted: 'April 20, 2024',
      imageSlide: 'https://www.canva.com/design/DAGC4YghT0A/V1GC8ej1WrPhaBsYEvbbAA/view?utm_content=DAGC4YghT0A&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen.'
  },
    {
      messageTitle: 'Faith & Deeds',
      videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/779467414112191",
      imgUrl: FaithAndDeed,
      messageBy: 'Bro. Joshua & Sis. Jazzlee',
      datePosted: 'April 14, 2024',
      imageSlide: 'https://www.canva.com/design/DAGCWi9wLvA/b8R0vsnnoi1mLgxwPE1XVw/view?utm_content=DAGCWi9wLvA&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them?'
    },
    {
      messageTitle: 'Royal Law: Love Your Neighbor',
      videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/459224226527193",
      imgUrl: LoveYourNeighbor,
      messageBy: 'Chris Sampayan',
      datePosted: 'April 07, 2024',
      imageSlide: 'https://www.canva.com/design/DAGBqtMdvM0/bKYr3rmT0ixvMXrcW4UQwg/view?utm_content=DAGBqtMdvM0&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'If you really keep the royal law found in Scripture, “Love your neighbor as yourself,” you are doing right.'
    },
    {
      messageTitle: 'Why Do You Look For The Living Among The Dead',
      videoUrl: "https://www.youtube.com/watch?v=Vx0k90z6Epg",
      imgUrl: WhyLookForLiving,
      messageBy: 'Marvin Risto',
      datePosted: 'March 31, 2024',
      imageSlide: 'https://www.canva.com/design/DAGA7C3TuKs/VTZo3jT-ca_E7Xv1SJRYIw/view?utm_content=DAGA7C3TuKs&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      description: 'In their fright the women bowed down with their faces to the ground, but the men said to them, “Why do you look for the living among the dead?'
    },
    // {
    //   messageTitle: 'Exposing the Sin of Partiality',
    //   videoUrl: "https://www.youtube.com/watch?v=zMimW6xPe_c",
    //   imgUrl: ExposingSin,
    //   messageBy: 'Marvin Risto',
    //   datePosted: 'March 24, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAGAM6-Fdl0/BZXlDxApXVmI4fG6ypKjKw/view?utm_content=DAGAM6-Fdl0&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: '“Now let the fear of the Lord be on you. Judge carefully, for with the Lord our God there is no injustice or partiality or bribery.”'
    // },
    // {
    //   messageTitle: 'Live and Share',
    //   videoUrl: "https://www.youtube.com/watch?v=qulJzmvWjtY",
    //   imgUrl: liveAndShare,
    //   messageBy: 'Bong Aguiao',
    //   datePosted: 'March 17, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAF_uLqK3gk/elct-xN-nl7m1ZuIQFnv0A/view?utm_content=DAF_uLqK3gk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'Go and make disciple of all nations baptizing them in the name of the Father, the Son and the Holy Spirit'
    // },
  //   {
  //     messageTitle: 'The Value of Wisdom',
  //     videoUrl: "https://www.youtube.com/watch?v=pwznH6zOhvY",
  //     imgUrl: ValuesOfWisdom,
  //     messageBy: 'Bro. Harry Nietes',
  //     datePosted: 'April 28, 2024',
  //     imageSlide: '',
  //     description: 'James 3:13-18'
  // },
    // {
    //   messageTitle: 'Right vs Wrong',
    //   videoUrl: "https://www.youtube.com/watch?v=Y585jD5C07Y",
    //   imgUrl: rightVsWrong,
    //   messageBy: 'Boni Somook',
    //   datePosted: 'March 10, 2024',
    //   imageSlide: 'https://www.canva.com/design/DAF-4yKlZYk/03mX073ap8QwK4LUSxYWrQ/view?utm_content=DAF-4yKlZYk&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: ' Believers in humble circumstances ought to take pride in their high position. But the rich should take pride in their humiliation- since they will pass away like wild flower. '
    // },
    // {
    //   messageTitle: 'In the Midst of Difficulties',
    //   videoUrl: "https://www.facebook.com/CCWetaskiwin/videos/372532832352882",
    //   imgUrl: midstOfDifficulty,
    //   imageSlide: 'https://www.canva.com/design/DAF-m9nzpAY/3Mcs6crJNoXxL-EIDupAUg/view?utm_content=DAF-m9nzpAY&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   messageBy: 'Harry Nietes',
    //   description: '"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.”'
    // },
    // {
    //   videoUrl: "https://www.youtube.com/watch?v=F0YRa9gVwtM&t=2244s",
    //   imgUrl: membership,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF9ua8OCJg/dR6b9Wglj07SMPchRcO0cA/view?utm_content=DAF9ua8OCJg&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'so in Christ we, though many, form one body, and each member belongs to all the others.'
    // },
    // {
    //   videoUrl: "https://www.youtube.com/embed/-EcCtP8Rx38?si=aG6oBHXHWvpV23VN",
    //   imgUrl: basicTruth,
    //   messageBy: 'Ted Matira',
    //   imageSlide: 'https://www.canva.com/design/DAF7xTSIPBE/kN4ZsWKbm4Jrpvfrk51NCQ/view?utm_content=DAF7xTSIPBE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
    //   description: 'There are many things about God and God’s existence that will go beyond reasons and that will require FAITH to BELIEVE. '
    // },
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
