import { BrowserRouter, Routes, Route } from "react-router";
import WelcomePage from "./components/WelcomePage";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
