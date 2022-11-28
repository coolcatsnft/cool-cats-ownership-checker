import { useContext } from "react";
import { ResultsContext, SetResultsContext } from "../context/ResultsContext";

export function useResults() {
  const context = useContext(ResultsContext);
  if (context === undefined) {
    throw new Error(
      "useResults must be used within a ResultsContext"
    );
  }

  return context;
}

export function useSetResults() {
  const context = useContext(SetResultsContext);
  if (context === undefined) {
    throw new Error(
      "useSetResults must be used within a SetResultsContext"
    );
  }

  return context;
}

export default useResults;
