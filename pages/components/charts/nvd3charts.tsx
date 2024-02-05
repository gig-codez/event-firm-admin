import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Card, Col, Row } from "react-bootstrap";
import Nvd3Charts from "react-nvd3";
import "../../../node_modules/nvd3/build/nv.d3.css";
import * as nvd from "../../../shared/data/chart/nvd";
import Seo from '../../../shared/layout-components/seo/seo';

const Nvd3charts = () => {
  return (
    <div>
        <Seo title="Nvd3Charts"/>

      <PageHeader title="nvd3charts" item="Charts" active_item="nvd3charts"/>
      {/* <!-- Row --> */}
    <Row className=" row-sm">
      <Col lg={6} md={12}>
        <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1"> Line Chart With Zooming Options</h6>
              <p className="text-muted  card-sub-title mb-1">
                  Below is the basic  Line Chart With Zooming Options example.
              </p>
            </Card.Header>
          <Card.Body>
            <div> <Nvd3Charts
              type="lineChart"
              datum={nvd.LineChart}
            />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} >
        <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">Bar Chart</h6>
              <p className="text-muted  card-sub-title mb-1">
                  Below is the basic line chart example.
              </p>
            </Card.Header>
          <Card.Body>
            <div>
              <Nvd3Charts
                id="nvd3-chart1"
                type="discreteBarChart"
                datum={nvd.BarChart2}
                x="label"
                y="value"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={6} md={12} >
        <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">Bar Chart</h6>
              <p className="text-muted  card-sub-title mb-1">
                  Below is the basic bar chart example..
              </p>
            </Card.Header>
          <Card.Body>
            <div>
              <Nvd3Charts
                id="nvd3-chart1"
                type="discreteBarChart"
                datum={nvd.BarChart2}
                x="label"
                y="value"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} md={12} >
        <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">Bar Chart With Multiple colors</h6>
              <p className="text-muted  card-sub-title mb-1">
                  Below is the basic Bar Chart With Multiple colors example..
              </p>
            </Card.Header>
          <Card.Body>
            <div className="" id=""><Nvd3Charts
              id="nvd3-chart1"
              type="discreteBarChart"
              datum={nvd.BarChart}
              x="label"
              y="value"
            /> </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      </div>
  )
}
Nvd3charts.layout = "Contentlayout"

export default Nvd3charts