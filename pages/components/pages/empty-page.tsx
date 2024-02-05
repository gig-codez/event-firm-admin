import React, { Fragment } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Col, Row, Card } from 'react-bootstrap';
import Seo from '../../../shared/layout-components/seo/seo';

const EmptyPage = () => {
  return (
    <div>
      <Seo title="Empty Page"/>

    <PageHeader title="Empty Page" item="Pages" active_item="Empty Page"/>
      
    {/* <!-- Row --> */}
    <Row className=" sidemenu-height">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>Typing Some text here....</Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
      </div>
  )
}
EmptyPage.layout = "Contentlayout"

export default EmptyPage