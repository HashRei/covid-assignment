"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chart as G2Chart } from "@antv/g2";
import { ChartType } from "../types/ChartTypes";
import { useCovidTestingDataQuery } from "../api/useCovidTestingDataQuery";
import { CovidTestingData } from "../types/DataTypes";

interface ChartProps {
  type: ChartType;
}

const Chart: React.FC<ChartProps> = ({ type }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<G2Chart | null>(null);

  const { data } = useCovidTestingDataQuery();

  const [chartData, setChartData] = useState<CovidTestingData[]>([]);

  useEffect(() => {
    if (data) {
      setChartData(data.results);
    }
  }, [data]);

  useEffect(() => {
    if (chartRef.current) {
      // Cleanup any existing chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chart = new G2Chart({
        container: chartRef.current,
        autoFit: true,
        height: 200,
      });

      const orderedChartData =
        (data &&
          data.results &&
          data?.results?.map((data) => ({
            date: data.date,
            metric_value: data.metric_value,
          }))) ||
        [];

      chart.data(orderedChartData);

      if (type === ChartType.BAR) {
        chart
          .interval()
          .encode("x", "date")
          .encode("y", "metric_value")
          .encode("color", "date");
      } else if (type === ChartType.AREA) {
        chart
          .area()
          .encode("x", (d: any) => d.date)
          .encode("y", "metric_value")
          .encode("shape", "area") // 'area', 'smooth', 'hvh', 'vh', 'hv'
          .style("opacity", 0.2)
          .axis("y", { labelFormatter: "~s", title: false });
      }

      chart.render();

      // Save the chart instance for cleanup
      chartInstance.current = chart;
    }

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [type, chartData, data]);

  return <div ref={chartRef} className="w-full h-48 bg-gray-100"></div>;
};

export default Chart;
