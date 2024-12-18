import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Pricing from "../pages/Pricing";
import Safety from "../pages/Safety";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default RoutePath;
