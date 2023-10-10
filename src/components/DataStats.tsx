import React from "react";
import { AirQualityData } from "../models/AirQualityData";
import RowTable from "./RowTable";
import {
  convert2csv,
  convert2json,
  downloadFile,
} from "../services/convert2csv";

export default function DataStats({ data }: { data: AirQualityData[] }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <table className="table-auto shadow-lg table-r">
        <thead className="bg-gray-100">
          <tr>
            <th className="border text-sm">Stat</th>
            <th className="border text-sm">Value</th>
          </tr>
        </thead>
        <RowTable title="Data Samples" value={data.length} unit="samples" />
        <RowTable
          title="Time Span"
          value={
            data.length > 2
              ? ((data[data.length - 1].date as any) - (data[0].date as any)) /
                86400000
              : 0
          }
          unit="days"
        />

        <RowTable
          title="AVG PM"
          value={
            data.reduce((acc, curr) => acc + curr.particulate_matter, 0) /
            data.length
          }
          unit="µg/m3"
        />

        <RowTable
          title="AVG Temperature"
          value={data.reduce((acc, curr) => acc + curr.temp, 0) / data.length}
          unit="°C"
        />

        <RowTable
          title="AVG Humidity"
          value={
            data.reduce((acc, curr) => acc + curr.humidity, 0) / data.length
          }
          unit="%"
        />

        <RowTable
          title="AVG VOC"
          value={data.reduce((acc, curr) => acc + curr.voc, 0) / data.length}
          unit="times"
        />

        <RowTable
          title="AVG Quality Score"
          value={
            data.reduce((acc, curr) => acc + curr.quality_score, 0) /
            data.length
          }
          unit="points"
        />
      </table>

      <div className="flex flex-row gap-4 items-center">
        <button
          className="btn btn-sm btn-neutral rounded-2xl text-white p-2 font-semibold shadow-md"
          onClick={() => {
            const csv_string = convert2csv(data);
            downloadFile(csv_string, "air_quality_data.csv", "text/csv");
          }}
        >
          Export CSV
        </button>

        <button
          className="btn btn-sm btn-neutral rounded-2xl text-white p-2 font-semibold shadow-md"
          onClick={() => {
            const json_string = convert2json(data);
            downloadFile(json_string, "air_quality_data.json", "text/json");
          }}
        >
          Export JSON
        </button>
      </div>
    </div>
  );
}
