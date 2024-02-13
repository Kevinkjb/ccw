import HeroSection from '../components/hero/HeroSection'
import About from '../components/about/About'
import CoreValue from '../components/core-values/CoreValue'
import Footer from '../components/footer/Footer'

const AboutPage = () => {
  return (
    <div>
      <HeroSection heroTitle="Who We Are"/>
      <About/>
      <CoreValue/>
      <Footer/>
    </div>
  )
}

export default AboutPage
