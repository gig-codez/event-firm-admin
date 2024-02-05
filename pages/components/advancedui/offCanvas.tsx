import PageHeader from '@/shared/layout-components/page-header/page-header';
import Seo from '@/shared/layout-components/seo/seo';
import React, { useState } from 'react'
import { Button, Offcanvas, Row, Col, Card, Form, Dropdown, Collapse } from 'react-bootstrap';

const OffCanvas = () => {

    const [Basic, setBasic] = useState(false);
    const [BackDrop, setBackDrop] = useState(false);
    const [placement, setplacement] = useState(false);
    const [open5, setOpen5] = useState(false);

    // Default link button OPEN 
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show1, setShow1] = useState(false);
  
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
  
    
    //Placement
    const [showt, setShowt] = useState(false);

    const handleCloset = () => setShowt(false);
    const handleShowt = () => setShowt(true);

    //right

    const [showr, setShowr] = useState(false);

    const handleCloser = () => setShowr(false);
    const handleShowr = () => setShowr(true);

    //bottom

    const [showb, setShowb] = useState(false);

    const handleCloseb = () => setShowb(false);
    const handleShowb = () => setShowb(true);
    // BackDrop offcanvas
  
    const options = [
      {
        name: 'Enable body scrolling',
        scroll: true,
        backdrop: false,
  
      },
      {
        name: 'Enable backdrop (default)',
        scroll: false,
        backdrop: true,
  
      },
      {
        name: 'Enable both scrolling & backdrop',
        scroll: true,
        backdrop: true,
  
      },
    ];
  
    function OffCanvasExample({ name, ...props }:{name:any}) {
      const [show, setShow] = useState(false);
  
      const handleClose = () => setShow(false);
      const toggleShow = () => setShow((s) => !s);
  
      return (
        <>
          <Button variant="primary" onClick={toggleShow} className="me-2">
            {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
          <div className="offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" aria-modal="true" role="dialog">
                                        <div className="offcanvas-header border-bottom border-block-end-dashed">
                                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Notifications</h5>
                                            <button type="button" className="btn-close" onClick={handleClose} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-body p-0">
                                            <div>
                                                <ul className="list-group list-group-flush mb-0">
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-primary avatar-rounded">
                                                                  NW
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-danger avatar-rounded">
                                                                  CH
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-info avatar-rounded">
                                                                  S
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md avatar-rounded">
                                                                  <img src="../../../assets/images/faces/12.jpg" alt=""/>
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-success avatar-rounded">
                                                                  RC
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md avatar-rounded">
                                                                  <img src="../../../assets/images/faces/1.jpg" alt=""/>
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                                  M
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Medeleine Hey! there {"i'm"} available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-info avatar-rounded">
                                                                  OL
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-warning avatar-rounded">
                                                                  A
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md avatar-rounded">
                                                                  <img src="../../../assets/images/faces/6.jpg" alt=""/>
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-danger avatar-rounded">
                                                                  CH
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-info avatar-rounded">
                                                                  S
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md avatar-rounded">
                                                                  <img src="../../../assets/images/faces/14.jpg" alt=""/>
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                      <div className="d-flex align-items-center">
                                                          <div className="me-2">
                                                              <span className="avatar avatar-md bg-success avatar-rounded">
                                                                  RC
                                                              </span>
                                                          </div>
                                                          <div className="flex-fill">
                                                              <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                              <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                          </div>
                                                      </div>
                                                    </li>
                                                </ul>
                                              </div>
                                        </div>
                                    </div>
          </Offcanvas>
        </>
      );
    }
  
    // Placement Offcanvas
  
    function OffCanvasplacement({ name, ...props }:{name:any}) {
      const [show2, setShow2] = useState(false);
  
      const handleClose = () => setShow2(false);
      const handleShow = () => setShow2(true);
  
      return (
        <>
          <Button variant="primary" onClick={handleShow} className="me-2">
            {name}
          </Button>
          <Offcanvas show={show2} onHide={handleClose} {...props}>
            <Offcanvas.Header>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
    }
    return (
  
      <div >
        <Seo title="Offcanvas"/>
  
        <PageHeader title="Offcanvas" item="Apps" active_item="Offcanvas"/>
  
        {/* <!-- Row --> */}
        <Row>
          <Col md={12} xl={6}>
            <Card className="custom-card">
              <Card.Header className="justify-content-between">
                <div className="card-title">Default Offcanvas</div>
                <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light"onClick={() => setBasic(!Basic)}>Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
           
                </div>
              </Card.Header>
              <Card.Body>
                <div className="btn-list">
                  {/* <Defaultlink /> */}
                  <Button variant="primary" onClick={handleShow}>
                    Link with href
                  </Button>
  
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                      <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
                    </Offcanvas.Header>
  
                    <Offcanvas.Body>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                      <Dropdown className="mt-5">
                        <Dropdown.Toggle>
                          Dropdown button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">Another Action</Dropdown.Item>
                          <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Offcanvas.Body>
                  </Offcanvas>
  
                  <Button variant="primary" onClick={handleShow1}>
                    Button with data-bs-target
                  </Button>
  
                  <Offcanvas show={show1} onHide={handleClose1}>
                    <Offcanvas.Header>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                      <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto'></i></span>
                    </Offcanvas.Header>
  
                    <Offcanvas.Body>
                      Some text as placeholder. In real life you can have the elements you
                      have chosen. Like, text, images, lists, etc.
                      <Dropdown className="mt-5">
                        <Dropdown.Toggle>
                          Dropdown button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">Another Action</Dropdown.Item>
                          <Dropdown.Item eventKey="3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
                <Collapse in={Basic} className="mt-2">
                  <pre>
                    <code>
                      {`
   export function Defaultlink() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Link with href
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <span className="d-flex ms-auto" onClick={handleClose}><i className='fe fe-x ms-auto'></i></span>
          </Offcanvas.Header>
  
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            <Dropdown className="mt-5">
              <Dropdown.Toggle>
                Dropdown button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventkey="1">Action</Dropdown.Item>
                <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
                <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  
  export function Databutton() {
    const [show, setShow] = useState(false);
  
    const handleClose1 = () => setShow(false);
    const handleShow1 = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow1}>
          Button with data-bs-target
        </Button>
  
        <Offcanvas show={show} onHide={handleClose1}>
          <Offcanvas.Header>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            <span className="d-flex ms-auto" onClick={handleClose1}><i className='fe fe-x ms-auto'></i></span>
          </Offcanvas.Header>
  
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            <Dropdown className="mt-5">
              <Dropdown.Toggle>
                Dropdown button
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventkey="1">Action</Dropdown.Item>
                <Dropdown.Item eventkey="2">Another Action</Dropdown.Item>
                <Dropdown.Item eventkey="3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} xl={6}>
            <Card className="custom-card">
              <Card.Header className="justify-content-between" >
                <div className="card-title">BackDrop Offcanvas</div>
                <div className="prism-toggle">
                <button className="btn btn-sm btn-primary-light" onClick={() => setBackDrop(!BackDrop)}>Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
           
                </div>
              
              </Card.Header>
              <Card.Body>
                <div className="btn-list">
  
                  {options.map((props, idx) => (
                    <OffCanvasExample key={idx} {...props} />
                  ))}
                </div>
                <Collapse in={BackDrop} className="mt-2">
                  <pre>
                    <code>
                      {`
  export function Backdrop() {
    return (
      <>
        {options.map((props, idx) => (
          <OffCanvasExample key={idx} {...props} />
        ))}
      </>
    );
  }
  
  `}
                    </code>
                  </pre>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={5}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Placement
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowt}
                                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
                                offcanvas</Button>
                            <Offcanvas placement='top' show={showt} onHide={handleCloset} className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop"
                                aria-labelledby="offcanvasTopLabel">
                                <Offcanvas.Header closeButton className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    ...
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowr}
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
                                offcanvas</Button>
                            <Offcanvas placement='end' show={showr} onHide={handleCloser} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel1">
                                <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel1">Notifications
                                    </h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={"../../../assets/images/faces/12.jpg"} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={"../../../assets/images/faces/1.jpg"} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there{" i'm"} available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={"../../../assets/images/faces/6.jpg"} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={"../../../assets/images/faces/14.jpg"} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Button className="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowb}
                                data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
                                bottom
                                offcanvas</Button>
                            <Offcanvas placement='bottom' show={showb} onHide={handleCloseb} className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom"
                                aria-labelledby="offcanvasBottomLabel">
                                <Offcanvas.Header closeButton className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                                    </h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="offcanvas-body small">
                                    ...
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`export function Defaultlink() {
const [showb, setShowb] = useState(false);

const handleCloseb = () => setShowb(false);
const handleShowb = () => setShowb(true);

  return (
    <>
    <Button className="btn btn-primary mb-1" type="button" 
     onClick={handleShowb}>Toggle bottom offcanvas</Button>
<Offcanvas placement='bottom' show={showb} onHide={handleCloseb} 
className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom">
    <Offcanvas.Header closeButton className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
        Offcanvas bottom
        </h5>
    </Offcanvas.Header>
    <Offcanvas.Body className="offcanvas-body small">
        ...
    </Offcanvas.Body>
</Offcanvas>
    </>
  );
}`}</code></pre></Collapse>
                    </Card>
                </Col>
        
        </Row>
        {/* <!-- End Row --> */}
      </div>
    );
  };
OffCanvas.layout = "Contentlayout";

export default OffCanvas