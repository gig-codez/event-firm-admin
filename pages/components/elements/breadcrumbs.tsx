import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Badge, Button, Row, Col, Card, Form, Collapse } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';
const Breadcrumbs = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  return (
    <div>
      <Seo title="Breadcrumbs"/>

      <PageHeader title="Breadcrumbs" item="Elements" active_item="Breadcrumbs"/>
      <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Example
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen1(!open1)}
                                    className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
     <Breadcrumb>
         <Breadcrumb.Item active  aria-current="page">Home</Breadcrumb.Item>
     </Breadcrumb>
 </nav>

 <nav aria-label="breadcrumb">
     <Breadcrumb>
         <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
         <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
     </Breadcrumb>
 </nav>

 <nav aria-label="breadcrumb">
     <Breadcrumb className="mb-0">
         <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
         <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
         <Breadcrumb.Item active  aria-current="page">Data</Breadcrumb.Item>
     </Breadcrumb>
 </nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Example1
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light'
                                    onClick={() => setOpen2(!open2)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb-example1">
                                    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb-example1">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb-example1 mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb-example1">
    <Breadcrumb.Item active  aria-current="page">Home</Breadcrumb.Item>
</Breadcrumb>
</nav>

<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb-example1">
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item active  aria-current="page">Library</Breadcrumb.Item>
</Breadcrumb>
</nav>

<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb-example1 mb-0">
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
    <Breadcrumb.Item active  aria-current="page">Data</Breadcrumb.Item>
</Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Dividers
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light'
                                    onClick={() => setOpen3(!open3)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav
                                // style="--bs-breadcrumb-divider: '~';"
                                aria-label="breadcrumb">
                                <Breadcrumb className="mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre>
                                <code>{` <nav 
    // style="--bs-breadcrumb-divider: '~';"
 aria-label="breadcrumb">
    <Breadcrumb className="mb-0">
        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Embedded SVG icon
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light'
                                    onClick={() => setOpen4(!open4)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav
                                // style="--bs-breadcrumb-divider:
                                //  url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
                                aria-label="breadcrumb">
                                <Breadcrumb className=" mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre>
                                <code>{`  <nav 
    aria-label="breadcrumb">
    <Breadcrumb className=" mb-0">
        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Breadcrumb Style-1
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen5(!open5)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
     <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
     <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
     <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
 </Breadcrumb>
 </nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Breadcrumb Style-2
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen6(!open6)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
                                    <Breadcrumb.Item href="#"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
    <Breadcrumb.Item><a href="#"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</a></Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
</Breadcrumb>
    </nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Background colors
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen7(!open7)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav
                                //  style="--bs-breadcrumb-divider: '';"
                                aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre>
                                <code>{`  <nav
//  style="--bs-breadcrumb-divider: '';"
 aria-label="breadcrumb">
    <Breadcrumb className="breadcrumb mb-0">
        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
            </Row>
      </div>
  )
}
Breadcrumbs.layout = "Contentlayout"

export default Breadcrumbs