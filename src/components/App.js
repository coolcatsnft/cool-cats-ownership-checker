import useWeb3 from "../hooks/useWeb3";
import ContractForm from "./ContractForm";
import Header from "./Header";
import Results from "./Results";
import Wrapper from "./Wrapper";

function App() {
  const { address } = useWeb3();

  return (
    <Wrapper>
      <Header />
      <main>
        { address &&  <ContractForm /> }
        { address &&  <Results /> }
      </main>
    </Wrapper>
  );
}

export default App;
