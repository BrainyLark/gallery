import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Regulations from './pages/Regulations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Atelier from './pages/Atelier';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/legalhub" element={<Regulations/>}></Route>
          <Route path="/atelier" element={<Atelier/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
