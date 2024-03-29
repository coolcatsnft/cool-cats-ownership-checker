import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useWeb3 from "./useWeb3";

export const networkName = (id) => {
  switch (String(id)) {
    case "1":
      return "Main";
    case "3":
      return "Ropsten";
    case "4":
      return "Rinkeby";
    case "5":
      return "Goerli";
    case "42":
      return "Kovan";
    case "137":
      return "Polygon";
    default:
      throw new Error("unsupported network");
  }
};

export const getApi = (id) => {
  const network = networkName(id);
  if (network === "Main") {
    return "api";
  }

  return ["api", network.toLowerCase()].join("-");
};

export function useFetchContract(contractAddress) {
  const { network, library } = useWeb3();
  const [abi, setAbi] = useLocalStorage(`${contractAddress}-abi`);
  const [contract, setContract] = useState();
  const [contractError, setContractError] = useState();

  useEffect(() => {
    const fetchAbi = () => {
      if (abi) {
        return Promise.resolve(abi);
      }

      return fetch(
        `//${getApi(
          network.id
        )}.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&format=raw`
      ).then((res) => {
        if (res.status !== 200) {
          throw new Error("Error connecting to etherscan");
        }
        return res.json().then((json) => {
          if (json.message === "NOTOK") {
            throw new Error(json.result || "Error parsing abi json");
          }

          return json;
        });
      });
    };
    
    if (library && !abi && !contractError) {
      fetchAbi()
        .then((json) => {
          setAbi(json);
        })
        .catch((err) => {
          setContractError(err.toString());
        });
    }
  }, [
    contractAddress,
    network,
    library,
    contract,
    contractError,
    abi,
    setAbi
  ]);

  useEffect(() => {
    if (library && !contract && abi) {
      setContract(new library.eth.Contract(abi, contractAddress));
    }
  }, [contractAddress, library, contract, abi]);

  useEffect(() => {
    if (!library && contract) {
      setContract(undefined);
    }
  }, [library, contract]);

  return { 
    loadingContract: !contractError && !abi, 
    contractError, 
    contract };
}

export default useFetchContract;
