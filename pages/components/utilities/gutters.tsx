import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const gutters = () => {
  return (
    <div>  
              <Seo title="Gutters"/>

            <PageHeader title="Gutters" item="Utilities" active_item="Gutters"/>
    
    <div className="row row-sm">
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">
                        Horizontal gutters
                    </div>
                </div>
                <div className="card-body">
                    <p><span className="text-danger">.gx-*</span> classes can be used to control the
                        horizontal gutter widths. The <span className="text-danger">.container</span>
                        or <span className="text-danger">.container-fluid</span> parent may need to be
                        adjusted if larger gutters are used
                        too to avoid unwanted overflow, using a matching padding utility. For
                        example,
                        in the following example we’ve increased the padding with <span
                            className="text-danger">.px-4</span>:
                    </p>
                    <div className="container px-4 mb-3">
                        <div className="row gx-5">
                            <div className="col">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                        </div>
                    </div>
                    <p>An alternative solution is to add a wrapper around the <span
                            className="text-danger">.row</span> with the <span
                            className="text-danger">.overflow-hidden</span> class:
                    </p>
                    <div className="container overflow-hidden">
                        <div className="row gx-5">
                            <div className="col">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Custom column padding</div>
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
                        Vertical gutters
                    </div>
                </div>
                <div className="card-body">
                    <p><span className="text-danger">.gy-*</span> classes can be used to control the
                        vertical gutter widths. Like the
                        horizontal gutters, the vertical gutters can cause some overflow below the
                        .row
                        at the end of a page. If this occurs, you add a wrapper around <span
                            className="text-danger">.row</span> with the
                        <span className="text-danger">.overflow-hidden</span> class:
                    </p>
                    <div className="container overflow-hidden">
                        <div className="row gy-5">
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
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
                        Horizontal & vertical gutters
                    </div>
                </div>
                <div className="card-body">
                    <p><span className="text-danger">.g-*</span> classes can be used to control the
                        horizontal gutter widths, for the
                        following example we use a smaller gutter width, so there won’t be a need to
                        add
                        the <span className="text-danger">.overflow-hidden</span> wrapper class.</p>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">Custom column padding</div>
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
                        Row columns gutters
                    </div>
                </div>
                <div className="card-body">
                    <p>Gutter classes can also be added to <span className="text-danger">row
                            columns</span>.
                        In the following example, we use
                        responsive row columns and responsive gutter classes.
                    </p>
                    <div className="container">
                        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
                            </div>
                            <div className="col">
                                <div className="p-3 border bg-light">Row column</div>
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
                        No gutters
                    </div>
                </div>
                <div className="card-body">
                    <p>The gutters between columns in our predefined grid classes can be removed
                        with
                        <span className="text-danger">.g-0</span>. This removes the negative <span
                            className="text-danger">margins</span> from <span className="text-danger">.row
                        </span>and the horizontal <span className="text-danger">padding</span>
                        from all immediate children columns.
                    </p>
                    <p>Need an edge-to-edge design? Drop the parent <span
                            className="text-danger">.container</span> or <span
                            className="text-danger">.container-fluid</span> and
                        add <span className="text-danger">.mx-0</span> to the <span
                            className="text-danger">.row</span> to prevent overflow.
                    </p>
                    <p>In practice, here’s how it looks. Note you can continue to use this with all
                        other predefined grid classes (including column widths, responsive tiers,
                        reorders, and more).</p>
                    <div className="row g-0">
                        <div className="col-sm-6 col-md-8 bd-example-grid">.col-sm-6 .col-md-8</div>
                        <div className="col-6 col-md-4 bd-example-grid">.col-6 .col-md-4</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
gutters.layout = "Contentlayout"

export default gutters