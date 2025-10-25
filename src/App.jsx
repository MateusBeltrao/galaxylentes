import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Componets/Nav/Nav'
import ContactUs from './Componets/Pages/Contact'
import Index from './Componets/Pages/Index'
import Footer from './Componets/Footer/Footer'
import Shop from './Componets/Pages/Shop'
import Blog from './Componets/Pages/Blog'
import About from './Componets/Pages/About'
import Carts from './Componets/Pages/Carts'
import Wishlist from './Componets/Pages/Wishlist'
import CheckoutPage from './Componets/Pages/CheckOut'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <Router> */}
      <Nav />
        <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<CheckoutPage />} />

      </Routes>
      <Footer />
      {/* </Router> */}
    </>
  )
}

export default App
