import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/corona-icon.svg";

export const Header = () => (
  <div className={styles.container}>
    <img src={logo} />
    <h1>Covid Tracker</h1>
  </div>
);
