import { memo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data?: number[];
  labels?: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data = [35, 10, 11, 27, 17, 5],
  labels = [
    "Cafe & Restaurants",
    "Entertainments",
    "Investments",
    "Food & Groceries",
    "Health & Beauty",
    "Travelling",
  ],
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data,
        backgroundColor: [
          "#B379FF",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#9D64E3",
          "#E5566D",
          "#2E8CC7",
          "#E5B93D",
          "#3A9A9A",
          "#8653E3",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left" as const,
      },
      title: {
        display: true,
        text: "Expense Distribution",
      },
    },
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default memo(DoughnutChart);
