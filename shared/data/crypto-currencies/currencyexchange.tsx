interface LineChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      position: "top";
      display: boolean;
    };
    chart:
    {
      type:string,
    height:string,
  width:string}
    title: {
      display: boolean;
      text: string;
    };
  };
  scales: {
    x: {
      display: boolean;
      title: {
        display: boolean;
      };
    };
    y: {
      display: boolean;
      title: {
        display: boolean;
        text: string;
      };
    };
  };
}

export const Bitcoinexhange:any  = {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options:{

    chart: {
      height: 130,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        bottom: 10,
      },
    },
   
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
  
    colors: ["rgba(98, 89, 202,0.7)"],
  }
  };

  interface BitCoinExchange {
    labels: string[];
    type: "line";
    datasets: {
      data: number[];
      label: string;
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      pointBorderColor: string;
      pointBackgroundColor: string;
      fill: boolean;
      tension: number;

    }[];
  }
export const bitcoinexchange : BitCoinExchange= {
    labels: [
      "Date 1",
      "Date 2",
      "Date 3",
      "Date 4",
      "Date 5",
      "Date 6",
      "Date 7",
      "Date 8",
      "Date 9",
      "Date 10",
      "Date 11",
      "Date 12",
      "Date 13",
      "Date 14",
      "Date 15",
      "Date 16",
      "Date 17",
      "Date 18",
      "Date 19",
      "Date 20",
      "Date 21",
      "Date 22",
      "Date 23",
      "Date 24",
    ],
    type: "line",
    datasets: [
      {
        data: [
          45, 25, 32, 67, 49, 72, 52, 55, 46, 54, 32, 74, 88, 96, 36, 32, 48, 54,
          87, 88, 96, 53, 21, 24, 14, 58, 78, 55, 41, 21, 45, 54, 51, 52, 48,
        ],
        label: "Bitcoin Price",
        backgroundColor: "rgba(98, 89, 202, 0.2)",
        borderColor: "#6259ca",
        borderWidth: 2,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        fill: true,
        tension: 0.4,
      },
    ],
  };

export const Ethereumexchange:any = {
  series: [
    {
      name: "Value",
      data: [48, 35, 80, 62, 45, 53, 43, 65, 35, 56, 38, 54],
      
    },
  ],
  options:{

    chart: {
      height: 130,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      borderColor:'#6259ca',
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        bottom: 10,
      },
    },
   
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
  
    colors: ["rgba(98, 89, 202,0.7)"],
  }
  };


export const Rippleexchange:any = {
  series: [
    {
      name: "Value",
      data: [20, 50, 15, 35, 65, 43, 53, 45, 62, 22, 22, 55],
    },
  ],
  options:{

    chart: {
      height: 130,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        bottom: 10,
      },
    },
   
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
  
    colors: ["rgba(98, 89, 202,0.7)"],
  }
  };
export const rippleexchange : BitCoinExchange | any = {
    labels: [
      "Date 1",
      "Date 2",
      "Date 3",
      "Date 4",
      "Date 5",
      "Date 6",
      "Date 7",
      "Date 8",
      "Date 9",
      "Date 10",
      "Date 11",
      "Date 12",
      "Date 13",
      "Date 14",
      "Date 15",
      "Date 16",
      "Date 17",
      "Date 18",
      "Date 19",
      "Date 20",
      "Date 21",
      "Date 22",
      "Date 23",
      "Date 24",
    ],
  
    type: "line",
    datasets: [
      {
        data: [
          58, 78, 55, 41, 21, 45, 54, 51, 52, 48, 88, 96, 36, 32, 48, 24, 14, 45,
          25, 32, 67, 49, 54, 87, 88, 96, 53, 21, 72, 52, 55, 46, 54, 32, 74,
        ],
  
        label: "Ripple Price",
        backgroundColor: "rgba(98, 89, 202, 0.2)",
        borderColor: "#6259ca",
        borderWidth: 2,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        fill: true,
        tension: 0.4,
      },
    ],
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      responsive: true,
      tooltips: {
        mode: "index",
        titleFontSize: 12,
        titleFontColor: "#7886a0",
        bodyFontColor: "#7886a0",
        backgroundColor: "#fff",
        titleFontFamily: "Montserrat",
        bodyFontFamily: "Montserrat",
        cornerRadius: 3,
        intersect: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "transparent",
              zeroLineColor: "transparent",
            },
            ticks: {
              fontSize: 2,
              fontColor: "transparent",
            },
          },
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
      elements: {
        line: {
          borderWidth: 1,
        },
        point: {
          radius: 4,
          hitRadius: 10,
          hoverRadius: 4,
        },
      },
    },
  };

export const Dashexchange:any  = {
  series: [
    {
      name: "Value",
      data: [80, 38, 56, 22, 45, 43, 62, 45, 62, 35, 35, 25],
    },
  ],
  options:{

    chart: {
      height: 130,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        bottom: 10,
      },
    },
   
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
  
    colors: ["rgba(98, 89, 202,0.7)"],
  }
  };


export const Neoexchange:any  = {
  series: [
    {
      name: "Value",
      data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48],
    },
  ],
  options:{

    chart: {
      height: 130,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 1,
        color: "#fff",
        opacity: 0.05,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    fill: {
      gradient: {
        enabled: false,
      },
    },
    grid: {
      padding: {
        bottom: 10,
      },
    },
   
    yaxis: {
      min: 0,
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
    },
  
    colors: ["rgba(98, 89, 202,0.7)"],
  }
  };


  export const Litecoinexchange:any  = {
    series: [
      {
        name: "Value",
        data: [10, 56, 35, 35, 65, 32, 53, 45, 48, 35, 56, 20],
      },
    ],
    options:{
  
      chart: {
        height: 130,
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 1,
          color: "#fff",
          opacity: 0.05,
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
      fill: {
        gradient: {
          enabled: false,
        },
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
     
      yaxis: {
        min: 0,
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
      },
    
      colors: ["rgba(98, 89, 202,0.7)"],
    }
    };
  

