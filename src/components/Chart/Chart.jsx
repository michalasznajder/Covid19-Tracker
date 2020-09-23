import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";
import { Line, defaults } from "react-chartjs-2";

export const Chart = ({ daily }) => {
  if (!daily) {
    return (
      <div className={styles.container}>
        <h2>Loading...</h2>;
      </div>
    );
  } else {
    console.log(daily);
  }
  defaults.global.defaultFontColor = "white";
  // defaults.global.defaultFontFamily = "sans serif";
  defaults.global.defaultFontSize = 10;
  defaults.global.legend.labels.usePointStyle = true;

  return (
    <div className={styles.container}>
      <Line
        data={{
          labels: daily.map((day) => day.date),
          datasets: [
            {
              data: daily.map((day) => day.confirmed),
              label: "confirmed",
              borderColor: "rgb(94, 191, 86)",
              backgroundColor: "rgba(94, 191, 86, 0.2)",
            },
            {
              data: daily.map((day) => day.deaths),
              label: "deaths",
              borderColor: "rgb(226, 91, 91)",
              backgroundColor: "rgba(226, 91, 91, 0.5)",
            },
            {
              data: daily.map((day) => day.recovered),
              label: "recovered",
              borderColor: "rgb(38, 116, 173)",
              backgroundColor: "rgba(38, 116, 173, 1)",
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          // aspectRatio: 3,
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  autoSkip: true,
                  autoSkipPadding: 5,
                  // maxRotation: 90,
                  // minRotation: 90,

                  // maxTicksLimit: 20,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5,
                },
              },
            ],
          },
          legend: {
            position: "bottom",
            align: "end",
          },
        }}
      />
    </div>
  );
};
