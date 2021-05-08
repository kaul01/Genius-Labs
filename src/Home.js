import React from 'react'
import "./Home.css";
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import Chart5 from './Chart5';
import Chart6 from './Chart6';
import Chart7 from './Chart7';
import Chart8 from './Chart8';

// 1-3-5
// 2-6-7
// 8-4

function Home() {
    return (
        <div className="container">
            
                <div className="chart_1">
                    <Chart1 />
                </div>
                <div className="chart_3">
                    <Chart3 />
                </div>
                <div className="chart_5">
                    <Chart5 />
                </div>

                <div className="chart_2">
                     <Chart2 />
                </div>
                <div className="chart_6">
                    <Chart6 />
                </div>
                
                <div className="chart_7">
                    <Chart7 />
                </div>

                <div className="chart_8">
                    <Chart8 />
                </div>
                <div className="chart_4">
                    <Chart4 />
                </div>

        </div>
    )
}

export default Home
