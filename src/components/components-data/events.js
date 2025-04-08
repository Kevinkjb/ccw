// import womensOuting from "../../images/Women's Outing.jpg"
// import mothersDay from '../../images/mothersday.png'
// import escapeRoom from '../../images/Easter Escape Room.pptx.png'
// import camping from '../../images/outing/Church.png'
// import kidsFunDay from '../../images/events/kids.png'
// import valetines from '../../images/events/Valentines.jpg'
// import anniversary from '../../images/events/anniversary.jpg'
// import camping from '../../images/events/Couple’s.png'
// import kidsFunDay from '../../images/events/Kids fun day.jpg'
import churchCamp from '../../images/events/Camp.jpg'
import youthMovie from '../../images/events/Good Friday Movie Night.pdf.png'


const events = [
    {
        id: 0,
        imgUrl: youthMovie,
        eventMonths: 'Apr',
        eventDays: '18',
        eventTitle: "Good Friday Movie Night",
        description: `
            All youths invited
            Free movie screening and popcorn
            Concessions will be available for purchase (cash only)

            April 18, 2025 @ 5:30 PM
            Movie starts @ 6:00 PM
            4708 50 Avenue Wetaskiwin, AB
        `,
        time: 'Friday @ 5:30PM'
    },
    // {
    //     id: 1,
    //     imgUrl: anniversary,
    //     eventMonths: 'Aug',
    //     eventDays: '04',
    //     eventTitle: "Church of Christ Wetaskiwin 13th Anniversary",
    //     description: 'We look back on how God has blessed us and we look forward, united, with confident hope because we trust in Him who lead us.',
    //     time: 'Sunday 10:00 AM'
    // },
    // {
    //     id: 0,
    //     imgUrl: kidsFunDay,
    //     eventMonths: 'Mar',
    //     eventDays: '29',
    //     eventTitle: "Kids Fun Day",
    //     description: `
    //     Love like Jesus 1 John 3:16
    //     `,
    //     time: '9:30AM - 11:30AM'
    // },
    {
        id: 1,
        imgUrl: churchCamp,
        eventMonths: 'May',
        eventDays: '09',
        eventTitle: "Family Camp",
        description: `
        Come and join us!

        Aligning To Our Greater Purpose
        Ephesians 1:10-14
        `,
        time: ''
    }
       
]

export default events