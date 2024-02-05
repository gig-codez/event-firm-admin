import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Col, Row, Card } from "react-bootstrap";
import dynamic from 'next/dynamic'
import Seo from '../../../shared/layout-components/seo/seo';
// import Gallery2 from '../../../shared/data/pages/gallery';
// import * as gallery from "../../../shared/data/pages/gallery";
const Gallery2 = dynamic(
	() => import('../../../shared/data/pages/gallery'),
	{ ssr: false }
  )

const Gallery = () => {

  return (
    <div>
      <Seo title="Gallery"/>

    <PageHeader title="Gallery" item="Pages" active_item="Gallery"/>
      
	  {/* <!-- Row --> */}
	  <Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className=" custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">React-light-gallery</h6>
              <p className="text-muted card-sub-title">
                gif A customizable, modular, responsive,react-photoswipe-gallery
              </p>
            </div>
            <Gallery2 />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
    </div>
  )
}
Gallery.layout = "Contentlayout"

export default Gallery