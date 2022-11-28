import { createContext } from "react";
import useFetchContract from "../hooks/useFetchContract";

export const ContractContext = createContext();

export const ContractProvider = ({ children }) => {
  const { contract, loadingContract, contractError } = useFetchContract(
    '0x645f0303ab62ef56d263747cd26b650c9ea012f7'
  );

  return (
    <ContractContext.Provider
      value={{
        contract,
        loading: loadingContract,
        error: contractError
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractContext;
