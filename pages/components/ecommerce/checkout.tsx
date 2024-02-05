import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Card, Col, Row } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
import {AccordionWizardForm} from "../../../shared/data/e-commerce/checkout"

const Checkout = () => {
  return (
    <>
    <Seo title="Checkout"/>

    <PageHeader title="Checkout" item="Ecommerce" active_item="Checkout"/>

    {/* <!-- Row --> */}
    <Row>
      <Col xl={12}>
        <Card className="custom-card">
          <Card.Header className="bg-transparent border-bottom-0">
            <div>
              <label className="main-content-label mb-2">Checkout</label>
              <span className="d-block fs-12 mb-0 text-muted">
                The Project Budget is a tool used by project managers to
                estimate the total cost of a project
              </span>
            </div>
          </Card.Header>
          <Card.Body className=''>
            <Row>
              <Col xl={6} className="col-xl-8 mx-auto">
                <div className="checkout-steps wrapper">
                  <div id="checkoutsteps">
                    <AccordionWizardForm />
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
    </>
  )
}

Checkout.layout = "Contentlayout"


export default Checkout