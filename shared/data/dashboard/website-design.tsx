import React from 'react'
import { Bar } from 'react-chartjs-2';
import * as dashboardmain from "./dashboardmain"
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(()=>import('react-apexcharts'), { ssr: false })
Chart.register(CategoryScale);
const WebsiteDesign = () => {
  return (
    <div>
        <ReactApexChart
                                options={dashboardmain.Webdesgining.options}
                                series={dashboardmain.Webdesgining.series}
                                type="bar"
                                height={175}
                              />
    </div>
  )
}

export default WebsiteDesign