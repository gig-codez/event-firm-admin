import React from 'react'

const columns = () => {
  return (
    <div>
    <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb">
      <div>
          <h2 className="main-content-title fs-24 mb-1">Columns</h2>
          <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><a href="#">Utilities</a></li>
              <li className="breadcrumb-item active" aria-current="page">Columns</li>
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
    </div> <div className="row row-sm">
                        <div className="col-xl-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Vertical alignment
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-row bd-example-row-flex-cols">
                                            <div className="container">
                                                <div className="row align-items-start mb-3">
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                </div>
                                                <div className="row align-items-center mb-3">
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                </div>
                                                <div className="row align-items-end mb-3">
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col align-self-start">
                                                        One of three columns
                                                    </div>
                                                    <div className="col align-self-center">
                                                        One of three columns
                                                    </div>
                                                    <div className="col align-self-end">
                                                        One of three columns
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Column wrapping
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-9">.col-9</div>
                                                    <div className="col-4">.col-4 Since 9 + 4 = 13 &gt; 12, this
                                                        4-column-wide
                                                        div gets wrapped onto a new line as one contiguous unit.
                                                    </div>
                                                    <div className="col-6">.col-6 Subsequent columns continue
                                                        along the new line.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Margin utilities
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-row">
                                            <p className="mb-4">With the move to flexbox in v4, you can use margin utilities like
                                                <span className="text-danger">.me-auto</span>to force sibling columns
                                                away
                                                from one
                                                another.
                                            </p>
                                            <div className="container">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">.col-md-4</div>
                                                    <div className="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
                                                    <div className="col-md-3 ms-md-auto">.col-md-3 .ms-md-auto</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-auto me-auto">.col-auto .me-auto</div>
                                                    <div className="col-auto">.col-auto</div>
                                                </div>
                                            </div>
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
                                                Horizontal alignment
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-row">
                                            <div className="container">
                                                <div className="row justify-content-start mb-3">
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                </div>
                                                <div className="row justify-content-center mb-3">
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                </div>
                                                <div className="row justify-content-end mb-3">
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                </div>
                                                <div className="row justify-content-around mb-3">
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                    <div className="col-4 mb-3">
                                                        One of two columns
                                                    </div>
                                                </div>
                                                <div className="row justify-content-between mb-3">
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                </div>
                                                <div className="row justify-content-evenly">
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Column breaks
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-row">
                                            <div className="container mb-3">
                                                <div className="row">
                                                    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                                                    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
        
                                                    <div className="w-100"></div>
        
                                                    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                                                    <div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
                                                </div>
                                            </div>
                                            <p>You may also apply this break at specific breakpoints with our <span
                                                    className="text-danger">responsive display utilities.</span></p>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                                                    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
        
                                                    <div className="w-100 d-none d-md-block"></div>
        
                                                    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                                                    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Order classes
                                            </div>
                                        </div>
                                        <div className="card-body bd-example-row">
                                            <div className="container">
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        First in DOM, no order applied
                                                    </div>
                                                    <div className="col order-5">
                                                        Second in DOM, with a larger order
                                                    </div>
                                                    <div className="col order-1">
                                                        Third in DOM, with an order of 1
                                                    </div>
                                                </div>
                                            </div>
                                            <p>There are also responsive <span className="text-danger">.order-first</span> and
                                                <span className="text-danger">.order-last</span> classes that change the
                                                order of an element by applying <span className="text-danger">order: -1</span>
                                                and
                                                <span className="text-danger">order: 6</span>, respectively. These
                                                classes can also be intermixed with the numbered .order-* classes as needed.
                                            </p>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col order-last">
                                                        First in DOM, ordered last
                                                    </div>
                                                    <div className="col bd-example-grid">
                                                        Second in DOM, unordered
                                                    </div>
                                                    <div className="col order-first">
                                                        Third in DOM, ordered first
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="card custom-card">
                                        <div className="card-header">
                                            <div className="card-title">
                                                Standalone column classes
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>The <span className="text-danger">.col-*</span> classes can also be used
                                                outside a
                                                <span className="text-danger">.row</span> to give an element a specific
                                                width. Whenever column classes are used as non direct children of a
                                                row,
                                                the
                                                paddings are omitted.
                                            </p>
                                            <div className="col-3 bg-light p-3 border">
                                                .col-3: width of 25%
                                            </div>
                                            <div className="col-sm-9 bg-light p-3 border">
                                                .col-sm-9: width of 75% above sm breakpoint
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <h6 className="mb-3">Offsetting Columns</h6>
                    <div className="row row-sm">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Offset classes
                                    </div>
                                </div>
                                <div className="card-body bd-example-row">
                                    <div className="container mb-3">
                                        <div className="row mb-3">
                                            <div className="col-md-4">.col-md-4</div>
                                            <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3
                                            </div>
                                            <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3
                                            </div>
                                        </div>
                                    </div>
                                    <p>In addition to column clearing at responsive breakpoints, you may need to
                                        reset
                                        offsets.</p>
                                    <div className="container">
                                        <div className="row mb-3">
                                            <div className="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
                                            <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                                                .col-sm-5
                                                .offset-sm-2 .col-md-6 .offset-md-0
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5
                                                .col-lg-6</div>
                                            <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                                                .col-sm-6
                                                .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
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
                                <div className="card-body">
                            
                                    <div className="clearfix">
                                        <img src="../../../assets/images/media/media-40.jpg" className="bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3 rounded img-fluid" alt="..."/>
                                        <p>
                                            A paragraph of placeholder text. Were using it here to show the use of
                                            the
                                            clearfix class. Were adding quite a few meaningless phrases here to
                                            demonstrate
                                            how the columns interact here with the floated image.
                                        </p>
                                        <p>
                                            As you can see the paragraphs gracefully wrap around the floated image.
                                            Now
                                            imagine how this would look with some actual content in here, rather
                                            than
                                            just
                                            this boring placeholder text that goes on and on, but actually conveys
                                            no
                                            tangible information at. It simply takes up space and should not really
                                            be
                                            read.
                                        </p>
                                        <p>
                                            And yet, here you are, still persevering in reading this placeholder
                                            text,
                                            hoping for some more insights, or some hidden easter egg of content. A
                                            joke,
                                            perhaps. Unfortunately, theres none of that here.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
  )
}
columns.layout = "Contentlayout"

export default columns