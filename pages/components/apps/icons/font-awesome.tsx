import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Seo from '../../../../shared/layout-components/seo/seo';

const FontAwesome = () => {
  return (
    <>
        <Seo title="Font Awesome"/>

    <PageHeader title="Font Awesome" item="Icons" active_item="Font Awesome"/>

    <Row className="row-sm">
      <Col md={12} className="col-md-12">
        <Card className="custom-card">
          <Card.Body>
            <Row className="row-sm">
              <Col sm={12} lg={12} className="mb-2">
                <h3 className="main-content-label">Font Awesome</h3>
                <p className="mb-2">
                  Powered by Font Awesome set. For more info
                  <a href="http://fontawesome.io" target='blank'> click here</a>
                  .
                </p>
                <p>
                  <code>&lt;i {`className="fa fa-ICON_NAME"`}&gt;&lt;/i&gt;</code>
                </p>
              </Col>
              <Col sm={12} lg={12}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-adjust</Tooltip>}
                      >
                        <i className="fas fa-adjust" title="fas fa-adjust"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                    
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-accessible-icon</Tooltip>}
                      >
                        <i
                          className="fab fa-accessible-icon"
                          title="fab fa-accessible-icon"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                   
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-center</Tooltip>}
                      >
                        <i
                          className="fa fa-align-center"
                          title="fa fa-align-center"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-justify</Tooltip>}
                      >
                        <i
                          className="fa fa-align-justify"
                          title="fa fa-align-justify"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-left</Tooltip>}
                      >
                        <i
                          className="fa fa-align-left"
                          title="fa fa-align-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-right</Tooltip>}
                      >
                        <i
                          className="fa fa-align-right"
                          title="fa fa-align-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-amazon</Tooltip>}
                      >
                        <i className="fab fa-amazon" title="fab fa-amazon"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-ambulance</Tooltip>}
                      >
                        <i
                          className="fa fa-ambulance"
                          title="fa fa-ambulance"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            fa fa-american-sign-language-interpreting
                          </Tooltip>
                        }
                      >
                        <i
                          className="fa fa-american-sign-language-interpreting"
                          title="fa fa-american-sign-language-interpreting"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-anchor</Tooltip>}
                      >
                        <i className="fa fa-anchor" title="fa fa-anchor"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-android</Tooltip>}
                      >
                        <i
                          className="fab fa-android"
                          title="fab fa-android"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-angellist</Tooltip>}
                      >
                        <i
                          className="fab fa-angellist"
                          title="fab fa-angellist"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-double-down</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-double-down"
                          title="fa fa-angle-double-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-double-left</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-double-left"
                          title="fa fa-angle-double-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-double-right</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-double-right"
                          title="fa fa-angle-double-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-double-up</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-double-up"
                          title="fa fa-angle-double-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-down</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-down"
                          title="fa fa-angle-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-left</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-left"
                          title="fa fa-angle-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-right</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-right"
                          title="fa fa-angle-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-angle-up</Tooltip>}
                      >
                        <i
                          className="fa fa-angle-up"
                          title="fa fa-angle-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-apple</Tooltip>}
                      >
                        <i className="fab fa-apple" title="fab fa-apple"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-archive</Tooltip>}
                      >
                        <i className="fa fa-archive" title="fa fa-archive"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-area-chart</Tooltip>}
                      >
                        <i
                          className="fa fa-area-chart"
                          title="fa fa-area-chart"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-circle-down</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-circle-down"
                          title="fa fa-arrow-circle-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-circle-left</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-circle-left"
                          title="fa fa-arrow-circle-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-arrow-circle-down</Tooltip>}
                      >
                        <i
                          className="fas fa-arrow-circle-down"
                          title="fas fa-arrow-circle-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-arrow-circle-left</Tooltip>}
                      >
                        <i
                          className="fas fa-arrow-circle-left"
                          title="fas fa-arrow-circle-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>fas fa-arrow-alt-circle-right</Tooltip>
                        }
                      >
                        <i
                          className="fas fa-arrow-alt-circle-right"
                          title="fas fa-arrow-alt-circle-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-arrow-alt-circle-up</Tooltip>}
                      >
                        <i
                          className="fas fa-arrow-alt-circle-up"
                          title="fas fa-arrow-alt-circle-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-circle-right</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-circle-right"
                          title="fa fa-arrow-circle-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-circle-up</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-circle-up"
                          title="fa fa-arrow-circle-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-down</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-down"
                          title="fa fa-arrow-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-left</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-left"
                          title="fa fa-arrow-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-right</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-right"
                          title="fa fa-arrow-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrow-up</Tooltip>}
                      >
                        <i
                          className="fa fa-arrow-up"
                          title="fa fa-arrow-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-arrows-alt</Tooltip>}
                      >
                        <i
                          className="fa fa-arrows-alt"
                          title="fa fa-arrows-alt"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-arrows-alt-h</Tooltip>}
                      >
                        <i
                          className="fas fa-arrows-alt-h"
                          title="fas fa-arrows-alt-h"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-arrows-alt-v</Tooltip>}
                      >
                        <i
                          className="fas fa-arrows-alt-v"
                          title="fas fa-arrows-alt-v"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-asl-interpreting</Tooltip>}
                      >
                        <i
                          className="fa fa-asl-interpreting"
                          title="fa fa-asl-interpreting"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>fa fa-assistive-listening-systems</Tooltip>
                        }
                      >
                        <i
                          className="fa fa-assistive-listening-systems"
                          title="fa fa-assistive-listening-systems"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-asterisk</Tooltip>}
                      >
                        <i
                          className="fa fa-asterisk"
                          title="fa fa-asterisk"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-at</Tooltip>}
                      >
                        <i className="fa fa-at" title="fa fa-at"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-audio-description</Tooltip>}
                      >
                        <i
                          className="fa fa-audio-description"
                          title="fa fa-audio-description"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-automobile</Tooltip>}
                      >
                        <i
                          className="fa fa-automobile"
                          title="fa fa-automobile"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-backward</Tooltip>}
                      >
                        <i
                          className="fa fa-backward"
                          title="fa fa-backward"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-balance-scale</Tooltip>}
                      >
                        <i
                          className="fa fa-balance-scale"
                          title="fa fa-balance-scale"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-ban</Tooltip>}
                      >
                        <i className="fa fa-ban" title="fa fa-ban"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-bandcamp</Tooltip>}
                      >
                        <i
                          className="fab fa-bandcamp"
                          title="fab fa-bandcamp"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bank</Tooltip>}>
                        <i className="fa fa-bank" title="fa fa-bank"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bar-chart</Tooltip>}
                      >
                        <i
                          className="fa fa-bar-chart"
                          title="fa fa-bar-chart"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bar-chart-o</Tooltip>}
                      >
                        <i
                          className="fa fa-bar-chart-o"
                          title="fa fa-bar-chart-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-barcode</Tooltip>}
                      >
                        <i className="fa fa-barcode" title="fa fa-barcode"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bars</Tooltip>}
                      >
                        <i className="fa fa-bars" title="fa fa-bars"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bath</Tooltip>}
                      >
                        <i className="fa fa-bath" title="fa fa-bath"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bathtub</Tooltip>}
                      >
                        <i className="fa fa-bathtub" title="fa fa-bathtub"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery</Tooltip>}
                      >
                        <i className="fa fa-battery" title="fa fa-battery"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-0</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-0"
                          title="fa fa-battery-0"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-1</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-1"
                          title="fa fa-battery-1"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-2</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-2"
                          title="fa fa-battery-2"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-3</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-3"
                          title="fa fa-battery-3"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-4</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-4"
                          title="fa fa-battery-4"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-empty</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-empty"
                          title="fa fa-battery-empty"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-full</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-full"
                          title="fa fa-battery-full"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-half</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-half"
                          title="fa fa-battery-half"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-battery-quarter</Tooltip>}
                      >
                        <i
                          className="fa fa-battery-quarter"
                          title="fa fa-battery-quarter"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>fa fa-battery-three-quarters</Tooltip>
                        }
                      >
                        <i
                          className="fa fa-battery-three-quarters"
                          title="fa fa-battery-three-quarters"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bed</Tooltip>}
                      >
                        <i className="fa fa-bed" title="fa fa-bed"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-beer</Tooltip>}
                      >
                        <i className="fa fa-beer" title="fa fa-beer"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-behance-square</Tooltip>}
                      >
                        <i
                          className="fab fa-behance-square"
                          title="fab fa-behance-square"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-behance</Tooltip>}
                      >
                        <i
                          className="fab fa-behance"
                          title="fab fa-behance"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bell</Tooltip>}
                      >
                        <i className="fa fa-bell" title="fa fa-bell"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>far fa-bell</Tooltip>}
                      >
                        <i className="far fa-bell" title="far fa-bell"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bell-slash</Tooltip>}
                      >
                        <i
                          className="fa fa-bell-slash"
                          title="fa fa-bell-slash"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>far fa-bell-slash</Tooltip>}
                      >
                        <i
                          className="far fa-bell-slash"
                          title="far fa-bell-slash"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bicycle</Tooltip>}
                      >
                        <i className="fa fa-bicycle" title="fa fa-bicycle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-binoculars</Tooltip>}
                      >
                        <i
                          className="fa fa-binoculars"
                          title="fa fa-binoculars"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-birthday-cake</Tooltip>}
                      >
                        <i
                          className="fa fa-birthday-cake"
                          title="fa fa-birthday-cake"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-blind</Tooltip>}
                      >
                        <i className="fa fa-blind" title="fa fa-blind"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bold</Tooltip>}
                      >
                        <i className="fa fa-bold" title="fa fa-bold"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bolt</Tooltip>}
                      >
                        <i className="fa fa-bolt" title="fa fa-bolt"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bomb</Tooltip>}
                      >
                        <i className="fa fa-bomb" title="fa fa-bomb"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-book</Tooltip>}
                      >
                        <i className="fa fa-book" title="fa fa-book"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bookmark</Tooltip>}
                      >
                        <i
                          className="fa fa-bookmark"
                          title="fa fa-bookmark"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-braille</Tooltip>}
                      >
                        <i className="fa fa-braille" title="fa fa-braille"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-briefcase</Tooltip>}
                      >
                        <i
                          className="fa fa-briefcase"
                          title="fa fa-briefcase"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bug</Tooltip>}
                      >
                        <i className="fa fa-bug" title="fa fa-bug"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-building</Tooltip>}
                      >
                        <i
                          className="fa fa-building"
                          title="fa fa-building"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bullhorn</Tooltip>}
                      >
                        <i
                          className="fa fa-bullhorn"
                          title="fa fa-bullhorn"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bullseye</Tooltip>}
                      >
                        <i
                          className="fa fa-bullseye"
                          title="fa fa-bullseye"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-bus</Tooltip>}
                      >
                        <i className="fa fa-bus" title="fa fa-bus"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-cab</Tooltip>}
                      >
                        <i className="fa fa-cab" title="fa fa-cab"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-calculator</Tooltip>}
                      >
                        <i
                          className="fa fa-calculator"
                          title="fa fa-calculator"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-calendar</Tooltip>}
                      >
                        <i
                          className="fa fa-calendar"
                          title="fa fa-calendar"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-calendar-check-o</Tooltip>}
                      >
                        <i
                          className="fa fa-calendar-check-o"
                          title="fa fa-calendar-check-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-calendar-minus-o</Tooltip>}
                      >
                        <i
                          className="fa fa-calendar-minus-o"
                          title="fa fa-calendar-minus-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-calendar-o</Tooltip>}
                      >
                        <i
                          className="fa fa-calendar-o"
                          title="fa fa-calendar-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-calendar-plus-o</Tooltip>}
                      >
                        <i
                          className="fa fa-calendar-plus-o"
                          title="fa fa-calendar-plus-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-calendar-times-o</Tooltip>}
                      >
                        <i
                          className="fa fa-calendar-times-o"
                          title="fa fa-calendar-times-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-camera</Tooltip>}
                      >
                        <i className="fa fa-camera" title="fa fa-camera"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-camera-retro</Tooltip>}
                      >
                        <i
                          className="fa fa-camera-retro"
                          title="fa fa-camera-retro"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-car</Tooltip>}
                      >
                        <i className="fa fa-car" title="fa fa-car"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-down</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-down"
                          title="fa fa-caret-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-left</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-left"
                          title="fa fa-caret-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-right</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-right"
                          title="fa fa-caret-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-square-o-down</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-square-o-down"
                          title="fa fa-caret-square-o-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-square-o-left</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-square-o-left"
                          title="fa fa-caret-square-o-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-square-o-right</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-square-o-right"
                          title="fa fa-caret-square-o-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-square-o-up</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-square-o-up"
                          title="fa fa-caret-square-o-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-caret-up</Tooltip>}
                      >
                        <i
                          className="fa fa-caret-up"
                          title="fa fa-caret-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-cart-arrow-down</Tooltip>}
                      >
                        <i
                          className="fa fa-cart-arrow-down"
                          title="fa fa-cart-arrow-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-cart-plus</Tooltip>}
                      >
                        <i
                          className="fa fa-cart-plus"
                          title="fa fa-cart-plus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-cc</Tooltip>}
                      >
                        <i className="fa fa-cc" title="fa fa-cc"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-cc-amex</Tooltip>}
                      >
                        <i
                          className="fab fa-cc-amex"
                          title="fab fa-cc-amex"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-cc-diners-club</Tooltip>}
                      >
                        <i
                          className="fab fa-cc-diners-club"
                          title="fab fa-cc-diners-club"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-cc-discover</Tooltip>}
                      >
                        <i
                          className="fab fa-cc-discover"
                          title="fab fa-cc-discover"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-cc-jcb</Tooltip>}
                      >
                        <i className="fab fa-cc-jcb" title="fab fa-cc-jcb"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-cc-mastercard</Tooltip>}
                      >
                        <i
                          className="fab fa-cc-mastercard"
                          title="fab fa-cc-mastercard"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-paypal</Tooltip>}
                      >
                        <i className="fab fa-paypal" title="fab fa-paypal"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-stripe</Tooltip>}
                      >
                        <i className="fab fa-stripe" title="fab fa-stripe"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-cc-visa</Tooltip>}
                      >
                        <i
                          className="fab fa-cc-visa"
                          title="fab fa-cc-visa"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-certificate</Tooltip>}
                      >
                        <i
                          className="fa fa-certificate"
                          title="fa fa-certificate"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chain</Tooltip>}
                      >
                        <i className="fa fa-chain" title="fa fa-chain"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chain-broken</Tooltip>}
                      >
                        <i
                          className="fa fa-chain-broken"
                          title="fa fa-chain-broken"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-check</Tooltip>}
                      >
                        <i className="fa fa-check" title="fa fa-check"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-check-circle</Tooltip>}
                      >
                        <i
                          className="fa fa-check-circle"
                          title="fa fa-check-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-check-circle</Tooltip>}
                      >
                        <i
                          className="fas fa-check-circle"
                          title="fas fa-check-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-check-square</Tooltip>}
                      >
                        <i
                          className="fa fa-check-square"
                          title="fa fa-check-square"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-check-square</Tooltip>}
                      >
                        <i
                          className="fas fa-check-square"
                          title="fas fa-check-square"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-circle-down</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-circle-down"
                          title="fa fa-chevron-circle-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-circle-left</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-circle-left"
                          title="fa fa-chevron-circle-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-circle-right</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-circle-right"
                          title="fa fa-chevron-circle-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-circle-up</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-circle-up"
                          title="fa fa-chevron-circle-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-down</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-down"
                          title="fa fa-chevron-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-left</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-left"
                          title="fa fa-chevron-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-right</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-right"
                          title="fa fa-chevron-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-chevron-up</Tooltip>}
                      >
                        <i
                          className="fa fa-chevron-up"
                          title="fa fa-chevron-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-child</Tooltip>}
                      >
                        <i className="fa fa-child" title="fa fa-child"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-chrome</Tooltip>}
                      >
                        <i className="fab fa-chrome" title="fab fa-chrome"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-circle</Tooltip>}
                      >
                        <i className="fa fa-circle" title="fa fa-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>far fa-circle</Tooltip>}
                      >
                        <i className="far fa-circle" title="far fa-circle"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-circle-notch</Tooltip>}
                      >
                        <i
                          className="fas fa-circle-notch"
                          title="fas fa-circle-notch"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-clipboard</Tooltip>}
                      >
                        <i
                          className="fa fa-clipboard"
                          title="fa fa-clipboard"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-clock-o</Tooltip>}
                      >
                        <i className="fa fa-clock-o" title="fa fa-clock-o"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-clone</Tooltip>}
                      >
                        <i className="fa fa-clone" title="fa fa-clone"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-close</Tooltip>}
                      >
                        <i className="fa fa-close" title="fa fa-close"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-cloud</Tooltip>}
                      >
                        <i className="fa fa-cloud" title="fa fa-cloud"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-cny</Tooltip>}
                      >
                        <i className="fa fa-cny" title="fa fa-cny"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-code</Tooltip>}
                      >
                        <i className="fa fa-code" title="fa fa-code"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-code-fork</Tooltip>}
                      >
                        <i
                          className="fa fa-code-fork"
                          title="fa fa-code-fork"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-google-wallet</Tooltip>}
                      >
                        <i
                          className="fab fa-google-wallet"
                          title="fab fa-google-wallet"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-graduation-cap</Tooltip>}
                      >
                        <i
                          className="fa fa-graduation-cap"
                          title="fa fa-graduation-cap"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-gratipay</Tooltip>}
                      >
                        <i
                          className="fab fa-gratipay"
                          title="fab fa-gratipay"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-grav</Tooltip>}
                      >
                        <i className="fab fa-grav" title="fab fa-grav"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-group</Tooltip>}
                      >
                        <i className="fa fa-group" title="fa fa-group"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-h-square</Tooltip>}
                      >
                        <i
                          className="fa fa-h-square"
                          title="fa fa-h-square"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fas fa-newspaper</Tooltip>}
                      >
                        <i
                          className="fas fa-newspaper"
                          title="fas fa-newspaper"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-grab-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-grab-o"
                          title="fa fa-hand-grab-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-lizard-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-lizard-o"
                          title="fa fa-hand-lizard-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-o-down</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-o-down"
                          title="fa fa-hand-o-down"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-o-left</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-o-left"
                          title="fa fa-hand-o-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-o-right</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-o-right"
                          title="fa fa-hand-o-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-o-up</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-o-up"
                          title="fa fa-hand-o-up"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-paper-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-paper-o"
                          title="fa fa-hand-paper-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-peace-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-peace-o"
                          title="fa fa-hand-peace-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-pointer-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-pointer-o"
                          title="fa fa-hand-pointer-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-rock-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-rock-o"
                          title="fa fa-hand-rock-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-scissors-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-scissors-o"
                          title="fa fa-hand-scissors-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-spock-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-spock-o"
                          title="fa fa-hand-spock-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hand-stop-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hand-stop-o"
                          title="fa fa-hand-stop-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-handshake-o</Tooltip>}
                      >
                        <i
                          className="fa fa-handshake-o"
                          title="fa fa-handshake-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hard-of-hearing</Tooltip>}
                      >
                        <i
                          className="fa fa-hard-of-hearing"
                          title="fa fa-hard-of-hearing"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hashtag</Tooltip>}
                      >
                        <i className="fa fa-hashtag" title="fa fa-hashtag"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hdd-o</Tooltip>}
                      >
                        <i className="fa fa-hdd-o" title="fa fa-hdd-o"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-header</Tooltip>}
                      >
                        <i className="fa fa-header" title="fa fa-header"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-headphones</Tooltip>}
                      >
                        <i
                          className="fa fa-headphones"
                          title="fa fa-headphones"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-heart</Tooltip>}
                      >
                        <i className="fa fa-heart" title="fa fa-heart"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>far fa-heart</Tooltip>}
                      >
                        <i className="far fa-heart" title="far fa-heart"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-heartbeat</Tooltip>}
                      >
                        <i
                          className="fa fa-heartbeat"
                          title="fa fa-heartbeat"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-history</Tooltip>}
                      >
                        <i className="fa fa-history" title="fa fa-history"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-home</Tooltip>}
                      >
                        <i className="fa fa-home" title="fa fa-home"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hospital-o</Tooltip>}
                      >
                        <i
                          className="fa fa-hospital-o"
                          title="fa fa-hospital-o"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-hotel</Tooltip>}
                      >
                        <i className="fa fa-hotel" title="fa fa-hotel"></i>
                      </OverlayTrigger>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}
FontAwesome.layout = "Contentlayout"

export default FontAwesome