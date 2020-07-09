import React, { useContext } from "react";

import VisibleContext from "../contexts/VisibleContext";
import LanguageContext from "../contexts/LanguageContext";

import styles from "./styles.module.scss";

const ResultOptions = () => {
  const { setOrdenPokemons, setCantidad } = useContext(VisibleContext);
  const { language } = useContext(LanguageContext);

  const handleOrdenNameClick = () => setOrdenPokemons("name");
  const handleOrdenNumClick = () => setOrdenPokemons("num");
  const handleCantidadTresClick = () => setCantidad(3);
  const handleCantidadCuatroClick = () => setCantidad(4);

  const LENGUAJE = {
    ESPAÑOL: "Opciones",
    INGLÉS: "Options",
  };

  return (
    <div>
      <h1 className={styles.title}>{LENGUAJE[language]}</h1>
      <button className={styles.button} onClick={handleOrdenNumClick}>
        Ordenar por número
      </button>
      <button className={styles.button} onClick={handleOrdenNameClick}>
        Ordenar por nombre
      </button>
      <button className={styles.button} onClick={handleCantidadTresClick}>
        Mostrar 3
      </button>
      <button className={styles.button} onClick={handleCantidadCuatroClick}>
        Mostrar 4
      </button>
    </div>
  );
};

export default ResultOptions;
