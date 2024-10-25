
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
                        <p className='service-text'>SHEPHERDING MINISTRY</p>
                        <p className='schedule-time'>at 10:30 AM</p>
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
                        <p className='praise-text'>Praise & Worship Ministry</p>
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
                        <p className='young-text'>Young Pro Ministry</p>
                        <p className='schedule-time'>at 6:00 PM</p>
                    </div>
                </div>

            </div>
            <div className="sixth-schedule">
                <div className="weekly-service">
                    <div className="date">
                        <h2>SUN</h2>
                    </div>
                    <div className='service-info'>
                        <p className='service-text'>Worship Service</p>
                        <p className='schedule-time'>at 10:00 AM</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default WeeklySchedule
