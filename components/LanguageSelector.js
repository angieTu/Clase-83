import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

import styles from "./styles.module.scss";

const LanguageSelector = () => {
  const { setLanguage } = useContext(LanguageContext);

  const handleLanguageSpanishClick = () => setLanguage("ESPAÑOL");
  const handleLanguageEnglishClick = () => setLanguage("INGLÉS");

  return (
    <>
      <button className={styles.button} onClick={handleLanguageSpanishClick}>
        Español
      </button>
      <button className={styles.button} onClick={handleLanguageEnglishClick}>
        Inglés
      </button>
    </>
  );
};

export default LanguageSelector;
