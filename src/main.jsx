
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from './components/ScrollTop.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop smooth />
    <ScrollTop/>
    <App />
  </BrowserRouter>,
)
