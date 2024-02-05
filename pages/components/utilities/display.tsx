import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Row, Card, Col, Button, Table, Breadcrumb, } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';

//Images
import users5 from "../../../public/assets/images/faces/5.jpg" 
import users4 from "../../../public/assets/images/faces/4.jpg" 


const Display = () => {
  return (
    <div>
      <Seo title="Display"/>

    <PageHeader title="Display" item="Utilities" active_item="Display"/>
      
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col xl={9} lg={12}>
        <Card className=" custom-card" id="basic">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Basic Display</h6>
              <p className="text-muted  card-sub-title">
                The following display utilities classNamees will set display
                property of an element.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.d-inline</code>
                    </td>
                    <td>Set an inline display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-inline-block</code>
                    </td>
                    <td>Set an inline-block display property of an element.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block</code>
                    </td>
                    <td>Set a block display property of an element.</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className=" custom-card" id="hiding">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Hiding Elements</h6>
              <p className="text-muted  card-sub-title">
                For faster mobile-friendly development, use responsive display
                classNamees for showing and hiding elements by device.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-40p">className</th>
                    <th className="wd-60p">Screen Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.d-none</code>
                    </td>
                    <td>Hidden on all</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-sm-block</code>
                    </td>
                    <td>Hidden only on xs</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-sm-none .d-md-block</code>
                    </td>
                    <td>Hidden only on sm</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-md-none .d-lg-block</code>
                    </td>
                    <td>Hidden only on md</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-lg-none .d-xl-block</code>
                    </td>
                    <td>Hidden only on lg</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-xl-none</code>
                    </td>
                    <td>Hidden only on xl</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block</code>
                    </td>
                    <td>Visible on all</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-block .d-sm-none</code>
                    </td>
                    <td>Visible only on xs</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-sm-block .d-md-none</code>
                    </td>
                    <td>Visible only on sm</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-md-block .d-lg-none</code>
                    </td>
                    <td>Visible only on md</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-lg-block .d-xl-none</code>
                    </td>
                    <td>Visible only on lg</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.d-none .d-xl-block</code>
                    </td>
                    <td>Visible only on xl</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className=" custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={users5.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1 tx-inverse">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3" >
				View Profile
              </Link>
            </Card.Body>
          </Card>
          <Card className=" custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={users4.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1 tx-inverse">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-secondary btn-sm mt-3" >
				View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
      </div>
  )
}
Display.layout = "Contentlayout"

export default Display