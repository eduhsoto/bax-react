import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/index.css";
import { NavbarwithRenderB, FooterwithRenderB } from "./hco/LocationHco";
import CourseP from "./pages/CourseP";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

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
