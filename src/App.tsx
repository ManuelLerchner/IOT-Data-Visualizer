import React, { createContext, useEffect, useRef, useState } from "react";
import LineChart from "./components/LineChart";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RangeSelector from "./components/RangeSelector";

import { fetchAirData } from "./services/fetchAirData";
import { Dayjs } from "dayjs";

import dayjs from "./services/dayjs";
import { createPlotData } from "./services/createPlotData";
import { Chart } from "chart.js";

function App() {
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

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 p-10">
        {individualChartData.map(({ data, title }, index) => (
          <div className="w-full h-full min-h-[400px]" key={index}>
            <LineChart chartData={data} title={title} />
          </div>
        ))}
      </div>

      {combinedChartData && (
        <div className="flex flex-col items-center w-full h-full min-h-[400px]">
          <LineChart
            chartData={combinedChartData.data}
            title={combinedChartData.title}
          />
        </div>
      )}
    </LocalizationProvider>
  );
}

export default App;
