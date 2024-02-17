import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import AboutPage from './pages/about/AboutPage';
import EventPage from './pages/EventPage';
import MessagesPage from './pages/MessagesPage';
import GivePage from './pages/GivePage';
import ContactPage from './pages/ContactPage';

import Navbar from './components/navbar/Navbar';


function App() {

  return (
    <BrowserRouter>
    
    <Navbar/>
    
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/events" element={<EventPage/>}/>
        <Route path="/messages" element={<MessagesPage/>}/>
        <Route path="/give" element={<GivePage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
