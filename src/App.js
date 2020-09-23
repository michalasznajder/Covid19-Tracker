import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Chart } from "./components/Chart/Chart";
import { CountrySelector } from "./components/CountrySelector/CountrySelector";
import { fetchData } from "./api/index";

import styles from "./App.module.css";

const App = () => {
  // const [data, setData] = useState({});
  const [country, setCountry] = useState("global");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setData(await fetchData(country));
      // console.log(await fetchData(country));
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
