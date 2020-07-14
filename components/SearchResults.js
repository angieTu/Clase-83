import React, { useContext } from "react";

import PokemonCard from "./PokemonCard";

import DataContext from "../contexts/DataContext";
import VisibleContext from "../contexts/VisibleContext";
import LanguageContext from "../contexts/LanguageContext";

import styles from "./styles.module.scss";

const SearchResults = () => {
  const { pokemons, statusType } = useContext(DataContext);
  const { ordenPokemons } = useContext(VisibleContext);
  const { language } = useContext(LanguageContext);

  const filterStatus = (pokemon) => {
    if (statusType.length === 0) {
      return pokemons;
    }
    for (let status of statusType) {
      if (!pokemon.type.includes(status)) {
        return false;
      } else {
        return pokemon.type.some((type) => (type = status));
      }

      // if (!pokemon.type.includes(status)) {
      //   return false;
      // }
      // if (statusType.every(pokemon.type)) {
      //   return true;
      // }
    }

    // for (let i = 0; i <= pokemons.length; i++) {
    //   if (pokemon.type.includes(statusType[i])) {
    //     return pokemon;
    //   } else {
    //     return pokemons;
    //   }
    // }
  };

  const ordenarPokemons = (a, b) => b[ordenPokemons] < a[ordenPokemons];

  const LENGUAJE = {
    ESPAÑOL: "Resultados",
    INGLÉS: "Results",
  };

  return (
    <div>
      <h1 className={styles.title}>{LENGUAJE[language]}</h1>
      <div className={styles.cards}>
        {[...pokemons]
          .filter(filterStatus)
          .sort(ordenarPokemons)
          .map((pokemon, index) => (
            <PokemonCard
              key={index}
              num={pokemon.num}
              name={pokemon.name}
              img={pokemon.img}
              type={pokemon.type}
            ></PokemonCard>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
