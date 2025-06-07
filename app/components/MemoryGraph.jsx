import Chart from 'chart.js/auto';
import { ReactChart } from 'chartjs-react';
import React from "react";



export default function MemoryGraph({timestamps, values}) {
    const labels = timestamps;
    const data = {
            labels: labels,
            datasets: [{
                label: 'Memory Usage',
                data: values,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
        }]
    };

    const options = {
        layout: {
            padding: 0
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: values[0] == 0 ? true : false
          },
        },
      };


  return (
    <div className = "memoryGraph">
        <ReactChart type={"line"} data={data} options={options} />
    </div>
  );
}


