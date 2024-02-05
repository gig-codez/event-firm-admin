import React from 'react'

const breakpoints = () => {
  return (
    <><div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
          <div>
              <h2 className="main-content-title fs-24 mb-1">Breakpoints</h2>
              <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Utilities</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Breakpoints</li>
              </ol>
          </div>
          <div className="d-flex">
              <div className="justify-content-center">
                  <button type="button" className="btn btn-white btn-icon-text my-2 me-2 d-inline-flex align-items-center">
                      <i className="fe fe-download me-2 fs-14"></i> Import
                  </button>
                  <button type="button" className="btn btn-white btn-icon-text my-2 me-2 d-inline-flex align-items-center">
                      <i className="fe fe-filter me-2 fs-14"></i> Filter
                  </button>
                  <button type="button" className="btn btn-primary my-2 btn-icon-text d-inline-flex align-items-center">
                      <i className="fe fe-download-cloud me-2 fs-14"></i> Download Report
                  </button>
              </div>
          </div>
      </div><div className="row row-sm">
              <div className="col-xl-6">
                  <div className="card custom-card">
                      <div className="card-header">
                          <div className="card-title">
                              Containers
                          </div>
                      </div>
                      <div className="card-body">
                          <div className="table-responsive">
                              <table className="table table-bordered table-hover table-nowrap mb-0">
                                  <thead>
                                      <tr>
                                          <th>Content</th>
                                          <th>Extra small<div className="fw-normal">&lt;576px</div>
                                          </th>
                                          <th>Small<div className="fw-normal">≥576px</div>
                                          </th>
                                          <th>Medium<div className="fw-normal">≥768px</div>
                                          </th>
                                          <th>Large<div className="fw-normal">≥992px</div>
                                          </th>
                                          <th>X-Large<div className="fw-normal">≥1200px</div>
                                          </th>
                                          <th>XX-Large<div className="fw-normal">≥1400px</div>
                                          </th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td><code>.container</code></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td>540px</td>
                                          <td>720px</td>
                                          <td>960px</td>
                                          <td>1140px</td>
                                          <td>1320px</td>
                                      </tr>
                                      <tr>
                                          <td><code>.container-sm</code></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td>540px</td>
                                          <td>720px</td>
                                          <td>960px</td>
                                          <td>1140px</td>
                                          <td>1320px</td>
                                      </tr>
                                      <tr>
                                          <td><code>.container-md</code></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td>720px</td>
                                          <td>960px</td>
                                          <td>1140px</td>
                                          <td>1320px</td>
                                      </tr>
                                      <tr>
                                          <td><code>.container-lg</code></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td>960px</td>
                                          <td>1140px</td>
                                          <td>1320px</td>
                                      </tr>
                                      <tr>
                                          <td><code>.container-xl</code></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td>1140px</td>
                                          <td>1320px</td>
                                      </tr>
                                      <tr>
                                          <td><code>.container-xxl</code></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td>1320px</td>
                                      </tr>
                                      <tr>
                                          <td><code>.container-fluid</code></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                          <td><span className="text-muted">100%</span></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-xl-6">
                  <div className="card custom-card">
                      <div className="card-header">
                          <div className="card-title">
                              Available breakpoints
                          </div>
                      </div>
                      <div className="card-body">
                          <div className="table-responsive">
                              <table className="table table-bordered table-hover table-nowrap mb-0">
                                  <thead>
                                      <tr>
                                          <th>Breakpoint</th>
                                          <th>class infix</th>
                                          <th>Dimensions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>Extra small</td>
                                          <td>None</td>
                                          <td>576px</td>
                                      </tr>
                                      <tr>
                                          <td>Small</td>
                                          <td><code>sm</code></td>
                                          <td>≥576px</td>
                                      </tr>
                                      <tr>
                                          <td>Medium</td>
                                          <td><code>md</code></td>
                                          <td>≥768px</td>
                                      </tr>
                                      <tr>
                                          <td>Large</td>
                                          <td><code>lg</code></td>
                                          <td>≥992px</td>
                                      </tr>
                                      <tr>
                                          <td>Extra large</td>
                                          <td><code>xl</code></td>
                                          <td>≥1200px</td>
                                      </tr>
                                      <tr>
                                          <td>Extra extra large</td>
                                          <td><code>xxl</code></td>
                                          <td>≥1400px</td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
          </div></>
  )
}
breakpoints.layout = "Contentlayout"
export default breakpoints