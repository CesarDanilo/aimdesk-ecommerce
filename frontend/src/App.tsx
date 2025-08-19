import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CheckoutCart from "./pages/CheckoutCart";
import CartPage from "./pages/Cardpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckoutCart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App