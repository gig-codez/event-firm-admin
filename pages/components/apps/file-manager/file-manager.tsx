import React, { useState } from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import {
	Card,
	Col,
	Dropdown,
	Nav,
	Pagination,
	Row,Button, Modal
  } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../../shared/layout-components/seo/seo';
import { FilePond } from 'react-filepond';

const FileManager = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [files, setFiles] = useState([]);
  const [filesimade, setFilesimage] = useState([]);
  return (
    <>
        <Seo title="File Manager"/>

    <PageHeader title="File Manager" item="File Manager" active_item="File Manager"/>

    <div className="row row-sm">
      <div className="col-lg-4 col-xxl-3">
        <Card className="custom-card">
          <div className="d-grid p-4 border-bottom">

		  <a className="btn ripple btn-primary" onClick={handleShow}>
        Add New File
      </a>
          </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FilePond className='mt-3 mb-5 mt-lg-0'
                  files={filesimade}
                  allowReorder={true}
                  allowMultiple={false}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Add
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
        
          <div className="card-body tab-list-items py-3">
            <div className="main-content-left main-content-left-mail">
              <div className="main-mail-menu">
                <Nav
                  className="nav main-nav-column mg-b-20"
                  defaultActiveKey="/"
                  activeKey="/home">
                    <Nav.Link className="active">
                      <i className="fe fe-video"></i> Video <span>30 MB</span>
                    </Nav.Link>
                    <Nav.Link href="#!">
                      <i className="fe fe-image"></i> Images <span>21 MB</span>
                    </Nav.Link>
                    <Nav.Link href="#!">
                      <i className="fe fe-music"></i> Music <span>14 MB</span>
                    </Nav.Link>
                    <Nav.Link href="#!">
                      <i className="fe fe-download"></i>Download
                      <span>8 MB</span>
                    </Nav.Link>
                    <Nav.Link href="#!">
                      <i className="fe fe-file-text"></i> Docs
                      <span>16 MB</span>
                    </Nav.Link>
                    <Nav.Link href="#!">
                      <i className="fe fe-grid"></i> More <span>19 MB</span>
                    </Nav.Link>
                </Nav>
              </div>
              {/* <!-- main-mail-menu --> */}
            </div>
          </div>
          <div className="card-body py-3">
            <div className="">
              <div className="main-mail-menu">
                <label className="main-content-label main-content-label-sm">
                  Label
                </label>
                <Nav className="nav main-nav-column">
                  <Nav.Item>
                    <Nav.Link href="#Social" className="nav-link">
                      <i className="fe fe-folder fe fe-folder fs-10 bg-primary p-2 br-5"></i>
                      Social
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Promotions" className="nav-link">
                      <i className="fe fe-folder fe fe-folder fs-10 bg-info p-2 br-5 text-fixed-white"></i>
                      Promotions
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#Updates" className="nav-link">
                      <i className="fe fe-folder fe fe-folder fs-10 bg-success p-2 br-5"></i>
                      Updates
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link href="#Settings" className="nav-link">
                      <i className="fe fe-folder fe fe-folder fs-10 bg-danger p-2 br-5"></i>
                      Settings
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#Google-Drive" className="nav-link">
                      <i className="fe fe-folder fe fe-folder fs-10 bg-secondary p-2 br-5"></i>
                      Google Drive
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="col-lg-8 col-xxl-9">
        <div className="text-dark mb-2 ms-1 fs-20 fw-semibold">
          All Folders
        </div>
        {/* <!-- Row --> */}
        <div className="text-muted mb-2 fs-16">Recent Files</div>
        <Row>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe-image fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      Image
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 32 mins ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15 ">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe fe-smartphone fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      APK
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 1 hrs ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15 ">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe-video fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      Video
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 28 min ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe-file-text  fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      Documents
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 1 hrs ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15 ">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe-music  fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      Music
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 2 hrs ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15 ">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe-file-text  fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      PDF
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 1 hrs ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe-image fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      Image
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 32 mins ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15 ">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} lg={6} md={6}>
            <Card className="custom-card">
              <Card.Body >
                <div className="d-flex">
                  <div className="media align-items-center pos-relative">
                    <span className="fs-16 lh--7 my-auto">
                      <i className="bg-primary-transparent p-2 rounded-50 fe fe fe-smartphone fs-18 me-2"></i>
                    </span>
                    <div className="media-body ms-3">
                      APK
                      <p className="fs-11 mg-b-0 tx-gray-500">
                        Last Opened 1 hrs ago
                      </p>
                    </div>
                  </div>
                  <Dropdown className="float-end ms-auto position-absolute r-5 t-15 ">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i>open
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <div className="text-muted mb-2 fs-16">Folders and Files</div>
        </Row>
        <Row>
            <Col xxl={3} md={4} sm={6}>
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto foldervideos">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link
                    href={`/components/apps/file-manager/file-manager-list`}
                    className="open-file"
                  >
                    <div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/4.png"}
                        alt="img"
                        className="br-7"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-0">Videos</h6>
                    <span className="text-muted">4.23gb</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xxl={3} md={4} sm={6}>
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto floderdocument">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link href={`/components/apps/file-manager/file-manager-list`}>
					<div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/6.png"}
                        alt="img"
                        className="br-7"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-0">
                      document.pdf
                    </h6>
                    <span className="text-muted">23kb</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xxl={3} md={4} sm={6}>
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto folderimages">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link href="#!" className="open-file">
                    <div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/5.png"}
                        alt="img"
                        className="rounded-10"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-1">Images</h6>
                    <span className="text-muted">23kb</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xxl={3} md={4} sm={6}>
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto folderimages">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link
                    href={`/components/apps/file-manager/file-manager-list`}
                    className="open-file"
                  >
                    <div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/4.png"}
                        alt="img"
                        className="br-7"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-0">Images</h6>
                    <span className="text-muted">1.23gb</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xxl={3} md={4} sm={6}>
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto folderimages">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link href={`/components/apps/file-manager/file-manager-list`}>
					<div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/5.png"}
                        alt="img"
                        className="rounded-10"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-1">Images</h6>
                    <span className="text-muted">23kb</span>
                  </Link>
                </div>
              </div>
            </Col>
            <div className="col-xxl-3 col-md-4 col-sm-6 ">
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto floderdocument">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link href={`/components/apps/file-manager/file-manager-list`}>
					<div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/2.png"}
                        alt="img"
                        className="br-7"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-0">
                      document.pdf
                    </h6>
                    <span className="text-muted">23kb</span>
                  </Link>
                </div>
              </div>
            </div>
            <Col xxl={3} md={4} sm={6}>
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto folderdownload">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link
                    href={`/components/apps/file-manager/file-manager-list`}
                    className="open-file"
                  >
                    <div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/4.png"}
                        alt="img"
                        className="br-7"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-0">
                      Downloads
                    </h6>
                    <span className="text-muted">453kb</span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xxl={3} md={4} sm={6}>
              <div className="card custom-card border p-0 shadow-none">
                <div className="d-flex align-items-center px-4 pt-2">
                  <label className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name="example-checkbox2"
                      value="option2"
                    />
                    <span className="custom-control-label"></span>
                  </label>
                  <Dropdown className="float-end ms-auto folderdownload">
                    <Dropdown.Toggle variant="default" className="option-dots pe-0 pt-0">
                      <i className="fe fe-more-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=" dropdown-menu-start" style={{ margin: "0px" }}>
                      <Dropdown.Item>
                        <i className="fe fe-edit me-2"></i> Edit
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-share me-2"></i> Share
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-download me-2"></i> Download
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <i className="fe fe-trash me-2"></i> Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pt-0 text-center">
                  <Link href={`/components/apps/file-manager/file-manager-list`}>
					<div className="file-manger-icon">
                      <img
                        src={"../../../../assets/images/files/png/6.png"}
                        alt="img"
                        className="br-7"
                      />
                    </div>
                    <h6 className="mb-1 fw-semibold mt-0">
                      Word document
                    </h6>
                    <span className="text-muted">23kb</span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <nav>
            <Pagination className=" justify-content-end">
              <Pagination.Item>Prev</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>Next</Pagination.Item>
            </Pagination>
          </nav>
      </div>
    </div>
    </>
  )
}
FileManager.layout = "Contentlayout"

export default FileManager