import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Col, Dropdown, Row, Card, Nav, Button, Table } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../../shared/layout-components/seo/seo';
const MailInbox = () => {
  return (
    <>
        <Seo title="Mail Inbox"/>
    <PageHeader title="Mail-Inbox" item="Apps" active_item="Mail-Inbox"/>
    <div>

  {/* <!-- row --> */}
  <Row className="row-sm">
      <Col xl={3} lg={4} >
        <Card className=" custom-card mail-container task-container overflow-hidden">
          <div className="">
            <div className="p-4 border-bottom d-grid">
              <Link href="/components/apps/mail/mail-compose"
                className="btn btn-primary btn-block btn-compose"
                id="btnCompose"
              >
                Compose
              </Link>
            </div>
            <Card.Body className="card-body tab-list-items">
              <div className="main-content-left main-content-left-mail">
                <div className="main-mail-menu">
                  <Nav className=" main-nav-column mg-b-20" defaultActiveKey="Inbox" >
                      <Nav.Link eventKey="Inbox">
                        <i className="fe fe-mail"></i> Inbox <span>20</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Starred">
                        <i className="fe fe-star"></i> Starred <span>3</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Important">
                        <i className="fe fe-bookmark"></i> Important
                        <span>10</span>
                      </Nav.Link>
                      <Nav.Link eventKey="SentMail">
                        <i className="fe fe-send"></i> Sent Mail <span>8</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Drafts">
                        <i className="fe fe-edit"></i> Drafts <span>15</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Spam">
                        <i className="fe fe-disc"></i> Spam <span>128</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Spam">
                        <i className="fe fe-trash"></i> Trash <span>6</span>
                      </Nav.Link>
                  </Nav>
                  <label className="main-content-label main-content-label-sm">
                    Label
                  </label>
                  <Nav className="nav main-nav-column mg-b-20">
                      <Nav.Link eventKey="Social">
                        <i className="fe fe-folder"></i> Social <span>10</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Work">
                        <i className="fe fe-folder"></i> Work <span>22</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Personal">
                        <i className="fe fe-folder"></i> Personal <span>22</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Promotions">
                        <i className="fe fe-folder"></i> Promotions
                        <span>22</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Updates">
                        <i className="fe fe-folder-plus"></i> Updates
                        <span>17</span>
                      </Nav.Link>
                  </Nav>
                  <label className="main-content-label main-content-label-sm">
                    Tags
                  </label>
                  <Nav className="nav main-nav-column">
                      <Nav.Link eventKey="Twitter">
                        <i className="fe fe-twitter"></i> Twitter <span>2</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Github">
                        <i className="fe fe-github"></i> Github <span>32</span>
                      </Nav.Link>
                      <Nav.Link eventKey="Gitlab">
                        <i className="fe fe-gitlab"></i> Gitlab <span>23</span>
                      </Nav.Link>
                  </Nav>
                </div>
                {/* <!-- main-mail-menu --> */}
              </div>
            </Card.Body>
          </div>
        </Card>
      </Col>
      <Col xl={9} lg={8} className=" main-content-body-mail1">
        <Card className="custom-card mail-container task-container overflow-hidden">
          <div className="inbox-body p-4">
            <div className="mail-option d-sm-flex justify-content-between align-items-start">
              <div>

              <div className="chk-all border-0 profile-dropdown">
                <Dropdown className="btn-group me-1">
                  <Dropdown.Toggle variant="default"
                    href="#!"
                    className="btn mini all"
                  >
                    All
                    <i className="fe fe-chevron-down"></i>
                    {/* <i className="fe fe-chevron-down"></i> */}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#!">
                      None
                    </Dropdown.Item>
                    <Dropdown.Item href="#!">
                      Read
                    </Dropdown.Item>
                    <Dropdown.Item href="#!">
                      Unread
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="btn-group me-1">
                <Link href="#!"
                  data-bs-original-title="Refresh"
                  data-bs-placement="top"
                  className="btn mini tooltips"
                >
                  <i className="fe fe-refresh-cw"></i>
                </Link>
              </div>
              <Dropdown className="btn-group hidden-phone profile-dropdown" >
                <Dropdown.Toggle
                  href="#!"
                  className="btn mini blue"
                  aria-expanded="false"
                  variant="default"
                >
                  More
                  <i className="fe fe-chevron-down"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu">
                  <Dropdown.Item href="#!">

                    <i className="fe fe-edit me-2"></i> Mark as Read

                  </Dropdown.Item>
                  <Dropdown.Item href="#!">

                    <i className="fe fe fe-slash me-2"></i> Spam

                  </Dropdown.Item>
                  <Dropdown.Item href="#!">

                    <i className="fe fe-trash me-2"></i> Delete

                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
              <ul className="unstyled inbox-pagination ps-0 mt-2 mt-sm-0">
                <li>
                  <span>1-50 of 234</span>
                </li>

                <li>
                  <Link href="#!" className="btn np-btn">
                    <i className="fe fe-chevron-right pagination-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="table-responsive">
              <Table className="table table-inbox text-md-nowrap table-hover text-nowrap">
                <tbody>
                  <tr>
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Tim Reid, S P N
                    </td>
                    <td className="view-message">Boost Your Website Traffic</td>
                    <td className="view-message text-end fw-semibold">
                      April 01
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Freelancer.com
                    </td>
                    <td className="view-message">
                      Stop wasting your visitors
                    </td>
                    <td className="view-message text-end fw-semibold">
                      May 23
                    </td>
                  </tr>
                  <tr className="unread">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message  dont-show">PHPClass</td>
                    <td className="view-message ">
                      Added a new className: Login className Fast Site
                    </td>
                    <td className="view-message  text-end">9:27 AM</td>
                  </tr>

                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Facebook
                    </td>
                    <td className="view-message view-message">
                      Somebody requested a new Password
                    </td>
                    <td className="view-message text-end fw-semibold">
                      June 13
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Skype
                    </td>
                    <td className="view-message view-message">
                      Password successfully changed
                    </td>
                    <td className="view-message text-end fw-semibold">
                      March 24
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Google+
                    </td>
                    <td className="view-message">alireza, do you know</td>
                    <td className="view-message text-end fw-semibold">
                      March 09
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      WOW Slider
                    </td>
                    <td className="view-message">
                      New WOW Slider v7.8 - 67% off
                    </td>
                    <td className="view-message text-end fw-semibold">
                      March 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      LinkedIn Pulse
                    </td>
                    <td className="view-message">
                      The One Sign Your Co-Worker Will Stab
                    </td>
                    <td className="view-message text-end fw-semibold">
                      Feb 19
                    </td>
                  </tr>
                  <tr className="unread">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Google Webmaster
                    </td>
                    <td className="view-message">
                      Improve the search presence of WebSite
                    </td>
                    <td className="view-message text-end fw-semibold">
                      March 15
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      JW Player
                    </td>
                    <td className="view-message">
                      Last Chance: Upgrade to Pro for
                    </td>
                    <td className="view-message text-end fw-semibold">
                      March 15
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Drupal Community
                    </td>
                    <td className="view-message view-message">
                      Welcome to the Drupal Community
                    </td>
                    <td className="view-message text-end fw-semibold">
                      March 04
                    </td>
                  </tr>

                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started text-warning"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="dont-show fw-semibold">Zoosk </td>
                    <td className="view-message">
                      7 new singles we think {`you'll`} like
                    </td>
                    <td className="view-message text-end fw-semibold">
                      May 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      LinkedIn
                    </td>
                    <td className="view-message">
                      Alireza: Nokia Networks, System Group and
                    </td>
                    <td className="view-message text-end fw-semibold">
                      February 25
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="dont-show fw-semibold">Facebook</td>
                    <td className="view-message view-message">
                      Your account was recently logged into
                    </td>
                    <td className="view-message text-end fw-semibold">
                      March 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Twitter
                    </td>
                    <td className="view-message">
                      Your Twitter password has been changed
                    </td>
                    <td className="view-message text-end fw-semibold">
                      April 07
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      InternetSeer
                    </td>
                    <td className="view-message">Performance Report</td>
                    <td className="view-message text-end fw-semibold">
                      July 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Bertina
                    </td>
                    <td className="view-message">
                      IMPORTANT:{` Don't`} lose your domains!
                    </td>
                    <td className="view-message text-end fw-semibold">
                      June 16
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark text-danger"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Laura Gaffin, S P N
                    </td>
                    <td className="view-message">
                      Your Website On Google (Higher Rankings Are Better)
                    </td>
                    <td className="view-message text-end fw-semibold">
                      August 10
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Facebook
                    </td>
                    <td className="view-message view-message">
                      Alireza Zare Login faild
                    </td>
                    <td className="view-message text-end fw-semibold">
                      feb 14
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star inbox-started"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      AddMe.com
                    </td>
                    <td className="view-message">
                      Submit Your Website to the AddMe Business Directory
                    </td>
                    <td className="view-message text-end fw-semibold">
                      August 10
                    </td>
                  </tr>
                  <tr className="">
                    <td className="inbox-small-cells">
                      <label className="custom-control custom-checkbox mb-0">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="example-checkbox2"
                          value="option2"
                        />
                        <span className="custom-control-label"></span>
                      </label>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-star"></i>
                    </td>
                    <td className="inbox-small-cells">
                      <i className="fa fa-bookmark"></i>
                    </td>
                    <td className="view-message dont-show fw-semibold">
                      Terri Rexer, S P N
                    </td>
                    <td className="view-message view-message">
                      Forget Google AdWords: Un-Limited Clicks fo
                    </td>
                    <td className="view-message text-end fw-semibold">
                      April 14
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          {/* <inbox.SimpleSnackbar/> */}
          {/* <!-- mail-content --> */}
        </Card>
      </Col>
    </Row>
    {/* <!-- /row --> */}
    </div>
    </>
  )
}
MailInbox.layout = "Contentlayout"

export default MailInbox