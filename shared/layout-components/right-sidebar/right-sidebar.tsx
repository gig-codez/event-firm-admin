import React, { useRef } from "react";
import Link  from "next/link";
import { Form } from "react-bootstrap";
import { useState } from "react";

function Rightside() {
  const [show, setShow] = useState(false);

  const rightSideBar : any = useRef(null);

  const handleShow = () => setShow(true);
  const openCloseSidebar = () => {
    document.querySelector("#right-sidebar-canvas")?.classList.remove("show");

    rightSideBar.current?.classList.toggle("hidden");
    // document.querySelector(".offcanv-sidebar")?.classList.remove("hidden");
    document.querySelector("body")!.classList.add("overflow:hidden");
    document.querySelector("body")!.classList.add("padding-right:4px");
    document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
    document.querySelector(".switcher-backdrop")?.classList.add("d-none");


  };
  
  return (
    <>

<div className="switcher-backdrop d-none" onClick={() => {
    openCloseSidebar();
}}></div>
 <div  className="offcanvas offcanvas-end right-sidebar" tabIndex={-1} id="right-sidebar-canvas" aria-labelledby="offcanvasRightLabel1"    >
            <div className="offcanvas-header border-bottom">
                <h5 className="offcanvas-title text-default" id="offcanvasRightLabel1">Todo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ref={rightSideBar} onClick={() => openCloseSidebar()} ></button>
            </div>
            <div className="offcanvas-body p-0 sidebar-right">
                    <div className="d-flex p-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm1" defaultChecked/>
                            <label className="form-check-label" htmlFor="checkebox-sm1"> Hangout With friends </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <div className="d-flex p-3 border-top">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm2"/>
                            <label className="form-check-label" htmlFor="checkebox-sm2"> Prepare for presentation </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <div className="d-flex p-3 border-top">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm3"/>
                            <label className="form-check-label" htmlFor="checkebox-sm3"> Prepare for presentation </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <div className="d-flex p-3 border-top">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm4" defaultChecked/>
                            <label className="form-check-label" htmlFor="checkebox-sm4"> System Updated </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <div className="d-flex p-3 border-top">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm5"/>
                            <label className="form-check-label" htmlFor="checkebox-sm5"> Do something more </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <div className="d-flex p-3 border-top">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm6"/>
                            <label className="form-check-label" htmlFor="checkebox-sm6"> System Updated </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <div className="d-flex p-3 border-top">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm7" defaultChecked/>
                            <label className="form-check-label" htmlFor="checkebox-sm7"> Find an Idea </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <div className="d-flex p-3 border-top mb-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkebox-sm8" defaultChecked/>
                            <label className="form-check-label" htmlFor="checkebox-sm8"> Project review </label>
                        </div>
                        <span className="ms-auto">
                            <i className="fe fe-edit-2 text-primary me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Edit"></i>
                            <i className="fe fe-trash-2 text-danger me-2" data-bs-toggle="tooltip" title="" data-bs-placement="top" data-bs-original-title="Delete"></i>
                        </span>
                    </div>
                    <h5 className="px-4 Overviews">Overview</h5>
                    <div className="p-4">
                        <div className="main-traffic-detail-item">
                            <div>
                                <span>Founder &amp; CEO</span> <span>24</span>
                            </div>
                            <div className="progress mb-3 progress-sm progress-animate" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-primary" style={{width: "25%"}}></div>
                            </div>
                        </div>
                        <div className="main-traffic-detail-item">
                            <div>
                                <span>UX Designer</span> <span>1</span>
                            </div>
                            <div className="progress mb-3 progress-sm progress-animate" role="progressbar" aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-secondary" style={{width: "10%"}}></div>
                            </div>
                        </div>
                        <div className="main-traffic-detail-item">
                            <div>
                                <span>Recruitment</span> <span>87</span>
                            </div>
                            <div className="progress mb-3 progress-sm progress-animate" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-success" style={{width: "45%"}}></div>
                            </div>
                        </div>
                        <div className="main-traffic-detail-item">
                            <div>
                                <span>Software Engineer</span> <span>32</span>
                            </div>
                            <div className="progress mb-3 progress-sm progress-animate" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-info" style={{width:"30%"}}></div>
                            </div>
                        </div>
                        <div className="main-traffic-detail-item">
                            <div>
                                <span>Project Manager</span> <span>32</span>
                            </div>
                            <div className="progress progress-sm progress-animate" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}>
                                <div className="progress-bar bg-danger" style={{width: "30%"}}></div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
  );
}
Rightside.propTypes = {};

Rightside.defaultProps = {};

export default Rightside;
