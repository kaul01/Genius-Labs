import React from 'react'
import ReactApexChart from 'react-apexcharts'

function Chart2() {

    const series = [{
        name: 'Sales',
        data: [35, 41, 36, 26, 45, 48]
      }],


      options = {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        title: {
          text: 'Author Sales = $64M',
          align: 'left'
        },
        xaxis: {
          categories: [' ', ' ', ' ', ' ', ' ', ' '],
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      }

    return (
        <div>
             <ReactApexChart options={options} series={series} type="bar" height={350} />
        </div>
    )
}

export default Chart2
