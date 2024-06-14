"use client";

import React, { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";
import Image from "next/image";
import { MessageTwoTone } from "@ant-design/icons";

const Card: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Cleanup any existing chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const chart = new Chart({
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

      chart
        .interval()
        .encode("x", "genre")
        .encode("y", "sold")
        .encode("color", "genre");

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
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Chart Title</h2>
      </div>
      <div className="mb-4">
        <div ref={chartRef} className="w-full h-48 bg-gray-100"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 relative">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
              priority
            />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <span className="mr-1">3</span>
          <MessageTwoTone style={{ fontSize: "24px", color: "#08c" }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
