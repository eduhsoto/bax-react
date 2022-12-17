import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/index.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import CourseP from "./pages/CourseP";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseP />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
