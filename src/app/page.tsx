import Card from "./components/Card";
import { ChartType } from "./types/ChartTypes";

const cardsData = [
  { id: 1, chartType: ChartType.BAR },
  { id: 2, chartType: ChartType.AREA },
  // Add more card data as needed
];

export default function Home() {
  return (
    <main className="flex flex-wrap gap-4 p-24">
      {cardsData.map((card) => (
        <Card key={card.id} chartType={card.chartType} />
      ))}
    </main>
  );
}
