import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import GlobalStyle from "./components/GlobalStyle";
import { ContractProvider } from "./context/ContractContext";
import { ResultsProvider } from "./context/ResultsContext";
import { Web3Provider } from "./context/Web3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Web3Provider>
    <ContractProvider>
      <GlobalStyle />
      <ResultsProvider>
        <App />
      </ResultsProvider>
    </ContractProvider>
  </Web3Provider>
);
