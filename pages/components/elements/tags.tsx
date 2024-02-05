import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Badge, Breadcrumb, Button, Card, Col, Row, Form, Collapse } from "react-bootstrap";
import { TagsInput } from "react-tag-input-component";
import Link from "next/link"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Seo from '../../../shared/layout-components/seo/seo';

const Tags = () => {
	const [selected, setSelected] = useState([
		"Javascript",
		"ReactJs",
		"AngularJs",
		"VueJs",
		"Nextjs",
	  ]);

    // input-end
  const [Pillstags, setPillstags] = useState(false);
  const [Defaulttags, setDefaulttags] = useState(false);

  const [Tags1, setTags1] = useState(false);
  return (
    <div>
      <Seo title="Tags"/>

      <PageHeader title="Tags" item="Elements" active_item="Tags"/>
      
      {/* <!-- Row --> */}
      <Row className="row-sm">
      <div className="col-xl-6">
                        <div className="card custom-card">
                            <div className="card-header justify-content-between">
                                <div>
                                    <div className="card-title">
                                        Default Tags
                                    </div>
                                    <p className="text-muted mb-0 card-sub-title">Below is the pill tags example</p>
                                </div>
                                <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setDefaulttags(!Defaulttags)}
                type="switch"
                label="ShowCode"
              />
                            </div>
                            <div className="card-body">
                                <span className="tag tag-default mt-1 mb-1 me-1">Default</span>
                                <span className="tag tag-dark mt-1 mb-1 me-1">Dark</span>
                                <span className="tag tag-primary mt-1 mb-1 me-1">Primary</span>
                                <span className="tag tag-success mt-1 mb-1 me-1">Success</span>
                                <span className="tag tag-info mt-1 mb-1 me-1">Info</span>
                                <span className="tag tag-warning mt-1 mb-1 me-1">Warning</span>
                                <span className="tag tag-danger mt-1 mb-1 me-1">Danger</span>
                            <Collapse in={Defaulttags}>
                <pre>
                  <code>
                    {
                      `
<div className="example">
<Badge pill bg="primary " className="mt-1 mb-1"> Primary</Badge>
<Badge pill bg="secondary" className=" mt-1 mb-1">Secondary</Badge>
<Badge pill bg="success" className=" mt-1 mb-1">Success</Badge>
<Badge pill bg="danger" className=" mt-1 mb-1"> Danger</Badge>
<Badge pill bg="warning" text="dark" className=" mt-1 mb-1">Warning</Badge>
<Badge pill bg="info">Info</Badge>
<Badge pill bg="light" text="dark" className=" mt-1 mb-1">Light</Badge>
<Badge pill bg="dark" className=" mt-1 mb-1">Dark</Badge>
</div>

`
                    }

                  </code>
                </pre>
              </Collapse>
                            </div>
                        </div>
                    </div>
        <Col xl={6}>
          <Card className=" custom-card" id="pill">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title">Pill Tags</h6>
                <p className="text-muted mb-0 card-sub-title">
                  Below is the pill tags example
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setPillstags(!Pillstags)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
          
            <Card.Body>

            
                <span className="tag tag-default tag-pill mt-1 mb-1 me-1">Default</span>
                                <span className="tag tag-dark tag-pill mt-1 mb-1 me-1">Dark</span>
                                <span className="tag tag-primary tag-pill mt-1 mb-1 me-1">Primary</span>
                                <span className="tag tag-success tag-pill mt-1 mb-1 me-1">Success</span>
                                <span className="tag tag-info tag-pill mt-1 mb-1 me-1">Info</span>
                                <span className="tag tag-warning tag-pill mt-1 mb-1 me-1">Warning</span>
                                <span className="tag tag-danger tag-pill mt-1 mb-1 me-1">Danger</span>
              
              <Collapse in={Pillstags}>
                <pre>
                  <code>
                    {
                      `
<div className="example">
<Badge pill bg="primary " className="mt-1 mb-1"> Primary</Badge>
<Badge pill bg="secondary" className=" mt-1 mb-1">Secondary</Badge>
<Badge pill bg="success" className=" mt-1 mb-1">Success</Badge>
<Badge pill bg="danger" className=" mt-1 mb-1"> Danger</Badge>
<Badge pill bg="warning" text="dark" className=" mt-1 mb-1">Warning</Badge>
<Badge pill bg="info">Info</Badge>
<Badge pill bg="light" text="dark" className=" mt-1 mb-1">Light</Badge>
<Badge pill bg="dark" className=" mt-1 mb-1">Dark</Badge>
</div>

`
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
       
        </Col>
        <Col xl={6}>
        <Card className=" custom-card" id="default">

<Card.Body>
  <div>
    <h6 className="main-content-label mb-1">Default Tags Addon</h6>
    <p className="text-muted card-sub-title">
      Below is the default tags addon example
    </p>
  </div>
  <div className="text-wrap">
    <div className="example">
      <div className="tags">
        <span className="tag tag-default">
          One
          <Link className="tag-addon" href="#!" >
            <i className="fe fe-x"></i>
          </Link>
        </span>
        <span className="tag tag-default">
          Two
          <Link className="tag-addon" href="#!" >
            <i className="fe fe-x"></i>
          </Link>
        </span>
        <span className="tag tag-default">
          Three
          <Link className="tag-addon" href="#!" >
            <i className="fe fe-x"></i>
          </Link>
        </span>
        <span className="tag tag-default">
          Four
          <Link className="tag-addon" href="#!" >
            <i className="fe fe-x"></i>
          </Link>
        </span>
      </div>
    </div>
  </div>
</Card.Body>
</Card>
        </Col>

      </Row>
      {/* <!-- End Row --> */}
      </div>
  )
}
Tags.layout = "Contentlayout"

export default Tags