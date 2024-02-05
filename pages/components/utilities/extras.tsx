import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Row, Card, Col, Button, Table, Breadcrumb, ProgressBar, } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';

const Extras = () => {
  return (
    <div>
      <Seo title="Extras"/>
    <PageHeader title="Extras" item="Utilities" active_item="Extras"/>
      
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col xl={9} lg={12}>
        <Card className="custom-card" id="opacity">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Opacity Example</h6>
              <p className="text-muted  card-sub-title">
                You can set opacity to an element instantly by using the
                following utilities classNamees for opacity.
              </p>
            </div>
            <div>
              <p className="op-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="op-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.op-[value]</code>
                    </td>
                    <td>0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <Table responsive className="table  main-table-reference mt-0 mb-0">
              <thead>
                <tr>
                  <th className="wd-30p">className</th>
                  <th className="wd-70p">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>.op-[breakpoint]-[value]</code></td>
                  <td>
                    <p className="mg-b-5"> breakpoint: xs | sm | md | lg | xl </p>
                    <p className="mg-b-0">  value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="shadow">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Shadow Example</h6>
              <p className="text-muted  card-sub-title">
                You can add or remove shadow to an element instantly by using
                the following utilities classNamees for shadow.
              </p>
            </div>
            <div>
              <p className="shadow-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <p className="shadow-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
            <Table responsive className="table main-table-reference mt-0 mb-0">
              <thead>
                <tr>
                  <th className="wd-30p">className</th>
                  <th className="wd-70p">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>.shadow-base</code>
                  </td>
                  <td>Add shadow to any box element.</td>
                </tr>
                <tr>
                  <td>
                    <code>.shadow-none</code>
                  </td>
                  <td>Remove shadow to any box element.</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className="custom-card">
            <div>
              <div className="p-3">
                <h6>HTML Project</h6>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>Project status</span> <span>35%</span>
                  </div>
                  <div className="progress-bar-xs">
                    <ProgressBar now={35} variant="primary" role="progressbar" />
                  </div>
                </div>
              </div>
              <div className="p-3 border-top">
                <h6>Wordpress Project</h6>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>Project status</span> <span>50%</span>
                  </div>
                  <div className="progress-bar-xs">
                    <ProgressBar now={50} variant="secondary" role="progressbar" />
                  </div>
                </div>
              </div>
              <div className="p-3 border-top">
                <h6>Angular Project</h6>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>Project status</span> <span>40%</span>
                  </div>
                  <div className="progress-bar-xs">
                    <ProgressBar now={40} variant="info" role="progressbar" />
                  </div>
                </div>
              </div>
              <div className="p-3 border-top">
                <h6>React Project</h6>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>Project status</span> <span>10%</span>
                  </div>
                  <div className="progress-bar-xs">
                    <ProgressBar now={10} variant="danger" role="progressbar" />
                  </div>
                </div>
              </div>
              <div className="p-3 border-top">
                <h6>PHP Project</h6>
                <div className="main-traffic-detail-item">
                  <div>
                    <span>Project status</span> <span>70%</span>
                  </div>
                  <div className="progress-bar-xs">
                    <ProgressBar now={70} variant="success" role="progressbar" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
      </div>
  )
}
Extras.layout = "Contentlayout"

export default Extras