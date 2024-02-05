import Head from 'next/head'
import { Button, Col, Form, Row,Alert, Container, Card, Tabs, Tab, Nav} from 'react-bootstrap';
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'
import { useState } from 'react';
import Link from "next/link";
// import Dashboard from "../pages/components/dashboard/dashboard"
import { ChangeEvent } from 'react';

//Images
import logolight from "../../../assets/images/brand-logos/desktop-dark.png"
import user from "../../../assets/images/svgs/user.svg"
import logo from "../../../assets/images/brand-logos/desktop-logo.png"
import { auth } from "../shared/firebase/firebase"


const Home = ()=>{
  let { basePath } = useRouter()

  const [err, setError] = useState("");
  const [data, setData] = useState({
   "email": "adminnextjs@gmail.com",
  "password": "1234567890",
  })
  const { email, password } = data;
  let navigate = useRouter();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }

  const routeChange = () =>{ 
    let path = `/components/dashboard/dashboard/`; 
    navigate.push(path);
  }

  const Login = (e : any) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      (user : any) => {console.log(user);routeChange()}).catch((err : any) => {console.log(err);setError(err.message)})
  }

  const ReactLogin = () => {
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890"){
      routeChange()
    }
    else{
      setError("The Auction details did not Match")
      setData({
        "email": "adminnextjs@gmail.com",
       "password": "1234567890",
       })
    }
  }

  const [key, setKey] = useState('firebase');

  return (
    <div className={styles.container}>
      <Head>
   
        <title>Spruha</title>
        <meta name="description" content="Spruha" />
        <link rel="icon" href={"../../../assets/images/brand-logos/favicon.ico"}/>

      </Head>
      <div className="page main-signin-wrapper">
      <Row className="signpages text-center" >
        <Col md={12}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="nextjs">

         
        <Nav variant="pills" className="justify-content-center authentication-tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="nextjs"><img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/svgs/nextjslogo.png`}  alt='logo2' /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="firebase"> <img src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/svgs/firebase.png`} alt='logo1' /></Nav.Link>
                                    </Nav.Item>

                                </Nav>
                                <Tab.Content >
      <Tab.Pane eventKey="nextjs" title="nextjs">
  

      <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-5 pt-4 p-2 position-absolute">
                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/desktop-white.png`}
                className="header-brand-img mb-4"
                alt="logo-light"
              />
                  <div className="clearfix"></div>
                  <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/svgs/user.svg`}
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
                        src={"../../../assets/images/brand-logos/desktop-logo.png"}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={"../../../assets/images/brand-logos/desktop-dark.png"}
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
                        </Form.Group><div className="d-grid">

                        <Button onClick={ReactLogin} className="btn ripple btn-main-primary btn-block mt-2">
                          Sign In
                        </Button>
                        </div>
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
          </Tab.Pane>
      </Tab.Content>
    <Tab.Content >
    <Tab.Pane eventKey="firebase"title="firebase">
    
                     
          <Card>
            <Row className="row-sm">
              <Col
                lg={6}
                xl={5}
                className="d-none d-lg-block text-center bg-primary details"
              >
                <div className="mt-5 pt-4 p-2 position-absolute">
                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/desktop-white.png`}
                className="header-brand-img mb-4"
                alt="logo-light"
              />
             
                  <div className="clearfix"></div>
                  <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/svgs/user.svg`}
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
                        src={"../../../assets/images/brand-logos/desktop-logo.png"}
                        className=" d-lg-none header-brand-img text-start float-start mb-4 auth-light-logo"
                        alt="logo"
                      />
                      <img
                        src={"../../../assets/images/brand-logos/desktop-dark.png"}
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
                          controlId="password"
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
                        <div className="d-grid">

                        <Button onClick={Login} className="btn ripple btn-main-primary btn-block mt-2">
                          Sign In
                        </Button>
                        </div>
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
                            href={`/signup/`}
                          > Register Here</Link>
                        </div>
                      </div>
                    </Card.Body>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Card>
         </Tab.Pane>
      </Tab.Content>
      
      </Tab.Container>

        </Col>
      </Row>
    </div>
    </div>
  )
}


export default Home