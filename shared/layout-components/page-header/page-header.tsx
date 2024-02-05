import React from 'react'

const PageHeader = (props: { title: string ; item: string ; active_item: string }) => {
  return (
    <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
      <div>
        <h2 className="main-content-title fs-24 mb-1">{props.title}</h2>
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a>{props.item}</a></li>
          <li className="breadcrumb-item active" aria-current="page">{props.active_item}</li>
        </ol>
      </div>
      <div className="d-flex">
        <div className="justify-content-center">
          <button type="button" className="btn btn-white btn-icon-text my-2 me-2 d-inline-flex align-items-center">
            <i className="fe fe-download me-2"></i> Import
          </button>
          <button type="button" className="btn btn-white btn-icon-text my-2 me-2 d-inline-flex align-items-center">
            <i className="fe fe-filter me-2"></i> Filter
          </button>
          <button type="button" className="btn btn-primary my-2 btn-icon-text d-inline-flex align-items-center">
            <i className="fe fe-download-cloud me-2"></i> Download Report
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageHeader