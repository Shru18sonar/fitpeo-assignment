import {useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


const data = {
  labels:['watch','headset','camera'],
  
  datasets: [
      {
        label: '',
        data: [20,50,30],
        
        backgroundColor: [
            '#ec4899',
            '#7e22ce',
          '#eef2ff',
        ],
        borderWidth: 1,
      }
  ]
}

export const options = {
  responsive: true,
  cutout: '65%',
  plugins: {
    legend: {
      
      display:false
    },
    title: {
      display: false, 
      text: '',
    },
    label:{
      
    },
    datasets:{
      display:false
    },
    doughnutlabel: {
        labels: [
          {
            text: 65,
            font: {
              size: "40"
            },
            color: "black"
          },
          {
            text: "Due ≤ 60 Days",
            font: {
              size: "25"
            },
            color: "grey"
          }
        ]
    },
  scales: {
    x: {
      border: {
        display: false
      },
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
      }
    },
    y: {
      border: {
        display: false
      },
      grid: {
       display:false
      },
    }
  },
  elements:{
    bar:{
      border:false,
      borderSkipped:'bottom'
    }
  }
}
};

const Piechart = () => {
  const [chartData, setChartData]=useState(data);
  return (
    <Doughnut options={options} data={chartData}/>
  )
}

export default Piechart;