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
                        We help people understand salvation by grace so they can live a significant life of
                        worship and service.
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
                        We want to see a movement of people devoted to worshipping God and faithfully
                        serving our community.
                    </p>
                </div>
            </div>
            {/* CORE VALUES SECTION */}
            <div className="core-content-three">
  
                <div className="list-values">
                    <h3 className="core-title">Core Values</h3>
                    <div className='core-values-list'>
                        <div className="worship-value">
                            <h3 className='value-title'>Worship</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    We live Worship as a life-style, pursuing God daily through Bible readings ,
                                    prayers, fellowships and sharing God’s grace with others.
                                </p>
                            </div>
                        </div>
                        <div className="obedience-value">
                            <h3 className='value-title'>Obedience</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    We willingly trust and obey God by serving Him and our community, responding
                                    to the needs through acts of kindness and compassion, specially those who are in the
                                    household of faith.
                                </p>
                            </div>
                           
                        </div>
                        <div className="relationship-value">
                            <h3 className='value-title'>Relationship</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    We are a church family committed to living a life together, caring and loving
                                    another in Christ.
                                </p>
                            </div>
                           
                        </div>
                        <div className="discipleship-value">
                            <h3 className='value-title'>Discipleship</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    {`Making Disciples is our DNA. We deliberately, relationally, purposefully
                                    equipped believers to grow, succeed to live a significant life, to fulfill Christ's mission to all
                                    nations.`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* DISCIPLESHIP PROCESS SECTION */}
            <div className="core-content-three">
  
                <div className="list-values">
                    <h3 className="core-title">Discipleship Process:</h3>
              
                    <div className='core-values-list'>
                        
                        <div className="worship-value">
                            <h3 className='value-title'>Come (Get Engaged, and be a Member)</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    We are inviting everyone to accept the Lord Jesus Christ as Lord and Saviour.
                                    Relationships are essential and the sense of belonging is important to us; therefore
                                    we encourage everyone to get ENGAGE in a meaningful step towards salvation and
                                    to attend a MEMBERSHIP class (John 1:38-39). Come, get engaged and be a
                                    member.
                                </p>
                            </div>
                        </div>
                        <div className="obedience-value">
                            <h3 className='value-title'>Follow (Be Established in faith and be Mature)</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    We are encouraging everyone to follow and obey Jesus by walking alongside
                                    a leader/mentor/coach, however you called him/her to ESTABLISH A daily life of faith
                                    to become MATURE believers (Jn 1:40-43). Follow, be established in faith, and be
                                    mature.
                                </p>
                            </div>
                           
                        </div>
                        <div className="relationship-value">
                            <h3 className='value-title'>Learn (Be Equipped, be involved in the Ministry)</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    We are staging a training course to EQUIP everyone into the
                                    MINISTRY/service. We would like everyone to experience what Jesus is telling His
                                    disciples, “You will see greater things than these” (John 1:50; John 15:1-17;
                                    Ephesians 4:11-16). Learn, be equipped, and get involved in the ministry.
                                </p>
                            </div>
                           
                        </div>
                        <div className="discipleship-value">
                            <h3 className='value-title'>Go (Be Empowered and Make Disciples)</h3>
                            <div className="value-info">
                                <RiArrowRightSFill className='value-arrow'/>
                                <p className='value-text'>
                                    {`We are helping everyone to go and make disciples. With all authority Jesus
                                    gave them this mandate to “Go and Make Disciples.” He EMPOWERED them by the
                                    Holy Spirit to take this MISSION to the ends of the age/time, so are we. (John
                                    20:21-13;30-31; Matthew 28:18-20). Be empowered, Go and make disciples.`}
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
