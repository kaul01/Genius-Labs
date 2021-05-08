import React from 'react'
import ReactApexChart from 'react-apexcharts'

function Chart4() {

    const series= [33,33,34],
            options= {
              chart: {
                type: 'donut',
              },
              labels: ['HTML', 'CSS', 'Angular'],
              title: {
                text: 'Technologies = 9.3M',
                align: 'left'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },

                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

    return (
        <div>
            <ReactApexChart options={options} series={series} type="donut" height={350}/>
        </div>
    )
}

export default Chart4
