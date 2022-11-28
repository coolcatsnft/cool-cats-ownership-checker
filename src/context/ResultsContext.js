import { createContext, useState } from "react";

export const ResultsContext = createContext();
export const SetResultsContext = createContext();

export const ResultsProvider = ({ children }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  return (
    <ResultsContext.Provider
      value={{
        loading,
        results,
        error
      }}
    >
      <SetResultsContext.Provider
        value={{
          setResults,
          setLoading,
          setError
        }}
      >
        {children}
      </SetResultsContext.Provider>
    </ResultsContext.Provider>
  );
};

export default ResultsContext;
