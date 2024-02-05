import React, { useEffect, useState } from 'react'
import { auth } from "../shared/firebase/firebase"
import { useRouter } from 'next/router'
import favicon from "../public/assets/images/brand-logos/favicon.ico"
import Head from 'next/head'
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Link from 'next/link'
import logolight from "../public/assets/images/brand-logos/desktop-white.png"
import user from "../public/assets/images/svgs/faces.svg"
import logo from "../public/assets/images/brand-logos/desktop-logo.png"

const Signup = () => {
    const [err, setError] = useState("");
    const [data, setData] = React.useState({
        fullname: "",
        email: "",
        password: "",
      })
      const { email, password, fullname } = data;
      const changeHandler = (e:any) => {
        setData({ ...data, [e.target.name]: e.target.value })
      }

    const Signup = (e:any) => {
        // e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(
          user =>{console.log(user);routeChange()}).catch(err => { console.log(err);setError(err.message) })
      }
    let navigate = useRouter(); 
    const routeChange = () =>{ 
      let path = `/components/dashboard/dashboard/`; 
      navigate.push(path);
    }
  return (
    <div>
        <Head>
        <title>Spruha</title>
        <meta name="description" content="Spruha" />
        <link rel="icon" href={"../assets/images/brand-logos/favicon.ico"} />
      </Head>
      <div className="page main-signin-wrapper">
      <Row className="signpages text-center" >
      <Col md={12}>
      <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-5 pt-4 p-2 position-absolute">
                  <img
                    src={logolight.src}
                    className="header-brand-img mb-4"
                    alt="logo-light"
                  />
                  <div className="clearfix"></div>
                  <img
                    src={"../../../assets/images/svgs/user.svg"}
                    className="ht-100 mb-0"
                    alt="user"
                  />
                  <h5 className="mt-4 text-white">Create Your Account</h5>
                  <span className="text-white-6 fs-13 mb-5 mt-xl-0">
                    Signup to create, discover and connect with the global
                    community
                  </span>
                </div>
              </Col>
              <Col lg={6} xl={7} xs={12} sm={12} className="login_form ">
                <Container fluid>
                  <Row className="row-sm">
                    <Card.Body className="mt-2 mb-2">
                      <img
                        src={logo.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={logolight.src}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-dark-logo"
                        alt="logo"
                      />
                      <div className="clearfix"></div>
                      {err && <Alert variant="danger">{err}</Alert>}
                      <Form>
                        <h5 className="text-start mb-2">
                          Signin to Your Account
                        </h5>
                        <p className="mb-4 text-muted fs-13 ms-0 text-start">
                          Signin to create, discover and connect with the global
                          community
                        </p>
                        <Form.Group className="text-start form-group" controlId="formEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                                  className="form-control"
                                  placeholder="Enter your email"
                                  name="email"
                                  type='text'
                                  value={email}
                                  onChange={changeHandler}
                                  required
                                />
                        </Form.Group>
                        <Form.Group
                          className="text-start form-group"
                          controlId="formpassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                                  className="form-control"
                                  placeholder="Enter your password"
                                  name="password"
                                  type='password'
                                  value={password}
                                  onChange={changeHandler}
                                  required
                                />
                        </Form.Group>
                        <Button onClick={Signup} className="btn ripple btn-main-primary btn-block mt-2">
                          Sign In
                        </Button>
                      </Form>
                      <div className="text-start mt-5 ms-0">
                        <div className="mb-1">
                          <Link
                            href="#!"
                          > Forgot password ? 
                          </Link>
                        </div>
                        <div>
                          {`Don't`} have an account?
                          <Link
                            href={`/components/authentication/signup/`}
                          > Register Here</Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
      </Col>
      </Row>
      </div>
    </div>
  )
}

export default Signup