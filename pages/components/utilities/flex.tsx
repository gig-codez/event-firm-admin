import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Row, Card, Col, Nav, } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';
import { Contentdata, Contentdata1, Contentdata3, Contentdata4 } from '@/shared/data/utilities/flexdata';

const Flex = () => {
  return (
    <div>
      <Seo title="Flex"/>
    <PageHeader title="Flex" item="Utilities" active_item="Flex"/>
    <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Enable flex behaviors
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                <div className="d-flex p-2">{"I'm"} a flexbox container!</div>
                            </div>
                            <div className="bd-example flex-container">
                                <div className="d-inline-flex p-2">{"I'm "}an inline flexbox container!</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Direction
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container">
                                <div className="d-flex flex-row mb-3">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                                <div className="d-flex flex-row-reverse">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Direction flex-column and flex-column-reverse
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                <p>Direction Column</p>
                                <div className="d-flex flex-column mb-3">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                                <p>Column Reverse</p>
                                <div className="d-flex flex-column-reverse">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Justify content
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                {Contentdata.map((idx) => (
                                    <div className={`d-flex justify-content-${idx.class} mb-3`} key={Math.random()}>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Align items
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                {Contentdata1.map((idx) => (
                                    <div className={`d-flex align-items-${idx.class}`} style={{ height: 100 }} key={Math.random()}>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Align self
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                {Contentdata3.map((idx) => (
                                    <div className="d-flex mb-3" style={{ height: 100 }} key={Math.random()}>
                                        <div className="p-2">Flex item</div>
                                        <div className={`align-self-${idx.class} p-2`}>Aligned flex item</div>
                                        <div className="p-2">Flex item</div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Align content ( Heads up! This property has no effect on single rows of flex
                                        items.)
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        {Contentdata4.map((idx) => (
                                            <div className={`d-flex align-content-${idx.class} flex-wrap mb-3`} style={{ height: 200 }} key={Math.random()}>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Order
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex flex-nowrap">
                                            <div className="order-3 p-2">First flex item</div>
                                            <div className="order-2 p-2">Second flex item</div>
                                            <div className="order-1 p-2">Third flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Fill
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex">
                                            <div className="p-2 flex-fill">Flex item with a lot of content</div>
                                            <div className="p-2 flex-fill">Flex item</div>
                                            <div className="p-2 flex-fill">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Grow and shrink
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex mb-3">
                                            <div className="p-2 flex-grow-1">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Third flex item</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-2 w-100">Flex item</div>
                                            <div className="p-2 flex-shrink-1">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Auto margins
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex mb-3">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <div className="me-auto p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="ms-auto p-2">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Wrap
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex flex-nowrap" style={{ width: 8 }}>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex flex-wrap">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="d-flex flex-wrap-reverse">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        With align-items
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex align-items-start flex-column mb-3"
                                            style={{ height: 200 }}>
                                            <div className="mb-auto p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex align-items-end flex-column mb-3"
                                            style={{ height: 200 }}>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="mt-auto p-2">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Media object
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-sm-flex mb-3">
                                <div className="flex-shrink-0 mb-3 mb-sm-0">
                                    <img className="bd-placeholder-img card-img w-10 h-10" src={"../../../assets/images/faces/6.jpg"} alt="img" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae blanditiis voluptas nobis consectetur. Voluptate pariatur, odit repudiandae sint, libero laborum aut vel, ut enim laboriosam explicabo dolor corporis hic.
                                </div>
                            </div>
                            <p>And say you want to vertically center the content next to the image:</p>
                            <div className="d-sm-flex align-items-center">
                                <div className="flex-shrink-0 mb-3 mb-sm-0">
                                    <img className="bd-placeholder-img card-img avatar-xl" src={"../../../assets/images/faces/15.jpg"} alt="img" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, accusamus fuga quis deserunt provident rem illum exercitationem laborum pariatur modi blanditiis a dolor excepturi qui, aut laudantium harum in id..
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

      </div>
  )
}
Flex.layout = "Contentlayout"

export default Flex