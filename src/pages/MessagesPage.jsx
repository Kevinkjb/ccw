import LatestMessage from "../components/messages/LatestMessage"
import messageData from '../components/components-data/data'
import Footer from "../components/footer/Footer"
import AllMessages from "../components/messages/AllMessages"
import sampleImage from '../images/Image Coming Soon.png'
const allMessage = [
    {
        videoUrl: "https://www.youtube.com/embed/QLFAPAElvnk",
        imgUrl: sampleImage
    },
    {
      videoUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FCCWetaskiwin%2Fvideos%2F418981313793685%2F&show_text=false&width=560&t=0",
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
      {messageData.map((item, index) => (
        <LatestMessage key={index} data={item}/>
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
