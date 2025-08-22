import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import CheckoutCart from "./pages/CheckoutCart";
import CartPage from "./pages/Cardpage";
import ProdutoPage from "./pages/ProdutoPage";
import AllProductsPage from "./pages/AllProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckoutCart />} />
        <Route path="/product" element={<ProdutoPage />} />
        <Route path="/allproducts" element={<AllProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App