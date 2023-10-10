import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import RangeSelector from "../components/RangeSelector";

import { Dayjs } from "dayjs";
import { fetchAirData } from "../services/fetchAirData";

import { createPlotData } from "../services/createPlotData";
import dayjs from "../services/dayjs";
import DataStats from "../components/DataStats";
import { AirQualityData } from "../models/AirQualityData";

function AirQuality() {
  const [data, setData] = useState<AirQualityData[]>([]);

  const [combinedChartData, setCombinedChartData] = useState<any>();
  const [individualChartData, setIndividualChartData] = useState<any[]>([]);

  const [fromDateTime, setFromDateTime] = useState<Dayjs>(
    dayjs().subtract(1, "day")
  );
  const [toDateTime, setToDateTime] = useState<Dayjs>(dayjs());

  useEffect(() => {
    const query = async () => {
      const data = await fetchAirData(fromDateTime, toDateTime);

      const { combined, individual } = createPlotData(data);

      setData(data);
      setCombinedChartData(combined);
      setIndividualChartData(individual);
    };

    query();
  }, [fromDateTime, toDateTime]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <h1 className="text-center text-3xl font-bold my-8">Air Quality Data</h1>

      <h2 className="text-center text-xl font-bold my-4">
        From {fromDateTime.format("DD/MM/YYYY")} to{" "}
        {toDateTime.format("DD/MM/YYYY")}
      </h2>

      <RangeSelector
        fromDate={fromDateTime}
        toDate={toDateTime}
        setFromDate={setFromDateTime}
        setToDate={setToDateTime}
      />

      {!combinedChartData && (
        <p className="text-center text-xl font-bold my-4">
          Loading data, please wait ...
        </p>
      )}

      {combinedChartData && (
        <div className="p-2">
          <DataStats data={data} />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 p-10 items-center">
            {individualChartData.map(({ data, title }, index) => (
              <div
                className="flex w-full h-full border rounded-lg border-stone-500 p-2"
                key={index}
              >
                <LineChart chartData={data} title={title} />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center w-full h-full border rounded-lg border-stone-500 p-2">
            <LineChart
              chartData={combinedChartData.data}
              title={combinedChartData.title}
            />
          </div>
        </div>
      )}
    </LocalizationProvider>
  );
}

export default AirQuality;
