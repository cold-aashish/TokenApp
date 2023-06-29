import { createContext, useState } from "react";
import { tokens } from "../db/tokens";

export const TokenContext = createContext(null);

const TokenProvider = ({ children }) => {
  const [data, setData] = useState(tokens);

  return (
    <TokenContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
