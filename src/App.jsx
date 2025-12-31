import './App.css'
import Products from './components/products/Products';
import Home from './components/home/Home';
import Navbar from './components/shared/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import PaymentConfirmation from "./components/checkout/PaymentConfirmation";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import LogIn from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './components/checkout/Checkout';
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/products' Component={Products} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/cart' Component={Cart} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path='/checkout' Component={Checkout} />
          <Route path='/order-confirm' Component={PaymentConfirmation} />
        </Route>

        <Route path="/" element={<PrivateRoute publicPage />}>
          <Route path="login" element={<LogIn />} />
          <Route path='/register' Component={Register} />
          <Route path='/checkout' Component={Checkout} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
