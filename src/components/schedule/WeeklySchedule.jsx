import { Link } from 'react-router-dom'
import './weekly.css'
const WeeklySchedule = () => {
  return (
    <div className='schedule-container'>
        <div className="weekly-heading">
            <h3>Weekly Schedule</h3>
        </div>
        <div className='weekly-content'>
            {/* <div className="first-schedule">
                <div className="couples">
                    <p className='schedule-text'>Monday - Couples</p>
                    <p className='schedule-time'>at 7:00 PM</p>
                </div>
                <div className="praise-worship">
                    <p className='schedule-text'>Thursday - Praise and Worship</p>
                    <p className='schedule-time'>at 6:00 PM</p>
                </div>
                <div className="young-pro">
                    <p className='schedule-text'>Friday - Young Pros</p>
                    <p className='schedule-time'>at 6:00 PM</p>
                </div>
            </div> */}
            {/* FIRST SCHEDULE */}
            <div className="first-schedule">
                <div className="weekly-service">
                    <div className="date">
                        <h2>MON</h2>
                    </div>
                    <div className='service-info'>
                        <p className='service-text'>Bible Study</p>
                        <p className='schedule-time'>Connect with Sis. Hanna</p>
                        <p className='events-number'>780-335-4071</p>
                        <p className='schedule-time'>at 6:30 PM</p>
                    </div>
                </div>
            </div>
            {/* SECOND SCHEDULE */}
            <div className="second-schedule">
                <div className="weekly-service">
                    <div className="date">
                        <h2>TUE</h2>
                    </div>
                    <div className='service-info'>
                        <p className='service-text'>Bible Study</p>
                        <p className='schedule-time'>Connect with Sis. Hanna</p>
                        <p className='events-number'>780-335-4071</p>
                        <p className='schedule-time'>at 7:00 PM</p>
                    </div>
                </div>
            </div>
            {/* THIRD SCHEDULE */}
            <div className="third-schedule">
                <div className="weekly-service">
                    <div className="date">
                        <h2>WED</h2>
                    </div>
                    <div className='service-info'>
                        <p className='service-text'>Womens Senior</p>
                        <p className='schedule-time'>Connect with Sis. Cora</p>
                        <p className='events-number'>780-361-9172</p>
                    </div>
                    <div className='service-info'>
                        <p className='service-text'>Prayer Meeting</p>
                        <p className='schedule-time'>at 6:00 PM</p>
                    </div>
                </div>
            </div>
            {/* FOURTH SCHEDULE */}
            <div className="fourth-schedule">
                <div className="weekly-service">
                    <div className="date">
                        <h2>THUR</h2>
                    </div>
                    <div className='service-info'>
                        <p className='praise-text'>Praise & Worship Bible Study</p>
                        <p className='schedule-time'>at 6:00 PM</p>
                    </div>

                </div>
            </div>
            {/* FIFTH SCHEDULE */}
            <div className="fifth-schedule">
                <div className="fourth-service">
                    <div className="date">
                        <h2>FRI</h2>
                    </div>
                    <div className="young-pro">
                        <p className='young-text'>Sunday School Teacher Bible Study</p>
                        <p className='schedule-time'>at 7:00 PM</p>
                    </div>
                </div>

            </div>
            <div className="sixth-schedule">
                <div className="weekly-service">
                    <div className="date">
                        <h2>SUN</h2>
                    </div>
                    <div className='service-info'>
                        <p className='service-text'>Sunday Service</p>
                        <p className='schedule-time'>at 10:00 AM</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="more-info-events">
            <p className='more-info-title'>Do you want to join a small group?</p>
            <p className='more-info-text'>Connect with Bro. Ted to join a Home Bible Study Group</p>
            <Link to="/contact">
                <button className='more-number'>Contact Us</button>
            </Link>
            
        </div>
    </div>

  )
}

export default WeeklySchedule
