import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/index.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
