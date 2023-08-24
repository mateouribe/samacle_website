import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StatesProvider from "./context/StatesProvider";
import ScrollToTop from "./utils/ScrollToTop";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./locales/en/translation.json";
import common_fr from "./locales/fr/translation.json";
import common_sp from "./locales/sp/translation.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already escapes
  lng: "en", // default language
  resources: {
    en: { translation: common_en },
    fr: { translation: common_fr },
    sp: { translation: common_sp },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <StatesProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </StatesProvider>
    </React.StrictMode>
  </I18nextProvider>
);
