import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Requirement from './Pages/Requirement';
import Terms from './Pages/Terms';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';

function App() {
  return (
    <Router >
      <Header />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Requirement' element={<Requirement />} />
        <Route path='/Terms' element={<Terms />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
