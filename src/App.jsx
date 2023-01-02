import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/index.css";
import CourseP from "./pages/CourseP";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { NavbarwithRenderB, FooterwithRenderB } from "./LocationHco";

function App() {
  return (
    <BrowserRouter>
      <NavbarwithRenderB />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseP />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page-not-found" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/page-not-found" />} />
      </Routes>
      <FooterwithRenderB />
    </BrowserRouter>
  );
}

export default App;
