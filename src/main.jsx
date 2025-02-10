import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.scss";

const DOMElement = document.getElementById("root"); //<div id="root"></div>
const VDOMElement = createRoot(DOMElement);

VDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
