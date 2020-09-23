import React, { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import styles from "./Cards.module.css";

export const Cards = ({ total }) => {
  if (!total) {
    return (
      <div className={styles.container}>
        <h2>Loading...</h2>
      </div>
    );
  } else {
    // console.log(total);
  }

  return (
    <div className={styles.container}>
      <Card
        border={{ borderBottom: "2px solid #5EBF56" }}
        cases={total.confirmed}
        name="Confirmed"
      />
      <Card
        border={{ borderBottom: "2px solid #2674AD" }}
        cases={total.recovered}
        name="Recovered"
      />
      <Card
        border={{ borderBottom: "2px solid #E25B5B" }}
        cases={total.deaths}
        name="Deaths"
      />
    </div>
  );
};
