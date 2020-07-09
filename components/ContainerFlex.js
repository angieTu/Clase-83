import React from "react";
import styles from "./styles.module.scss";

const ContainerFlex = ({ children }) => {
  return <div className={styles.containerFlex}>{children}</div>;
};

export default ContainerFlex;
