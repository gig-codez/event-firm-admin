import React,{useState} from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Row, Card, Col, Button, Table, Breadcrumb, Collapse, Form, } from 'react-bootstrap';
import Seo from '../../../shared/layout-components/seo/seo';

const Border = () => {
	   //collapse1
	   const [open1, setOpen1] = useState(false);
	   const [open2, setOpen2] = useState(false);
	   const [open3, setOpen3] = useState(false);
	   const [open4, setOpen4] = useState(false);
	   const [open5, setOpen5] = useState(false);
	   const [open6, setOpen6] = useState(false);
	   const [open7, setOpen7] = useState(false);
	   const [open8, setOpen8] = useState(false);
  return (
    <div>
      <Seo title="Border"/>

    <PageHeader title="Border" item="Utilities" active_item="Border"/>
  
	<Row>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Borders
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <div className="card-body">
                                <span className="border border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Border</span>
                                </span>
                                <span className="border-top border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Border-top</span>
                                </span>
                                <span className="border-end border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Border-right</span>
                                </span>
                                <span className="border-bottom border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Border-bottom</span>
                                </span>
                                <span className="border-start border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Border-left</span>
                                </span>
                            </div>
                            <Collapse in={open1} className="card-body"><pre><code>{`
    <span className="border border-container d-inline-flex">
	<span className="fs-11 text-gray-5 m-auto">Border</span>
</span>
<span className="border-top border-container d-inline-flex">
	<span className="fs-11 text-gray-5 m-auto">Border-top</span>
</span>
<span className="border-end border-container d-inline-flex">
	<span className="fs-11 text-gray-5 m-auto">Border-right</span>
</span>
<span className="border-bottom border-container d-inline-flex">
	<span className="fs-11 text-gray-5 m-auto">Border-bottom</span>
</span>
<span className="border-start border-container d-inline-flex">
	<span className="fs-11 text-gray-5 m-auto">Border-left</span>
</span>>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Remove borders
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
						<span className="border-0 border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">No-Border</span>
                                </span>
                                <span className="border border-top-0 border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Top</span>
                                </span>
                                <span className="border border-end-0 border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Right</span>
                                </span>
                                <span className="border border-bottom-0 border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Bottom</span>
                                </span>
                                <span className="border border-start-0 border-container d-inline-flex">
                                    <span className="fs-11 text-gray-5 m-auto">Left</span>
                                </span>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
<span className="border-0 border-container d-inline-flex">
<span className="fs-11 text-gray-5 m-auto">No-Border</span>
</span>
<span className="border border-top-0 border-container d-inline-flex">
<span className="fs-11 text-gray-5 m-auto">Top</span>
</span>
<span className="border border-end-0 border-container d-inline-flex">
<span className="fs-11 text-gray-5 m-auto">Right</span>
</span>
<span className="border border-bottom-0 border-container d-inline-flex">
<span className="fs-11 text-gray-5 m-auto">Bottom</span>
</span>
<span className="border border-start-0 border-container d-inline-flex">
<span className="fs-11 text-gray-5 m-auto">Left</span>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={5}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border Widths
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
						<span className="border border-container d-inline-flex border-1">
                                    <span className="fs-11 text-gray-5 m-auto">1px</span>
                                </span>
                                <span className="border border-container d-inline-flex border-2">
                                    <span className="fs-11 text-gray-5 m-auto">2px</span>
                                </span>
                                <span className="border border-container d-inline-flex border-3">
                                    <span className="fs-11 text-gray-5 m-auto">3px</span>
                                </span>
                                <span className="border border-container d-inline-flex border-4">
                                    <span className="fs-11 text-gray-5 m-auto">4px</span>
                                </span>
                                <span className="border border-container d-inline-flex border-5">
                                    <span className="fs-11 text-gray-5 m-auto">5px</span>
                                </span>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
   <span className="border border-container d-inline-flex border-1">
   <span className="fs-11 text-gray-5 m-auto">1px</span>
</span>
<span className="border border-container d-inline-flex border-2">
   <span className="fs-11 text-gray-5 m-auto">2px</span>
</span>
<span className="border border-container d-inline-flex border-3">
   <span className="fs-11 text-gray-5 m-auto">3px</span>
</span>
<span className="border border-container d-inline-flex border-4">
   <span className="fs-11 text-gray-5 m-auto">4px</span>
</span>
<span className="border border-container d-inline-flex border-5">
   <span className="fs-11 text-gray-5 m-auto">5px</span>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={7}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Border colors
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
						<span className="border border-container border-primary d-inline-flex">
                                    <span className="fs-11 text-primary m-auto">bd-primary</span>
                                </span>
                                <span className="border border-container border-secondary d-inline-flex">
                                    <span className="fs-11 text-secondary m-auto">bd-secondary</span>
                                </span>
                                <span className="border border-container border-success d-inline-flex">
                                    <span className="fs-11 text-success m-auto">bd-success</span>
                                </span>
                                <span className="border border-container border-danger d-inline-flex">
                                    <span className="fs-11 text-danger m-auto">bd-danger</span>
                                </span>
                                <span className="border border-container border-warning d-inline-flex">
                                    <span className="fs-11 text-warning m-auto">bd-warning</span>
                                </span>
                                <span className="border border-container border-info d-inline-flex">
                                    <span className="fs-11 text-info m-auto">bd-info</span>
                                </span>
                                <span className="border border-container border-light d-inline-flex">
                                    <span className="fs-11 text-gray-2 m-auto">bd-light</span>
                                </span>
                                <span className="border border-container border-dark d-inline-flex">
                                    <span className="fs-11 text-dark m-auto">bd-dark</span>
                                </span>
                                <span className="border border-container border-white d-inline-flex">
                                    <span className="fs-11 text-dark m-auto">bd-white</span>
                                </span>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
<span class="border border-container border-primary d-inline-flex">
<span class="fs-11 text-primary m-auto">bd-primary</span>
</span>
<span class="border border-container border-secondary d-inline-flex">
<span class="fs-11 text-secondary m-auto">bd-secondary</span>
</span>
<span class="border border-container border-success d-inline-flex">
<span class="fs-11 text-success m-auto">bd-success</span>
</span>
<span class="border border-container border-danger d-inline-flex">
<span class="fs-11 text-danger m-auto">bd-danger</span>
</span>
<span class="border border-container border-warning d-inline-flex">
<span class="fs-11 text-warning m-auto">bd-warning</span>
</span>
<span class="border border-container border-info d-inline-flex">
<span class="fs-11 text-info m-auto">bd-info</span>
</span>
<span class="border border-container border-light d-inline-flex">
<span class="fs-11 text-gray-2 m-auto">bd-light</span>
</span>
<span class="border border-container border-dark d-inline-flex">
<span class="fs-11 text-dark m-auto">bd-dark</span>
</span>
<span class="border border-container border-white d-inline-flex">
<span class="fs-11 text-dark m-auto">bd-white</span>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border color Styling
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-4">
                                <Form.Label htmlFor="exampleFormControlInput1" className="form-label">Email
                                    address</Form.Label>
                                <Form.Control type="email" className="form-control border-success"
                                    id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                                Below Shows Danger Border
                            </div>
                            <div
                                className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
                                Customizing borders with backgrounud colors
                            </div>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
<div className="mb-4">
<Form.Label htmlFor="exampleFormControlInput1" className="form-label">Email
    address</Form.Label>
<Form.Control type="email" className="form-control border-success"
    id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
Below Shows Danger Border
</div>
<div
className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
Customizing borders with backgrounud colors
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Border with opacity
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="border border-success p-2 mb-2">This is default success border</div>
                            <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 border-opacity-10">This is 10% opacity
                                success
                                border
                            </div>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
 <div className="border border-success p-2 mb-2">This is default success border</div>
 <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
     opacity
     success border
 </div>
 <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
     opacity
     success border
 </div>
 <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
     opacity
     success border
 </div>
 <div className="border border-success p-2 border-opacity-10">This is 10% opacity
     success
     border
 </div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Border Radius
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-top" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-end" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-bottom" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-start" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-circle" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img  rounded-pill" alt="..." />
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`
 <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded" alt="..."/>
 <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-top" alt="..."/>
 <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-end" alt="..."/>
 <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-bottom" alt="..."/>
 <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-start" alt="..."/>
 <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img rounded-circle" alt="..."/>
 <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img  rounded-pill" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <div className="card-title">
                                Sizes
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
                            <img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`
<img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
<img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..."/>
<img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..."/>
<img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..."/>
<img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..."/>
<img src={"../../../assets/images/media/media-58.jpg"} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        
      </div>
	  
  )
}
Border.layout = "Contentlayout"

export default Border