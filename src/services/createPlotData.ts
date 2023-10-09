import { ChartArea } from "chart.js";
import { AirQualityData } from "../models/AirQualityData";
import { title } from "process";

export function createPlotData(data: AirQualityData[]) {
  const temperature = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: "Temperature",
        data: data.map((data) => data.temp),
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "°C",
        borderColor: "#ff5e00",
        backgroundColor: "#cf9032",
      },
    ],
  };

  const humidity = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: "Humidity",
        data: data.map((data) => data.humidity),
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "%",
        borderColor: "#00f2ff",
        backgroundColor: "#0682c9",
      },
    ],
  };

  const particulate_matter = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: "Particulate Matter",
        data: data.map((data) => data.particulate_matter),
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "µg/m³",
        borderColor: "#8a7f7f",
        backgroundColor: "#8a7f7f",
      },
    ],
  };

  const voc = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: "VOC",
        data: data.map((data) => data.voc),
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: " times",
        borderColor: "#34c906",
        backgroundColor: "#1e7504",
      },
    ],
  };

  const co = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: "CO",
        data: data.map((data) => data.carbon_monoxide),
        borderWidth: 1,
        cubicInterpolationMode: "monotone",
        unit: "ppm",
        borderColor: "#c499cf",
        backgroundColor: "#75557d",
      },
    ],
  };

  const quality_score = {
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: "Air Quality Score",
        data: data.map((data) => data.quality_score),
        borderWidth: 2,
        cubicInterpolationMode: "monotone",
        unit: " Pts",
        borderColor: "#36d40f",
        backgroundColor: "#16a40f",
      },
    ],
  };

  const combined = {
    labels: data.map((data) => data.date),
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
