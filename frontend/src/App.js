import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      {/* Noise texture overlay for industrial feel */}
      <div className="noise-overlay" aria-hidden="true"></div>
    </div>
  );
}

export default App;
