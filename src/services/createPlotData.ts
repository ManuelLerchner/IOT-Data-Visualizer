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
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "°C",
        borderColor: "#ff5e00",
        backgroundColor: "#cf9032",
        pointRadius: 2,
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
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "%",
        borderColor: "#00f2ff",
        backgroundColor: "#0682c9",
        pointRadius: 2,
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
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "µg/m³",
        borderColor: "#8a7f7f",
        backgroundColor: "#8a7f7f",
        pointRadius: 2,
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
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: " times",
        borderColor: "#34c906",
        backgroundColor: "#1e7504",
        pointRadius: 2,
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
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "ppm",
        borderColor: "#c499cf",
        backgroundColor: "#75557d",
        pointRadius: 2,
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
        borderWidth: 2,
        cubicInterpolationMode: "monotone",
        unit: " Pts",
        borderColor: "#36d40f",
        backgroundColor: "#16a40f",
        pointRadius: 2,
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
