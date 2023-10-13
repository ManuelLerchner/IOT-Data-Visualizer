import { Dayjs } from "dayjs";
import { AirQualityData } from "../models/AirQualityData";

export async function fetchAirData(
  fromDate: Dayjs,
  toDate: Dayjs
): Promise<AirQualityData[]> {
  const params = new URLSearchParams({
    from: fromDate
      .set("hour", 0)
      .set("minute", 0)
      .set("second", 0)
      .format("YYYY-MM-DDTHH:mm:ss.sss"),
    to: toDate
      .set("hour", 23)
      .set("minute", 59)
      .set("second", 59)
      .format("YYYY-MM-DDTHH:mm:ss.sss"),
  });

  return fetch(`${process.env.REACT_APP_API_URL}?${params.toString()}`)
    .then((response) => response.json())
    .then((data: AirQualityData[]) => {
      return data.map((airQualityData) => {
        return {
          ...airQualityData,
          date: new Date(airQualityData.date),
        };
      });
    });
}
