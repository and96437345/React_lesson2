import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Header from './components/header';
import Catalog from './components/catalog';
import Footer from './components/footer';
import ProductDetail from './components/ProductDetail';

const About = () => <h1>About</h1>
const Home = () => <h1>Home</h1>
const CatalogTitle = () => <h1>Catalog</h1>
function App() {
  return (
    <Router>
      <div className="app">
      <Header/>

      <main>
        <div className="container">
          <h1>Каталог товаров</h1>
          <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/catalog' element={<CatalogTitle />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/product/:id' element={<ProductDetail />}/>
          </Routes>
          <Catalog/>
        </div>
      </main>

      <Footer/>
    </div>
    </Router>    
  );
}

export default App;
