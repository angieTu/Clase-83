import React, { createContext, useState } from "react";
import pokemonsData from "../data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(pokemonsData);
  const [statusType, setStatusType] = useState([]);

  return (
    <DataContext.Provider value={{ pokemons, setStatusType, statusType }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
