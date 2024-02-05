
// Linechart
export const linechart : any= {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "TOTAL BUDGET",
        data:  [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        borderWidth: 3,
        backgroundColor: "transparent",
        borderColor: "#6259ca",
        pointBackgroundColor: "ffffff",
        pointRadius: 0,
        type: "line",
        tension: 0.4,
        
      },
     
      {
        label: "AMOUNT USED",
        data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
        borderWidth: 3,
        backgroundColor: "transparent",
        borderColor: "rgb(183, 179, 220,0.5)",
        pointBackgroundColor: "#ffffff",
        pointRadius: 0,
        type: "line",
        borderDash: [7, 3],
        tension: 0.3,
      },
    ],
  };
  export const linechartoptions : any = {
  	series: [{
      name: "Total Budget",
      data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80]
    }, {
      name: "Amount Used",
      data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89]
    }],
    options:{

      chart: {
        height: 320,
        type: 'line',
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1
        },
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: "top",
        horizontalAlign: "center",
        offsetX: -15,
        fontWeight: "bold",
      },
      stroke: {
        curve: 'smooth',
        width: '3',
        dashArray: [0, 5],
      },
      grid: {
        borderColor: '#f2f6f7',
      },
      colors: ["rgb(98, 89, 202)", "rgba(98, 89, 202, 0.3)"],
      yaxis: {
        title: {
          text: '',
          style: {
            color: '#adb5be',
            fontSize: '14px',
            fontFamily: 'poppins, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-label',
          },
        }
      },
      xaxis: {
        type: 'month',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: 'rgba(119, 119, 142, 0.05)',
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        labels: {
          rotate: -90
        }
      }
    }
  };
  ////Radialbar
  export const Radialbar : any = {
    series: [50],
    options:{

      chart: {
        height: 100,
        type: "radialBar"
      },
      
  
      
      colors: ["rgb(98, 89, 202)"],
    
      states: {
        normal: {
          filter: {
            type: 'none',
          }
        },
        hover: {
          filter: {
            type: 'none',
          }
        },
        active: {
          filter: {
            type: 'none',
          }
        },
      },
      
      plotOptions: {
        radialBar: {
        hollow: {
          size: "60%"
        },
         
        dataLabels: {
          showOn: "always",
          name: {
          offsetY: -10,
          show: false,
          color: "#888",
          fontSize: "13px"
          },
          value: {
          offsetY: 5,
          color: "#111",
          fontSize: "18px",
          fontWeight: 'bold',
          show: true
          }
        }
        }
      },
    
      grid: {
        padding: {
          top: -20,
          right: -25,
          bottom: -20,
          left: -25
        },
      },
      
      stroke: {
        lineCap: "round",
      },
      labels: [""]
    }
  };
  // --------Raialbar-end---------------------->
 
  export const Webdesgining : any = {
    series: [{
      name: 'Total Projects',
      data: [44, 42, 57, 86, 58, 55, 70],
    }, {
      name: 'On Going',
      data: [-34, -22, -37, -56, -21, -35, -60],
    }],
    options:{

      chart: {
        stacked: true,
        type: 'bar',
        height: 175,
      },
      grid: {
        show: false,
        borderColor: '#f2f6f7',
      },
      colors: ["#e9e9e9", "rgb(98, 89, 202)"],                        
      plotOptions: {
        bar: {
          columnWidth: '15%',
          borderRadius: 5,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          colors: {
            ranges: [{
              from: -100,
              to: -46,
              color: 'rgb(98, 89, 202)'
            }, {
              from: -45,
              to: 0,
              color: 'rgb(98, 89, 202)'
            }]
          },
          
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
        position: 'top',
      },
      yaxis: {
        Show: false,
        labels: {
          show: false,
        }
      },
      xaxis: {
        show: false,
        type: 'day',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
        },
      }
    }
  };
  export const Webdesgining1 : any = {
    series: [1754, 544],
    options:{
      labels: ["Bitcoin", "Ethereum"],
      chart: {
        height: 73,
        width: 50,
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
      },
      plotOptions: {
      
        pie: {
          expandOnClick: false,
          donut: {
            size: '75%',
            background: 'transparent',
            labels: {
              show: false,
              name: {
                show: true,
                fontSize: '20px',
                color: '#495057',
                offsetY: -4
              },
              value: {
                show: true,
                fontSize: '18px',
                color: undefined,
                offsetY: 8,
                formatter: function (val: string) {
                  return val + "%"
                }
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                fontSize: '22px',
                fontWeight: 600,
                color: '#495057',
              }
      
            }
          }
        }
      },
      colors: ["rgb(98, 89, 202)", "rgba(98, 89, 202, 0.2)"],
        },
    
      
      }
      export const Webdesgining2 : any = {
        series: [1854, 250],
        options:{
          labels: ["Bitcoin", "Ethereum"],
          chart: {
            height: 73,
            width: 50,
            type: 'donut',
          },
          dataLabels: {
            enabled: false,
          },
          
          legend: {
            show: false,
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'round',
            colors: "#fff",
            width: 0,
            dashArray: 0,
          },
          plotOptions: {
          
            pie: {
              expandOnClick: false,
              donut: {
                size: '75%',
                background: 'transparent',
                labels: {
                  show: false,
                  name: {
                    show: true,
                    fontSize: '20px',
                    color: '#495057',
                    offsetY: -4
                  },
                  value: {
                    show: true,
                    fontSize: '18px',
                    color: undefined,
                    offsetY: 8,
                    formatter: function (val: string) {
                      return val + "%"
                    }
                  },
                  total: {
                    show: true,
                    showAlways: true,
                    label: 'Total',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#495057',
                  }
          
                }
              }
            }
          },
          colors: ["rgb(98, 89, 202)", "rgba(98, 89, 202, 0.2)"],
            },
        
          
          }