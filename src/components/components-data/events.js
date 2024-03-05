import eventsImage from '../../images/event.jpg'
import mothersDay from '../../images/mothersday.png'
import escapeRoom from '../../images/Easter Escape Room.pptx.png'


const events = [
    {
        id: 1,
        imgUrl: escapeRoom,
        eventMonths: 'Mar',
        eventDays: '10',
        eventTitle: 'Youth - Easter Escape Room',
        description: 'No current description yet.',
        time: 'No time yet.'
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