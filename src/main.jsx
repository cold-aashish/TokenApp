import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TokenProvider from "./context/TokenContext";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </TokenProvider>
  </React.StrictMode>
);
