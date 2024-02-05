import React from 'react'
import { Tabs, OverlayTrigger, Tooltip, Tab, Breadcrumb, Button, Col, Row, Nav, Card, Form, InputGroup, Dropdown } from "react-bootstrap";
import Link from "next/link"
import PerfectScrollbar from "react-perfect-scrollbar";

import SimpleBar from 'simplebar-react';

const ChatCom = () => {
  type Placement = 'top' | 'right' | 'bottom' | 'left';
  return (
    <div>
      <Row className="row-sm">
      <Col sm={12} md={12} lg={12} xl={6} xxl={3}>
        <Card className="custom-card">
          <div className="main-chat-list tab-pane p-0">
            <div className="main-content-left main-content-left-chat">
              <Card.Body className="px-0">
                <InputGroup className="px-4 pt-0 pb-4 border-bottom">
                  <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Search ..."
                  />
                  <span>
                    <Button
                      variant="primary"
                      className="btn ripple btn-primary"
                      type="button"
                    >
                      Search
                    </Button>
                  </span>
                </InputGroup>
                <Tabs
                  className="nav main-nav-line main-nav-line-chat card-body border-bottom"
                  defaultActiveKey="ChatList"
                  id="uncontrolled-tab-example"
                >
                  <Tab
                    eventKey="ChatList"
                    title="Recent Chat"
                    className="nav-link "
                    data-bs-toggle="tab"
                  >
                    <div className="tab-pane br-10 " id="ChatList">
                    <SimpleBar  style={{ maxHeight: 610 }}>

                        <div className="main-chat-list tab-pane">
                          <Link href="#!" className="media new">
                            <div className="main-img-user online">
                              <img alt="user5" src={"../../../assets/images/faces/5.jpg"} /> 
                              <span>2</span>
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Socrates Itumay</span>
                                <span>2 hours</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user6" src={"../../../assets/images/faces/6.jpg"} /> <span>1</span>
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Dexter dela Cruz</span>
                                <span>3 hours</span>
                              </div>
                              <p>
                                Maec enas tempus, tellus eget con dime ntum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user online">
                              <img alt="user9" src={"../../../assets/images/faces/9.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Reynante Labares</span>
                                <span>10 hours</span>
                              </div>
                              <p>
                                Nam quam nunc, bl ndit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user1" src={"../../../assets/images/faces/1.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Joyce Chua</span> <span>2 days</span>
                              </div>
                              <p>
                                Ma ecenas tempus, tellus eget con dimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user4" src={"../../../assets/images/faces/4.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Rolando Paloso</span> <span>2 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user7" src={"../../../assets/images/faces/7.jpg"}/> <span>1</span>
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Ariana Monino</span> <span>3 days</span>
                              </div>
                              <p>
                                Maece nas tempus, tellus eget cond imentum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user8" src={"../../../assets/images/faces/8.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Maricel Villalon</span>
                                <span>4 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user12" src={"../../../assets/images/faces/12.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Maryjane Pechon</span> <span>5 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user6" src={"../../../assets/images/faces/6.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Lovely Dela Cruz</span>
                                <span>5 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user10" src={"../../../assets/images/faces/10.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Daniel Padilla</span> <span>5 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user3" src={"../../../assets/images/faces/3.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>John Pratts</span> <span>6 days</span>
                              </div>
                              <p>
                                Mae cenas tempus, tellus eget co ndimen tum
                                rhoncus, sem quam
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media new">
                            <div className="main-img-user">
                              <img alt="user7" src={"../../../assets/images/faces/7.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Raymart Santiago</span>
                                <span>6 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                          <Link href="#!" className="media border-bottom-0">
                            <div className="main-img-user">
                              <img alt="user6" src={"../../../assets/images/faces/6.jpg"} />
                            </div>
                            <div className="media-body">
                              <div className="media-contact-name">
                                <span>Samuel Lerin</span> <span>7 days</span>
                              </div>
                              <p>
                                Nam quam nunc, blandit vel aecenas et ante
                                tincid
                              </p>
                            </div>
                          </Link>
                        </div>
                        {/* <!-- main-chat-list --> */}
                      </SimpleBar>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="ChatCalls"
                    title="Calls"
                    className="nav-link"
                    data-bs-toggle="tab"
                  >
                    <div className="main-chat-list tab-pane" id="ChatCalls">
                    <SimpleBar style={{ maxHeight: 610 }}>
                      
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user7" src={"../../../assets/images/faces/7.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Amelia Taylor</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  Today, 05:30 AM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={"../../../assets/images/faces/4.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Grace Russell</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  Today, 12:15 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user9" src={"../../../assets/images/faces/9.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Joanne Miller</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  Yesterday, 02:15 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-incoming"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user12" src={"../../../assets/images/faces/12.jpg"} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Kimberly Nolan</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  Yesterday, 05:39 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user6" src={"../../../assets/images/faces/6.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Andrea Mackay</span>

                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  29 june 2020, 03:21 AM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-phone-call"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user1" src={"../../../assets/images/faces/1.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Samantha Lewis</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  1 july 2020, 10:23 AM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-incoming"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user2" src={"../../../assets/images/faces/2.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Victoria Kerr</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  1 july 2020, 4:45 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-phone-call"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user7" src={"../../../assets/images/faces/7.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Socrates Itumay</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  2 july 2020, 11:14 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user8" src={"../../../assets/images/faces/8.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Rebecca Johnston</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  3 july 2020, 06:14 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-phone-incoming"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!" className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user3" src={"../../../assets/images/faces/3.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Madeleine James</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  4 july 2020, 5:12 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user5" src={"../../../assets/images/faces/5.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Socrates Itumay</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  4 july 2020, 5:12 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user7" src={"../../../assets/images/faces/7.jpg"} /> <span>2</span>
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Raymart Santiago</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  4 july 2020, 5:12 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={"../../../assets/images/faces/4.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Grace Russell</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  Today, 12:15 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user9" src={"../../../assets/images/faces/9.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Joanne Miller</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  Yesterday, 02:15 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-incoming"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user12" src={"../../../assets/images/faces/12.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Kimberly Nolan</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  Yesterday, 05:39 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user6" src={"../../../assets/images/faces/6.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Andrea Mackay</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  29 june 2020, 03:21 AM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-phone-call"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user1" src={"../../../assets/images/faces/1.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Samantha Lewis</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  1 july 2020, 10:23 AM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-incoming"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user2" src={"../../../assets/images/faces/2.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Victoria Kerr</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  1 july 2020, 4:45 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-phone-call"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                        >
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user7" src={"../../../assets/images/faces/7.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Socrates Itumay</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  2 july 2020, 11:14 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user1" src={"../../../assets/images/faces/1.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Rebecca Johnston</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-down-left text-danger me-2"></i>
                                <p className="text-muted fs-13">
                                  3 july 2020, 06:14 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-danger fe fe-phone-incoming"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user3" src={"../../../assets/images/faces/3.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Madeleine James</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  4 july 2020, 5:12 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user5" src={"../../../assets/images/faces/5.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Socrates Itumay</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fe fe-arrow-up-right text-success me-2"></i>
                                <p className="text-muted fs-13">
                                  4 july 2020, 5:12 PM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-success fe fe-phone-outgoing"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                          className="d-flex align-items-center media"
                          
                        ></Link>
                      </SimpleBar>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="ChatContacts"
                    title="Contacts"
                    className="nav-link"
                    data-bs-toggle="tab"

                  >
                    <div className="main-chat-list tab-pane" id="ChatContacts">
                      <SimpleBar style={{ maxHeight: 610 }}>
                      
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user3" src={"../../../assets/images/faces/3.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Lillian Ross</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user5" src={"../../../assets/images/faces/5.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Socrates Itumay</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={"../../../assets/images/faces/4.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Elizabeth Scott</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Office</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user5" src={"../../../assets/images/faces/5.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Cameron Watson</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user1" src={"../../../assets/images/faces/1.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Christopher Arnold</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={"../../../assets/images/faces/4.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Justin Bailey</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Office</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user7" src={"../../../assets/images/faces/7.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Richard Berry</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user9" src={"../../../assets/images/faces/9.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Abraham Clark</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user4" src={"../../../assets/images/faces/4.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Anderson</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Office</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user2" src={"../../../assets/images/faces/2.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Clarkson Gray</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Home</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user12" src={"../../../assets/images/faces/12.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Henderson Dyer</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Mobile</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                        <Link
                          href="#!"
                        className="d-flex align-items-center media">
                          <div className="mb-0 me-2">
                            <div className="main-img-user online">
                              <img alt="user1" src={"../../../assets/images/faces/1.jpg"} />
                            </div>
                          </div>
                          <div className="align-items-center justify-content-between">
                            <div className="media-body ms-2">
                              <div className="media-contact-name">
                                <span>Marshall Fisher</span>
                                <span></span>
                              </div>
                              <div className="d-flex align-items-center">
                                <p className="text-muted fs-13">Office</p>
                              </div>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <i className="contact-status text-primary fe fe-message-square  me-2"></i>
                            <i className="contact-status text-success fe fe-phone-call me-2"></i>
                            <i className="contact-status text-danger fe fe-video"></i>
                          </div>
                        </Link>
                      </SimpleBar>
                    </div>
                  </Tab>
                </Tabs>
              </Card.Body>

              {/* <!-- main-chat-list --> */}
            </div>
          </div>
        </Card>
      </Col>
      <Col sm={12} md={12} lg={12} xl={6}>
        <Card className="custom-card">
          <div className="main-content-app pt-0">
            <div className="main-content-body main-content-body-chat">
              <div className="main-chat-header pt-3">
                <div className="main-img-user online">
                  <img alt="avatar" src={"../../../assets/images/faces/1.jpg"} />
                </div>
                <div className="main-chat-msg-name">
                  <h6>Sonia Taylor</h6>
                  <span className="dot-label bg-success"></span>
                  <small className="me-3">online</small>
                </div>
                <Nav>
                  <Nav.Link >
                    <i className="fe fe-more-horizontal"></i>
                  </Nav.Link>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Phone Call</Tooltip>}
                  >
                    <Nav.Link><i className="fe fe-phone-call"></i></Nav.Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Video Call</Tooltip>}
                  >
                    <Nav.Link><i className="fe fe-video"></i></Nav.Link>
                  </OverlayTrigger> <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Add Contact</Tooltip>}
                  >
                    <Nav.Link><i className="fe fe-user-plus"></i></Nav.Link>
                  </OverlayTrigger> <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Delete</Tooltip>}
                  >
                    <Nav.Link><i className="fe fe-trash-2"></i></Nav.Link>
                  </OverlayTrigger>
                </Nav>
              </div>
              {/* <!-- main-chat-header --> */}
              <div className="main-chat-body" id="ChatBody">
                <SimpleBar>
                  <div className="content-inner">
                    <label className="main-chat-time">
                      <span>3 days ago</span>
                    </label>
                    <div className="media flex-row-reverse">
                      <div className="main-img-user online">
                        <img alt="avatar" src={"../../../assets/images/faces/2.jpg"} />
                      </div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel...
                        </div>
                        <div className="main-msg-wrapper2">
                          rhoncus ut, imperdiet a, venenatis vitae, justo...
                        </div>
                        <div>
                          <span>9:48 am</span>
                          <Link href="#!">
                            <i className="icon ion-android-more-horizontal"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="main-img-user online">
                        <img alt="avatar" src={"../../../assets/images/faces/1.jpg"} />
                      </div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                          <span>9:32 am</span>
                          <Link href="#!">
                            <i className="icon ion-android-more-horizontal"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse">
                      <div className="main-img-user online">
                        <img alt="avatar" src={"../../../assets/images/faces/2.jpg"} />
                      </div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Nullam dictum felis eu pede mollis pretium
                        </div>
                        <div>
                          <span>11:22 am</span>
                          <Link href="#!">
                            <i className="icon ion-android-more-horizontal"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <label className="main-chat-time">
                      <span>Yesterday</span>
                    </label>
                    <div className="media">
                      <div className="main-img-user online">
                        <img alt="avatar" src={"../../../assets/images/faces/3.jpg"} />
                      </div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor.
                        </div>
                        <div>
                          <span>9:32 am</span>
                          <Link href="#!">
                            <i className="icon ion-android-more-horizontal"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse">
                      <div className="main-img-user online">
                        <img alt="avatar" src={"../../../assets/images/faces/2.jpg"} />
                      </div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Donec quam felis, ultricies nec, pellentesque eu,
                          pretium quis, sem. Nulla consequat massa quis enim.
                          Donec pede justo, fringilla vel, aliquet nec. In enim
                          justo, rhoncus ut, imperdiet a, venenatis vitae,
                          justo.
                        </div>
                        <div className="main-msg-wrapper2">
                          Nullam dictum felis eu pede mollis pretium
                        </div>
                        <div>
                          <span>9:48 am</span>
                          <Link href="#!">
                            <i className="icon ion-android-more-horizontal"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <label className="main-chat-time">
                      <span>Today</span>
                    </label>
                    <div className="media">
                      <div className="main-img-user online">
                        <img alt="avatar" src={"../../../assets/images/faces/3.jpg"} />
                      </div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Maecenas tempus, tellus eget condimentum rhoncus
                        </div>
                        <div className="pd-0">
                          
                          <img className="wd-150 m-1"
                            alt="avatar"
                            src={"../../../assets/images/media/media-69.jpg"}
                          />
                          <img className="wd-150 m-1"
                            alt="avatar"
                            src={"../../../assets/images/media/media-70.jpg"}
                          />
                          <img className="wd-150 m-1"
                            alt="avatar"
                            src={"../../../assets/images/media/media-71.jpg"}
                          />
                        </div>
                        <div>
                          <span>10:12 am</span>
                          <Link href="#!">
                            <i className="icon ion-android-more-horizontal"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="media flex-row-reverse">
                      <div className="main-img-user online">
                        <img alt="avatar" src={"../../../assets/images/faces/2.jpg"} />
                      </div>
                      <div className="media-body">
                        <div className="main-msg-wrapper">
                          Maecenas tempus, tellus eget condimentum rhoncus
                        </div>
                        <div className="main-msg-wrapper2">
                          Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                          id, lorem. Maecenas nec odio et ante tincidunt tempus.
                          Donec vitae sapien ut libero venenatis faucibus.
                        </div>
                        <div>
                          <span>09:40 am</span>
                          <Link href="#!">
                            <i className="icon ion-android-more-horizontal"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SimpleBar>
              </div>
              <div className="main-chat-footer">
                <nav className="nav">
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      data-bs-toggle="tooltip"
                      key={placement}
                      placement='top'
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>Add Photo</Tooltip>
                      }
                    >
                      <i className="fe fe-image nav-link"></i>
                    </OverlayTrigger>
                  ))}

                  {["top"].map((placement) => (
                    <OverlayTrigger
                      data-bs-toggle="tooltip"
                      key={placement}
                      placement='top'
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Attach a File
                        </Tooltip>
                      }
                    >
                      <i className="fe fe-paperclip nav-link"></i>
                    </OverlayTrigger>
                  ))}
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      data-bs-toggle="tooltip"
                      key={placement}
                      placement='top'
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Attach a File
                        </Tooltip>
                      }
                    >
                      <i className="far fa-smile nav-link"></i>
                    </OverlayTrigger>
                  ))}
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      data-bs-toggle="tooltip"
                      key={placement}
                      placement='top'
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                          Record Voice
                        </Tooltip>
                      }
                    >
                      <i className="fe fe-mic nav-link"></i>
                    </OverlayTrigger>
                  ))}
                </nav>
                <input
                  className="form-control bg-transparent"
                  placeholder="Type your message here..."
                  type="text"
                />
                <Link href="#!" className="main-msg-send">
                  {["top"].map((placement) => (
                    <OverlayTrigger
                      data-bs-toggle="tooltip"
                      key={placement}
                      placement='top'
                      overlay={
                        <Tooltip id={`tooltip-${placement}`}>Send</Tooltip>
                      }
                    >
                      <i className="far fa-paper-plane"></i>
                    </OverlayTrigger>
                  ))}
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col sm={12} md={12} lg={12} xl={6} xxl={3}>
        <Card className="card custom-card chat-account overflow-hidden">
          <div className="d-block pt-0 main-content-app overflow-auto">
            <Card.Body className="text-center">
                <div className="user-lock text-center">
                  <div className="user-lock text-center">
                    <Dropdown className="text-end">
                      <Dropdown.Toggle href="#!" className="option-dots text-muted pe-0" variant="default">
                        <i className="fe fe-more-vertical fs-16"></i> </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu-end">
                        <Dropdown.Item href="#!">
                          <i className="fe fe-message-square me-2"></i> Message</Dropdown.Item>
                        <Dropdown.Item href="#!">
                          <i className="fe fe-edit-2 me-2"></i> Edit</Dropdown.Item>
                        <Dropdown.Item href="#!"><i className="fe fe-eye me-2">
                        </i> View</Dropdown.Item> <Dropdown.Item href="#!">
                          <i className="fe fe-trash-2 me-2"></i> Delete</Dropdown.Item> </Dropdown.Menu>
                    </Dropdown>
                    <a href="#!">
                      <span className="rounded-10">
                      <img alt="avatar" className='rounded-10' src={"../../../assets/images/faces/1.jpg"} />
                      </span>
                    </a>
                  </div>
                  <a href="#!"><h5 className=" mb-1 mt-3 fs-13 main-content-label">Sonia Taylor</h5></a>
                  <p className="mb-0 mt-1 text-muted">Web Designer</p>
                </div>
            </Card.Body>
            <Card.Body>
              <h6 className="mb-3 tx-semibold">Contact Details</h6>
              <div className="d-flex">
                <div>
                  <p className="contact-icon text-primary m-0"><i className="fe fe-phone"></i></p>
                </div>
                <div className="ms-3">
                  <p className="fs-13 mb-0 tx-semibold">Phone</p>
                  <p className="fs-12 text-muted">+1 135792468</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <p className="contact-icon text-primary m-0"><i className="fe fe-mail"></i></p>
                </div>
                <div className="ms-3">
                  <p className="fs-13 mb-0 tx-semibold">Email</p>
                  <p className="fs-12 text-muted">harvey@gmail.com.</p>
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <p className="contact-icon text-primary m-0"><i className="fe fe-map-pin"></i></p>
                </div>
                <div className="ms-3">
                  <p className="fs-13 mb-0 tx-semibold">Address</p>
                  <p className="fs-12 text-muted mb-0">California.</p>
                </div>
            </div>
            </Card.Body>
            <Card.Body>
              <h6 className="mb-3 tx-semibold">Shared Files</h6>
              <div className="media mb-3">
                <p className="contact-icon text-primary m-0"><i className="mdi mdi-file-image"></i></p>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-13 text-dark mb-0 tx-semibold">Image1.jpg</p>
                    <span className="fs-12 text-muted">200 KB</span>
                  </div>
                  <div className="ms-auto my-auto">
                    <Link href="#!" className="btn px-0">
						<i className="fe fe-download my-auto text-muted fs-18"></i>
					</Link>
                  </div>
                </div>
              </div>
              <div className="media mb-3">
                <p className="contact-icon text-danger m-0"><i className="mdi mdi-file-pdf"></i></p>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-13 text-dark mb-0 tx-semibold">Doc1.pdf</p>
                    <span className="fs-12 text-muted">48 KB</span>
                  </div>
                  <div className="ms-auto my-auto">
                    <Link href="#!" className="btn px-0">
						<i className="fe fe-download my-auto text-muted fs-18"></i>
					</Link>
                  </div>
                </div>
              </div>
              <div className="media mb-3">
                <p className="contact-icon text-info m-0"><i className="mdi mdi-file-word"></i></p>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-13 text-dark mb-0 tx-semibold">Word1.doc</p>
                    <span className="fs-12 text-muted">35 KB</span>
                  </div>
                  <div className="ms-auto my-auto">
                    <Link href="#!" className="btn px-0">
						<i className="fe fe-download my-auto text-muted fs-18"></i>
					</Link>
                  </div>
                </div>
              </div>
              <div className="media">
                <p className="contact-icon text-warning m-0"><i className="mdi mdi-file-powerpoint"></i></p>
                <div className="media-body ms-3 d-flex">
                  <div className="">
                    <p className="fs-13 text-dark mb-0 tx-semibold">Example1.ppt</p>
                    <span className="fs-12 text-muted">54 KB</span>
                  </div>
                  <div className="ms-auto my-auto">
                    <Link href="#!" className="btn px-0">
						<i className="fe fe-download my-auto text-muted fs-18"></i>
					</Link>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </Col>
    </Row>
    </div>
  )
}

export default ChatCom