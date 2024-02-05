import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Nav, Card, Tab, Breadcrumb, Row, Col, Button } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';

const Pricing = () => {
  return (
    <div>
      <Seo title="Pricing"/>

    <PageHeader title="Pricing" item="Pages" active_item="Pricing"/>
      
{/* <!-- Row --> */}
<Row className="row-sm">
      <Col xl={3} md={6} sm={12} lg={6}>
        <Card className="custom-card pricingTable2">
          <div className="pricingTable2-header">
            <h3>Free</h3>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="pricing-plans  bg-primary">
            <span className="price-value1">
              <i className="fa fa-usd"></i>
              <span>0.00</span>
            </span>
            <span className="month">/month</span>
          </div>
          <div className="pricingContent2">
            <ul>
              <li>
                <b>Free</b> Ad posting
              </li>
              <li>
                <b>0</b> Featured Listings
              </li>
              <li>
                <b>100%</b> Secure
              </li>
              <li>
                <b>Custome</b> Reviews
              </li>
              <li>
                <b>24/7</b> Support
              </li>
            </ul>
          </div>
          {/* <!-- CONTENT BOX--> */}
          <div className="pricingTable2-sign-up">
            <Link href="#!" className="btn btn-block btn-primary" >
				sign up
            </Link>
          </div>
          {/* <!-- BUTTON BOX--> */}
        </Card>
      </Col>
      <Col xl={3} md={6} sm={12} lg={6}>
        <Card className="custom-card pricingTable2">
          <div className="pricingTable2-header">
            <h3>Premium</h3>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="pricing-plans bg-danger">
            <span className="price-value1">
              <i className="fa fa-usd"></i>
              <span>19</span>
            </span>
            <span className="month">/month</span>
          </div>
          <div className="pricingContent2">
            <ul>
              <li>
                <b>Featured</b> Ad posting
              </li>
              <li>
                <b>20</b> Featured Listings
              </li>
              <li>
                <b>100%</b> Secure
              </li>
              <li>
                <b>Custome</b> Reviews
              </li>
              <li>
                <b>24/7</b> Support
              </li>
            </ul>
          </div>
          {/* <!-- CONTENT BOX--> */}
          <div className="pricingTable2-sign-up">
            <Link href="#!" className="btn btn-block btn-danger" >
			  sign up
            </Link>
          </div>
          {/* <!-- BUTTON BOX--> */}
        </Card>
      </Col>
      <Col xl={3} md={6} sm={12} lg={6}>
        <Card className="custom-card pricingTable2">
          <div className="pricingTable2-header">
            <h3>Silver</h3>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="pricing-plans bg-success">
            <span className="price-value1">
              <i className="fa fa-usd"></i>
              <span>67</span>
            </span>
            <span className="month">/month</span>
          </div>
          <div className="pricingContent2">
            <ul>
              <li>
                <b>Featured</b> Ad posting
              </li>
              <li>
                <b>30</b> Featured Listings
              </li>
              <li>
                <b>100%</b> Secure
              </li>
              <li>
                <b>Custome</b> Reviews
              </li>
              <li>
                <b>24/7</b> Support
              </li>
            </ul>
          </div>
          {/* <!-- CONTENT BOX--> */}
          <div className="pricingTable2-sign-up">
            <Link href="#!" className="btn btn-block btn-success" >
			  sign up
            </Link>
          </div>
          {/* <!-- BUTTON BOX--> */}
        </Card>
      </Col>
      <Col xl={3} md={6} sm={12} lg={6}>
        <Card className="custom-card pricingTable2 info">
          <div className="pricingTable2-header">
            <h3>Gold</h3>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="pricing-plans">
            <span className="price-value1">
              <i className="fa fa-usd"></i>
              <span>78</span>
            </span>
            <span className="month">/month</span>
          </div>
          <div className="pricingContent2">
            <ul>
              <li>
                <b>Featured</b> Ad posting
              </li>
              <li>
                <b>40</b> Featured Listings
              </li>
              <li>
                <b>100%</b> Secure
              </li>
              <li>
                <b>Custome</b> Reviews
              </li>
              <li>
                <b>24/7</b> Support
              </li>
            </ul>
          </div>
          {/* <!-- CONTENT BOX--> */}
          <div className="pricingTable2-sign-up">
            <Link href="#!" className="btn btn-block btn-info" >
			  sign up
            </Link>
          </div>
          {/* <!-- BUTTON BOX--> */}
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col xl={3} lg={6} sm={6}>
        <Card className="card-pricing custom-card">
          <div className="bg-transparent border-0">
            <div className="pricing-title">Personal</div>
            <h1
              className="h1 font-weight-normal text-center mb-0"
              data-pricing-value="30"
            >
              $<span className="price">49</span>
              <span className="h6 text-muted ms-2">/MO</span>
            </h1>
          </div>
          <Card.Body className=" pt-0 text-center">
            <ul className="list-unstyled mb-4">
              <li>10 Free Domain Name</li>
              <li>15 One-Click Apps</li>
              <li>10 Databases</li>
              <li>Money BackGuarntee</li>
              <li>24/7 support</li>
            </ul>
            <Link href="#!" className="btn ripple btn-light mb-2" >
			  Order Now
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={6} sm={6}>
        <Card className="card-pricing2 custom-card">
          <div className="bg-transparent border-0">
            <div className="pricing-title text-primary">Premium</div>
            <h1
              className="h1 font-weight-normal text-center mb-0"
              data-pricing-value="30"
            >
              $<span className="price">59</span>
              <span className="h6 text-muted ms-2">/MO</span>
            </h1>
          </div>
          <Card.Body className=" pt-0 text-center">
            <ul className="list-unstyled mb-4">
              <li>12 Free Domain Name</li>
              <li>20 One-Click Apps</li>
              <li>15 Databases</li>
              <li>Money BackGuarntee</li>
              <li>24/7 support</li>
            </ul>
            <Link href="#!" className="btn ripple btn-primary mb-2" >
			  Order Now
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={6} sm={6}>
        <Card className="card-pricing3 custom-card">
          <div className="bg-transparent border-0">
            <div className="pricing-title">Corporate</div>
            <h1 className="h1 font-weight-normal  mb-0" data-pricing-value="30">
              $<span className="price">69</span>
              <span className="h6 text-muted ms-2">/MO</span>
            </h1>
          </div>
          <Card.Body className=" pt-0 text-center">
            <ul className="list-unstyled mb-4">
              <li>15 Free Domain Name</li>
              <li>25 One-Click Apps</li>
              <li>20 Databases</li>
              <li>Money BackGuarntee</li>
              <li>24/7 support</li>
            </ul>
            <Link href="#!" className="btn ripple btn-light mb-2" >
			  Order Now
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={6} sm={6}>
        <Card className="card-pricing4 custom-card">
          <div className="bg-transparent border-0">
            <div className="pricing-title">Business</div>
            <h1 className="h1 font-weight-normal mb-0" data-pricing-value="30">
              $<span className="price">79</span>
              <span className="h6 text-muted ms-2">/MO</span>
            </h1>
          </div>
          <Card.Body className=" pt-0 text-center">
            <ul className="list-unstyled mb-4">
              <li>20 Free Domain Name</li>
              <li>30 One-Click Apps</li>
              <li>15 Databases</li>
              <li>Money BackGuarntee</li>
              <li>24/7 support</li>
            </ul>
            <Link href="#!" className="btn ripple btn-light mb-2" >
			  Order Now 
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col sm={12} md={4}>
        <Card className="custom-card card-pricing">
          <div className="bg-transparent border-0">
            <div className="price-img text-primary price-1 text-center">
              <i className="fas fa-car bg-primary-transparent"></i>
            </div>
            <div className="pricing-title">Basic</div>
            <h1 className="h1 font-weight-normal mb-0" data-pricing-value="30">
              $<span className="price">22</span>
            </h1>
          </div>
          <Card.Body className=" pt-0 text-center">
            <ul className="list-unstyled mb-4">
              <li>10GB Space</li>
              <li>3 Domain Names</li>
              <li>20 Email Address</li>
              <li>No Live Support</li>
            </ul>
            <Link href="#!" className="btn ripple btn-outline-primary mb-3" >
			  Purchase Now
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card className="custom-card card-pricing">
          <div className="bg-transparent border-0">
            <div className="price-img text-secondary price-1 text-center">
              <i className="fas fa-plane bg-pink-transparent"></i>
            </div>
            <div className="pricing-title">Standard</div>
            <h1 className="h1 font-weight-normal mb-0" data-pricing-value="30">
              $<span className="price">55</span>
            </h1>
          </div>
          <Card.Body className=" pt-0 text-center">
            <ul className="list-unstyled mb-4">
              <li>10GB Space</li>
              <li>3 Domain Names</li>
              <li>20 Email Address</li>
              <li>No Live Support</li>
            </ul>
            <Link href="#!" className="btn ripple btn-outline-secondary mb-3" >
			  Purchase Now
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card className="custom-card card-pricing">
          <div className="bg-transparent border-0">
            <div className="price-img text-info price-1 text-center">
              <i className="fas fa-rocket bg-info-transparent"></i>
            </div>
            <div className="pricing-title">Standard</div>
            <h1 className="h1 font-weight-normal mb-0" data-pricing-value="30">
              $<span className="price">99</span>
            </h1>
          </div>
          <Card.Body className=" pt-0 text-center">
            <ul className="list-unstyled mb-4">
              <li>Unlimited Space</li>
              <li>50 Domain Names</li>
              <li>Unlimited Email Address</li>
              <li>Live Support</li>
            </ul>
            <Link href="#!" className="btn ripple btn-outline-info mb-3" >
			  Purchase Now
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col xl={12} lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Tabs Pricing Tables</h6>
              <p className="text-muted">
                Below is the Using tabs year & month pricing Tables example
              </p>
            </div>
            <div className="pricing-tabs">
              <div className=" text-center">
                <Tab.Container
                  id="center-tabs-example"
                  defaultActiveKey="first"
                >
                  <Nav as="ul" className="justify-content-center nav-price">
                    <Nav.Item as="li">
                      <Nav.Link  eventKey="first">year</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="second">month</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content className="px-0">
                    <Tab.Pane eventKey="first">
                      <Row className="row-sm">
                        <Col sm={6} xl={3}>
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-primary fs-20">
                                Free
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$0</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>2 </strong> FreeDomain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>0</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>0</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-primary btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                        <Col sm={6} xl={3} className="">
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-secondary fs-20">
                                Personal
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$99</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>2 </strong> FreeDomain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>2</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>1</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-secondary btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                        <Col sm={6} xl={3} className="">
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-info fs-20 text-fixed-white">
                                Premium
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$199</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>3 </strong> FreeDomain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>5</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>3</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-info btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                        <Col sm={6} xl={3} className="">
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-success fs-20">
                                Enterprise
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$299</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>10 </strong> Free Domain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>10</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>8</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-success btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                      <Row className="row-sm">
                        <Col sm={6} xl={3}>
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-primary fs-20">
                                Free
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$0</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>2 </strong> FreeDomain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>0</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>0</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-primary btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                        <Col sm={6} xl={3} className="">
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-secondary fs-20 text-fixed-white">
                                Personal
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$15</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>2 </strong> FreeDomain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>2</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>1</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-secondary btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                        <Col sm={6} xl={3} className="">
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-info fs-20 text-fixed-white">
                                Personal
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$25</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>3 </strong> FreeDomain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>5</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>3</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-info btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                        <Col sm={6} xl={3} className="">
                          <Card className="overflow-hidden">
                            <div className="text-center card-pricing pricing1">
                              <div className="p-2  bg-success fs-20">
                                Enterprise
                              </div>
                              <div className="p-3 font-weight-normal mb-0">
                                <span className="price">$35</span>
                              </div>
                              <Card.Body className=" text-center pt-0">
                                <ul className="list-unstyled mb-0">
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>10 </strong> FreeDomain Name
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>10</strong> One-Click Apps
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>8</strong> Databases
                                  </li>
                                  <li>
                                    <i className="fe fe-x me-2 text-danger d-inline-flex"></i>
                                    <strong>Money</strong> BackGuarntee
                                  </li>
                                  <li>
                                    <i className="fe fe-check me-2 d-inline-flex text-success"></i>
                                    <strong>24/7</strong> Support
                                  </li>
                                </ul>
                              </Card.Body>
                              <Card.Footer className="text-center d-grid">
                                <Link
                                  href="#!"
                                  className="btn ripple btn-success btn-block"
                                >
                                  Buy Now
                                </Link>
                              </Card.Footer>
                            </div>
                          </Card>
                        </Col>
                      </Row>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

      </div>
  )
}
Pricing.layout = "Contentlayout"

export default Pricing