import React, { useContext } from "react";
import pokemonData from "../contexts/DataContext";
import styles from "./styles.module.scss";

const Filter = ({ children, value }) => {
  const { setStatusType, statusType } = useContext(pokemonData);

  const handleChange = (event) => {
    return event.target.checked
      ? setStatusType([...statusType, event.target.value])
      : setStatusType(
          statusType.filter((status) => status !== event.target.value)
        );
  };

  return (
    <div className={styles.checkbox}>
      <input type="checkbox" onClick={handleChange} value={value}></input>
      <p>{children}</p>
    </div>
  );
};

export default Filter;
