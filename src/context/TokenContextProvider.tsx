"use client";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the shape of the token context
interface TokenContextType {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with a default value
export const tokenContext = createContext<TokenContextType | undefined>(
  undefined
);

interface TokenContextProviderProps {
  children: ReactNode;
}

const TokenContextProvider: React.FC<TokenContextProviderProps> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setToken(token);
    }

    if (!token) {
      router.replace("/");
    }
  }, [router]);

  return (
    <tokenContext.Provider value={{ token, setToken }}>
      {children}
    </tokenContext.Provider>
  );
};

export default TokenContextProvider;
