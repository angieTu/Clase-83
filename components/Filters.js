import React, { useContext } from "react";

import Filter from "./Filter";

import DataContext from "../contexts/DataContext";
import LanguageContext from "../contexts/LanguageContext";

import styles from "./styles.module.scss";

const Filters = () => {
  const { filters } = useContext(DataContext);
  const { language } = useContext(LanguageContext);

  // const filters = pokemons.map((pokemon) => pokemon.type);
  // const setFilters = [];
  // for (let i = 0; i < filters.length; i++) {
  //   for (let j = 0; j < filters[i].length; j++) {
  //     setFilters.push(filters[i][j]);
  //   }
  // }

  // const filterExist = setFilters.filter(
  //   (value, actual, arr) => arr.indexOf(value) === actual
  // );

  const LENGUAJE = {
    ESPAÑOL: "Filtros",
    INGLÉS: "Filters",
  };

  return (
    <div className={styles.filters}>
      <h1 className={styles.title}>{LENGUAJE[language]}</h1>
      {filters.map((filter, index) => (
        <Filter key={index} value={filter}>
          {filter}
        </Filter>
      ))}
    </div>
  );
};

export default Filters;
