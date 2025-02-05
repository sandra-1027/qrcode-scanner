


// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


//   export default function Chart({ data }: { data: any }) {
//   console.log('Data:', data);


//   const incomeData = data.income;
//   const expenseData = data.expense;
//   const profitData = data.profit;
//   const months = data.months;



//   const chartData = {
 
//     labels:months,
//     datasets: [
//       {
//         label: "Income",
//         data: incomeData, 
//         backgroundColor: "#007bff",
//       },
//       {
//         label: "Expense",
//         data: expenseData,  
//         backgroundColor: "#dc3545",
//       },
//       {
//         label: "Profit",
//         data: profitData,
//         backgroundColor: "#ffc107",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { 
//         position: "top" ,
//         align: "start",
//         labels: {
//           font: {
//             size: 14, 
//           },
//           padding: 20, 
//         },
//       },
   

//     },
//     scales: {
//       x: { stacked: false },
//       y: { 
//         stacked: false,
//         ticks: {
//           stepSize: 50,
//           min: 50,
//           max: 200,
//         },
//       },
//     },
//   };

//   return (
//     <div className="card-body">
   

//       <Bar data={chartData} options={options} height={100}/>

//     </div>
//   );
// };


import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Chart({ data }: { data: any }) {
  console.log("Data:", data);

  const incomeData = data.income;
  const expenseData = data.expense;
  const profitData = data.profit;
  const months = data.months;

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "#007bff",
      },
      {
        label: "Expense",
        data: expenseData,
        backgroundColor: "#dc3545",
      },
      {
        label: "Profit",
        data: profitData,
        backgroundColor: "#ffc107",
      },
    ],
  };

  // Explicitly define the type for options
  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
    },
    scales: {
      x: { stacked: false },
      y: {
        stacked: false,
        suggestedMin: 50, // ✅ Move it outside `ticks`
        suggestedMax: 200, // ✅ Move it outside `ticks`
        ticks: {
          stepSize: 50, // Keep stepSize inside `ticks`
        },
      },
    },
  };
  

  return (
    <div className="card-body">
      <Bar data={chartData} options={options} height={100} />
    </div>
  );
}












