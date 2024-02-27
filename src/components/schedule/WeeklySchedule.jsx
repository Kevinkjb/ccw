
import './weekly.css'
const WeeklySchedule = () => {
  return (
    <div className='schedule-container'>
        <div className="weekly-heading">
            <h3>Weekly Schedule</h3>
        </div>
        <div className='weekly-content'>
            <div className="first-schedule">
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
            </div>
            <div className="second-schedule">
                <div className="sunday-service">
                    <p className='sunday-text'>Sunday Service</p>
                    <p className='schedule-time'>at 10:00 AM</p>
                </div>
            </div>
            <div className="third-schedule">
                <div className="prayer-meeting">
                    <p className='prayer-text'>Wednesday Prayer Meeting</p>
                    <p className='schedule-time'>at 6:00 PM</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default WeeklySchedule
