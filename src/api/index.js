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
  let fullData = {};
  try {
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
    fullData = { total: { confirmed, recovered, deaths }, daily };
  } catch (error) {
    return;
  }
  return fullData;
};
