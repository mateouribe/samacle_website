import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatesProvider from "./context/StatesProvider";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StatesProvider>
    <React.StrictMode>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </StatesProvider>
);
