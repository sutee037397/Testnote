import React from "react";
import ReactDOM from "react-dom/client";
import Box from "./components/Box.jsx";
import AppNavbar from "./components/Navbar.jsx";
import Square from "./components/Square.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppNavbar />
    <Box />
    <Square/>
  </React.StrictMode>
);
