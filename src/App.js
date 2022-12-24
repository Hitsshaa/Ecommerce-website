import "./App.css";
import Counter from "./components/Counter";
import Index from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/product";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

const App =()=> {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/product" element={<Product />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
          <Route path="/Cart/:id" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
