import React, { Fragment } from 'react'
import Seo from '../../../shared/layout-components/seo/seo'

import { Card, Col, Form, Row } from "react-bootstrap";



import Link from 'next/link';


const Lockscreen = () => {
  interface DemoChangerElement extends HTMLElement {
    style: CSSStyleDeclaration;
  }
 function Swicherbutton() {
    let demoChanger: DemoChangerElement | null = document.querySelector(".demo_changer")
    if(demoChanger){
      demoChanger.style.right = "0px";
    }
    document.querySelector(".demo_changer")?.classList.toggle("active");
  }
 function remove  () {
  let demoChanger: DemoChangerElement | null = document.querySelector(".demo_changer")
  if(demoChanger){
    demoChanger.style.right = "-270px";
  }
  document.querySelector(".demo_changer")?.classList.remove("active");
  }
  return (
    <div>
        <Seo title="Lockscreen"/>

{/* <!-- Row --> */}
<Fragment>
    <div className="page main-signin-wrapper">
      <Row className="signpages text-center"
       onClick={() => remove()}
       >
        <Col md={12}>
          <Card>
            <Row className="row-sm">
              <Col lg={6} xl={5} className=" d-none d-lg-block bg-primary details">
                <div className="mt-4 pt-4 ps-5 ms-3 pe-5 position-absolute">
                <Link href="/components/dashboard/dashboard">
                <img
                    src={"../../../assets/images/brand-logos/desktop-white.png"}
                    className="header-brand-img mb-4"
                    alt="logo"
                  />
                                </Link>
                  <div className="clearfix"></div>
                  <img
                    src={"../../../assets/images/svgs/user.svg"}
                    className="ht-100 mb-0"
                    alt="user"
                  />
                  <h5 className="mt-4 text-fixed-white">Unlock</h5>
                  <span className="text-white-6 fs-13 mb-5 mt-xl-0">
                    Enter your password to access the admin.
                  </span>
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className=" login_form ">
                <div className="main-container container-fluid">
                  <div className="row row-sm">
                    <div className="card-body main-profile-overview mt-3 mb-3">
                      <img
                        src={"../../../assets/images/brand-logos/desktop-logo.png"}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 error-logo"
                        alt="logo"
                      />
                      <img
                        src={"../../../assets/images/brand-logos/desktop-white.png"}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 error-logo-light"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      <h5 className="text-start mb-2">Lockscreen</h5>
                      <p className="mb-4 text-muted fs-13 ms-0 text-start">
                        Unlock your screen by entering password
                      </p>
                      <form>
                        <div className="text-start d-flex float-start mb-4 user-lock">
                          <img
                            alt="avatar avatar-sm"
                            className="rounded-circle mb-0"
                            src={"../../../assets/images/faces/1.jpg"}
                          />
                          <div className="my-auto">
                            <p className="fw-medium my-auto ms-2 text-uppercase ">
                              Sonia Taylor
                            </p>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control"
                            placeholder="Enter your password"
                            type="password"
                          />
                        </div>
                        <div className="text-start mb-2">
                          <label className=" ps-0">
                       
                            <Form.Check type="checkbox"
                    label="show password"
                  />
                            <span className="form-switch-indicator"></span>
                            <span className="form-switch-description">
                              
                            </span>
                          </label>
                        </div>
                        <div className="d-grid">

                                                <Link className="btn btn-primary" href="/components/dashboard/dashboard/">Unlock</Link>
                                            </div>
                        
                      </form>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>

  </Fragment>
			{/* <!-- End Row --> */}
    </div>
  )
}
Lockscreen.layout = "Authenticationlayout"

export default Lockscreen