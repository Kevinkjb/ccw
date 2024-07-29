import './online.css'
import { FaFacebook, FaYoutube  } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiHandsPraying } from "react-icons/pi";
import {Link} from 'react-router-dom'
const OnlineInfo = () => {
  return (
    <div className='online-container'>
      <section className="online-section">
        <div className="live">
            <div className="live-icon">
                <a className='live-link' href="https://www.facebook.com/CCWetaskiwin" target='_blank'>
                    <FaFacebook className='online-icon'/>
                </a>
                <a className='live-link' href="https://www.youtube.com/@ChurchofChristWetaskiwin/streams" target='_blank'>
                    <FaYoutube className='online-icon'/>
                </a>
            </div>
            <div className="live-info">
                <h3 className='online-title'>Join Us Online</h3>
                <p className='online-text'>Live on Facebook <br /> and Youtube</p>
                <p className='online-text'>Sundays at 10:00AM MST</p>
            </div>
            <div className="social-live-link">
                <a className='fb-link' href="https://www.facebook.com/CCWetaskiwin" target='_blank'>
                    Facebook Live
                </a>
                <a className='yt-link' href="https://www.youtube.com/@ChurchofChristWetaskiwin/streams" target='_blank'>
                    Youtube Live
                </a>
            </div>

        </div>
        <div className="attend">
            <div className="attend-icon">
                <IoIosPeople className='online-icon'/>
            </div>
            <div className="attend-info">
                <h3 className='online-title'>Attend In-Person</h3>
                <p className='online-text'>4708 50 Avenue <br /> Wetaskiwin, Alberta T9A 0R7</p>
                <p className='online-text'>Sundays at 10:00 AM MST</p>
            </div>
        </div>
        <div className="meeting">
            <div className="meeting-icon">
                <PiHandsPraying className='online-icon'/>
            </div>
            <div className="meeting-info">
                <h3 className='online-title'>Join Our Prayer Meeting</h3>
                <p className='online-text'>Wednesdays at 6:00PM MST</p>
                <div className="meeting-btn-container">
                    <Link to="events">
                        <button className='meeting-btn'>Learn More</button>
                    </Link>
                    <a href="https://meet.google.com/zhp-yxhm-emg" target='_blank'>
                        <button className='join-btn'>Click to Join</button>
                    </a>

                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default OnlineInfo
