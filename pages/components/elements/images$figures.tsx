import React, { useEffect, useState } from 'react'
import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import { Row, Col, Card, Button, Collapse } from 'react-bootstrap'

const Images$figures = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
  return (
      <div>
        <Seo title="Images&Figures"/>
    
        <PageHeader title="Images & Figures" item="Utilities" active_item="Images&Figures"/>
        <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Responsive image
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code> .img-fluid </code>class to the img tag to get responsive image.</p>
                            <div className="text-center">
                                <img src={ "../../../assets/images/media/media-48.jpg"} className="img-fluid" alt="..." />
                            </div>
                        </Card.Body>
                        <Collapse in={open1} className="card-body"><pre>
                            <code>{`<div className="text-center">
 <img src={ "../../../assets/images/media/media-48.jpg"} className="img-fluid" alt="..."/>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Image With Radius
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code>.rounded</code> class along with <code>.img-fluid</code> to get border radius.</p>
                            <div className="text-center">
                                <img src={"../../../assets/images/media/media-49.jpg"} className="img-fluid rounded" alt="..." />
                            </div>
                        </Card.Body>
                        <Collapse in={open2} className="card-body"><pre>
                            <code>{`<div className="text-center">
<img src={"../../../assets/images/media/media-49.jpg"} className="img-fluid rounded" alt="..."/>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Rounded Image
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code>.rounded-pill</code> class to <code>img</code> tag to get rounded image.</p>
                            <div className="text-center">
                                <img src={"../../../assets/images/media/media-50.jpg"} className="img-fluid rounded-pill" alt="..." />
                            </div>
                        </Card.Body>
                        <Collapse in={open3} className="card-body"><pre>
                            <code>{`<div className="text-center">
<img src={"../../../assets/images/media/media-50.jpg"} className="img-fluid rounded-pill" alt="..."/>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Image Left Align</div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <img className="rounded float-start" src={ "../../../assets/images/media/media-53.jpg"} alt="..." />
                        </Card.Body>
                        <Collapse in={open4} className=""><pre>
                            <code>{`<img className="rounded float-start" src={ "../../../assets/images/media/media-53.jpg"} alt="..."/>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Image Center Align</div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <img className="rounded mx-auto d-block" src={ "../../../assets/images/media/media-55.jpg"} alt="..." />
                        </Card.Body>
                        <Collapse in={open5} className="card-body"><pre>
                            <code>{` <img className="rounded mx-auto d-block" src={ "../../../assets/images/media/media-55.jpg"} alt="..."/>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">Image Right Align</div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <img className="rounded float-end" src={"../../../assets/images/media/media-54.jpg"} alt="..." />
                        </Card.Body>
                        <Collapse in={open6} className="card-body"><pre>
                            <code>{`<img className="rounded float-end" src={"../../../assets/images/media/media-54.jpg"} alt="..."/>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Figures
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-between gap-2">
                            <figure className="figure">
                                <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={"../../../assets/images/media/media-56.jpg"} alt="..." />
                                <figcaption className="figure-caption">A caption for the above image.
                                </figcaption>
                            </figure>
                            <figure className="figure float-end">
                                <img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={"../../../assets/images/media/media-57.jpg"} alt="..." />
                                <figcaption className="figure-caption text-end">A caption for the above image.
                                </figcaption>
                            </figure>
                        </Card.Body>
                        <Collapse in={open7} className="card-body"><pre>
                            <code>{`<figure className="figure">
<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={"../../../assets/images/media/media-56.jpg"} alt="..."/>
<figcaption className="figure-caption">A caption for the above image.
</figcaption>
</figure>
<figure className="figure float-end">
<img className="bd-placeholder-img figure-img img-fluid rounded card-img" src={"../../../assets/images/media/media-57.jpg"} alt="..."/>
<figcaption className="figure-caption text-end">A caption for the above image.
</figcaption>
</figure>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Image Thumbnail
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code> .img-thumbnail </code>to give an image a rounded 1px border.</p>
                            <div className="text-center">
                                <img src={"../../../assets/images/media/media-51.jpg"} className="img-thumbnail" alt="..." />
                            </div>
                        </Card.Body>
                        <Collapse in={open8} className="card-body"><pre>
                            <code>{` <div className="text-center">
<img src={"../../../assets/images/media/media-51.jpg"} className="img-thumbnail" alt="..."/>
 </div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Rounded Thumbnail
                            </div>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code> .rounded-pill </code>along with <code> .img-thummbnail </code> to get radius.</p>
                            <div className="text-center">
                                <img src={"../../../assets/images/media/media-52.jpg"} className="img-thumbnail rounded-pill" alt="..." />
                            </div>
                        </Card.Body>
                        <Collapse in={open9} className="card-body"><pre>
                            <code>{`<div className="text-center">
<img src={"../../../assets/images/media/media-52.jpg"} className="img-thumbnail rounded-pill" alt="..."/>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
   </div>
  )
}
Images$figures.layout = "Contentlayout"

export default Images$figures