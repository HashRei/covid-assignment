"use client";

import React from "react";
import Image from "next/image";
import { MessageTwoTone } from "@ant-design/icons";
import Chart from "./Chart";
import { ChartType } from "../types/ChartTypes";

interface CardProps {
  chartType: ChartType;
}

const Card: React.FC<CardProps> = ({ chartType }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Chart Title</h2>
      </div>
      <div className="mb-4">
        <Chart type={chartType} />
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
