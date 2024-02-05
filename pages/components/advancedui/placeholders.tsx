import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const placeholders = () => {
  return (
    <div>  
                   <Seo title="Placeholders"/>
    
    <PageHeader title="Placeholders" item="Advanced Ui" active_item="Placeholders"/>   

    <div className="row row-sm">
        <div className="col-xl-6">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="card custom-card">
                        <img className="card-img-top" src="../../../assets/images/media/media-60.jpg" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make
                                up
                                the bulk of the cards content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="card" aria-hidden="true">
                        <img className="card-img-top" src="../../../assets/images/media/media-61.jpg" alt=""/>
                        <div className="card-body">
                            <div className="h5 card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </div>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                            </p>
                            <a href="#" className="btn btn-primary disabled placeholder col-6"></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Animation
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="placeholder-glow mb-0">
                                <span className="placeholder col-12"></span>
                            </p>
                            <p className="placeholder-wave mb-0">
                                <span className="placeholder col-12"></span>
                            </p>
                        </div>
                        <div className="card-footer d-none border-top-0">
<pre className="language-html"><code className="language-html">&lt;p className=`placeholder-glow mb-0`&gt;
&lt;span className=`placeholder col-12`&gt;&lt;/span&gt;
&lt;/p&gt;
&lt;p className=`placeholder-wave mb-0`&gt;
&lt;span className=`placeholder col-12`&gt;&lt;/span&gt;
&lt;/p&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="row">
                <div className="col-xl-12">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                        Sizing
                                    </div>
                                    <div className="prism-toggle">
                                        <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <span className="placeholder col-12 placeholder-xl mb-1"></span>
                                    <span className="placeholder col-12 placeholder-lg"></span>
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-12 placeholder-sm"></span>
                                    <span className="placeholder col-12 placeholder-xs"></span>
                                </div>
                                <div className="card-footer d-none border-top-0">
<pre className="language-html"><code className="language-html">&lt;span className=`placeholder col-12 placeholder-xl mb-1`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 placeholder-lg`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 placeholder-sm`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 placeholder-xs`&gt;&lt;/span&gt;</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Colors
                            </div>
                            <div className="prism-toggle">
                                <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                            </div>
                        </div>
                        <div className="card-body">
                            <span className="placeholder col-12"></span>
                            <span className="placeholder col-12 bg-primary"></span>
                            <span className="placeholder col-12 bg-secondary"></span>
                            <span className="placeholder col-12 bg-success"></span>
                            <span className="placeholder col-12 bg-danger"></span>
                            <span className="placeholder col-12 bg-warning"></span>
                            <span className="placeholder col-12 bg-info"></span>
                            <span className="placeholder col-12 bg-light"></span>
                            <span className="placeholder col-12 bg-dark"></span>
                        </div>
                        <div className="card-footer d-none border-top-0">
<pre className="language-html"><code className="language-html">&lt;span className=`placeholder col-12`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-primary`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-secondary`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-success`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-danger`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-warning`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-info`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-light`&gt;&lt;/span&gt;
&lt;span className=`placeholder col-12 bg-dark`&gt;&lt;/span&gt;</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div className="row row-sm">
        <div className="col-xl-12">
            <div className="card custom-card">
                <div className="card-header justify-content-between">
                    <div className="card-title">
                        Width
                    </div>
                    <div className="prism-toggle">
                        <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                    </div>
                </div>
                <div className="card-body">
                    <span className="placeholder bg-primary col-6"></span>
                    <span className="placeholder bg-primary w-75"></span>
                    <span className="placeholder bg-primary" style={{width: "25%;"}}></span>
                </div>
                <div className="card-footer d-none border-top-0">
<pre className="language-html"><code className="language-html">&lt;span className=`placeholder bg-primary col-6`&gt;&lt;/span&gt;
&lt;span className=`placeholder bg-primary w-75`&gt;&lt;/span&gt;
&lt;span className=`placeholder bg-primary` style=`width: 25%;`&gt;&lt;/span&gt;</code></pre>

                </div>
            </div>
        </div>
    </div>
 </div>
  )
}
placeholders.layout = "Contentlayout"

export default placeholders