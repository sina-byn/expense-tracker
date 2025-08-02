import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

// * components
import HomePage from "./pages/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <div className="container mx-auto p-4">
        <HomePage />
      </div>
    </App>
  </StrictMode>,
);
