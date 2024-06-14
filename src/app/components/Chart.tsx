// components/Chart.tsx
"use client";

import React, { useEffect, useRef } from "react";
import { Chart as G2Chart } from "@antv/g2";
import { ChartType } from "../types/ChartTypes";

interface ChartProps {
  type: ChartType;
}

const Chart: React.FC<ChartProps> = ({ type }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<G2Chart | null>(null);

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

      chart.data([
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 },
      ]);

      if (type === ChartType.BAR) {
        chart
          .interval()
          .encode("x", "genre")
          .encode("y", "sold")
          .encode("color", "genre");
      } else if (type === ChartType.AREA) {
        chart
          .area()
          .encode("x", (d: any) => d.genre)
          .encode("y", "sold")
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
  }, [type]);

  return <div ref={chartRef} className="w-full h-48 bg-gray-100"></div>;
};

export default Chart;
