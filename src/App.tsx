import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Tracks from "./pages/Tracks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/tracks" element={<Tracks />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
