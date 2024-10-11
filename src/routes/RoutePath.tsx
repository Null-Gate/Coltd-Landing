import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Pricing from "../pages/Pricing";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
}

export default RoutePath