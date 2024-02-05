import { ApexOptions } from "apexcharts";
import { Component } from "react";
import ReactApexChart from 'react-apexcharts';

/* Chartjs (#btc-market) */
export const Marketcap1 : any= {
    responsive: true,
    maintainAspectRatio: false,
    resize: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  
  export const marketcap1 : any= {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    type: "line",
    datasets: [
      {
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12],
        label: "Ethereum Price",
        backgroundColor: "rgba(98, 89, 202, 0.2)",
        borderColor: "#6259ca",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        tension: 0.4,
        fill: true,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio:true,
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
  
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: "#77778e",
        },
      },
    },
  };
  /* Chartjs (#ethereum-market) */
  
  export const Marketcap2 : any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  export const marketcap2 : any= {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    type: "line",
    datasets: [
      {
        data: [34, 23, 54, 34, 56, 76, 34, 76, 34, 55, 23, 76],
        label: "Ethereum Price",
        backgroundColor: "rgba(98, 89, 202, 0.2)",
        borderColor: "#6259ca",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        tension: 0.4,
        fill: true,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
  
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: "#77778e",
        },
      },
    },
  };

  export const Marketcap3 : any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  export const marketcap3 : any= {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    type: "line",
    datasets: [
      {
        data: [7, 5, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 7, 10],
        label: "Ethereum Price",
        backgroundColor: "rgba(98, 89, 202, 0.2)",
        borderColor: "#6259ca",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        tension: 0.4,
        fill: true,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
  
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: "#77778e",
        },
      },
    },
  };
  /* Chartjs (#ltc-market) */
  export const Marketcap4 : any= {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
  
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: true,
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };
  export const marketcap4 : any= {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    type: "line",
    datasets: [
      {
        data: [15, 6, 16, 11, 12, 15, 10, 19, 16, 13, 12, 15, 7, 16, 11],
        label: "Ethereum Price",
        backgroundColor: "rgba(98, 89, 202, 0.2)",
        borderColor: "#6259ca",
        borderWidth: "2",
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        tension: 0.4,
        fill: true,
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
  
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontColor: "#77778e",
            },
            gridLines: {
              color: "rgba(119, 119, 142, 0.2)",
            },
          },
        ],
      },
      legend: {
        labels: {
          fontColor: "#77778e",
        },
      },
    },
  };
  interface spark3 {
    options?: ApexOptions,
    width?: string | number,
    height?: string | number,
    series?: ApexOptions['series'],
    [key: string]: any
    label?: XAxisAnnotations
    endingShape?: string
  }
  export class CryptoBTC extends Component<{}, spark3> {
    
    constructor(props: {} | Readonly<{}>) {
      super(props);

      this.state = {
  
        series: [{
          name: 'Value',
          data:  [95, 75, 106, 74, 125, 102, 105, 78, 74, 85, 86, 80],
        }],
        options: {
          chart: {
            type: 'area',
            height: 40,
            width: 50,
           
            sparkline: {
              enabled: true
            },
            events: {
              mounted: (chart:any) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
            }
          },
          stroke: {
            show: true,
            // curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
          },
          fill: {
          },
          yaxis: {
            min: 0,
            show: false,
            axisBorder: {
              show: false
            },
          },
          xaxis: {
            axisBorder: {
              show: false
            },
          },
          colors:["#6259ca"],
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={35} width={50} />
  
      );
    }
  }
  export class CryptoBTC1 extends Component<{}, spark3> {
    
    constructor(props: {} | Readonly<{}>) {
      super(props);

      this.state = {
  
        series: [{
          name: 'Value',
          data: [85, 75, 96, 84, 85, 92, 79, 78, 74, 85, 86, 80],
        }],
        options: {
          chart: {
            type: 'area',
            height: 40,
            width: 50,
           
            sparkline: {
              enabled: true
            },
            events: {
              mounted: (chart:any) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
            }
          },
          stroke: {
            show: true,
            // curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
          },
          fill: {
          },
          yaxis: {
            min: 0,
            show: false,
            axisBorder: {
              show: false
            },
          },
          xaxis: {
            axisBorder: {
              show: false
            },
          },
          colors:["#6259ca"],
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={35} width={50} />
  
      );
    }
  }
  export class CryptoBTC2 extends Component<{}, spark3> {
    
    constructor(props: {} | Readonly<{}>) {
      super(props);

      this.state = {
  
        series: [{
          name: 'Value',
          data: [7, 5, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 7, 10],
        }],
        options: {
          chart: {
            type: 'area',
            height: 40,
            width: 50,
           
            sparkline: {
              enabled: true
            },
            events: {
              mounted: (chart:any) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
            }
          },
          stroke: {
            show: true,
            // curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
          },
          fill: {
          },
          yaxis: {
            min: 0,
            show: false,
            axisBorder: {
              show: false
            },
          },
          xaxis: {
            axisBorder: {
              show: false
            },
          },
          colors:["#6259ca"],
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={35} width={50} />
  
      );
    }
  }
  export class CryptoBTC3 extends Component<{}, spark3> {
    
    constructor(props: {} | Readonly<{}>) {
      super(props);

      this.state = {
  
        series: [{
          name: 'Value',
          data: [15, 6, 16, 11, 12, 15, 10, 19, 16, 13, 12, 15, 7, 16, 11],
        }],
        options: {
          chart: {
            type: 'area',
            height: 40,
            width: 50,
           
            sparkline: {
              enabled: true
            },
            events: {
              mounted: (chart:any) => {
                chart.windowResizeHandler();
              }
            },
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1
            }
          },
          stroke: {
            show: true,
            // curve: 'smooth',
            lineCap: 'butt',
            colors: undefined,
            width: 1.5,
            dashArray: 0,
          },
          fill: {
          },
          yaxis: {
            min: 0,
            show: false,
            axisBorder: {
              show: false
            },
          },
          xaxis: {
            axisBorder: {
              show: false
            },
          },
          colors:["#6259ca"],
        }
  
      };
    }
  
    render() {
      return (
        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={35} width={50} />
  
      );
    }
  }