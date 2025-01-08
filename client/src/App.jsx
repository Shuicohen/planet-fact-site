import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import PlanetPage from "./pages/PlanetPage.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/planet/earth" replace />} />
        <Route path="/planet/:name" element={<PlanetPage />} />
      </Routes>

    </Router>
  );
};

export default App;
