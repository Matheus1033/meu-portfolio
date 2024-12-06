import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome-page";
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
