import React from 'react'
import ReactApexChart from 'react-apexcharts';

function Chart3() {

    const series = [{
        name: "Orders",
        data: [51, 55, 57, 56, 61, 58, 63, 60, 66]
      }],
      options = {
        chart: {
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        
        title: {
          text: 'Total Orders = 17M',
          align: 'left'
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          opposite: true
        },
        legend: {
          horizontalAlign: 'left'
        }
      }

    return (
        <div>
            <ReactApexChart options={options} series={series} type="area" height={350} />
        </div>
    )
}

export default Chart3
