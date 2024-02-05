import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const more = () => {
  return (
    <div> 
        <Seo title="More"/>
    
    <PageHeader title="More" item="Utilities" active_item="More"/>
    <div className="row row-sm">
        <div className="col-xl-4">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Display Inline
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-inline p-2 bg-primary text-fixed-white rounded m-1">d-inline</div>
                            <div className="d-inline p-2 bg-primary-transparent text-primary rounded m-1">d-inline</div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                D-block
                            </div>
                        </div>
                        <div className="card-body">
                            <span className="d-block p-2 bg-secondary-transparent mb-1 rounded">d-block</span>
                            <span className="d-block p-2 bg-primary-transparent mb-1 rounded">d-block</span>
                            <span className="d-block p-2 bg-success-transparent mb-1 rounded">d-block</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Float
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="float-start p-2 bg-primary rounded text-fixed-white mb-2">Float start</div><br/>
                            <div className="float-end p-2 bg-primary rounded text-fixed-white">Float end</div><br/>
                            <div className="float-none p-2 bg-primary rounded text-fixed-white mt-4">Dont float</div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Float Responsive
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="float-sm-start p-1 bg-light">Float sm
                            </div>
                            <br/>
                            <div className="float-md-end p-1 bg-light">Float md
                            </div>
                            <br/>
                            <div className="float-lg-start p-1 bg-light">Float lg
                            </div>
                            <br/>
                            <div className="float-xl-end p-1 bg-light">Float  xl
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-4">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Text selection
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="user-select-all">This paragraph will be entirely selected when clicked
                                by
                                the user.
                            </p>
                            <p className="user-select-auto">This paragraph has default select behavior.</p>
                            <p className="user-select-none mb-0">This paragraph will not be selectable when clicked
                                by
                                the user.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Pointer events
                            </div>
                        </div>
                        <div className="card-body">
                            <p><a href="#" className="pe-none" tabIndex={-1}><code className="text-primary fw-semibold">This link </code></a>
                                  can
                                  not be clicked.
                            </p>
                            <p><a href="#" className="pe-auto"><code className="text-primary fw-semibold">This link</code></a>  can be clicked (this is default
                                behavior).
                            </p>
                            <p className="pe-none mb-0"><a href="#" tabIndex={-1}><code>This link </code></a>
                                can
                                not be clicked because the <code className="text-primary fw-semibold">pointer-events</code> property is inherited
                                from its parent. However, <a href="#" className="pe-auto">this link</a> has a
                                <code>pe-auto</code> class and can be clicked.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div className="row row-sm">
        <div className="col-xl-6">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Gap
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-grid gap-3">
                                <div className="p-2 bg-light border">Grid item 1</div>
                                <div className="p-2 bg-light border">Grid item 2</div>
                                <div className="p-2 bg-light border">Grid item 3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Overflow
                            </div>
                        </div>
                        <div className="card-body d-md-flex">
                            <div className="overflow-auto p-3 mb-3 mb-md-0 me-md-3 bg-light"
                                style={{"maxWidth": "260px",maxHeight: "100px"}}>
                                This is an example of using <code>.overflow-auto</code> on an element with
                                set width and height dimensions. By design, this content will vertically
                                scroll.
                            </div>
                            <div className="overflow-hidden p-3 mb-3 mb-md-0 me-md-3 bg-light"
                               style={{"maxWidth": "260px",maxHeight: "100px"}}>
                                This is an example of using <code>.overflow-hidden</code> on an element with
                                set width and height dimensions.
                            </div>
                            <div className="overflow-visible p-3 mb-3 mb-md-0 me-md-3 bg-light"
                                style={{"maxWidth": "260px",maxHeight: "100px"}}>
                                This is an example of using <code>.overflow-visible</code> on an element
                                with set width and height dimensions.
                            </div>
                            <div className="overflow-scroll p-3 bg-light"
                                style={{"maxWidth": "260px",maxHeight: "100px"}}>
                                This is an example of using <code>.overflow-scroll</code> on an element with
                                set width and height dimensions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">
                        Examples
                    </div>
                </div>
                <div className="card-body">
                    <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
                    <div className="shadow-sm p-3 mb-5 bg-body rounded">Small shadow</div>
                    <div className="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
                    <div className="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>
                </div>
            </div>
        </div>
    </div>
  
    <div className="row row-sm">
        <div className="col-xl-6">
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Vertical alignment With table cells
                            </div>
                        </div>
                        <div className="card-body">
                            <table style={{height: "100px"}}>
                                <tbody>
                                    <tr>
                                        <td className="align-baseline">baseline</td>
                                        <td className="align-top">top</td>
                                        <td className="align-middle">middle</td>
                                        <td className="align-bottom">bottom</td>
                                        <td className="align-text-top">text-top</td>
                                        <td className="align-text-bottom">text-bottom</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Vertical alignment With inline elements
                            </div>
                        </div>
                        <div className="card-body">
                            <span className="align-baseline">baseline</span>
                            <span className="align-top">top</span>
                            <span className="align-middle">middle</span>
                            <span className="align-bottom">bottom</span>
                            <span className="align-text-top">text-top</span>
                            <span className="align-text-bottom">text-bottom</span>
                        </div>
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
                                Opacity
                            </div>
                        </div>
                        <div className="card-body d-sm-flex">
                            <div className="opacity-100 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">100%
                            </div>
                            <div className="opacity-75 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">75%</div>
                            <div className="opacity-50 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">50%</div>
                            <div className="opacity-25 p-3 m-2 bg-primary text-fixed-white fw-bold rounded">25%</div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header">
                            <div className="card-title">
                                Horizontal centering
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="mx-auto" style={{width: "200px", padding: "10px", borderRadius: "4px", backgroundColor: "rgba(86,61,124,.15)"}}>
                                Centered element
                            </div>
                        </div>
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
                        Relative to the parent
                    </div>
                </div>
                <div className="card-body">
                    <div className="mb-5">
                        <div className="w-25 p-3 bg-light">Width 25%</div>
                        <div className="w-50 p-3 bg-light">Width 50%</div>
                        <div className="w-75 p-3 bg-light">Width 75%</div>
                        <div className="w-100 p-3 bg-light">Width 100%</div>
                        <div className="w-auto p-3 bg-light">Width auto</div>
                    </div>
                    <div style={{height: "100px",backgroundColor: "rgba(255,0,0,0.1)"}} className="d-flex">
                        <div className="h-25 d-inline-block p-1"
                            style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 25%
                        </div>
                        <div className="h-50 d-inline-block p-1"
                            style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 50%
                        </div>
                        <div className="h-75 d-inline-block p-1"
                            style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 75%
                        </div>
                        <div className="h-100 d-inline-block p-1"
                            style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height 100%
                        </div>
                        <div className="h-auto d-inline-block p-1"
                            style={{width: "120px", backgroundColor: "rgba(0,0,255,.1)"}}>Height auto
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">
                        You can also use <span className="text-danger"> max-width: 100%;</span> and  utilities as needed.
                    </div>
                </div>
                <div className="card-body">
                    <img className="bd-placeholder-img mw-100 card-img" src="../../../assets/images/media/media-7.jpg" alt="..."/>
                    <div style={{height: "100px",backgroundColor: "rgba(255,0,0,.1)"}} className="mt-3">
                        <div className="mh-100 p-2"
                            style={{width: "100px", height: "200px", backgroundColor: "rgba(0,0,255,.1)"}}>
                            Max-height 100%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
more.layout = "Contentlayout"

export default more