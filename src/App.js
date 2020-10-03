import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Chart } from "./components/Chart/Chart";
import { CountrySelector } from "./components/CountrySelector/CountrySelector";
import { fetchData } from "./api/index";

import styles from "./App.module.css";

const App = () => {
  const [country, setCountry] = useState("Afghanistan");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchData(country);
      if (data) {
        setData(data);
      }
    };
    fetchAPI();
  }, [country]);

  return (
    <div className={styles.container}>
      <Header />
      <CountrySelector handleChange={setCountry} />
      <Cards total={data.total} />
      <Chart daily={data.daily} />
    </div>
  );
};
export default App;

// <h1>{country}</h1>
// <Cards country={country === "global" ? 0 : country} />
// <Chart country={country === "global" ? 0 : country} />
