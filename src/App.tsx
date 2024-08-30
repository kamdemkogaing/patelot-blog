import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogDetail from "./components/blog/BlogDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Countries from "./pages/Countries";
import CreateBlog from "./pages/CreateBlog";
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
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
