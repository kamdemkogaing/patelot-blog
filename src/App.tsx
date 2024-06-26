import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./pages/Countries";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/country" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
