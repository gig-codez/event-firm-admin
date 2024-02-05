import React from 'react'
const Searchable = dynamic(() => import('react-searchable-dropdown'), { ssr: false });
import * as buysell from "./buysell"
import { Tab, Nav, TabContent, Row, Col, Card, Form, Button,InputGroup } from "react-bootstrap";
import Link from 'next/link';
import ReactApexChart from 'react-apexcharts';


//Images
import amex from "../../../public/assets/images/payments/png/1.png"
import dynamic from 'next/dynamic';

const BuyingsellingOrders =
  [
    { ID: "#123450", Type: "Buy", typeinfo: "success", Order: "success", Amount: 0.37218, Remaining: 0.42173, Price: "25681.13", Usd: "$5273.15", Fee: "0.1", Status: "success", statustext: "Completed", Date: "10-05-2019  02:12:34", },
    { ID: "#123451", Type: "Sell", typeinfo: "danger", Order: "danger", Amount: 1.47364, Remaining: 0.36472, Price: "73647.15", Usd: "$2637.37", Fee: "0.1", Status: "warning", statustext: "Pending", Date: "10-05-2019 07:14:32", },
    { ID: "#123452", Type: "Sell", typeinfo: "danger", Order: "danger", Amount: 0.63736, Remaining: 0.73748, Price: "72637.15", Usd: "$6342.16", Fee: "0.1", Status: "danger", statustext: "Cancelled", Date: "05-05-2019 12:57:12", },
    { ID: "#123453", Type: "Buy", typeinfo: "success", Order: "success", Amount: 0.83643, Remaining: 0.83643, Price: "83748.15", Usd: "$23836.09", Fee: "0.1", Status: "success", statustext: "Completed", Date: "15-07-2019 10:43:17", },
    { ID: "#123454", Type: "Buy", typeinfo: "success", Order: "success", Amount: 0.767263, Remaining: 0.72563, Price: "326535.32", Usd: "$7235.25", Fee: "0.1", Status: "success", statustext: "Completed", Date: "22-07-2019 11:44:45", },
    { ID: "#123455", Type: "Sell", typeinfo: "danger", Order: "danger", Amount: 0.46263, Remaining: 0.27363, Price: "28937.15", Usd: "$4853.15", Fee: "0.1", Status: "info", statustext: "In Process", Date: "30-07-2019  08:23:15", },
  ];

const Buyselldashbord = () => {

  interface SearchableProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    value: string;
    placeholder?: string;
    notFoundText?: string;
    noInput?: boolean;
    options: { label: string; value: string }[];
    listMaxHeight?: number;
  }

  const searchableProps: SearchableProps = {
    className: "h-100 flex-1",
    value: "test",
    placeholder: "BTC",
    notFoundText: "No result found",
    noInput: true,
    options: [
      { label: "BTC", value: "btc" },
      { label: "LTC", value: "ltc" },
      { label: "NEO", value: "neo" },
      { label: "DASH", value: "dash" },
      { label: "XRP", value: "xrp" },
      { label: "ETH", value: "eth" },
    ],
    listMaxHeight: 140,
  };

  const searchableProps2: SearchableProps = {
    className: "h-100 flex-1",
    value: "test",
    placeholder: "USD",
    notFoundText: "No result found",
    noInput: true,
    options: [
      { label: "USD", value: "usd" },
      { label: "AED", value: "aed" },
      { label: "AUD", value: "aud" },
      { label: "ARS", value: "ars" },
      { label: "AZN", value: "azn" },
      { label: "BGN", value: "bgn" },
      { label: "BRL", value: "brl" },
    ],
    listMaxHeight: 140,
  };

  return (
    <div>

      {/* <!-- Row--> */}
      <Row className="row-sm">
        <Col md={12}>
          <Card className="custom-card overflow-hidden">
            <div className="card-header d-flex justify-content-between pb-3 border-bottom">
                <h4 className="d-flex mb-0">
                  Bitcoin
                  <span className="text-muted fs-13 ms-2 my-auto">BTC</span>
                </h4>
              <Button
                variant="primary" className="btn ms-auto">Buy Bitcoin</Button>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Card.Body className="">
                  <div className="d-sm-flex mb-0">
                    <div>
                      <p className="fs-13 text-muted mb-2">
                        Bitcoin [BTC] Price Chart
                      </p>
                      <h3>
                        $3468.42
                        <span className="text-success fs-15 ms-2">
                          <i className="fas fas fa-dollar-sign"></i> 23.5
                        </span>
                      </h3>
                    </div>
                    <div className="ms-auto">
                      <Nav variant="pills">
                        <Nav.Item className="border-0" title="1m">
                          <Nav.Link eventKey="first">1m</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-0 ">
                          <Nav.Link eventKey="second">1h</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-0">
                          <Nav.Link eventKey="third">1d</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                </div>
                <Row>
                    <Col lg={9} xl={10} md={8}>
                      <TabContent>
                        <Tab.Pane eventKey="first">
                          <div>
                            <div>
                              <ReactApexChart
                                options={buysell.Bullsell.options}
                                series={buysell.Bullsell.series}
                                type="area"
                                height={350}
                              />
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div>
                            <div></div>
                            <ReactApexChart
                              options={buysell.Bullsell.options}
                              series={buysell.Bullsell.series}
                              type="area"
                              height={350}
                              className="tab-content"
                            />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <div>
                            <div>
                              <ReactApexChart
                                options={buysell.chartbitcoin3.options}
                                series={buysell.chartbitcoin3.series}
                                type="area"
                                height={350}
                                className="tab-content"
                              />
                            </div>
                          </div>
                        </Tab.Pane>
                      </TabContent>
                    </Col>
                
                    <Col lg={3} xl={2} md={4}>
                      <Card className="bg-light custom-card">
                        <Card.Body>
                          <div className="text-muted fs-13">
                            <b>BNB</b> / BUSD
                          </div>
                          <h5 className="my-1">29.83267</h5>
                          <span className="text-danger">-0.04%</span>
                        </Card.Body>
                      </Card>
                      <Card className=" bg-light custom-card">
                        <Card.Body>
                          <div className="text-muted fs-13">
                            <b>ETH</b> / BUSD
                          </div>
                          <h5 className="my-1">34.25356</h5>
                          <span className="text-success">+0.03%</span>
                        </Card.Body>
                      </Card>
                      <Card className=" bg-light custom-card mb-0">
                        <Card.Body>
                          <span className="text-muted fs-13">
                            <b>EOS</b> / BUSD
                          </span>
                          <h5 className="my-1">22.32315</h5>
                          <span className="text-danger">-0.02%</span>
                        </Card.Body>
                      </Card>
                  </Col>
                </Row>  
                </Card.Body>
            </Tab.Container>
          </Card>
        </Col>
        <div className="col-lg-12 col-xl-12 col-xxl-6 col-md-12">
          <Card className="custom-card overflow-hidden crypto-buysell-card">
            <Card.Body>
              <Card.Header className=" border-bottom-0 ps-0 pt-0">
                <label className="main-content-label my-auto">
                  Buy Currency
                </label>
              </Card.Header>
              <div className="d-flex mt-3 mb-3">
                <div className="">
                  <p className="fs-16 text-muted mb-2">1 USDT is roughly</p>
                  <h3>
                    5.47<span className="text-success fs-15 ms-2">CNY</span>
                  </h3>
                </div>
                <div className="ms-auto my-auto">
                  <span className="claim me-2">
                    Claim
                    <span className="fw-bold text-success mx-2">20</span>
                    Free Bitcoin
                  </span>
                </div>
              </div>
              <Form.Group className="form-group">
               
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Spend 32 - 6500"
                      aria-label="Spend 32 - 6500"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text className="p-0">

					<Searchable {...searchableProps}/>
                    </InputGroup.Text>
                  </InputGroup>

              
              </Form.Group>
              <Form.Group className="form-group">
                <InputGroup>
                  <Form.Control
                    type="text"
                    className="input-lg wd-80p"
                    defaultValue="Buy"
                  />
                  <InputGroup.Text className="p-0 ">

				  <Searchable {...searchableProps2} />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="fs-14">
                <Form.Control
                  className="input-lg"
                  type="text"
                  placeholder="498fd7c42932070ff3ec30"
                />
              </Form.Group>
              <Form.Label className="main-content-label mt-4 mb-4">
                Select payment method
              </Form.Label>
              <Form className="payment-form form">
                <div className="payment-type d-flex">
                  <Form.Control name="radio3" type="radio" id="credit" className="form-check-input" value="credit" defaultChecked />
                  <Form.Label
                    className="credit-label payment-cards four ms-0 col"
                    htmlFor="credit"
                  >
                    <span className="d-none d-md-block">New card</span>
                    <img src={"../../../assets/images/payments/png/4.png"} alt="visa"
                    />
                  </Form.Label>
                  <Form.Control type="radio" name="radio3" id="debit" className="form-check-input" defaultValue="debit" />
                  <label
                    className="debit-label payment-cards four col"
                    htmlFor="debit"
                  >
                    <span className="d-none d-md-block">Debit Card</span>
                    <img
                      src={"../../../assets/images/payments/png/2.png"}
                      alt="Debitcard"
                    />
                  </label>
                  <Form.Control
                    type="radio"
                    name="radio3"
                    id="paypal"
                    defaultValue="paypal"
                  />
                  <label
                    className="paypal-label payment-cards four col"
                    htmlFor="paypal"
                  >
                    <span className="d-none d-md-block">Paypal</span>
                    <img
                      src={"../../../assets/images/payments/png/3.png"}
                      alt="paypal"
                    />
                  </label>
                  <Form.Control
                    type="radio"
                    name="radio3"
                    id="amex"
                    defaultValue="amex"
                  />
                  <label
                    className="amex-label payment-cards four col"
                    htmlFor="amex"
                  >
                    <span className="d-none d-md-block">Amex</span>
                    <img
                      src={"../../../assets/images/payments/png/1.png"}
                      alt="amexg1096"
                    />
                  </label>
                </div>
                  <div className="d-grid">
                <Link href="#!" className="btn btn-primary btn-lg btn-block mt-4">

                  Buy Now
                </Link>
                  </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-12 col-xl-12 col-xxl-6 col-md-12">
          <Card className=" custom-card  crypto-buysell-card">
            <Card.Body>
              <div className="card-header border-bottom-0 ps-0 pt-0">
                <label className="main-content-label my-auto">
                  Sell Currency
                </label>
              </div>
              <div className="form-group">
                <label className="fw-semibold fs-16 mt-3 mb-2">
                  Sell From
                </label>
                <div className="p-3 border d-flex rounded-2">
                  <div className="d-flex">
                    <span className="crypto-icon bg-primary-transparent me-3">
                      <i className="cf cf-btc text-primary"></i>
                    </span>
                    <span className="my-auto fs-18 fw-semibold">
                      Bitcoin BTC
                    </span>
                  </div>
                  <div className="d-flex ms-auto">
                    <div className="card-item-stat d-none d-md-block">
                      <h4 className="fw-semibold mb-0 fs-15">
                        0.374648545 BTC
                      </h4>
                      <small className="fs-13 float-end text-end text-muted">
                        $5,634.65
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="fw-semibold fs-16 mt-0 mb-2">
                  Deposit to
                </label>
                <div className="p-3 border d-flex rounded-2">
                  <span className="crypto-icon bg-primary-transparent">
                    <i className="fa fa-bank text-primary"></i>
                  </span>
                  <div className="my-auto ms-3">
                    <div className="d-flex my-auto fs-16 fw-semibold">
                      Banking
                    </div>
                    <small className="fs-13 text-muted">Checking</small>
                  </div>
                </div>
              </div>
              <label className="fw-semibold fs-16 mt-0 mb-2">
                Amount
              </label>
              <hr className="my-2" />
              <div className="d-flex mt-3 mb-3">
                <p className="fs-16 mb-0 text-muted">Weekly bank limit</p>
                <div className="ms-auto my-auto">
                  <span className="fs-16 text-muted">$10,000.00 remaining</span>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-xl-5 col-lg-12 col-md-12 mb-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control input-lg wd-80p"
                      defaultValue="0.041323"
                    />
                    <div className="input-group-text p-0 wd-xl-40p wd-30p">
					<Searchable {...searchableProps2} />
                    </div>
                  </div>
                </div>
                <Col xl={2} lg={12} md={12} className="form-group text-center my-auto">
                  <i className="pe-7s-repeat my-3 mt-xl-0 mb-xl-0 fs-26"></i>
                </Col>
                <Col xl={5} lg={12} md={12} className="form-group mb-0">
                  <InputGroup className="input-group">
                    <input
                      type="text"
                      className="form-control input-lg wd-80p"
                      defaultValue="500"
                    />
                    <InputGroup.Text className=" input-group-text p-0  wd-xl-40p wd-30p">
					<Searchable {...searchableProps}/>
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              </div>
              <div className="d-grid">

              <Link href="#!" className="btn btn-primary btn-lg btn-block mt-4">
                Sell Bitcoin
              </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Row>
      {/* <!-- Row End --> */}

      {/* <!-- Row--> */}
      <div className="row row-sm">
        <div className="col-xl-12">
          <div className="card custom-card">
            <div className="card-header border-bottom-0">
              <label className="main-content-label my-auto pt-2">
                Recent Buying & selling Orders
              </label>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table card-table text-nowrap table-bordered border-top">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Remaining</th>
                      <th>Price</th>
                      <th>USD</th>
                      <th>Fee (%)</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BuyingsellingOrders.map((list, index) => (
                      <tr key={index} data-index={index}>
                        <td>{list.ID}</td>
                        <td>
                          <span className={`text-${list.typeinfo}`}>
                            {list.Type}
                          </span>
                        </td>
                        <td>{list.Amount}</td>
                        <td>{list.Remaining}</td>
                        <td>{list.Price}</td>
                        <td>{list.Usd}</td>
                        <td>{list.Fee}</td>
                        <td>
                          <span
                            className={`badge bg-${list.Status}-transparent bg-pill`}
                          >
                            {list.statustext}
                          </span>
                        </td>
                        <td>{list.Date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Row End --> */}
    </div>
  )
}

export default Buyselldashbord