export interface CovidTestingData {
  age: string;
  date: string;
  epiweek: number;
  geography: string;
  geography_code: string;
  geography_type: string;
  metric: string;
  metric_group: string;
  metric_value: number;
  month: number;
  sex: string;
  stratum: string;
  sub_theme: string;
  theme: string;
  topic: string;
  year: number;
}

export interface CovideTestingResponse {
  count: number;
  results: CovidTestingData[];
  next: string;
  previous: string;
}
