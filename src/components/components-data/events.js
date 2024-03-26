import eventsImage from '../../images/no image yet.png'
import mothersDay from '../../images/mothersday.png'
import escapeRoom from '../../images/Easter Escape Room.pptx.png'


const events = [
    {
        id: 1,
        imgUrl: escapeRoom,
        eventMonths: 'Mar',
        eventDays: '30',
        eventTitle: 'Youth - Easter Escape Room',
        description: 'Welcome to the Easter Escape Room. You’ll need to place your participants into groups of about six young people. Then they’ll need to head off at five-minute intervals. They will be visiting a series of leaders in order to find the answers to 12 questions! .',
        time: '5:00 PM'
    },
    {
        id: 2,
        imgUrl: eventsImage,
        eventMonths: 'May',
        eventDays: '3',
        eventTitle: "Women's Outing in Canmore",
        description: 'No current description yet.',
        time: 'No time yet.'
    },
    {
        id: 3,
        imgUrl: mothersDay,
        eventMonths: 'May',
        eventDays: '12',
        eventTitle: "Mother's Day",
        description: "Celebrating Mother's Day on special occassion.",
        time: 'No time yet.'
    }
       
]

export default events