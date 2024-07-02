import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Countries from "./pages/Countries";
import Hobbys from "./pages/Hobbys";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/country" element={<Countries />} />
        <Route path="/projekte" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hobbys" element={<Hobbys />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
