import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Row, Card, Col, Table, Nav, } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';

const Position = () => {
  return (
    <div>
      <Seo title="Position"/>

    <PageHeader title="Position" item="Utilities" active_item="Position"/>
                    <div className="row row-sm">
                        <div className="col-xl-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Positions
                                    </div>
                                </div>
                                <div className="card-body bd-example-position-utils">
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 start-0"></div>
                                        <div className="position-absolute top-0 end-0"></div>
                                        <div className="position-absolute top-50 start-50"></div>
                                        <div className="position-absolute bottom-50 end-50"></div>
                                        <div className="position-absolute bottom-0 start-0"></div>
                                        <div className="position-absolute bottom-0 end-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Centering Elements With Positions
                                    </div>
                                </div>
                                <div className="card-body bd-example-position-utils">
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 start-0 translate-middle"></div>
                                        <div className="position-absolute top-0 start-50 translate-middle"></div>
                                        <div className="position-absolute top-0 start-100 translate-middle"></div>
                                        <div className="position-absolute top-50 start-0 translate-middle"></div>
                                        <div className="position-absolute top-50 start-50 translate-middle"></div>
                                        <div className="position-absolute top-50 start-100 translate-middle"></div>
                                        <div className="position-absolute top-100 start-0 translate-middle"></div>
                                        <div className="position-absolute top-100 start-50 translate-middle"></div>
                                        <div className="position-absolute top-100 start-100 translate-middle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="row row-sm">
                        <div className="col-xl-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        By adding .translate-middle-x or .translate-middle-y classes
                                    </div>
                                </div>
                                <div className="card-body bd-example-position-utils">
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 start-0"></div>
                                        <div className="position-absolute top-0 start-50 translate-middle-x"></div>
                                        <div className="position-absolute top-0 end-0"></div>
                                        <div className="position-absolute top-50 start-0 translate-middle-y"></div>
                                        <div className="position-absolute top-50 start-50 translate-middle"></div>
                                        <div className="position-absolute top-50 end-0 translate-middle-y"></div>
                                        <div className="position-absolute bottom-0 start-0"></div>
                                        <div className="position-absolute bottom-0 start-50 translate-middle-x"></div>
                                        <div className="position-absolute bottom-0 end-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Examples:
                                            </div>
                                        </div>
                                        <div
                                            className="card-body bd-example-position-examples d-flex justify-content-around">
                                            <button type="button" className="btn btn-primary position-relative">
                                                Mails <span
                                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">+99
                                                    <span className="visually-hidden">unread messages</span></span>
                                            </button>

                                            <button type="button" className="btn btn-dark position-relative about text-white">
                                                Marker <svg width="1em" height="1em" viewBox="0 0 16 16"
                                                    className="position-absolute top-100 start-50 translate-middle mt-1 svg-white"
                                                    fill="#212529" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z">
                                                    </path>
                                                </svg>
                                            </button>

                                            <button type="button" className="btn btn-primary position-relative">
                                                Alerts <span
                                                    className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"><span
                                                        className="visually-hidden">unread messages</span></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Example With Buttons
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-position-examples">
                                            <div className="position-relative m-4">
                                                <div className="custom-height2 progress" style={{height: "1px;"}}>
                                                    <div className="progress-bar" role="progressbar" style={{width: "50%;"}}
                                                        aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                    </div>
                                                </div>
                                                <button type="button"
                                                    className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                                                    style={{width: "2rem", height:"2rem"}}>1</button>
                                                <button type="button"
                                                    className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
                                                    style={{width: "2rem", height:"2rem"}}>2</button>
                                                <button type="button"
                                                    className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
                                                    style={{width: "2rem", height:"2rem"}}>3</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
      </div>
  )
}
Position.layout = "Contentlayout"

export default Position