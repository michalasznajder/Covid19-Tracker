import axios from "axios";

export const fetchCountries = async () => {
  const url = "https://api.covid19api.com/summary";
  try {
    const {
      data: { Countries },
    } = await axios.get(url);
    return Countries;
  } catch (error) {}
};

export const fetchData = async (country) => {
  if (country === "global") {
    const {
      data: {
        TotalConfirmed: confirmed,
        TotalRecovered: recovered,
        TotalDeaths: deaths,
      },
    } = await axios.get("https://api.covid19api.com/world/total");

    const daily = (
      await axios.get("https://covid19.mathdro.id/api/daily")
    ).data.map((daily) => {
      return {
        confirmed: daily.confirmed.total,
        deaths: daily.deaths.total,
        date: new Date(daily.reportDate).toDateString(),
      };
    });

    const fullData = { total: { confirmed, recovered, deaths }, daily };
    return fullData;
  } else {
    const daily = (
      await axios.get(`https://api.covid19api.com/dayone/country/${country}`)
    ).data
      .filter((daily) => {
        return daily.Province === "";
      })
      .map((daily) => {
        return {
          confirmed: daily.Confirmed,
          deaths: daily.Deaths,
          recovered: daily.Recovered,
          date: new Date(daily.Date).toDateString(),
        };
      });
    const { confirmed, recovered, deaths } = daily.length
      ? daily[daily.length - 1]
      : {};

    const fullData = { total: { confirmed, recovered, deaths }, daily };

    return fullData;
  }
};
