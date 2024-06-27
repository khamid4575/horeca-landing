import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";

import App from "./App.jsx";
import "./index.css";
// import en from "./translations/en/global.json";
import ru from "./translations/ru/global.json";
import uz from "./translations/uz/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "ru",
  resources: {
    // en: {
    //   global: en,
    // },
    ru: {
      global: ru,
    },
    uz: {
      global: uz,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
