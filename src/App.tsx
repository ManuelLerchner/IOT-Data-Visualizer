import AirQuality from "./pages/AirQuality";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/air-quality" element={<AirQuality />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
