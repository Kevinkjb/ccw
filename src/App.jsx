import { Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import EventPage from './pages/EventPage';
import MessagesPage from './pages/MessagesPage';
import GivePage from './pages/give/GivePage';
import ContactPage from './pages/contact/ContactPage';

import Navbar from './components/navbar/Navbar';
import RentalPage from './pages/rentals/RentalPage';
import WhatWeBelieve from './pages/what-we-believe/WhatWeBelieve';
import MissionVisionPage from './pages/mission/MissionVisionPage';
import PrayerRequestPage from './pages/connect-info/PrayerRequestPage';
import FirstTimeGuestPage from './pages/connect-info/FirstTimeGuestPage';
import AcceptedJesusForm from './components/acceptedJesus/AcceptedJesusForm';



function App() {

  return (
    <>
    <Navbar/>
          <Routes >

            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/events" element={<EventPage/>}/>
            <Route path="/messages" element={<MessagesPage/>}/>
            <Route path="/give" element={<GivePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/rentals" element={<RentalPage/>}/>
            <Route path="/whatwebelieve" element={<WhatWeBelieve/>}/>
            <Route path="/mission" element={<MissionVisionPage/>}/>
            <Route path="/prayerrequest" element={<PrayerRequestPage/>}/>
            <Route path="/guest" element={<FirstTimeGuestPage/>}/>
             <Route path="/yestoJesus" element={<AcceptedJesusForm/>}/>

          </Routes>
    </>


  )
}

export default App
