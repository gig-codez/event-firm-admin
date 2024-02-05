import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'
interface CustomCSSProperties {
    '--bs-aspect-ratio'?: string;
  }
const helpers = () => {

  return (
    
    <div>  
        <Seo title="Helpers"/>

    <PageHeader title="Helpers" item="Utilities" active_item="Helpers"/>
    

                    <div className="row row-sm">
                        <div className="col-xxl-5 col-xl-5 col-lg-12 col-md-12 col-sm-12">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Colors With backgrounds
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="text-bg-primary p-3">Primary with contrasting color</div>
                                    <div className="text-bg-secondary p-3">Secondary with contrasting color</div>
                                    <div className="text-bg-success p-3">Success with contrasting color</div>
                                    <div className="text-bg-danger p-3">Danger with contrasting color</div>
                                    <div className="text-bg-warning p-3">Warning with contrasting color</div>
                                    <div className="text-bg-info p-3">Info with contrasting color</div>
                                    <div className="text-bg-light p-3 text-dark">Light with contrasting color</div>
                                    <div className="text-bg-dark p-3 text-white">Dark with contrasting color</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">With Other Components</div>
                                </div>
                                <div className="card-body">
                                    <h6 className="fw-semibold mb-3 ">Badges:</h6>
                                    <span className="badge text-bg-primary me-2">Primary</span>
                                    <span className="badge text-bg-info mb-4">Info</span>
                                    <h6 className="fw-semibold mb-3">cards:</h6>
                                    <div className="card text-bg-secondary mb-3">
                                        <div className="card-header border-bottom-0">
                                            <div className="card-title text-fixed-white">
                                                Header
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <p className="card-text text-fixed-white">Some quick example text to build on the card title
                                                and
                                                make up the bulk of the cards content.</p>
                                        </div>
                                    </div>
                                    <div className="card text-bg-info mb-3" >
                                        <div className="card-header border-bottom-0">
                                            <div className="card-title text-fixed-white">
                                                Header
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <p className="card-text text-fixed-white">Some quick example text to build on the card title
                                                and
                                                make up the bulk of the cards content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Card With Stretched Links
                                    </div>
                                </div>
                                <div className="card-body">
                                    <img className="bd-placeholder-img card-img-top card-img" src="../../../assets/images/media/media-4.jpg" alt="..."/>
                                    <div className="card-body pb-0">
                                        <h5 className="card-title">Card with stretched links</h5>
                                        <p className="card-text">
                                            <a href="#!" className="stretched-link text-danger"
                                                style={{position:"relative"}}>Stretched link will not work
                                                here,
                                                because <code>position: relative</code> is added to the
                                                link</a>
                                        </p>
                                        <p className="card-text bg-light mb-0 p-1 rounded" style={{transform: "rotate(0)"}}>
                                            This <a href="#!" className="text-warning stretched-link">stretched
                                                link</a>
                                            will only be spread over the <code>p</code>-tag, because a
                                            transform is
                                            applied to it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div className="row row-sm">
                        <div className="col-xxl-6 col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Clearfix
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="bg-light clearfix">
                                        <button type="button" className="btn btn-primary float-start m-1">Example Button
                                            floated left</button>
                                        <button type="button" className="btn btn-primary float-end m-1">Example Button
                                            floated
                                            right</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Colored links
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-evenly flex-wrap">
                                        <a href="#!" className="link-primary fw-semibold fs-15 p-1">Primary</a>
                                        <a href="#!" className="link-secondary fw-semibold fs-15 p-1">Secondary</a>
                                        <a href="#!" className="link-success fw-semibold fs-15 p-1">Success</a>
                                        <a href="#!" className="link-danger fw-semibold fs-15 p-1">Danger</a>
                                        <a href="#!" className="link-warning fw-semibold fs-15 p-1">Warning</a>
                                        <a href="#!" className="link-info fw-semibold fs-15 p-1">Info</a>
                                        <a href="#!" className="link-light fw-semibold fs-15 p-1">Light</a>
                                        <a href="#!" className="link-dark fw-semibold fs-15 p-1">Dark</a>
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
                                        Ratio
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="ratio ratio-16x9">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-lDlbQ7DiCI"
                                            title="YouTube video player" style={{border:"0px"}}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
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
                                                Aspect ratios
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-ratios">
                                            <div className="ratio ratio-1x1 me-1">
                                                <div className="d-flex align-items-center justify-content-center ">1x1</div>
                                            </div>
                                            <div className="ratio ratio-4x3 me-1">
                                                <div className="d-flex align-items-center justify-content-center ">4x3</div>
                                            </div>
                                            <div className="ratio ratio-16x9 me-1">
                                                <div className="d-flex align-items-center justify-content-center ">16x9</div>
                                            </div>
                                            <div className="ratio ratio-21x9 me-1">
                                                <div className="d-flex align-items-center justify-content-center ">21x9</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Custom ratios
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-ratios bd-example-ratios-breakpoint">
                                            <div className="ratio  me-1" >
                                                <div className="d-flex align-items-center justify-content-center">2x1</div>
                                            </div>
                                            <div className="ratio ratio-4x3">
                                                <div className="d-flex align-items-center justify-content-center">4x3, then 2x1</div>
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
                                        Vertical Stacking
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="vstack gap-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Second item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Horizontal Stacking
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="hstack gap-3 mb-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Second item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                    <div className="hstack gap-3 mb-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border ms-auto p-1 px-2 rounded">Second item</div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                    <div className="hstack gap-3">
                                        <div className="bg-light border p-1 px-2 rounded">First item</div>
                                        <div className="bg-light border ms-auto p-1 px-2 rounded">Second item</div>
                                        <div className="vr"></div>
                                        <div className="bg-light border p-1 px-2 rounded">Third item</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
             
                    <div className="row row-sm">
                        <div className="col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Vstack For Buttons
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="vstack gap-2 col-md-5 mx-auto">
                                        <button type="button" className="btn btn-primary">Save
                                            changes</button>
                                        <button type="button" className="btn btn-outline-primary">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Inline Form With Hstack
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="hstack gap-3">
                                        <input className="form-control me-auto" type="text"
                                            placeholder="Add your item here..."
                                            aria-label="Add your item here..."/>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                        <div className="vr"></div>
                                        <button type="button" className="btn btn-outline-danger">Reset</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Text Truncation
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2 text-truncate">
                                            This text is quite long, and will be truncated once displayed.
                                        </div>
                                    </div>
                                    <span className="d-inline-block text-truncate" style= {{maxWidth: "150px"}}>
                                        This text is quite long, and will be truncated once displayed.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}
helpers.layout = "Contentlayout"

export default helpers