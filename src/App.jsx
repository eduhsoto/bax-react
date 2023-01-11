import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/index.css";
import { NavbarwithRenderB, FooterwithRenderB } from "./hco/LocationHco";
import { lazy, Suspense } from "react";

const CourseP = lazy(() => import("./pages/CourseP"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <NavbarwithRenderB />
      <Suspense fallback={<h3>Loading</h3>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseP />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/page-not-found" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/page-not-found" />} />
        </Routes>
      </Suspense>
      <FooterwithRenderB />
    </BrowserRouter>
  );
}

export default App;
