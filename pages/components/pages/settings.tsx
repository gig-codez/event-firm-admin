import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Col, Button, Nav, Card, Row } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';

const Settings = () => {
  return (
    <div>
      <Seo title="Settings"/>

    <PageHeader title="Settings" item="Pages" active_item="Settings"/>
      
    <Row className="row-sm">
      <Col lg={4} xl={3}>
        <Card className="custom-card">
          <Card.Header>
            <div>
              <h3 className="card-title fs-18">
                <label className="main-content-label fs-15">Settings</label>
              </h3>
            </div>
          </Card.Header>
          <Card.Body>
            <div className="main-content-left main-content-left-mail">
              <div className="main-mail-menu">
                <Nav className="nav main-nav-column ">
                  <Nav.Link href="#Account" className="thumb active">
                    <i className="fe fe-user"></i> Account
                  </Nav.Link>

                  <Nav.Link
                    className="thumb "
                    href="#Privacy&Security"
                  >
                    <i className="fe fe-lock"></i> Privacy & Security
                  </Nav.Link>

                  <Nav.Link
                    className="thumb "
                    href="#General"
                  >
                    <i className="fe fe-edit-2"></i> General
                  </Nav.Link>

                  <Nav.Link
                    className="thumb "
                    href="#Help&Support"
                  >
                    <i className="fe fe-info"></i> Help & Support
                  </Nav.Link>

                  <Nav.Link
                    className="thumb "
                    href="#Emails"
                  >
                    <i className="fe fe-mail"></i> Emails
                  </Nav.Link>

                  <Nav.Link
                    className="thumb "
                    href="#Language&Region"
                  >
                    <i className="fe fe-flag"></i> Language & Region
                  </Nav.Link>

                  <Nav.Link
                    className="thumb "
                    href="#Notifications"
                  >
                    <i className="fe fe-bell"></i> Notifications
                  </Nav.Link>

                  <Nav.Link
                    className="thumb "
                    href="#Blog"
                  >
                    <i className="fe fe-settings"></i> Blog
                  </Nav.Link>
                </Nav>
              </div>
            </div>
          </Card.Body>
          <Card.Footer className="card-footer px-4 rounded-0 d-grid">
            <Button variant="primary" className="w-lg">Save Changes</Button>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={8} xl={9}>
        <Row className="row-sm">
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-home fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          DASHBOARD
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          Dashboard Settings such as sidemenu,header and main
                          page can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">
                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1"/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-layout-grid2 fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          WEB APPS
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          Web apps settings such as Apps,Elements,Advanced Ui &
                          Mail can be Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">
                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1" defaultChecked/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-pencil fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          GENERAL
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          General settings such as Icons,Charts,Ecommerce can be
                          Controlled.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">
                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1" defaultChecked/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-flag-alt-2 fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          LANGUAGE & REGION
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          In this settings we can change the region and language
                          manually.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">
                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1"/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-bell fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          NOTIFICATION
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          Notification settings we can control the notification
                          privacy and security.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">
                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1" defaultChecked/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-settings fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          BLOG
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          In this settings we can modify all Blog related
                          settings in this template.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">
                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1"/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-lock fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          PRIVACY & SECURITY
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          In this we can control the privacy related settings.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">

                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1"/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col xl={6}>
            <Card className="custom-card">
              <Card.Body>
                <Row>
                  <Col lg={12}>
                    <div className="d-flex">
                      <div className="settings-main-icon me-4">
                        <div className="avatar avatar-md bg-primary-transparent text-primary">
                          <i className="ti-info-alt fs-18"></i>
                        </div>
                      </div>
                      <div>
                        <h5 className="fs-14 d-flex text-dark tx-uppercase">
                          HELP & SUPPORT
                        </h5>
                        <p className="fs-13 text-muted mb-0">
                          In this we can know about how to change settings.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="">
                <Link
                  href="#!"
                className="fs-14 mb-0">

                  Go to Settings
                </Link>
                <div className="form-check form-check-md form-switch float-end mb-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="switch-md1" defaultChecked/>
                                            <label className="form-check-label" htmlFor="switch-md1">Restore default</label>
                                        </div>
            
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
      </div>
  )
}
Settings.layout = "Contentlayout"

export default Settings