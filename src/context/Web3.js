import React, { createContext, useEffect, useState } from "react";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [library, setLibrary] = useState(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [network, setNetwork] = useState(null);

  useEffect(() => {
    const handleWidgetEvent = (e) => {
      console.log(e?.detail)
      setAddress(e?.detail?.address || "");
      setBalance(e?.detail?.balance || "");
      setLibrary(e?.detail?.web3 || null);
      setNetwork(e?.detail?.network || null);
    };

    document.addEventListener("web3-widget-event", handleWidgetEvent);
  }, []);

  return (
    <Web3Context.Provider
      value={{
        address,
        library,
        balance,
        network
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
