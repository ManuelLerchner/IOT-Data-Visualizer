export interface AirQualityData {
  _id: string;
  status: string;
  temp: number;
  humidity: number;
  voc: number;
  particulate_matter: number;
  carbon_monoxide: number;
  quality_score: number;
  date: Date;
}
