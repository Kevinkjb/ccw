import { Routes, Route, Router} from 'react-router-dom';
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
          <Routes>
            <Router basename='/'>
              <Route path="/" element={<HomePage/>}/>
            </Router>

            <Router basename='/about'>
              <Route path="/about" element={<AboutPage/>}/>
            </Router>

            <Router basename='/events'>
              <Route path="/events" element={<EventPage/>}/>
            </Router>

            <Router basename='/messages'>
              <Route path="/messages" element={<MessagesPage/>}/>
            </Router>

            <Router basename='/give'>
             <Route path="/give" element={<GivePage/>}/>
            </Router>

            <Router basename='/contact'>
              <Route path="/contact" element={<ContactPage/>}/>
            </Router>
          </Routes>
    </>


  )
}

export default App
