import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import "./App.css" - Removed during cleanup
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Products from "./components/Products"
import Product from "./components/product" // Fixed import case sensitivity
import Cart from "./components/Cart"
import BuyNow from "./components/BuyNow"
import Login from "./components/Login"
import AddProduct from "./components/AddProduct"
import ProtectedRoute from "./pages/protectedRoute"

function App() {
  const [cart, setcart] = useState([]);

  useEffect(() => {
    // Only parse if it exists, default to []
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setcart(JSON.parse(storedCart));
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []) // Load once on mount

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const logout = () => {
    localStorage.removeItem("email");
    window.location.reload();
  };

  return (
    <Layout cartCount={cart.length} logout={logout}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products cart={cart} setcart={setcart} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={
          <ProtectedRoute>
            <Cart cart={cart} setcart={setcart} />
          </ProtectedRoute>
        } />
        <Route path="/buynow/:id" element={<BuyNow />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  )
}

export default App
