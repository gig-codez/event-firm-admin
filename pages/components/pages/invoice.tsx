import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Button, Col, Row, Card, Table } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';

const Invoice = () => {
  return (
    <div>
      <Seo title="Invoice"/>

    <PageHeader title="Invoice" item="Pages" active_item="Invoice"/>
      
    {/* <!-- End Page Header --> */}
    <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <div className="d-lg-flex">
              <h2 className="main-content-label mb-1">#INV0678</h2>
              <div className="ms-auto">
                <p className="mb-1">
                  <span className="fw-semibold">Invoice Date :</span> 01st
                  November 2020
                </p>
                <p className="mb-0">
                  <span className="fw-semibold">Due Date :</span> 01 May
                  2020
                </p>
              </div>
            </div>
            <hr className="mg-b-40" />
            <Row className="row-sm">
              <Col lg={6}>
                <p className="h3">Invoice Form:</p>
                <address>
                  Street Address
                  <br />
                  State, City
                  <br />
                  Region, Postal Code
                  <br />
                  yourdomain@example.com
                </address>
              </Col>
              <Col lg={6} className=" text-end">
                <p className="h3">Invoice To:</p>
                <address>
                  Street Address
                  <br />
                  State, City
                  <br />
                  Region, Postal Code
                  <br />
                  ypurdomain@example.com
                </address>
              </Col>
            </Row>
            <div className="table-responsive mg-t-40">
              <Table bordered className="table table-invoice">
                <thead>
                  <tr>
                    <th className="wd-20p">Product</th>
                    <th className="wd-40p">Description</th>
                    <th className="tx-center">QNTY</th>
                    <th className="tx-right">Unit</th>
                    <th className="tx-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Logo Creation</td>
                    <td className="fs-12">Logo and business cards design</td>
                    <td className="tx-center">2</td>
                    <td className="tx-right">$60.00</td>
                    <td className="tx-right">$120.00</td>
                  </tr>
                  <tr>
                    <td>Online Store Design & Development</td>
                    <td className="fs-12">
                      Design/Development for all popular modern browsers
                    </td>
                    <td className="tx-center">3</td>
                    <td className="tx-right">$80.00</td>
                    <td className="tx-right">$240.00</td>
                  </tr>
                  <tr>
                    <td>App Design</td>
                    <td className="fs-12">Promotional mobile application</td>
                    <td className="tx-center">1</td>
                    <td className="tx-right">$40.00</td>
                    <td className="tx-right">$40.00</td>
                  </tr>
                  <tr>
                    <td className="valign-middle" colSpan={2} rowSpan={4}>
                      <div className="invoice-notes">
                        <label className="main-content-label fs-13">
                          Notes
                        </label>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </p>
                      </div>
                      {/* <!-- invoice-notes --> */}
                    </td>
                    <td className="tx-right">Sub-Total</td>
                    <td className="tx-right" colSpan={2}>
                      $400.00
                    </td>
                  </tr>
                  <tr>
                    <td className="tx-right">Tax</td>
                    <td className="tx-right" colSpan={2}>
                      3%
                    </td>
                  </tr>
                  <tr>
                    <td className="tx-right">Discount</td>
                    <td className="tx-right" colSpan={2}>
                      10%
                    </td>
                  </tr>
                  <tr>
                    <td className="tx-right tx-uppercase tx-bold tx-inverse">
                      Total Due
                    </td>
                    <td className="tx-right" colSpan={2}>
                      <h4 className="tx-bold">$450.00</h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Footer className=" text-end">
            <Button variant="primary" type="button" className="btn ripple  mb-1 me-2">
              <i className="fe fe-credit-card me-1"></i> Pay Invoice
            </Button>
            <Button variant="secondary"
              type="button"
              className="btn ripple mb-1 me-2"
            >
              <i className="fe fe-send me-1"></i> Send Invoice
            </Button>
            <Button variant="info"
              type="button"
              className="btn ripple  mb-1 me-2"
              onClick={() => { window.print() }}
            >
              <i className="fe fe-printer me-1"></i> Print Invoice
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --></div> */}
      </div>
  )
}
Invoice.layout = "Contentlayout"

export default Invoice