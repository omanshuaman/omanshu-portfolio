import { HashRouter, Routes, Route } from "react-router-dom";
import Spaceship from "./pages/spaceship/Canvas";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Spaceship />} />
          <Route path="/spaceship" element={<Spaceship />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
