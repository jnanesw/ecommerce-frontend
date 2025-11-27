import './App.css'
import Products from './components/products/Products';
import Home from './components/home/Home';
import Navbar from './components/shared/Navbar';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/products' Component={Products} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </Router>
  )
}

export default App
