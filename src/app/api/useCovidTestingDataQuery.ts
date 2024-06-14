import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CovideTestingResponse } from "../types/DataTypes";

const fetchCovidTestingData = async (): Promise<CovideTestingResponse> => {
  try {
    const response = await fetch(
      "https://api.ukhsa-dashboard.data.gov.uk/themes/infectious_disease/sub_themes/respiratory/topics/COVID-19/geography_types/Nation/geographies/England/metrics/COVID-19_testing_PCRcountByDay"
    );
    if (!response.ok) {
      throw new Error("Fetching COVID data failed");
    }
    const data: CovideTestingResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching COVID data");
  }
};

export function useCovidTestingDataQuery(): UseQueryResult<
  CovideTestingResponse,
  Error
> {
  return useQuery<CovideTestingResponse, Error>({
    queryKey: ["covidTestingData"],
    queryFn: fetchCovidTestingData,
  });
}
