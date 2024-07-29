import { Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import EventPage from './pages/EventPage';
import MessagesPage from './pages/MessagesPage';
import GivePage from './pages/give/GivePage';
import ContactPage from './pages/contact/ContactPage';

import Navbar from './components/navbar/Navbar';


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

          </Routes>
    </>


  )
}

export default App
