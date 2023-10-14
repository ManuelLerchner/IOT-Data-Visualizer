import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import RangeSelector from "../components/RangeSelector";

import { Dayjs } from "dayjs";
import { fetchAirData } from "../services/fetchAirData";

import ChartBox from "../components/ChartBox";
import DataStats from "../components/DataStats";
import { AirQualityData } from "../models/AirQualityData";
import { createPlotData } from "../services/createPlotData";
import dayjs from "../services/dayjs";

function AirQuality() {
  const [data, setData] = useState<AirQualityData[] | undefined>(undefined);

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
      <h1 className="text-center text-3xl font-bold my-8">Air Quality</h1>

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

      {data !== undefined && (
        <>
          <DataStats data={data} />
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 px-0 lg:px-10 items-center">
              {individualChartData.map(({ data, title }, index) => (
                <ChartBox
                  data={data}
                  title={title}
                  key={index}
                  fromDateTime={fromDateTime}
                  toDateTime={toDateTime}
                />
              ))}
            </div>

            <div className="h-screen w-full py-6">
              <ChartBox
                data={combinedChartData.data}
                title={combinedChartData.title}
                fromDateTime={fromDateTime}
                toDateTime={toDateTime}
              />
            </div>
          </div>
        </>
      )}
    </LocalizationProvider>
  );
}

export default AirQuality;
