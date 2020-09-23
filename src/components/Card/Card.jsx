import React from "react";
import styles from "./Card.module.css";

export const Card = ({ name, cases, border }) => {
  if (!cases) {
    return (
      <div className={styles.container} style={border}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container} style={border}>
      <h2>{name}</h2>
      <h3>{cases}</h3>
    </div>
  );
};
