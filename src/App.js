import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MoviePlayerPage from "./pages/MoviePlayerPage";
import CreateMovie from "./pages/CreateMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/movie/:id" element={<MoviePlayerPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
