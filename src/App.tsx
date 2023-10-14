import AirQuality from "./pages/AirQuality";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="air-quality" element={<AirQuality />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
