import Home from "./home.jsx";
import Culture from "./culture.jsx";
import Courseware from "./courseware.jsx";
import ComingSoon from "./coming_soon.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Início" element={<Home />} />
                    <Route path="/Cultura" element={<Culture />} />
                    <Route path="/Material_Didático" element={<Courseware />} />
                    <Route path="/Ajuda" element={<ComingSoon />} />
                    <Route path="/Junte-se_a_Nós" element={<ComingSoon />} />
                    <Route path="/PCREPB" element={<Home />} />
                    <Route path="/PCREPB/Início" element={<Home />} />
                    <Route path="/PCREPB/Cultura" element={<Culture />} />
                    <Route path="/PCREPB/Material_Didático" element={<Courseware />} />
                    <Route path="/PCREPB/Ajuda" element={<ComingSoon />} />
                    <Route path="/PCREPB/Junte-se_a_Nós" element={<ComingSoon />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
