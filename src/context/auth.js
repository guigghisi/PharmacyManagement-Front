import { useState, createContext, useContext } from "react";

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [useAuth, setAuth] = useState(false);

  return (
    <UsuarioContext.Provider value={{ useAuth, setAuth }}>
      {children}
    </UsuarioContext.Provider>
  );
};

const useAutenticado = () => useContext(UsuarioContext);

export { UsuarioProvider, useAutenticado, UsuarioContext };
