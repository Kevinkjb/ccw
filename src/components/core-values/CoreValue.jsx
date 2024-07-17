import './coreValue.css'
import mission from '../../images/gallery/mission.jpg'
import vision from '../../images/gallery/worship.jpg'
import { RiArrowRightSFill } from "react-icons/ri";
const CoreValue = () => {
  return (
    <div className="core-container">
        <div className="core-value">
            <div className="core-content-one">
                <div className="mission-content">
                    <h3 className="core-title">Mission</h3>
                    <p className='core-text'>
                        Our Mission is to obey Jesus{`'`}s GREAT COMMISSION by helping people to understand salvation 
                        by Grace and by walking alongside someone to live in a new and living way of life <span className='core-verse'>(Matthew 28:18-20; Hebrews 10:19-25)</span>. 
                    </p>
                </div>
                <div className="mission-img">
                    <img className='core-value-img' src={mission} alt="Mission value" />
                </div>

            </div>
            <div className="core-content-two">
                <div className="vision-img">
                    <img className='core-value-img' src={vision} alt="Vision value" />
                </div>
                <div className="vision-content">
                    <h3 className="core-title">Vision</h3>
                    <p className='core-text'>
                        Our vision is to be a thriving community of believers, 
                        passionately committed to worshipping and serving God. 
                        We aspire to be a light in the world, bringing hope, love, and transformation to individuals and communities <span className='core-verse'>(Romans 12:1-2)</span>.
                    </p>
                </div>
            </div>
            <div className="core-content-three">
  
                <div className="list-values">
                <h3 className="core-title">Core Values</h3>
                    <div className='core-values-list'>
                        <div className="worship-value">
                            <h3 className='value-title'>Worship</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>We practise worship with the precedence and practice of the new Testament church, <span className='core-verse'>Romans 12:1-2; John 4:23-24</span>.</p>
                            </div>
                        </div>
                        <div className="obedience-value">
                            <h3 className='value-title'>Obedience</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>Love is our motivation to willingly obey the Lord, <span className='core-verse'>John 14:15; 2 John 6</span>.</p>
                            </div>
                           
                        </div>
                        <div className="relationship-value">
                            <h3 className='value-title'>Relationship</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>We maintain, uphold, and grow our relationship by loving God and loving each other as a big Family, <span className='core-verse'>Matthew 22:37-39; Romans 3:8</span>.</p>
                            </div>
                           
                        </div>
                        <div className="discipleship-value">
                            <h3 className='value-title'>Discipleship</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    The Bible clearly instructed us to mentor and develop the followers, 
                                    So deliberately our leaders committed themselves to nurture the life 
                                    and the faith of our people until we all reach maturity of life in Christ, <span className='core-verse'>Ephesians 4:11-16; 2 Timothy 2:2</span>.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default CoreValue
