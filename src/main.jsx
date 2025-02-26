import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.scss";

const DOMElement = document.getElementById("root");
const VDOMElement = createRoot(DOMElement);

/*
VDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>
); 
*/

VDOMElement.render(
  <App />
);
