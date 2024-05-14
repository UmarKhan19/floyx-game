import { Route, Routes } from "react-router-dom";
import Game from "./page/Game";
import Home from "./page/Home";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Game />} />
    </Routes>
  );
}

export default App;
