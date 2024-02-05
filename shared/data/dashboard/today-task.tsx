import React from 'react'
import ReactApexChart from 'react-apexcharts';
import * as dashboardmain from "./dashboardmain"

const TodayTask = () => {
  
  return (
 
        <ReactApexChart options={dashboardmain.Radialbar.options} series={dashboardmain.Radialbar.series} colors={dashboardmain.Radialbar.colors} type="radialBar" height={100} />
   
  )
}

export default TodayTask