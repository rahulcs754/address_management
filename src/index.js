import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AddressProvider } from "./AddressContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AddressProvider>
      <App />
    </AddressProvider>
  </StrictMode>,
  rootElement
);
