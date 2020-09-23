import React from "react";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { TimeSelector } from "../TimeSelector/TimeSelector";

import styles from "./Selectors.module.css";

export const Selectors = () => {
  return (
    <div className="container">
      <CountrySelector />
      <TimeSelector />
    </div>
  );
};
