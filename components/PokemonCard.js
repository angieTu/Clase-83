import React, { useContext } from "react";

import styles from "./styles.module.scss";

import VisibleContext from "../contexts/VisibleContext";

const PokemonCard = ({ num, name, img, type }) => {
  const { cantidad } = useContext(VisibleContext);

  const classNameCantidad = cantidad === 3 ? "pokemonCard3" : "pokemonCard4";

  return (
    <div className={`${styles.pokemonCard} ${styles[classNameCantidad]}`}>
      <p>{num}</p>
      <h3>{name}</h3>
      <img alt={""} src={img}></img>
      <p>{type}</p>
    </div>
  );
};

export default PokemonCard;
