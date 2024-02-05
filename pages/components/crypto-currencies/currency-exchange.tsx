import React, { HTMLAttributes } from 'react'
import dynamic from 'next/dynamic';
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Card, Col, Container, Form, Row } from "react-bootstrap";
const Searchable = dynamic(()=>import('react-searchable-dropdown'), { ssr: false })
import { Line } from 'react-chartjs-2';
import Link from "next/link";
import * as currencyexchange from "../../../shared/data/crypto-currencies/currencyexchange"
// Need to Import {Importent}
import Seo from '../../../shared/layout-components/seo/seo';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
const ReactApexChart = dynamic(()=>import('react-apexcharts'), { ssr: false })

Chart.register(CategoryScale);

const CurrencyExchange = () => {

  interface Option {
    label: string;
    value: string;
  }
  
  interface SearchableProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    placeholder: string;
    notFoundText: string;
    noInput?: boolean;
    options: Option[];
    listMaxHeight?: number;
  }

  const searchableProps: SearchableProps = {
    className: 'form-control select2',
    value: 'test',
    placeholder: 'Choose one',
    notFoundText: 'No result found',
    noInput: true,
    options: [
      { label: 'BTC', value: 'btc' },
      { label: 'LTC', value: 'ltc' },
      { label: 'NEO', value: 'neo' },
      { label: 'DASH', value: 'dash' },
      { label: 'XRP', value: 'xrp' },
    ],
    listMaxHeight: 140,
  };

  const searchableProps2: SearchableProps = {
    className: 'form-control select2',
    value: 'test',
    placeholder: 'Choose one',
    notFoundText: 'No result found',
    noInput: true,
    options: [
      { label: 'USD', value: 'usd' },
      { label: 'EURO', value: 'euro' },
      { label: 'POUND', value: 'pound' },

    ],
    listMaxHeight: 140,
  };

  return (
    <>
    <Seo title={"Currency Exchange"}/>

    <PageHeader title="Currency-exchange" item="Crypto Currencies" active_item="Currency-exchange"/>

    <div>
      
    <Row className="row-sm">
      <Col md={12}>
        <Card className="pt-0  custom-card pt-7 bg-background2 card pb-7 border-0 overflow-hidden">
          <div className="header-text mb-0">
            <Container fluid className="main-container  p-5">
              <div className="text-start  background-text">
                <h1 className="mb-3 fs-50 fw-medium">
                  Buy and sell Coins without additional fees
                </h1>
                <p className="fs-18 mb-5 text-white-50">
                  Buy now and get +50% extra bonus Minimum pre-sale amount 100
                  Crypto Coin. We accept BTC crypto-currency..
                </p>
              </div>
              <Row >
                <Col xl={12} lg={12} md={12} className="d-block mx-auto">
                  <div className="item-search-tabs mb-6 background-text">
                    <div className="buy-sell">
                      <Form className=" row mx-auto justify-content-center d-flex p-4 form">
                        <Form.Group className="col-xl-6 col-lg-6 col-md-12 mb-0">
                          <Form.Control
                            type="text"
                            className="mb-4 mb-lg-0"
                            id="text7"
                            placeholder="13.2458"
                          />
                        </Form.Group>
                  
                        <Form.Group className="col-xl-6 col-lg-6 col-md-12 mb-0">
						<Searchable {...searchableProps} />
                        </Form.Group>
                        <div className="col-xl-12 col-lg-12 col-md-12 my-3 text-start position-relative">
                                                            <i className=" pe-7s-repeat exchange-icon fs-30 inline-block"></i>
                                                        </div>
                        {/* <Col xl={12} lg={12} md={12} className="my-3 text-start">
                          <i className=" pe-7s-repeat exchange-icon fs-30 text-white inline-block"></i>
                        </Col> */}
                        <Form.Group className="col-xl-6 col-lg-6 col-md-12 mb-0">
                          <Form.Control
                            type="text"
                            className="mb-4 mb-lg-0"
                            id="text6"
                            placeholder="02.24"
                          />
                        </Form.Group>
                        <Form.Group className=" col-xl-6 col-lg-6 col-md-12 mb-0">
						<Searchable {...searchableProps2}/>
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                  <div className="text-center background-text">
                    <Link
                      href="#!"
                      className="btn btn-warning ps-6 pe-6 pt-2 pb-2 mx-auto float-start mt-5"
                      >
                      EXCHANGE NOW
                    </Link>
                  </div>
                </Col>
                
              </Row>
            </Container>
          </div>
        </Card>
      </Col>
      <Col md={12}>
        <Row className="row-sm">
          <Col xl={4} md={12} lg={6}>
            <Card className="custom-card crypto-card overflow-hidden shadow-sm">
              <Card.Body className="pb-0">
                <div className="mb-0 d-flex">
                  <h5 className="d-flex mb-0">
                    <span className="cryp-icon bg-primary me-2">
                      <i className="cf cf-btc"></i>
                    </span>
                    Bitcoin BTC
                  </h5>
                  <span className="float-end ms-auto btn btn-success btn-sm">
                    24h
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="d-flex my-auto font-weight-normal">
                    0.00000434
                    <span className="text-info fs-14 mt-auto ms-2">$0.04</span>
                  </h5>
                  <div className="text-danger">
                    <i className="me-1 text-success"></i> +4.16%
                  </div>
                </div>
                <div className="chart-wrapper">
                  <div id="bitcoinchart">

                    <ReactApexChart 
                        options={currencyexchange.Bitcoinexhange.options} series={currencyexchange.Bitcoinexhange.series} type="area" height={130} />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={12} lg={6}>
            <Card className="custom-card crypto-card overflow-hidden shadow-sm">
              <Card.Body className="card-body pb-0">
                <div className="mb-0 d-flex">
                  <h5 className="d-flex mb-0">
                    <span className="cryp-icon bg-primary me-2">
                      <i className="cf cf-eth"></i>
                    </span>
                    Ethereum ETH
                  </h5>
                  <span className="float-end ms-auto btn btn-success btn-sm">
                    24h
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="d-flex my-auto font-weight-normal">
                    0.00000235
                    <span className="text-info fs-14 mt-auto ms-2">$0.12</span>
                  </h5>
                  <div className="text-danger">
                    <i className="me-1 text-success"></i> +2.12%
                  </div>
                </div>
                <div className="chart-wrapper">
                <ReactApexChart 
                        options={currencyexchange.Ethereumexchange.options} series={currencyexchange.Ethereumexchange.series} type="area" height={130} id="ethereum-chart" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={12} lg={6}>
            <Card className=" custom-card crypto-card overflow-hidden shadow-sm">
              <Card.Body className=" pb-0">
                <div className="mb-0 d-flex">
                  <h5 className="d-flex mb-0">
                    <span className="cryp-icon bg-primary me-2">
                      <i className="cf cf-xrp"></i>
                    </span>
                    Ripple XRP
                  </h5>
                  <span className="float-end ms-auto btn btn-success btn-sm">
                    24h
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="d-flex my-auto font-weight-normal">
                    0.00000434
                    <span className="text-info fs-14 mt-auto ms-2">$0.03</span>
                  </h5>
                  <div className="text-danger">
                    <i className="me-1 text-success"></i> +3.12%
                  </div>
                </div>
                <div className="chart-wrapper">
                <ReactApexChart 
                        options={currencyexchange.Rippleexchange.options} series={currencyexchange.Rippleexchange.series} type="area" height={130} id="ripple-chart" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={12} lg={6}>
            <Card className="custom-card crypto-card overflow-hidden shadow-sm">
              <Card.Body className="pb-0">
                <div className="mb-0 d-flex">
                  <h5 className="d-flex mb-0">
                    <span className="cryp-icon bg-primary me-2">
                      <i className="cf cf-dash"></i>
                    </span>
                    Dash DASH
                  </h5>
                  <span className="float-end ms-auto btn btn-success btn-sm">
                    24h
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="d-flex my-auto font-weight-normal">
                    0.00000372
                    <span className="text-info fs-14 mt-auto ms-2">$0.12</span>
                  </h5>
                  <div className="text-danger">
                    <i className="me-1 text-success"></i> +4.23%
                  </div>
                </div>
                <div className="chart-wrapper">
                <ReactApexChart 
                        options={currencyexchange.Dashexchange.options} series={currencyexchange.Dashexchange.series} type="area" height={130} id="exchange-chart" />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={12} lg={6}>
            <Card className=" custom-card crypto-card overflow-hidden shadow-sm">
              <Card.Body className="card-body pb-0">
                <div className="mb-0 d-flex">
                  <h5 className="d-flex mb-0">
                    <span className="cryp-icon bg-primary me-2">
                      <i className="cf cf-neos"></i>
                    </span>
                    Neo NEO
                  </h5>
                  <span className="float-end ms-auto btn btn-success btn-sm">
                    24h
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="d-flex my-auto font-weight-normal">
                    0.00000257
                    <span className="text-info fs-14 mt-auto ms-2">$0.07</span>
                  </h5>
                  <div className="text-danger">
                    <i className="me-1 text-success"></i> +2.17%
                  </div>
                </div>
                <div className="chart-wrapper">
                <ReactApexChart 
                        options={currencyexchange.Neoexchange.options} series={currencyexchange.Neoexchange.series} type="area" height={130} id="neo-chart" />
               
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={12} lg={6}>
            <Card className=" custom-card crypto-card overflow-hidden shadow-sm">
              <Card.Body className="pb-0">
                <div className="mb-0 d-flex">
                  <h5 className="d-flex mb-0">
                    <span className="cryp-icon bg-primary me-2">
                      <i className="cf cf-ltc"></i>
                    </span>
                    Litecoin LTC
                  </h5>
                  <span className="float-end ms-auto btn btn-success btn-sm">
                    24h
                  </span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="d-flex my-auto font-weight-normal">
                    0.00000534
                    <span className="text-info fs-14 mt-auto ms-2">$0.32</span>
                  </h5>
                  <div className="text-danger">
                    <i className="me-1 text-success"></i> +2.12%
                  </div>
                </div>
                <div className="chart-wrapper">
                <ReactApexChart 
                        options={currencyexchange.Litecoinexchange.options} series={currencyexchange.Litecoinexchange.series} type="area" height={130} id="litecoin-chart" />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    </div>
    </>
  )
}

CurrencyExchange.layout = "Contentlayout"


export default CurrencyExchange