import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer";
import Index from './components/pages/Index';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
      
        <Routes>
          {/* Create Routes Here  */}
          <Route path='/' element={<Index />} />
          <Route path='/home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App;
