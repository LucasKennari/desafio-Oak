import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterProducts from "./pages/registerProducts/RegisterProducts";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" end element={<RegisterProducts />} />
        <Route path="/registerProd" end element={<RegisterProducts />} />
        {/* <Route path="/sobre" end element={<RegisterProducts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
