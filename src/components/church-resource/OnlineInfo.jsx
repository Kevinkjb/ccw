import './online.css'
import { FaFacebook, FaYoutube  } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiHandsPraying } from "react-icons/pi";
const OnlineInfo = () => {
  return (
    <div className='online-container'>
      <section className="online-section">
        <div className="live">
            <div className="live-icon">
                <FaFacebook className='online-icon'/>
                <FaYoutube className='online-icon'/>
            </div>
            <div className="live-info">
                <h3 className='online-title'>Join Us Online</h3>
                <p className='online-text'>Live on Facebook <br /> and Youtube</p>
                <p className='online-text'>Sundays at 10:00AM MST</p>
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
                    <button className='meeting-btn'>Learn More</button>
                    <button className='join-btn'>Click to Join</button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default OnlineInfo
