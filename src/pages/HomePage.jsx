import About from "../components/about/About"
import OnlineInfo from "../components/church-resource/OnlineInfo"
import HeroSection from "../components/hero/HeroSection"
import LatestMessage from "../components/messages/LatestMessage"
import messageData from '../components/components-data/data'

console.log(messageData)
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <OnlineInfo/>
      {messageData.map((item, index) => (
        <LatestMessage key={index} data={item}/>
      ))}

    </div>
  )
}

export default HomePage
