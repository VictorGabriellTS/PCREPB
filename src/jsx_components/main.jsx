import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.jsx";
import Home from "./home.jsx";
import Culture from "./culture.jsx";
import Courseware from "./courseware.jsx";
import ComingSoon from "./coming_soon.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header></Header>
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Início" element={<Home />} />
                    <Route path="/Cultura" element={<Culture />} />
                    <Route path="/Material_Didático" element={<Courseware />} />
                    <Route path="/Ajuda" element={<ComingSoon />} />
                    <Route path="/Junte-se_a_Nós" element={<ComingSoon />} />
                </Routes>
            </BrowserRouter>
        </div>
        <Footer></Footer>
    </React.StrictMode>
);
