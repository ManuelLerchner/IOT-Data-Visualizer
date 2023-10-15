import { AirQualityData } from "../models/AirQualityData";

export function createPlotData(data: AirQualityData[]) {
  const temperature = {
    datasets: [
      {
        label: "Temperature",
        data: data.map((data) => {
          return {
            x: data.date.getTime(),
            y: data.temp,
          };
        }),
        unit: "°C",
        borderColor: "#ff5e00",
        backgroundColor: "#cf9032",
      },
    ],
  };

  const humidity = {
    datasets: [
      {
        label: "Humidity",
        data: data.map((data) => {
          return {
            x: data.date.getTime(),
            y: data.humidity,
          };
        }),
        unit: "%",
        borderColor: "#00f2ff",
        backgroundColor: "#0682c9",
      },
    ],
  };

  const particulate_matter = {
    datasets: [
      {
        label: "Particulate Matter",
        data: data.map((data) => {
          return {
            x: data.date.getTime(),
            y: data.particulate_matter,
          };
        }),
        unit: "µg/m³",
        borderColor: "#8a6f2f",
        backgroundColor: "#8a4f1f",
      },
    ],
  };

  const voc = {
    datasets: [
      {
        label: "VOC",
        data: data.map((data) => {
          return {
            x: data.date.getTime(),
            y: data.voc,
          };
        }),
        unit: " times",
        borderColor: "#34c906",
        backgroundColor: "#1e7504",
      },
    ],
  };

  const co = {
    datasets: [
      {
        label: "CO",
        data: data.map((data) => {
          return {
            x: data.date.getTime(),
            y: data.carbon_monoxide,
          };
        }),
        unit: "ppm",
        borderColor: "#c499cf",
        backgroundColor: "#75557d",
      },
    ],
  };

  const quality_score = {
    datasets: [
      {
        label: "Air Quality Score",
        data: data.map((data) => {
          return {
            x: data.date.getTime(),
            y: data.quality_score,
          };
        }),
        unit: " Pts",
        borderColor: "#36d40f",
        backgroundColor: "#16a40f",
      },
    ],
  };

  const combined = {
    datasets: [
      temperature.datasets[0],
      humidity.datasets[0],
      voc.datasets[0],
      co.datasets[0],
      particulate_matter.datasets[0],
      quality_score.datasets[0],
    ],
  };

  return {
    combined: { data: combined, title: "Combined" },
    individual: [
      { data: temperature, title: "Temperature" },
      { data: humidity, title: "Humidity" },
      { data: voc, title: "VOC" },
      { data: co, title: "CO" },
      { data: particulate_matter, title: "Particulate Matter" },
      { data: quality_score, title: "Air Quality Score" },
    ],
  };
}
