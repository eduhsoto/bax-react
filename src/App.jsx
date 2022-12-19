import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/index.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import CourseP from "./pages/CourseP";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseP />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
