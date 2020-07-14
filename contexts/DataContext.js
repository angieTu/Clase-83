import React, { createContext, useState } from "react";
import pokemonsData from "../data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(pokemonsData);
  const [statusType, setStatusType] = useState([]);
  const [filters, setFilters] = useState([]);

  const getFilters = () => {
    const arrayFilters = pokemons.map((pokemon) => pokemon.type);
    const newArrayFilters = [];
    for (let i = 0; i < arrayFilters.length; i++) {
      for (let j = 0; j < arrayFilters[i].length; j++) {
        newArrayFilters.push(arrayFilters[i][j]);
      }
    }
    const filterExist = newArrayFilters.filter(
      (value, actual, arr) => arr.indexOf(value) === actual
    );
    setFilters(filterExist);
  };

  window.onload = () => getFilters();

  return (
    <DataContext.Provider
      value={{
        pokemons,
        setStatusType,
        statusType,
        filters,
        setFilters,
        getFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
