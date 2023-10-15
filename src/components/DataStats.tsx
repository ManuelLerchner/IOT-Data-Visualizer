import dayjs from "dayjs";
import { AirQualityData } from "../models/AirQualityData";
import {
  convert2csv,
  convert2json,
  downloadFile,
} from "../services/convert2csv";
import RowTable from "./RowTable";

export default function DataStats({ data }: { data: AirQualityData[] }) {
  return (
    <div className="flex flex-col gap-4 items-center my-4">
      <table className="table-auto shadow-lg table-zebra overflow-x-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="border">Stat</th>
            <th className="border">Value</th>
          </tr>
        </thead>
        <tbody>
          <RowTable title="#Samples" value={data.length} unit="samples" />

          <RowTable
            title="From"
            value={
              data.length > 0 ? dayjs(data[0].date).format("DD/MM/YYYY") : "-"
            }
            unit=""
          />

          <RowTable
            title="To"
            value={
              data.length > 0
                ? dayjs(data[data.length - 1].date).format("DD/MM/YYYY")
                : "-"
            }
            unit=""
          />

          <RowTable
            title="Data Duration"
            value={
              data.length > 2
                ? ((data[data.length - 1].date as any) -
                    (data[0].date as any)) /
                  86400000
                : "-"
            }
            unit="days"
          />
        </tbody>
      </table>

      <div className="flex flex-row gap-4 items-center overflow-x-auto">
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
