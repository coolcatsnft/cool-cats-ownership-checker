import { useEffect } from "react";

export const useDebounce = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
  }, [...deps || [], delay]);
};

export default useDebounce;