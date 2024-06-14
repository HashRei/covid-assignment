import React from "react";
import Card from "./components/Card";
import Panel from "./components/Panel";
import { ChartType } from "./types/ChartTypes";

const cardsData = [
  { id: 1, chartType: ChartType.BAR },
  { id: 2, chartType: ChartType.AREA },
  // Add more card data as needed
];

const Home: React.FC = () => {
  return (
    <main className="flex flex-col gap-4 p-4">
      <Panel />
      <div className="flex flex-wrap gap-4 justify-between">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="flex-1 min-w-[calc(50%-1rem)] max-w-[calc(50%-1rem)]"
          >
            <Card chartType={card.chartType} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
