import { AirQualityData } from "../models/AirQualityData";

export function convert2csv(data: AirQualityData[]) {
  let csv =
    [
      "date",
      "particulate_matter",
      "carbon_monoxide",
      "humidity",
      "quality_score",
      "temp",
      "voc",
    ].join(";") + "\n";

  data.forEach((row) => {
    csv += (
      [
        row.date.toISOString(),
        row.particulate_matter,
        row.carbon_monoxide,
        row.humidity,
        row.quality_score,
        row.temp,
        row.voc,
      ].join(";") + "\n"
    ).replace(/\./g, ",");
  });

  return csv;
}

export function convert2json(data: AirQualityData[]) {
  const filteredData = data.map((row) => {
    return {
      date: row.date.toISOString(),
      particulate_matter: row.particulate_matter,
      carbon_monoxide: row.carbon_monoxide,
      humidity: row.humidity,
      quality_score: row.quality_score,
      temp: row.temp,
      voc: row.voc,
    };
  });

  return JSON.stringify(filteredData, null, 2);
}

export function downloadFile(data: string, filename: string, type: string) {
  const blob = new Blob([data], { type });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("hidden", "");
  a.setAttribute("href", url);
  a.setAttribute("download", filename);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
