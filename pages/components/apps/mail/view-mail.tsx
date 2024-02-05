import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Card, Col, Nav, OverlayTrigger, Row, Tooltip,Dropdown } from "react-bootstrap";
import Link from "next/link"


//images

import user1 from "../../../../public/assets/images/faces/1.jpg"
import user18 from "../../../../public/assets/images/media/media-91.jpg"
import user19 from "../../../../public/assets/images/media/media-92.jpg"
import user20 from "../../../../public/assets/images/media/media-94.jpg"
import Seo from '../../../../shared/layout-components/seo/seo';

const ViewMail = () => {
  return (
    <>
        <Seo title="View Mail"/>

    <PageHeader title="View-Mail" item="Apps" active_item="View-Mail"/>

    <div>
        {/* <!-- Row --> */}
		<Row className="row-sm">
      <Col lg={4} xl={3} md={12}>
        <Card className="custom-card">
          <Card.Body>
          <div className="">
                                    <div className="d-grid">
                                        <Link className="btn ripple btn-primary btn-compose" href="/components/apps/mail/mail-compose/">Compose</Link>
                                    </div>
                                    
                                    <div className="main-mail-menu pd-r-0 mg-t-20">
                                        <nav className="nav main-nav-column mg-b-20">
                                            <a className="nav-link active" href="#!">
                                                <i className="fs-18 fe fe-mail"></i> Inbox <span className="badge bg-light">20</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-star"></i> Starred <span className="badge bg-primary">3</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-bookmark"></i> Important <span className="badge bg-secondary">10</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-send"></i> Sent Mail <span className="badge bg-success">8</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-edit-2"></i> Drafts <span className="badge bg-danger">15</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-disc"></i> Spam <span className="badge bg-warning">128</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-trash-2"></i> Trash <span className="badge bg-info">6</span>
                                            </a>
                                        </nav>
                                        <label className="main-content-label main-content-label-sm">Label</label>
                                        <nav className="nav main-nav-column">
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-folder"></i> Social <span className="badge bg-primary">10</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-folder"></i> Promotions <span className="badge bg-secondary">22</span>
                                            </a>
                                            <a className="nav-link" href="#!">
                                                <i className="fs-18 fe fe-folder"></i> Updates <span className="badge bg-success">17</span>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={8} xl={9} md={12}>
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div className="email-media">
              <div className="mb-4 d-lg-flex">
                <h3>Congratulations on your goal you achieved ! </h3>
                <div className="ms-auto fs-18 d-flex">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>Print</Tooltip>}
                  >
                    <i
                      className="fe fe-printer me-3 fs-inverse"
                      data-bs-toggle="tooltip"
                      title="print"
                      data-bs-original-title="Print"
                    ></i>
                  </OverlayTrigger>

                  <OverlayTrigger
                    placement="top"
                    // className="me-3 fs-inverse"
                    overlay={<Tooltip>Undo</Tooltip>}
                  >
                    <i
                      className="fe fe-tag me-3 fs-inverse"
                      data-bs-toggle="tooltip"
                      title="yndo"
                      data-bs-original-title="Undo"
                    ></i>
                  </OverlayTrigger>
                </div>
              </div>
              <div className="media mt-0">
                <div className="main-img-user avatar-md me-3 online">
                  <img alt="avatar" className="rounded-circle"
                    src={"../../../../assets/images/faces/1.jpg"}
                  />
                </div>
                <div className="media-body text-gray fs-inverse">
                  <div className="float-end d-none d-md-flex fs-15 profile-dropdown">
                    <small className="me-2">Nov 2, 2020 12:45 pm</small>
                    <small className="me-2 d-inline-flex">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Rated</Tooltip>}
                      >
                        <i
                          className="fe fe-star"
                          data-bs-toggle="tooltip"
                          title="rated"
                          data-bs-original-title="Rated"
                        ></i>
                      </OverlayTrigger>
                    </small>

                    <small className="me-2">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Reply</Tooltip>}
                      >
                        <i
                          className="fa fa-reply"
                          data-bs-toggle="tooltip"
                          title="reply"
                          data-bs-original-title="Reply"
                        ></i>
                      </OverlayTrigger>
                    </small>
               
                    <Dropdown className="me-2">
                        <Dropdown.Toggle className='p-0' href="#" data-bs-toggle="dropdown" variant="" role="button" aria-haspopup="true" aria-expanded="false">
                        <OverlayTrigger
                    placement="top"
                    // className="me-3 fs-inverse"
                    overlay={<Tooltip>View more</Tooltip>}
                  >
                    <i
                      className="fe fe-more-horizontal text-dark"
                      data-bs-toggle="tooltip"
                      title="View more"
                      data-bs-original-title="View more"
                    ></i>
                  </OverlayTrigger>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end shadow">
                                                        <Dropdown.Item className="dropdown-item" href="#">Reply</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item" href="#">Report Spam</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item" href="#">Delete</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item" href="#">Show Original</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item" href="#">Print</Dropdown.Item>
                                                        <Dropdown.Item className="dropdown-item" href="#">Filter</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                  </div>
                  <div className="media-title fw-medium">
                    <span className="fs-18 fw-semibold">Sonia Taylor</span>
                    <p className="mb-0 text-muted">sonai@gmail.com </p>
                    <small className="me-2 d-md-none">
                      Nov 2, 2020 12:45 pm
                    </small>
                    <small className="me-2 d-md-none d-inline-flex"><i className="fe fe-star" data-bs-toggle="tooltip" title="" data-bs-original-title="Rated"></i></small>
                    <small className="me-2 d-md-none">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Rated</Tooltip>}
                      >
                        <i
                          className="fa fa-reply"
                          data-bs-toggle="tooltip"
                          title="rated"
                        ></i>
                      </OverlayTrigger>
                    </small>
                    {/* <small className="me-2 d-md-none">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>More</Tooltip>}
                      >
                        <i
                          className="fe fe-more-horizontal text-dark"
                          data-bs-toggle="tooltip"
                          title="more"
                        ></i>
                      </OverlayTrigger>
                    </small> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="eamil-body">
              <h6 className="mb-3">Hi Sir/Madam</h6>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>
              <p>
                Nor again is there anyone who loves or pursues or desires to
                obtain pain of itself, because it is pain, but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure. To take a trivial example,
                which of us ever undertakes laborious physical exercise, except
                to obtain some advantage from it?
              </p>
              <p className="mb-0">Thanking you Sir/Madam</p>
              <hr />
              <div className="email-attch">
                <div className="float-end">

                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip>download</Tooltip>}
                  >
                    <i
                      className="fa fa-download text-dark"
                      title="Download"
                    ></i>
                  </OverlayTrigger>
                </div>
                <p>
                  3 Attachments<Link href="#!" className='mx-1 d-inline-flex'> View All Images</Link>
                </p>
                <div className="emai-img">
                  <div className="row row-sm">
                    <div className="col-sm-3">
                      <Link href="#!">
                        <img
                          className="w-100 rounded-3"
                          src={"../../../../assets/images/media/media-69.jpg"}
                          alt="Generic placeholder"
                        />
                      </Link>
                      <h6 className="mb-3 mt-3 mb-lg-0">
                        img_01.jpg <small className="text-muted">12kb</small>
                      </h6>
                    </div>
                    <div className="col-sm-3">
                      <Link href="#!">
                        <img
                          className="w-100 rounded-3"
                          src={"../../../../assets/images/media/media-70.jpg"}
                          alt="Generic placeholder "
                        />
                      </Link>
                      <h6 className="mb-3 mt-3 mb-lg-0">
                        img_02.jpg <small className="text-muted">18kb</small>
                      </h6>
                    </div>
                    <div className="col-sm-3">
                      <Link href="#!">
                        <img
                          className="w-100 rounded-3"
                          src={"../../../../assets/images/media/media-72.jpg"}
                          alt="Generic placeholder"
                        />
                      </Link>
                      <h6 className=" mt-3 mb-lg-0">
                        img_03.jpg <small className="text-muted">21kb</small>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Link  href="#!" className="btn ripple btn-primary mt-1 mb-1 me-1">
              <i className="fa fa-reply"></i> Reply
            </Link>
            <Link href="#!" className="btn ripple btn-secondary mt-1 mb-1 me-1">
              <i className="fa fa-share"></i> Forward
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
    </div>
    </>
  )
}
ViewMail.layout = "Contentlayout"

export default ViewMail