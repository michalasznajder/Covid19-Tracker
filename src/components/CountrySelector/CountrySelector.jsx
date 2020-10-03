import React, { useState, useEffect } from "react";
import styles from "./CountrySelector.module.css";
import { fetchCountries } from "../../api/index";

export const CountrySelector = ({ handleChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <div className={styles.container}>
      <select
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        name="countries"
        id="countries"
      >
        {countries
          ? countries.map((country, i) => (
              <option key={i} value={country.slug}>
                {country.Country}
              </option>
            ))
          : "Loading"}
      </select>
    </div>
  );
};
