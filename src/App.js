import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MoviePlayerPage from "./pages/MoviePlayerPage";
import CreateMovie from "./pages/CreateMovie";
import Layout from "./component/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateMovie />} />
        <Route path="/movie/:id" element={<MoviePlayerPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
