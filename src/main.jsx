import React, { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

/* ------------------------------
   Restore GitHub Pages 404 route
------------------------------ */
function RedirectHandler({ children }) {
  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");

    if (redirect) {
      sessionStorage.removeItem("redirect");
      window.history.replaceState(null, "", redirect);
    }
  }, []);

  return children;
}

/* ------------------------------ */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RedirectHandler>
          <App />
        </RedirectHandler>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);