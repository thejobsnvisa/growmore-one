import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const AppContent = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

root.render(
  import.meta.env.DEV ? (
    <React.StrictMode>{AppContent}</React.StrictMode>
  ) : (
    AppContent
  )
);