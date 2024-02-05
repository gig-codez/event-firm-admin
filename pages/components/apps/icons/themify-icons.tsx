import React from "react";
import PageHeader from "../../../../shared/layout-components/page-header/page-header";
import Seo from "../../../../shared/layout-components/seo/seo";
import {
  Breadcrumb,
  Card,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const ThemifyIcons = () => {
  return (
    <>
      <Seo title="Themify Icons" />

      <PageHeader
        title="Themify Icons"
        item="Icons"
        active_item="Themify Icons"
      />

      <div>
        {/* <!-- Row--> */}
        <div className="row ">
          <div className="col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div className="row row-sm">
                  <div className="col-lg-12 col-sm-12 mb-4">
                    <h3 className="main-content-label">Themify Icons</h3>
                    <p className="mb-2">
                      Simply beautiful open source icons. For more info{" "}
                      <a
                        href="https://themify.me/themify-icons"
                        target="_blank"
                        rel="noreferrer"
                      >
                        click here
                      </a>
                      .
                    </p>
                    <p>
                      <code>&lt;{`i class="ti-ICON_NAME"`}&gt;&lt;/i&gt;</code>
                    </p>
                  </div>
                  <div className="col-sm-12 col-lg-12">
                    <div className="icons-list-wrap">
                      <ul className="icons-list">
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-arrow-up</Tooltip>}
                          >
                            <i
                              className="ti-arrow-up"
                           
                            ></i>
                          </OverlayTrigger>
                        
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titarrow-right</Tooltip>}
                          >
                            <i
                              className="ti-arrow-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-arrow-left</Tooltip>}
                          >
                            <i
                              className="ti-arrow-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
						  <OverlayTrigger
                       placement="top"
                            overlay={<Tooltip>ti-arrow-down</Tooltip>}
                          >
                            <i
                              className="ti-arrow-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ws-vertical</Tooltip>}
                          >
                            <i
                              className="ti-arrows-vertical"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-horizontal</Tooltip>}
                          >
                            <i
                              className="ti-arrows-horizontal"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-angle-up</Tooltip>}
                          >
                            <i
                              className="ti-angle-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titangle-right</Tooltip>}
                          >
                            <i
                              className="ti-angle-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-angle-left</Tooltip>}
                          >
                            <i
                              className="ti-angle-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-angle-down</Tooltip>}
                          >
                            <i
                              className="ti-angle-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>e-double-up</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-ouble-right</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>tidouble-left</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>tidouble-down</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-move</Tooltip>}
                          >
                            <i className="ti-move" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-mov<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-move"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-fullscreen</Tooltip>}
                          >
                            <i
                              className="ti-fullscreen"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>w-top-right</Tooltip>}
                          >
                            <i
                              className="ti-arrow-top-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>title=ow-top-left</Tooltip>}
                          >
                            <i
                              className="ti-arrow-top-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>w-circle-up</Tooltip>}
                          >
                            <i
                              className="ti-arrow-circle-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-ircle-right</Tooltip>}
                          >
                            <i
                              className="ti-arrow-circle-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ticircle-left</Tooltip>}
                          >
                            <i
                              className="ti-arrow-circle-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ticircle-down</Tooltip>}
                          >
                            <i
                              className="ti-arrow-circle-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlerows-corner</Tooltip>}
                          >
                            <i
                              className="ti-arrows-corner"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-split-v</Tooltip>}
                          >
                            <i
                              className="ti-split-v"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titsplit-v-alt</Tooltip>}
                          >
                            <i
                              className="ti-split-v-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-split-h</Tooltip>}
                          >
                            <i
                              className="ti-split-h"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlend-point-up</Tooltip>}
                          >
                            <i
                              className="ti-hand-point-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>tpoint-right</Tooltip>}
                          >
                            <i
                              className="ti-hand-point-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>-point-left</Tooltip>}
                          >
                            <i
                              className="ti-hand-point-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>-point-down</Tooltip>}
                          >
                            <i
                              className="ti-hand-point-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-back-right</Tooltip>}
                          >
                            <i
                              className="ti-back-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-back-left</Tooltip>}
                          >
                            <i
                              className="ti-back-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>tige-vertical</Tooltip>}
                          >
                            <i
                              className="ti-exchange-vertical"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-wand</Tooltip>}
                          >
                            <i className="ti-wand" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-wan<br>d"
                            data-bs-toggle="tooltip"
                            title="ti-wand"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-save</Tooltip>}
                          >
                            <i className="ti-save" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-sav<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-save"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-save-alt</Tooltip>}
                          >
                            <i
                              className="ti-save-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-direction</Tooltip>}
                          >
                            <i
                              className="ti-direction"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlerection-alt</Tooltip>}
                          >
                            <i
                              className="ti-direction-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-user</Tooltip>}
                          >
                            <i className="ti-user" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-use<br>r"
                            data-bs-toggle="tooltip"
                            title="ti-user"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-link</Tooltip>}
                          >
                            <i className="ti-link" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-lin<br>k"
                            data-bs-toggle="tooltip"
                            title="ti-link"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-unlink</Tooltip>}
                          >
                            <i
                              className="ti-unlink"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-trash</Tooltip>}
                          >
                            <i
                              className="ti-trash"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-target</Tooltip>}
                          >
                            <i
                              className="ti-target"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-tag</Tooltip>}
                          >
                            <i className="ti-tag" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-ta<br>g"
                            data-bs-toggle="tooltip"
                            title="ti-tag"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-desktop</Tooltip>}
                          >
                            <i
                              className="ti-desktop"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-tablet</Tooltip>}
                          >
                            <i
                              className="ti-tablet"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-mobile</Tooltip>}
                          >
                            <i
                              className="ti-mobile"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-email</Tooltip>}
                          >
                            <i
                              className="ti-email"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-star</Tooltip>}
                          >
                            <i className="ti-star" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-sta<br>r"
                            data-bs-toggle="tooltip"
                            title="ti-star"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-spray</Tooltip>}
                          >
                            <i
                              className="ti-spray"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-signal</Tooltip>}
                          >
                            <i
                              className="ti-signal"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titleopping-cart</Tooltip>}
                          >
                            <i
                              className="ti-shopping-cart"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-g-cart-full</Tooltip>}
                          >
                            <i
                              className="ti-shopping-cart-full"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-settings</Tooltip>}
                          >
                            <i
                              className="ti-settings"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-search</Tooltip>}
                          >
                            <i
                              className="ti-search"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-zoom-in</Tooltip>}
                          >
                            <i
                              className="ti-zoom-in"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-zoom-out</Tooltip>}
                          >
                            <i
                              className="ti-zoom-out"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-cut</Tooltip>}
                          >
                            <i className="ti-cut" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-cu<br>t"
                            data-bs-toggle="tooltip"
                            title="ti-cut"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-ruler</Tooltip>}
                          >
                            <i
                              className="ti-ruler"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titruler-alt-2</Tooltip>}
                          >
                            <i
                              className="ti-ruler-alt-2"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titluler-pencil</Tooltip>}
                          >
                            <i
                              className="ti-ruler-pencil"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-ruler-alt</Tooltip>}
                          >
                            <i
                              className="ti-ruler-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-bookmark</Tooltip>}
                          >
                            <i
                              className="ti-bookmark"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlookmark-alt</Tooltip>}
                          >
                            <i
                              className="ti-bookmark-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-reload</Tooltip>}
                          >
                            <i
                              className="ti-reload"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-plus</Tooltip>}
                          >
                            <i className="ti-plus" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-plu<br>s"
                            data-bs-toggle="tooltip"
                            title="ti-plus"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-minus</Tooltip>}
                          >
                            <i
                              className="ti-minus"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-close</Tooltip>}
                          >
                            <i
                              className="ti-close"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-pin</Tooltip>}
                          >
                            <i className="ti-pin" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-pi<br>n"
                            data-bs-toggle="tooltip"
                            title="ti-pin"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-pencil</Tooltip>}
                          >
                            <i
                              className="ti-pencil"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-pencil-alt</Tooltip>}
                          >
                            <i
                              className="ti-pencil-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlaint-roller</Tooltip>}
                          >
                            <i
                              className="ti-paint-roller"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlaint-bucket</Tooltip>}
                          >
                            <i
                              className="ti-paint-bucket"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-na</Tooltip>}
                          >
                            <i className="ti-na" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-n<br>a"
                            data-bs-toggle="tooltip"
                            title="ti-na"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-medall</Tooltip>}
                          >
                            <i
                              className="ti-medall"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-medall-alt</Tooltip>}
                          >
                            <i
                              className="ti-medall-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-marker</Tooltip>}
                          >
                            <i
                              className="ti-marker"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-marker-alt</Tooltip>}
                          >
                            <i
                              className="ti-marker-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-lock</Tooltip>}
                          >
                            <i className="ti-lock" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-loc<br>k"
                            data-bs-toggle="tooltip"
                            title="ti-lock"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-unlock</Tooltip>}
                          >
                            <i
                              className="ti-unlock"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>title=ation-arrow</Tooltip>}
                          >
                            <i
                              className="ti-location-arrow"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-layout</Tooltip>}
                          >
                            <i
                              className="ti-layout"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-layers</Tooltip>}
                          >
                            <i
                              className="ti-layers"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-layers-alt</Tooltip>}
                          >
                            <i
                              className="ti-layers-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-key</Tooltip>}
                          >
                            <i className="ti-key" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-ke<br>y"
                            data-bs-toggle="tooltip"
                            title="ti-key"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-image</Tooltip>}
                          >
                            <i
                              className="ti-image"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-heart</Tooltip>}
                          >
                            <i
                              className="ti-heart"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titleart-broken</Tooltip>}
                          >
                            <i
                              className="ti-heart-broken"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-hand-stop</Tooltip>}
                          >
                            <i
                              className="ti-hand-stop"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-hand-open</Tooltip>}
                          >
                            <i
                              className="ti-hand-open"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-hand-drag</Tooltip>}
                          >
                            <i
                              className="ti-hand-drag"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-flag</Tooltip>}
                          >
                            <i className="ti-flag" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-fla<br>g"
                            data-bs-toggle="tooltip"
                            title="ti-flag"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-flag-alt</Tooltip>}
                          >
                            <i
                              className="ti-flag-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-flag-alt-2</Tooltip>}
                          >
                            <i
                              className="ti-flag-alt-2"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-eye</Tooltip>}
                          >
                            <i className="ti-eye" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-ey<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-eye"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-import</Tooltip>}
                          >
                            <i
                              className="ti-import"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-export</Tooltip>}
                          >
                            <i
                              className="ti-export"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-cup</Tooltip>}
                          >
                            <i className="ti-cup" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-cu<br>p"
                            data-bs-toggle="tooltip"
                            title="ti-cup"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-crown</Tooltip>}
                          >
                            <i
                              className="ti-crown"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-comments</Tooltip>}
                          >
                            <i
                              className="ti-comments"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-comment</Tooltip>}
                          >
                            <i
                              className="ti-comment"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titcomment-alt</Tooltip>}
                          >
                            <i
                              className="ti-comment-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-thought</Tooltip>}
                          >
                            <i
                              className="ti-thought"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-clip</Tooltip>}
                          >
                            <i className="ti-clip" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-cli<br>p"
                            data-bs-toggle="tooltip"
                            title="ti-clip"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-check</Tooltip>}
                          >
                            <i
                              className="ti-check"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-check-box</Tooltip>}
                          >
                            <i
                              className="ti-check-box"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-camera</Tooltip>}
                          >
                            <i
                              className="ti-camera"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlnnouncement</Tooltip>}
                          >
                            <i
                              className="ti-announcement"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-brush</Tooltip>}
                          >
                            <i
                              className="ti-brush"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-brush-alt</Tooltip>}
                          >
                            <i
                              className="ti-brush-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-palette</Tooltip>}
                          >
                            <i
                              className="ti-palette"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-briefcase</Tooltip>}
                          >
                            <i
                              className="ti-briefcase"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-bolt</Tooltip>}
                          >
                            <i className="ti-bolt" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-bol<br>t"
                            data-bs-toggle="tooltip"
                            title="ti-bolt"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-bolt-alt</Tooltip>}
                          >
                            <i
                              className="ti-bolt-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-blackboard</Tooltip>}
                          >
                            <i
                              className="ti-blackboard"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-bag</Tooltip>}
                          >
                            <i className="ti-bag" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-ba<br>g"
                            data-bs-toggle="tooltip"
                            title="ti-bag"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-world</Tooltip>}
                          >
                            <i
                              className="ti-world"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-wheelchair</Tooltip>}
                          >
                            <i
                              className="ti-wheelchair"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-car</Tooltip>}
                          >
                            <i className="ti-car" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-ca<br>r"
                            data-bs-toggle="tooltip"
                            title="ti-car"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-truck</Tooltip>}
                          >
                            <i
                              className="ti-truck"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-timer</Tooltip>}
                          >
                            <i
                              className="ti-timer"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-ticket</Tooltip>}
                          >
                            <i
                              className="ti-ticket"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-thumb-up</Tooltip>}
                          >
                            <i
                              className="ti-thumb-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-thumb-down</Tooltip>}
                          >
                            <i
                              className="ti-thumb-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-stats-up</Tooltip>}
                          >
                            <i
                              className="ti-stats-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-stats-down</Tooltip>}
                          >
                            <i
                              className="ti-stats-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-shine</Tooltip>}
                          >
                            <i
                              className="ti-shine"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titshift-right</Tooltip>}
                          >
                            <i
                              className="ti-shift-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-shift-left</Tooltip>}
                          >
                            <i
                              className="ti-shift-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>t-right-alt</Tooltip>}
                          >
                            <i
                              className="ti-shift-right-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>title=ft-left-alt</Tooltip>}
                          >
                            <i
                              className="ti-shift-left-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-shield</Tooltip>}
                          >
                            <i
                              className="ti-shield"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-notepad</Tooltip>}
                          >
                            <i
                              className="ti-notepad"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-server</Tooltip>}
                          >
                            <i
                              className="ti-server"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-pulse</Tooltip>}
                          >
                            <i
                              className="ti-pulse"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-printer</Tooltip>}
                          >
                            <i
                              className="ti-printer"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-power-off</Tooltip>}
                          >
                            <i
                              className="ti-power-off"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-plug</Tooltip>}
                          >
                            <i className="ti-plug" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-plu<br>g"
                            data-bs-toggle="tooltip"
                            title="ti-plug"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-pie-chart</Tooltip>}
                          >
                            <i
                              className="ti-pie-chart"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-panel</Tooltip>}
                          >
                            <i
                              className="ti-panel"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-package</Tooltip>}
                          >
                            <i
                              className="ti-package"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-music</Tooltip>}
                          >
                            <i
                              className="ti-music"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-music-alt</Tooltip>}
                          >
                            <i
                              className="ti-music-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-mouse</Tooltip>}
                          >
                            <i
                              className="ti-mouse"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-mouse-alt</Tooltip>}
                          >
                            <i
                              className="ti-mouse-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-money</Tooltip>}
                          >
                            <i
                              className="ti-money"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-microphone</Tooltip>}
                          >
                            <i
                              className="ti-microphone"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-menu</Tooltip>}
                          >
                            <i className="ti-menu" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-men<br>u"
                            data-bs-toggle="tooltip"
                            title="ti-menu"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-menu-alt</Tooltip>}
                          >
                            <i
                              className="ti-menu-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-map</Tooltip>}
                          >
                            <i className="ti-map" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-ma<br>p"
                            data-bs-toggle="tooltip"
                            title="ti-map"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-map-alt</Tooltip>}
                          >
                            <i
                              className="ti-map-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlocation-pin</Tooltip>}
                          >
                            <i
                              className="ti-location-pin"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-light-bulb</Tooltip>}
                          >
                            <i
                              className="ti-light-bulb"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-info</Tooltip>}
                          >
                            <i className="ti-info" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-inf<br>o"
                            data-bs-toggle="tooltip"
                            title="ti-info"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-infinite</Tooltip>}
                          >
                            <i
                              className="ti-infinite"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-id-badge</Tooltip>}
                          >
                            <i
                              className="ti-id-badge"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-hummer</Tooltip>}
                          >
                            <i
                              className="ti-hummer"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-home</Tooltip>}
                          >
                            <i className="ti-home" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-hom<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-home"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-help</Tooltip>}
                          >
                            <i className="ti-help" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-hel<br>p"
                            data-bs-toggle="tooltip"
                            title="ti-help"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-headphone</Tooltip>}
                          >
                            <i
                              className="ti-headphone"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-harddrives</Tooltip>}
                          >
                            <i
                              className="ti-harddrives"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-harddrive</Tooltip>}
                          >
                            <i
                              className="ti-harddrive"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-gift</Tooltip>}
                          >
                            <i className="ti-gift" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-gif<br>t"
                            data-bs-toggle="tooltip"
                            title="ti-gift"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-game</Tooltip>}
                          >
                            <i className="ti-game" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-gam<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-game"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-filter</Tooltip>}
                          >
                            <i
                              className="ti-filter"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-files</Tooltip>}
                          >
                            <i
                              className="ti-files"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-file</Tooltip>}
                          >
                            <i className="ti-file" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-fil<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-file"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-zip</Tooltip>}
                          >
                            <i className="ti-zip" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-zi<br>p"
                            data-bs-toggle="tooltip"
                            title="ti-zip"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-folder</Tooltip>}
                          >
                            <i
                              className="ti-folder"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-envelope</Tooltip>}
                          >
                            <i
                              className="ti-envelope"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-dashboard</Tooltip>}
                          >
                            <i
                              className="ti-dashboard"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-cloud</Tooltip>}
                          >
                            <i
                              className="ti-cloud"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-cloud-up</Tooltip>}
                          >
                            <i
                              className="ti-cloud-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-cloud-down</Tooltip>}
                          >
                            <i
                              className="ti-cloud-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-clipboard</Tooltip>}
                          >
                            <i
                              className="ti-clipboard"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-calendar</Tooltip>}
                          >
                            <i
                              className="ti-calendar"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-book</Tooltip>}
                          >
                            <i className="ti-book" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-boo<br>k"
                            data-bs-toggle="tooltip"
                            title="ti-book"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-bell</Tooltip>}
                          >
                            <i className="ti-bell" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-bel<br>l"
                            data-bs-toggle="tooltip"
                            title="ti-bell"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-basketball</Tooltip>}
                          >
                            <i
                              className="ti-basketball"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-bar-chart</Tooltip>}
                          >
                            <i
                              className="ti-bar-chart"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titler-chart-alt</Tooltip>}
                          >
                            <i
                              className="ti-bar-chart-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-archive</Tooltip>}
                          >
                            <i
                              className="ti-archive"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-anchor</Tooltip>}
                          >
                            <i
                              className="ti-anchor"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-alert</Tooltip>}
                          >
                            <i
                              className="ti-alert"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titalarm-clock</Tooltip>}
                          >
                            <i
                              className="ti-alarm-clock"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-agenda</Tooltip>}
                          >
                            <i
                              className="ti-agenda"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-write</Tooltip>}
                          >
                            <i
                              className="ti-write"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-wallet</Tooltip>}
                          >
                            <i
                              className="ti-wallet"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titledeo-clapper</Tooltip>}
                          >
                            <i
                              className="ti-video-clapper"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titlideo-camera</Tooltip>}
                          >
                            <i
                              className="ti-video-camera"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-vector</Tooltip>}
                          >
                            <i
                              className="ti-vector"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-support</Tooltip>}
                          >
                            <i
                              className="ti-support"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-stamp</Tooltip>}
                          >
                            <i
                              className="ti-stamp"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-slice</Tooltip>}
                          >
                            <i
                              className="ti-slice"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-shortcode</Tooltip>}
                          >
                            <i
                              className="ti-shortcode"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-receipt</Tooltip>}
                          >
                            <i
                              className="ti-receipt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-pin2</Tooltip>}
                          >
                            <i className="ti-pin2" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-pin<br>2"
                            data-bs-toggle="tooltip"
                            title="ti-pin2"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-pin-alt</Tooltip>}
                          >
                            <i
                              className="ti-pin-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titpencil-alt2</Tooltip>}
                          >
                            <i
                              className="ti-pencil-alt2"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-eraser</Tooltip>}
                          >
                            <i
                              className="ti-eraser"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-more</Tooltip>}
                          >
                            <i className="ti-more" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-mor<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-more"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-more-alt</Tooltip>}
                          >
                            <i
                              className="ti-more-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>title=rophone-alt</Tooltip>}
                          >
                            <i
                              className="ti-microphone-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-magnet</Tooltip>}
                          >
                            <i
                              className="ti-magnet"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titline-double</Tooltip>}
                          >
                            <i
                              className="ti-line-double"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titline-dotted</Tooltip>}
                          >
                            <i
                              className="ti-line-dotted"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titline-dashed</Tooltip>}
                          >
                            <i
                              className="ti-line-dashed"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-ink-pen</Tooltip>}
                          >
                            <i
                              className="ti-ink-pen"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-info-alt</Tooltip>}
                          >
                            <i
                              className="ti-info-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-help-alt</Tooltip>}
                          >
                            <i
                              className="ti-help-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titleadphone-alt</Tooltip>}
                          >
                            <i
                              className="ti-headphone-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-gallery</Tooltip>}
                          >
                            <i
                              className="ti-gallery"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-face-smile</Tooltip>}
                          >
                            <i
                              className="ti-face-smile"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-face-sad</Tooltip>}
                          >
                            <i
                              className="ti-face-sad"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titcredit-card</Tooltip>}
                          >
                            <i
                              className="ti-credit-card"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ents-smiley</Tooltip>}
                          >
                            <i
                              className="ti-comments-smiley"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-time</Tooltip>}
                          >
                            <i className="ti-time" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-tim<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-time"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-share</Tooltip>}
                          >
                            <i
                              className="ti-share"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-share-alt</Tooltip>}
                          >
                            <i
                              className="ti-share-alt"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-rocket</Tooltip>}
                          >
                            <i
                              className="ti-rocket"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-new-window</Tooltip>}
                          >
                            <i
                              className="ti-new-window"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-rss</Tooltip>}
                          >
                            <i className="ti-rss" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-rs<br>s"
                            data-bs-toggle="tooltip"
                            title="ti-rss"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-rss-alt</Tooltip>}
                          >
                            <i
                              className="ti-rss-alt"
                              data-bs-toggle="tooltip"
                            ></i>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ThemifyIcons.layout = "Contentlayout";

export default ThemifyIcons;
