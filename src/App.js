import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <h1 className="font-thin drop-shadow-xl text-4xl capitalize mb-8 mt-8">Сүүлд нэмэгдсэн</h1>
      <Products />
      <h1 className="font-thin drop-shadow-xl capitalize text-4xl mb-8">Онцлох бүтээлүүд</h1>
      <Products />
      <h1 className="font-thin drop-shadow-2xl capitalize text-4xl mb-8">Категори</h1>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
