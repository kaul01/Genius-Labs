import React from 'react'
import ReactApexChart from 'react-apexcharts'

function Chart5() {
    const series = [{
        name: 'Author',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Customer',
        data: [78, 90, 105, 100, 90, 107, 100, 115, 98]
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
        title: {
            text: 'Sales Statistics',
            align: 'left'
          },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug'],
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

export default Chart5
