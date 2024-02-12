
const LatestMessage = (props) => {
  const {id, messageTitle} = props.data;
  return (
    <div className="message-container">
      <section>
        <h3>Latest Message</h3>
        <div className="message-content">
            <img src="" alt="" />
            <div className="message-details">
                <h3>Message Title</h3>
                <div className="messageby">
                    <span>Message by: </span>
                    <span>{messageTitle}</span>
                </div>
                <div className="date-posted">
                    <span>Date Posted:</span>
                    <span>April 13, 2024</span>
                </div>
                <div className="description">
                    <p>Description:</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Vivamus condimentum neque nec velit suscipit tempor.
                         Phasellus sed nisl vel nibh imperdiet fermentum at eu lacus. 
                    </p>
                </div>
                <button className="message-btn">Learn More</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default LatestMessage
