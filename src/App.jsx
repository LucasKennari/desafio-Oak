import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterProducts from "./pages/registerProducts/RegisterProducts";
import Header from "./components/header/Header";
import ListProducts from "./pages/listProducts/ListProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RegisterProducts />} />
          <Route path="/registerProducts" element={<RegisterProducts />} />
          <Route path="/products" element={<ListProducts />} />
          <Route path="/sobre" end element={<RegisterProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
