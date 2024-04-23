import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        height: 150,
        type: "radialBar"
      },
      
      series: [40],
      
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 3,
            size: "60%"
          },
         
          dataLabels: {
            showOn: "always",
            name: {
              show: false
            },
            value: {
              color: "#111",
              fontSize: "10px",
              show: true,
              offsetY: 0, 
              textAlign: 'center',
              textAnchor: 'middle'
            },
          },
          strokeWidth: 1
        }
      },
    
      stroke: {
        lineCap: "round",
      },
      labels: ["Progress"]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []); 

  return <div ref={chartRef} id="chart" height='80px' strokeWidth='1' />;
};

export default BarChart;
