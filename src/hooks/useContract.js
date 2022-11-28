import { useContext } from "react";
import { ContractContext } from "../context/ContractContext";

export function useContract() {
  const context = useContext(ContractContext);
  if (context === undefined) {
    throw new Error(
      "useContract must be used within a ContractContext"
    );
  }

  return context;
}

export default useContract;
