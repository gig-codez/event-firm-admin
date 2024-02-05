import React, { FC, useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Tooltip, OverlayTrigger, Button, Breadcrumb, Row, Col, Card, Form, Collapse } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';
import { Tooltipdirtooltip, SVGtooltip } from '@/shared/data/elements/tooltipdata';
import Link from 'next/link';

const Tooltips = () => {
  const [BasicTToolips, setBasicTToolips] = useState(false)
  const [Colorhover, setColorhover] = useState(false)
  type Placement = 'top' | 'right' | 'bottom' | 'left';
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  return (
    <div>
      <Seo title="Tooltip"/>

      <PageHeader title="Tooltips" item="Elements" active_item="Tooltips"/>
      <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Tooltip Directions
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {Tooltipdirtooltip.map((idx: any) => (
                                    <OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
                                        <Button type="button" className="btn btn-primary btn-wave">
                                            Tooltip on {idx.text}
                                        </Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
  {Tooltipdirtooltip.map((idx)=>(
<OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
<Button type="button" className="btn btn-primary btn-wave">
Tooltip on {idx.text}
</Button>
</OverlayTrigger>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Colored Tooltips
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
                                    <Button type="button" variant='primary' className="btn  btn-wave">
                                        Primary Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
                                    <Button type="button" variant='secondary' className="btn  btn-wave">
                                        Secondary Tooltip
                                    </Button>
                                </OverlayTrigger>
                              
                                <OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
                                    <Button type="button" variant='warning' className="btn  btn-wave">
                                        Warning Tooltip
                                    </Button>
                                </OverlayTrigger>
                               
                                <OverlayTrigger placement="left" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
                                    <Button type="button" variant='info' className="btn  btn-wave">
                                        Info Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
                                    <Button type="button" variant='success' className="btn  btn-wave">
                                        Success Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
                                    <Button type="button" variant='danger' className="btn  btn-wave">
                                    Danger Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip-light'>light Tooltip </Tooltip>}>
                                    <Button type="button" variant='light' className="btn  btn-wave">
                                        light Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="auto" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
                                    <Button type="button" variant='dark' className="btn  btn-wave">
                                        Dark Tooltip
                                    </Button>
                                </OverlayTrigger>
                              
                            </div>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
  {Tooltipdirtooltip.map((idx)=>(
<OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
<Button type="button" className="btn btn-primary btn-wave">
Tooltip on {idx.text}
</Button>
</OverlayTrigger>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Tooltips on links
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted mb-0">
                                Hover on the Link href view the
                                 <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link tooltip </Tooltip>}>
                                    <Link href="#" className="text-primary"> Tooltip</Link>
                                </OverlayTrigger>
                            </p>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
  <p className="text-muted mb-0">
  Hover on the Link href view the
  <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>
  Link hrefoltip </Tooltip>}>
  <Link href="#" className="text-primary">Tooltip</Link>
       </OverlayTrigger> 
</p>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                With an {"SVG's"}
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {SVGtooltip.map((idx) => (
                                <OverlayTrigger key={Math.random()} placement="top" overlay={<Tooltip className={`tooltip-${idx.color}`}>{idx.text} </Tooltip>}>
                                    <Link href="#!" className="me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`svg-${idx.color}`} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" /><path
                                                d={idx.class} /></svg>
                                    </Link>
                                </OverlayTrigger>
                            ))}

                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`<OverlayTrigger placement="top" overlay={
<Tooltip className="tooltip-secondary">Message </Tooltip>}>
<Link href="#"  className="me-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" 
    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/><path 
d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 
2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
        </svg>
</Link>
</OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Disabled elements
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled tooltip!</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button disabled style={{ pointerEvents: 'none' }}>
                                        Disabled button
                                    </Button>
                                </span>
                            </OverlayTrigger>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Default tooltip!</Tooltip>}>
  <span className="d-inline-block">
   <Button disabled style={{ pointerEvents: 'none' }}>
              Disabled button
        </Button>
     </span>
  </OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Tooltip For Images
                            </div>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
                                <Link href="#!"
                                    className="avatar avatar-md me-2 online avatar-rounded">
                                    <img src={'../../../assets/images/faces/12.jpg'} alt="img" />
                                </Link>
                            </OverlayTrigger>

                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
                                <Link href="#!"
                                    className="avatar avatar-lg me-2 online avatar-rounded">
                                    <img src={'../../../assets/images/faces/3.jpg'} alt="img" />
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
                                <Link href="#!"
                                    className="avatar avatar-xl me-2 online avatar-rounded">
                                    <img src={'../../../assets/images/faces/15.jpg'} alt="img" />
                                </Link>
                            </OverlayTrigger>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">
 Alex Carey</Tooltip>}>
 <Link href="#"
  className="avatar avatar-md me-2 online avatar-rounded">
         <img src={face12} alt="img"/>
     </Link>
 </OverlayTrigger>
 
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">
 Marina Kai</Tooltip>}>
 <Link href="#"
  className="avatar avatar-lg me-2 online avatar-rounded">
         <img src={face3} alt="img"/>
     </Link>
 </OverlayTrigger>
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">
 Tim Cook</Tooltip>}>
 <Link href="#"
  className="avatar avatar-xl me-2 online avatar-rounded">
         <img src={face15} alt="img"/>
     </Link>
 </OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>

      </div>
  )
}
Tooltips.layout = "Contentlayout"

export default Tooltips