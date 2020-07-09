import React, { createContext, useState } from "react";

const VisualizacionContext = createContext();

const VisualizacionProvider = ({ children }) => {
  const [ordenPokemons, setOrdenPokemons] = useState("num");
  const [cantidad, setCantidad] = useState(3);

  return (
    <VisualizacionContext.Provider
      value={{ ordenPokemons, setOrdenPokemons, setCantidad, cantidad }}
    >
      {children}
    </VisualizacionContext.Provider>
  );
};

export default VisualizacionContext;
export { VisualizacionProvider };
