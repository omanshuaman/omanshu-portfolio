import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import CanvasComp from "./pages/cube-r3f/CanvasComp";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<CanvasComp />} />
          <Route path="/cake" element={<CanvasComp />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
