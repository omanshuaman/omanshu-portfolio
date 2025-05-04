import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/basics/cube-r3f/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CanvasComp from "./components/basics/cube-r3f/CanvasComp";
import CanvasCake from "./components/basics/cake/CanvasCake";
function App() {
  return (
    <>
      <BrowserRouter basename="/omanshu-portfolio/">
        <Routes>
          <Route path="/" element={<CanvasComp />} />
          <Route path="/cake" element={<CanvasCake />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
