import { HashRouter, Routes, Route } from "react-router-dom";
import Spaceship from "./pages/spaceship/Canvas";
import Home from "./pages/portfolio/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spaceship" element={<Spaceship />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
