import React from 'react'
import {Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import * as dashboardmain from "./dashboardmain"
import {CategoryScale} from 'chart.js'; 
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(()=>import('react-apexcharts'), { ssr: false })
Chart.register(CategoryScale);
const ProjectBudget = () => {
  return (
    <div>
             <ReactApexChart
                                options={dashboardmain.linechartoptions.options}
                                series={dashboardmain.linechartoptions.series}
                                type="line"
                                height={320}
                              />

    </div>
  )
}

export default ProjectBudget