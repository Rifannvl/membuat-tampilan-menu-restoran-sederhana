import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}
