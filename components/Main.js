import React from "react";
import SearchResults from "./SearchResults";
import ResultOptions from "./ResultOptions";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <ResultOptions></ResultOptions>
      <SearchResults></SearchResults>
    </main>
  );
};

export default Main;
