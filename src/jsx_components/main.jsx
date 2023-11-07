import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header.jsx";
import App from "./app.jsx";
import Footer from "./footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header></Header>
        <App></App>
        <Footer></Footer>
    </React.StrictMode>
);
