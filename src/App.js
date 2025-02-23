import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Atelier from './pages/Atelier';
import Privacy from './pages/Privacy';
import Artists from './components/Artists';
import ProductDetails from './components/ProductDetails';
import ArtistDetails from './components/ArtistDetails';
import Artworks from './components/Artworks';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/artists" element={<Artists/>}></Route>
          <Route path="/artist/:id" element={<ArtistDetails/>}></Route>
          <Route path="/products" element={<Artworks/>}></Route>
          <Route path="/product/:id" element={<ProductDetails/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/terms" element={<Terms/>}></Route>
          <Route path="/atelier" element={<Atelier/>}></Route>
          <Route path="/privacy" element={<Privacy/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
