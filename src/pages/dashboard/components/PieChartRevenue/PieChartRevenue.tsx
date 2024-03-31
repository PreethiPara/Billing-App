import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Pie } from "react-chartjs-2";
import { Box, Paper } from "@mui/material";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 30
    }]
  };
  const options = {
    plugins: {
    legend:{
        position:"right" as "right",
    },
      title: {
        display: true,
        text: 'Transactions by Categories',
        font:{
            size:20
        }
      },
      
    }
  };
const PieChart = () => {
return (
  
    <Paper className="p-4" style={{ width: "600px", height: "350px",display:"flex", justifyContent:"center",alignItems:"center" }}>
        <Pie  style={{width:"600px",height:"300px"}}className="m-3" data={data} options={options}/>
    </Paper>
   
  );
};
export default PieChart;