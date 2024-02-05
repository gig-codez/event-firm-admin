import React, { useEffect, useState } from 'react'
import {Chart,  CategoryScale } from "chart.js/auto";
import Link from "next/link";
import ReactApexChart from 'react-apexcharts';
import { CircularProgress } from '@mui/material';
import { Line, Doughnut } from "react-chartjs-2";
import * as cryptodashboard from "./cryptodashboard"
import Slider from "react-slick";
import { Card, Col, Row, Table } from "react-bootstrap";
Chart.register(
  CategoryScale,
);




const TRADINGACTIVITIES = [
  {
    id: 1,
    icon: "btc",
    name: "Bitcoin ",
    title: "BTC",
    price: "USD 680,175.06",
    change: "+13%",
    changeStatus: "success",
    date: "21/09/2021",
    status: "success",
    statusText: "delivery",
  },
  {
    id: 2,
    icon: "eth",
    name: "Ethereum ",
    title: "ETH",
    price: "USD 345,235.02",
    change: "-13%",
    changeStatus: "danger",
    date: "22/09/2021",

    status: "danger",
    statusText: "Cancel",
  },
  {
    id: 3,
    icon: "xrp",
    name: "Ripple ",
    title: "XRP",
    price: "USD 235,356.12",
    change: "-2.23%",
    changeStatus: "warning",
    date: "23/09/2021",

    status: "warning",
    statusText: "Hold",
  },
  {
    id: 4,
    icon: "ltc",
    name: "Litecoin",
    title: "LTC",
    price: "USD 456,235.52",
    change: "-1.13%",
    changeStatus: "danger",
    date: "24/09/2021",

    status: "danger",
    statusText: "Cancel",
  },
];

const Dashboardcom = () => {
      const CryptoCurrencies = [
        { coin: "Bitcoin BTC", price: "1.343434", image: "../../../assets/images/svgs/crypto-currencies/btc.svg"},
        { coin: "Ethereum ETH", price: "3.763674", image: "../../../assets/images/svgs/crypto-currencies/eth.svg"},
        { coin: "Ripple XRP", price: "12.53647", image: "../../../assets/images/svgs/crypto-currencies/xrp.svg"},
        { coin: "litecoin LTC", price: "3,635387", image: "../../../assets/images/svgs/crypto-currencies/ltc.svg"},
        { coin: "Dash DASH", price: "3,635387", image: "../../../assets/images/svgs/crypto-currencies/dash.svg"},
        { coin: "Monero XMR", price: "5,34578", image: "../../../assets/images/svgs/crypto-currencies/xmr.svg" },
        { coin: "Neo NEO", price: "4,435456", image: "../../../assets/images/svgs/crypto-currencies/neo.svg" },
        { coin: "Steem STEEM", price: "2,345467", image: "../../../assets/images/svgs/crypto-currencies/steem.svg" },
      ];

      let [settings, setsettings] = useState({
       
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        // dots:true,
        arrows: false,
        autoplaySpeed: 1500,
        cssEase: "linear",
        rtl: document.body.classList.contains("rtl"),
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      })

      useEffect(() => {
        // LTR
        document.querySelector('#myonoffswitch19')?.addEventListener("click",()=>{
          setsettings({
            // dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            arrows: false,
            autoplaySpeed: 1500,
            cssEase: "linear",
            rtl: false,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          })
        })

        //RTL
        document.querySelector('#myonoffswitch20')?.addEventListener("click",()=>{
          setsettings({
            // dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            arrows: false,
            autoplaySpeed: 1500,
            cssEase: "linear",
            rtl: true,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                },
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ],
          })
        })
      
        
      }, [])
      
  return (
    <div>
        {/* <!-- row opened --> */}
        <div  className="row row-sm">
          <div  className="owl-carousel  owl-theme crypto-dashboard">
            <Slider {...settings}>
              {CryptoCurrencies.map((data) => {
                return (
                  <div  className="itemslick" key={Math.random()}>
             
                    <Card  className=" custom-card">
                      <Card.Body>
                        <div  className="d-flex no-block align-items-center justify-content-between currency-item">
                          <div>
                            <span  className="text-muted fs-13 mb-3">
                              {data.coin}
                            </span>
                            <h3  className="m-0 mt-2">{data.price}</h3>
                          </div>
                          <div  className=" mt-auto">
                            <img src={data.image} alt={data.coin} />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {/* <!-- row closed --> */}

        {/* <!-- row opened --> */}
        <Row  className=" row-sm">
          <Col
            md={12}
            sm={12}
            lg={12}
            xl={12}
            xxl={4}
             className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-4"
          >
            <Card  className="custom-card overflow-hidden wallet-1">
              <Card.Header  className="card-header border-bottom-0">
                <label  className="main-content-label my-auto pt-2 mb-1">
                  Assets Allocation
                </label>
                <span  className="d-block fs-12 mb-0 mt-1 text-muted">
                  Asset allocation involves dividing an investment portfolio
                  among different asset categories
                </span>
              </Card.Header>
              <div  className="card-body crypto-wallet">
                                <div  className="">
                                    <div id="crypto-donut">
                                   <ReactApexChart
                    options={cryptodashboard.Cryptodashboard.options}
                    series={cryptodashboard.Cryptodashboard.series}
                    type="donut"
                    height={232}
                    />
                                   </div>
                                   </div>

                                    <div  className="chart-circle-value circle-style"><div  className="fs-20 fw-semibold">55%</div>
                                </div>
                            </div>
   

              <div  className="table-responsive border-0 br-10 pb-3">
                                <table  className="table border-0 mg-b-0 text-nowrap text-md-nowrap">
                                    <tbody>
                                        <tr>
                                            <td  className="d-flex">
                                            <div  className="cryp-icon bg-primary my-auto me-2"> <i  className="cf cf-btc"></i> </div>
                                                <div  className="media-body ms-3">
                                                    <p  className="mb-1 text-muted fw-normal fs-15">Bitcoin BTC</p>
                                                    <span  className="fs-15 fw-medium my-auto">$10,245.00</span>
                                                </div>
                                            </td>
                                            <td  className="">0.0215637249</td>
                                            <td>+12.85% <i  className="fa fa-arrow-up text-success ms-1"> </i></td>
                                        </tr>
                                        <tr>
                                            <td   className="d-flex">
                                            <div   className="cryp-icon bg-primary my-auto me-2"> <i  className="cf cf-btc"></i> </div>
                                                <div   className="media-body ms-3">
                                                    <p   className="mb-1 text-muted fw-normal fs-15">Ethereum ETH</p>
                                                    <span   className="fs-15 fw-medium my-auto">$10,245.00</span>
                                                </div>
                                            </td>
                                            <td   className="">0.0253737689</td>
                                            <td>-02.25% <i   className="fa fa-arrow-down text-danger ms-1"> </i></td>
                                        </tr>
                                        <tr>
                                            <td   className="d-flex">
                                            <div   className="cryp-icon bg-primary my-auto me-2"> <i  className="cf cf-btc"></i> </div>
                                                <div   className="media-body ms-3">
                                                    <p   className="mb-1 text-muted fw-normal fs-15">Dash DASH</p>
                                                    <span   className="fs-15 fw-medium my-auto">$10,245.00</span>
                                                </div>
                                            </td>
                                            <td>0.0253546426</td>
                                            <td>-11.85% <i  className="fa fa-arrow-down text-danger ms-1"> </i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
            </Card>
          </Col>
          <div  className="col-xl-12 col-xxl-8 col-lg-12 col-md-12">
            <div  className="card card-bitcoin custom-card">
              <div  className="card-header border-bottom-0">
                <label  className="main-content-label my-auto pt-2 fs-15-f">
                  BTC/USD
                </label>
                <span  className="d-block fs-12 mb-0 mt-1 text-muted">
                  Bitcoin is a digital cryptocurrency made up of processed data
                  blocks used for online and brick-and-mortar purchases.
                </span>
              </div>
              <div  className="card-body">
                <div id="btc_chart">

                <ReactApexChart
                  options={cryptodashboard.ApexChart.options}
                  series={cryptodashboard.ApexChart.series}
                  type="candlestick"
                  height={350}
                />
                </div>

              </div>
              <div  className="media d-sm-flex d-block px-4 pb-3 pt-1">
                <div  className="media-icon bg-primary crypto-icon me-2">
                  <i  className="cf cf-btc fs-20" />
                </div>
                <div  className="media-body ms-2">
                  <div  className="row row-sm">
                    <div  className="col">
                      <label>Symbol</label>
                      <p>BTC</p>
                    </div>
                    <div  className="col">
                      <label>Price Benchmark</label>
                      <p>135.00%</p>
                    </div>
                    <div  className="col">
                      <label>Price (USD)</label>
                      <p>$2,457.69</p>
                    </div>
                    <div  className="col">
                      <label>Change (24H)</label>
                      <p>-0.32%</p>
                    </div>
                    <div  className="col">
                      <label>Market Cap</label>
                      <p>$134.17B</p>
                    </div>
                  </div>
                  {/* <!-- row --> */}
                </div>
              </div>
            </div>
          </div>
        </Row>
        {/* <!-- row closed --> */}

        {/* <!-- row opened --> */}
        <div  className="row row-sm">
          <div  className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-8">
            <div  className="row row-sm">
            <div  className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div  className="card custom-card">
                                    <div  className="card-body row pb-3">
                                        <div  className="col-sm-5 d-flex no-block align-items-center">
                                            <div>
                                                <span  className="fs-18 mb-3">Bitcoin</span>
                                                <h2  className="mb-2 mt-2">3.634528</h2>
                                                <span  className="m-0 fs-15 mt-4 text-muted">$2500 USD</span>
                                            </div>
                                        </div>
                                        <div  className="col-sm-7 my-auto">
                                            <div id="bitcoin" className="cryptobtc">
                                            <ReactApexChart 
                        
                              options={cryptodashboard.Cryptodashboard3.options}
                              series={cryptodashboard.Cryptodashboard3.series} 
                              height={115}

                        />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
           
              <div  className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                <div  className="card custom-card">
                                    <div  className="card-body">
                                        <span  className="fs-18">Your Profile</span>
                                        <div  className="row mt-3">
                                            <div  className="col-sm-6 my-auto border-end text-centerd-flex no-block align-items-center">
                                                <div  className="d-flex">
                                                    <div id="yourprofile">
                                                    <CircularProgress
                      variant="determinate"
                      value={75}
                       className="peity-donut"
                      data-peity='{ "fill": ["#6259ca", "rgba(204, 204, 204,0.3)"], "innerRadius": 15, "radius": 20}'
                      style={{ color: "#6259ca" }}
                    />   
                                                    </div>
                                                    <div  className="my-auto d-block ms-3">
                                                        <h6  className="mb-2 fs-16">2.343434</h6>
                                                        <span  className="m-0 fs-14 text-muted">$2500 USD</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className="col-sm-6 my-auto text-sm-center">
                                                <h2  className="mb-2  mt-3 mt-sm-0">2.343434</h2>
                                                <span  className="m-0 fs-14 mt-3 text-muted">Pending Balance</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
            </div>
            <div  className="card custom-card">
              <div  className="card-header border-bottom-0">
                <label  className="main-content-label my-auto pt-2">
                  TRADING ACTIVITIES
                </label>
                <span  className="d-block fs-12 mb-0 mt-1 text-muted">
                  Cryptocurrency trading is the act of speculating on
                  cryptocurrency price movements via a CFD trading account, or
                  buying and selling the underlying coins via an exchange
                </span>
              </div>
              <div  className="card-body pt-3 ">
                <div  className="table-responsive tasks">
                  <Table
                     className="table card-table table-vcenter text-nowrap border"
                    
                  >
                      <thead>
                                            <tr>
                                                <th className="wd-lg-20p">#</th>
                                                <th className="wd-lg-20p">NAME</th>
                                                <th className="wd-lg-20p">PRICE</th>
                                                <th className="wd-lg-20p">CHANGE</th>
                                                <th className="wd-lg-20p">CHART</th>
                                                <th className="wd-lg-20p">STATUS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="coin_icon mt-2">
                                                    <div className="d-flex">
                                                        <div className="cryp-icon bg-primary me-2"> 
                                                            <i className="cf cf-btc"></i>
                                                        </div>
                                                        <span className=" my-auto">Bitcoin <b>BTC</b></span>
                                                    </div>
                                                </td>
                                                <td>USD 680,175.06</td>
                                                <td>
                                                    <span className="text-success ">+1.13%</span>
                                                </td>
                                                <td><span id="sparkline11">    <ReactApexChart 
                        
                        options={cryptodashboard.Cryptobitcoin.options}
                        series={cryptodashboard.Cryptobitcoin.series} 
                        height={40}  width={120}   /></span></td>
                                                <td className="text-start"><a href="#!" className="text-success">DELIVERY</a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td className="coin_icon mt-2">
                                                    <div className="d-flex">
                                                        <div className="cryp-icon bg-primary my-auto me-2"> <i className="cf cf-eth"></i> </div>
                                                        <span className=" my-auto">Ethereum <b>ETH</b></span>
                                                    </div>
                                                </td>
                                                <td>USD 345,235.02</td>
                                                <td>
                                                    <span className="text-danger">-1.13%</span>
                                                </td>
                                                <td><span id="sparkline12">  <ReactApexChart 
                        
                        options={cryptodashboard.CryptoEthereum.options}
                        series={cryptodashboard.CryptoEthereum.series} 
                        height={40}  width={120}   /></span></td>
                                                <td className="text-start"><a href="#!" className="text-danger">CANCEL</a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td className="coin_icon mt-2">
                                                    <div className="d-flex">
                                                        <div className="cryp-icon bg-primary my-auto me-2"> <i className="cf cf-xrp"></i> </div>
                                                        <span className=" my-auto">Ripple <b>XRP</b></span>
                                                    </div>
                                                </td>
                                                <td>USD 235,356.12</td>
                                                <td>
                                                    <span className="text-muted">-2.23%</span>
                                                </td>
                                                <td><span id="sparkline13"><ReactApexChart 
                        
                        options={cryptodashboard.CryptoRipple.options}
                        series={cryptodashboard.CryptoRipple.series} 
                        height={40}  width={120}   /></span></td>
                                                <td className="text-start"><a href="#!" className="text-muted">HOLD</a></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td className="coin_icon mt-2">
                                                    <div className="d-flex">
                                                        <div className="cryp-icon bg-primary my-auto me-2"> <i className="cf cf-ltc"></i> </div>
                                                        <span className=" my-auto">Litecoin <b>LTC</b></span>
                                                    </div>
                                                </td>
                                                <td>USD 456,235.52</td>
                                                <td>
                                                    <span className="text-danger ">-1.13%</span>
                                                </td>
                                                <td><span id="sparkline14"><ReactApexChart 
                        
                        options={cryptodashboard.CryptoLitecoin.options}
                        series={cryptodashboard.CryptoLitecoin.series} 
                        height={20}  width={120}  /></span></td>
                                                <td className="text-start"><a href="#!" className="text-danger">CANCEL</a></td>
                                            </tr>
                                        </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
          <Col md={12} sm={12} lg={12} xl={12} xxl={4}>
            <Card  className=" custom-card overflow-hidden">
              <Card.Header  className=" border-bottom-0 d-block">
                <label  className="card-title mb-1">
                  Activity
                </label>
                <span  className="d-block fs-12 mb-0 mt-0 text-muted">
                  Activity is one of the many blockchain consensus algorithms
                </span>
              </Card.Header>
              <ul  className="crypto-transcation p-0 list-unstyled mg-b-0">
                <li  className="list-item mb-0 px-3 pb-3">
                  <div  className="media align-items-center">
                    <div  className="crypto-icon bg-primary-transparent text-primary">
                      <i  className="cf cf-btc wd-20 ht-20 text-center fs-18" />
                    </div>
                    <div  className="media-body ms-3">
                      <p  className="fw-medium mg-b-3 fs-15">Sent Litecoin</p>
                      <p  className="fs-11 mg-b-0 text-gray-3">
                        To bitcoin Address
                      </p>
                    </div>
                  </div>
                  <div  className="text-end ms-auto my-auto">
                    <h5  className="fw-medium fs-16 mb-0">
                      + 0.0147
                      <i  className="text-success fs-16 fe fe-arrow-up ms-1" />
                    </h5>
                  </div>
                </li>
                <li  className="list-item mb-0 px-3 pb-3">
                  <div  className="media align-items-center">
                    <div  className="crypto-icon bg-primary-transparent text-primary">
                      <i  className="cf cf-ltc wd-20 ht-20 text-center fs-18" />
                    </div>
                    <div  className="media-body ms-3">
                      <p  className="fw-medium mg-b-3 fs-15">Sent Ethereum</p>
                      <p  className="fs-11 mg-b-0 text-gray-3">Pending</p>
                    </div>
                  </div>
                  <div  className="text-end ms-auto my-auto">
                    <h5  className="fw-semibold fs-16 mb-0">
                      - 0.0345
                      <i  className="text-danger fs-16 fe fe-arrow-down ms-1" />
                    </h5>
                  </div>
                </li>
                <li  className="list-item mb-0 px-3 pb-3">
                  <div  className="media align-items-center">
                    <div  className="crypto-icon bg-primary-transparent text-primary">
                      <i  className="cf cf-dash wd-20 ht-20 text-center fs-18" />
                    </div>
                    <div  className="media-body ms-3">
                      <p  className="fw-medium mg-b-3 fs-15">Received Dash</p>
                      <p  className="fs-11 mg-b-0 text-gray-3">
                        To Received Address
                      </p>
                    </div>
                  </div>
                  <div  className="text-end ms-auto my-auto">
                    <h5  className="fw-semibold fs-16 mb-0">
                      - 0.0346
                      <i  className="text-danger fs-16 fe fe-arrow-down" />
                    </h5>
                  </div>
                </li>
                <li  className="list-item px-3 pb-3">
                  <div  className="media align-items-center">
                    <div  className="crypto-icon bg-primary-transparent text-primary">
                      <i  className="cf cf-xrp wd-20 ht-20 text-center fs-18" />
                    </div>
                    <div  className="media-body ms-3">
                      <p  className="fw-medium mg-b-3 fs-15">Received Ripple</p>
                      <p  className="fs-11 mg-b-0 text-gray-3">
                        To Received Address
                      </p>
                    </div>
                  </div>
                  <div  className="text-end ms-auto my-auto">
                    <h5  className="fw-semibold fs-16 mb-0">
                      + 0.0237
                      <i  className="text-success fs-16 fe fe-arrow-up ms-1" />
                    </h5>
                  </div>
                </li>
                <li  className="list-item px-3 pb-3">
                  <div  className="media align-items-center">
                    <div  className="crypto-icon bg-primary-transparent text-primary">
                      <i  className="cf cf-bsd wd-20 ht-20 text-center fs-18" />
                    </div>
                    <div  className="media-body ms-3">
                      <p  className="tx-medium mg-b-3 fs-15">Received Ripple</p>
                      <p  className="fs-11 mg-b-0 text-gray-3">
                        To Received Address
                      </p>
                    </div>
                  </div>
                  <div  className="text-end ms-auto my-auto">
                    <h5  className="fw-semibold fs-16 mb-0">
                      - 0.0348
                      <i  className="text-danger fs-16 fe fe-arrow-down ms-1" />
                    </h5>
                  </div>
                </li>
              </ul>
            </Card>
          </Col>
        </div>
      </div>
  )
}

export default Dashboardcom