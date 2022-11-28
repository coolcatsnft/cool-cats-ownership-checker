import useWeb3 from "../hooks/useWeb3";
import ContractForm from "./ContractForm";
import Heading from "./Heading";
import Results from "./Results";
import Web3Button from "./Web3Button";

function App() {
  const { address } = useWeb3();

  return (
    <main>
      <Heading tag="h1">Ownership Checker</Heading>
      <Web3Button />

      { address &&  <ContractForm /> }
      { address &&  <Results /> }
    </main>
  );
}

export default App;
