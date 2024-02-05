import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'
import { Dropdown } from 'react-bootstrap'

const scrollspy = () => {
  return (
    <div>  
              <Seo title="Scrollspy"/>
    
    <PageHeader title="Scrollspy" item="Advanced Ui" active_item="Scrollspy"/>
    <div className="row row-sm">
        <div className="col-xl-12">
            <div className="card custom-card">
                <div className="card-header justify-content-between">
                    <div className="card-title">
                        Example in navbar
                    </div>
                    <div className="prism-toggle">
                        <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                    </div>
                </div>
                <div className="card-body">
                    <nav id="navbar-example2" className="navbar navbar-light bg-light px-3 mb-3">
                        <ul className="nav nav-pills d-sm-flex d-block">
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading1">First</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#scrollspyHeading2">Second</a>
                            </li>
                            <Dropdown className="nav-item dropdown">
                                <Dropdown.Toggle className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
                                    role="button" aria-expanded="false">Dropdown</Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu">
                                    <li ><Dropdown.Item as="a" className="scrolldropdown" href="#scrollspyHeading3">Third</Dropdown.Item>
                                    </li>
                                    <li ><Dropdown.Item as="a" className="scrolldropdown" href="#scrollspyHeading4">Fourth</Dropdown.Item>
                                    </li>
                                    <li >
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li ><Dropdown.Item as="a" className="scrolldropdown" href="#scrollspyHeading5">Fifth</Dropdown.Item>
                                    </li>
                                </Dropdown.Menu>
                            </Dropdown>
                        </ul>
                    </nav>
                    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0"
                        className="scrollspy-example bg-light p-3 rounded-2"
                        data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabIndex={0}>
                        <h6 className="fw-semibold" id="scrollspyHeading1">First heading</h6>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa
                            alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio
                            magni,Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio
                            magni,Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio
                            magni,Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio
                            magni,Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio
                            magni,Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio
                            magni,Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                            reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
                            illum
                            vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
                            adipisicing elit. Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
                        </p>
                        <h6 className="fw-semibold" id="scrollspyHeading2">Second heading</h6>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam
                            ullam
                            perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
                            fugit
                            sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Aliquam veniam ullam
                            perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
                            fugit
                            sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Aliquam veniam ullam
                            perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
                            fugit
                            sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Aliquam veniam ullam
                            perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
                            fugit
                            sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Quidem culpa alias,
                            illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni
                        </p>
                        <h6 className="fw-semibold" id="scrollspyHeading3">Third heading</h6>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis
                            et
                            quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi
                            aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo?
                        </p>
                        <h6 className="fw-semibold" id="scrollspyHeading4">Fourth heading</h6>
                        <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora
                            pariatur modi corporis aspernatur eveniet?</p>
                        <h6 className="fw-semibold" id="scrollspyHeading5">Fifth heading</h6>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates
                            consequuntur ipsum eos, magni vitae tempore suscipit excepturi
                            blanditiis!
                        </p>
                    </div>
                </div>
                <div className="card-footer d-none border-top-0">

<pre className="language-html"><code className="language-html">&lt;nav id=`navbar-example2` className=`navbar navbar-light bg-light px-3 mb-3`&gt;
&lt;ul className=`nav nav-pills d-sm-flex d-block`&gt;
&lt;li className=`nav-item`&gt;
&lt;a className=`nav-link` href=`#scrollspyHeading1`&gt;First&lt;/a&gt;
&lt;/li&gt;
&lt;li className=`nav-item`&gt;
&lt;a className=`nav-link` href=`#scrollspyHeading2`&gt;Second&lt;/a&gt;
&lt;/li&gt;
&lt;li className=`nav-item dropdown`&gt;
&lt;a className=`nav-link dropdown-toggle`` data-bs-toggle=`dropdown` href=`#`
role=`button` aria-expanded=`false`&gt;Dropdown&lt;/a&gt;
&lt;ul className=`dropdown-menu`&gt;
&lt;li&gt;&lt;a className=`dropdown-item` href=`#scrollspyHeading3`&gt;Third&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a className=`dropdown-item` href=`#scrollspyHeading4`&gt;Fourth&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
    &lt;hr className=`dropdown-divider`&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a className=`dropdown-item` href=`#scrollspyHeading5`&gt;Fifth&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;div data-bs-spy=`scroll` data-bs-target=`#navbar-example2` data-bs-offset=`0`
className=`scrollspy-example bg-light p-3 rounded-2`
data-bs-root-margin=`0px 0px -40%` data-bs-smooth-scroll=`true` tabindex=`0`&gt;
&lt;h6 className=`fw-semibold` id=`scrollspyHeading1`&gt;First heading&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa
alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio
magni,Lorem
ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio
magni,Lorem
ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio
magni,Lorem
ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio
magni,Lorem
ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio
magni,Lorem
ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio
magni,Lorem
ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas sunt!Lorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
reprehenderit sit deleniti excepturi! Tempore magni adipisci iusto sit
illum
vero veniam harum quas suntLorem ipsum dolor sit amet consectetur
adipisicing elit. Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni,
&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`scrollspyHeading2`&gt;Second heading&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam veniam
ullam
perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
fugit
sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
elit.
Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
elit.
Aliquam veniam ullam
perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
fugit
sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
elit.
Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
elit.
Aliquam veniam ullam
perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
fugit
sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
elit.
Quidem culpa alias,Lorem ipsum dolor sit amet consectetur adipisicing
elit.
Aliquam veniam ullam
perspiciatis ut fugit atque iure, quae animi ex tempore. Ducimus illum
fugit
sapiente quisquam!Lorem ipsum dolor sit amet consectetur adipisicing
elit.
Quidem culpa alias,
illum vero cupiditate fugiat, placeat nemo assumenda distinctio magni
&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`scrollspyHeading3`&gt;Third heading&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet nobis
et
quaerat asperiores fugit dignissimos rerum qui minus vitae nesciunt nisi
aspernatur aperiam quidem magnam, cumque repudiandae quod aliquid quo?
&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`scrollspyHeading4`&gt;Fourth heading&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores tempora
pariatur modi corporis aspernatur eveniet?&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`scrollspyHeading5`&gt;Fifth heading&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptates
consequuntur ipsum eos, magni vitae tempore suscipit excepturi
blanditiis!
&lt;/p&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        </div>
    </div>
 
    <div className="row row-sm">
        <div className="col-xl-12">
            <div className="card custom-card">
                <div className="card-header justify-content-between">
                    <div className="card-title">
                        Nested nav
                    </div>
                    <div className="prism-toggle">
                        <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3 col-sm-4">
                            <nav id="navbar-example3"
                                className="navbar bg-light flex-column align-items-stretch p-3">
                                <nav className="nav nav-pills flex-column">
                                    <a className="nav-link" href="#item-1">Item 1</a>
                                    <nav className="nav nav-pills flex-column">
                                        <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                                        <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                                    </nav>
                                    <a className="nav-link" href="#item-2">Item 2</a>
                                    <a className="nav-link" href="#item-3">Item 3</a>
                                    <nav className="nav nav-pills flex-column">
                                        <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                                        <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                                    </nav>
                                </nav>
                            </nav>
                        </div>
                        <div className="col-md-9 col-sm-8">
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example3"
                                data-bs-smooth-scroll="true" tabIndex={0} className="scrollspy-example-2">
                                <div id="item-1">
                                    <h6 className="fw-semibold">Item 1</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Asperiores
                                        explicabo in delectus nostrum aut ab quasi placeat facilis?
                                        Laborum
                                        corporis eaque ipsum laboriosam animi possimus.</p>
                                </div>
                                <div id="item-1-1">
                                    <h6 className="fw-semibold">Item 1-1</h6>
                                    <p className="text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Placeat
                                        minus
                                        distinctio itaque odit magnam voluptate quos ipsam ab
                                        provident!
                                        Facere
                                        minus aperiam non architecto sequi, temporibus aspernatur
                                        harum
                                        consequatur, laboriosam nam ratione adipisci? Doloremque sed
                                        ducimus
                                        aliquid dicta beatae! Quasi voluptas aliquam aliquid error
                                        reiciendis
                                        enim! Iure obcaecati consequatur harum suscipit delectus.
                                    </p>
                                </div>
                                <div id="item-1-2">
                                    <h6 className="fw-semibold">Item 1-2</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Tempore
                                        eius
                                        consectetur quae modi iste voluptatibus a quidem amet ea
                                        corporis neque
                                        non quasi nesciunt sunt numquam minima maiores eveniet
                                        ratione
                                        soluta
                                        temporibus, quam harum nostrum. Laudantium repellat, dolores
                                        blanditiis
                                        iusto tempora corrupti. Distinctio, nesciunt. Tenetur
                                        sapiente
                                        cumque,
                                        totam veniam repellat alias quasi, beatae eveniet quas eos,
                                        ea
                                        aperiam!
                                    </p>
                                </div>
                                <div id="item-2">
                                    <h6 className="fw-semibold">Item 2</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Eius,
                                        itaque
                                        debitis. Numquam facere sunt adipisci dolores ratione quo
                                        magni.
                                        Non,
                                        officiis minima deserunt consequatur, repellendus nihil
                                        laudantium
                                        aperiam laborum eaque animi maxime porro saepe nisi quos.
                                        Corporis hic
                                        tempore illo reiciendis autem, necessitatibus debitis sed
                                        molestias.</p>
                                </div>
                                <div id="item-3">
                                    <h6 className="fw-semibold">Item 3</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Fuga
                                        voluptate
                                        sequi exercitationem voluptatem, commodi dicta nostrum
                                        atque,
                                        praesentium consequatur eos at vero animi neque deleniti
                                        ipsa.
                                        Aliquid
                                        facere saepe pariatur porro nihil blanditiis recusandae
                                        dolor
                                        fuga?
                                        Iusto et omnis neque doloremque, cum modi officia facilis
                                        placeat
                                        repellendus obcaecati mollitia! Id aperiam officiis vitae.
                                        Fugit
                                        quo id
                                        veritatis commodi maiores numquam nostrum necessitatibus
                                        eaque,
                                        quia
                                        exercitationem distinctio ipsa eum, nihil atque perferendis
                                        dicta,
                                        mollitia sed dignissimos incidunt voluptas ab tempore
                                        laborum?
                                        Fugiat,
                                        deserunt. Harum, repellat praesentium! Fuga!</p>
                                </div>
                                <div id="item-3-1">
                                    <h6 className="fw-semibold">Item 3-1</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Numquam
                                        non
                                        deleniti saepe voluptate, est praesentium ducimus sapiente
                                        aut
                                        dignissimos voluptas blanditiis reiciendis earum accusantium
                                        id
                                        ex!</p>
                                </div>
                                <div id="item-3-2">
                                    <h6 className="fw-semibold">Item 3-2</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                                        est.
                                        Blanditiis cupiditate voluptate obcaecati eligendi iusto
                                        amet.
                                        Cupiditate laborum, itaque laboriosam culpa sunt eligendi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-none border-top-0">
<pre className="language-html"><code className="language-html">&lt;div className=`row`&gt;
&lt;div className=`col-md-3 col-sm-4`&gt;
&lt;nav id=`navbar-example3`
className=`navbar bg-light flex-column align-items-stretch p-3`&gt;
&lt;nav className=`nav nav-pills flex-column`&gt;
&lt;a className=`nav-link` href=`#item-1`&gt;Item 1&lt;/a&gt;
&lt;nav className=`nav nav-pills flex-column`&gt;
    &lt;a className=`nav-link ms-3 my-1` href=`#item-1-1`&gt;Item 1-1&lt;/a&gt;
    &lt;a className=`nav-link ms-3 my-1` href=`#item-1-2`&gt;Item 1-2&lt;/a&gt;
&lt;/nav&gt;
&lt;a className=`nav-link` href=`#item-2`&gt;Item 2&lt;/a&gt;
&lt;a className=`nav-link` href=`#item-3`&gt;Item 3&lt;/a&gt;
&lt;nav className=`nav nav-pills flex-column`&gt;
    &lt;a className=`nav-link ms-3 my-1` href=`#item-3-1`&gt;Item 3-1&lt;/a&gt;
    &lt;a className=`nav-link ms-3 my-1` href=`#item-3-2`&gt;Item 3-2&lt;/a&gt;
&lt;/nav&gt;
&lt;/nav&gt;
&lt;/nav&gt;
&lt;/div&gt;
&lt;div className=`col-md-9 col-sm-8`&gt;
&lt;div data-bs-spy=`scroll` data-bs-target=`#navbar-example3`
data-bs-smooth-scroll=`true` tabindex=`0` className=`scrollspy-example-2`&gt;
&lt;div id=`item-1`&gt;
&lt;h6 className=`fw-semibold`&gt;Item 1&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Asperiores
    explicabo in delectus nostrum aut ab quasi placeat facilis?
    Laborum
    corporis eaque ipsum laboriosam animi possimus.&lt;/p&gt;
&lt;/div&gt;
&lt;div id=`item-1-1`&gt;
&lt;h6 className=`fw-semibold`&gt;Item 1-1&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Placeat
    minus
    distinctio itaque odit magnam voluptate quos ipsam ab
    provident!
    Facere
    minus aperiam non architecto sequi, temporibus aspernatur
    harum
    consequatur, laboriosam nam ratione adipisci? Doloremque sed
    ducimus
    aliquid dicta beatae! Quasi voluptas aliquam aliquid error
    reiciendis
    enim! Iure obcaecati consequatur harum suscipit delectus.
&lt;/p&gt;
&lt;/div&gt;
&lt;div id=`item-1-2`&gt;
&lt;h6 className=`fw-semibold`&gt;Item 1-2&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Tempore
    eius
    consectetur quae modi iste voluptatibus a quidem amet ea
    corporis neque
    non quasi nesciunt sunt numquam minima maiores eveniet
    ratione
    soluta
    temporibus, quam harum nostrum. Laudantium repellat, dolores
    blanditiis
    iusto tempora corrupti. Distinctio, nesciunt. Tenetur
    sapiente
    cumque,
    totam veniam repellat alias quasi, beatae eveniet quas eos,
    ea
    aperiam!
&lt;/p&gt;
&lt;/div&gt;
&lt;div id=`item-2`&gt;
&lt;h6 className=`fw-semibold`&gt;Item 2&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Eius,
    itaque
    debitis. Numquam facere sunt adipisci dolores ratione quo
    magni.
    Non,
    officiis minima deserunt consequatur, repellendus nihil
    laudantium
    aperiam laborum eaque animi maxime porro saepe nisi quos.
    Corporis hic
    tempore illo reiciendis autem, necessitatibus debitis sed
    molestias.&lt;/p&gt;
&lt;/div&gt;
&lt;div id=`item-3`&gt;
&lt;h6 className=`fw-semibold`&gt;Item 3&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Fuga
    voluptate
    sequi exercitationem voluptatem, commodi dicta nostrum
    atque,
    praesentium consequatur eos at vero animi neque deleniti
    ipsa.
    Aliquid
    facere saepe pariatur porro nihil blanditiis recusandae
    dolor
    fuga?
    Iusto et omnis neque doloremque, cum modi officia facilis
    placeat
    repellendus obcaecati mollitia! Id aperiam officiis vitae.
    Fugit
    quo id
    veritatis commodi maiores numquam nostrum necessitatibus
    eaque,
    quia
    exercitationem distinctio ipsa eum, nihil atque perferendis
    dicta,
    mollitia sed dignissimos incidunt voluptas ab tempore
    laborum?
    Fugiat,
    deserunt. Harum, repellat praesentium! Fuga!&lt;/p&gt;
&lt;/div&gt;
&lt;div id=`item-3-1`&gt;
&lt;h6 className=`fw-semibold`&gt;Item 3-1&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Numquam
    non
    deleniti saepe voluptate, est praesentium ducimus sapiente
    aut
    dignissimos voluptas blanditiis reiciendis earum accusantium
    id
    ex!&lt;/p&gt;
&lt;/div&gt;
&lt;div id=`item-3-2`&gt;
&lt;h6 className=`fw-semibold`&gt;Item 3-2&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
    est.
    Blanditiis cupiditate voluptate obcaecati eligendi iusto
    amet.
    Cupiditate laborum, itaque laboriosam culpa sunt eligendi.
&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        </div>
    </div>

    <div className="row row-sm">
        <div className="col-xl-12">
            <div className="card custom-card">
                <div className="card-header justify-content-between">
                    <div className="card-title">
                        List group
                    </div>
                    <div className="prism-toggle">
                        <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="bd-example">
                        <div className="row">
                            <div className="col-md-2 col-12">
                                <div id="list-example" className="list-group">
                                    <a className="list-group-item list-group-item-action"
                                        href="#list-item-01">Item 1</a>
                                    <a className="list-group-item list-group-item-action"
                                        href="#list-item-02">Item
                                        2</a>
                                    <a className="list-group-item list-group-item-action"
                                        href="#list-item-03">Item
                                        3</a>
                                    <a className="list-group-item list-group-item-action"
                                        href="#list-item-04">Item
                                        4</a>
                                </div>
                            </div>
                            <div className="col-md-10 col-12 mt-2 mt-md-0">
                                <div data-bs-spy="scroll" data-bs-target="#list-example"
                                    data-bs-smooth-scroll="true" className="scrollspy-example-3"
                                    tabIndex={0}>
                                    <h6 className="fw-semibold" id="list-item-01">Item 1</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Vel,
                                        laborum
                                        reiciendis sunt officia doloribus, soluta ratione id
                                        reprehenderit
                                        autem
                                        temporibus cupiditate necessitatibus atque similique quam ex
                                        minus,
                                        sint
                                        ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                                        perferendis.
                                        Aliquid, quas.</p>
                                    <h6 className="fw-semibold" id="list-item-02">Item 2</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Vel,
                                        laborum
                                        reiciendis sunt officia doloribus, soluta ratione id
                                        reprehenderit
                                        autem
                                        temporibus cupiditate necessitatibus atque similique quam ex
                                        minus,
                                        sint
                                        ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                                        perferendis.
                                        Aliquid, quas.</p>
                                    <h6 className="fw-semibold" id="list-item-03">Item 3</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Vel,
                                        laborum
                                        reiciendis sunt officia doloribus, soluta ratione id
                                        reprehenderit
                                        autem
                                        temporibus cupiditate necessitatibus atque similique quam ex
                                        minus,
                                        sint
                                        ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                                        perferendis.
                                        Aliquid, quas.</p>
                                    <h6 className="fw-semibold" id="list-item-04">Item 4</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Vel,
                                        laborum
                                        reiciendis sunt officia doloribus, soluta ratione id
                                        reprehenderit
                                        autem
                                        temporibus cupiditate necessitatibus atque similique quam ex
                                        minus,
                                        sint
                                        ipsum deleniti sed assumenda fugiat numquam saepe incidunt
                                        perferendis.
                                        Aliquid, quas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-none border-top-0">
<pre className="language-html"><code className="language-html">&lt;div className=`bd-example`&gt;
&lt;div className=`row`&gt;
&lt;div className=`col-md-2 col-12`&gt;
&lt;div id=`list-example` className=`list-group`&gt;
&lt;a className=`list-group-item list-group-item-action`
    href=`#list-item-01`&gt;Item 1&lt;/a&gt;
&lt;a className=`list-group-item list-group-item-action`
    href=`#list-item-02`&gt;Item
    2&lt;/a&gt;
&lt;a className=`list-group-item list-group-item-action`
    href=`#list-item-03`&gt;Item
    3&lt;/a&gt;
&lt;a className=`list-group-item list-group-item-action`
    href=`#list-item-04`&gt;Item
    4&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div className=`col-md-10 col-12`&gt;
&lt;div data-bs-spy=`scroll` data-bs-target=`#list-example`
data-bs-smooth-scroll=`true` className=`scrollspy-example-3`
tabindex=`0`&gt;
&lt;h6 className=`fw-semibold` id=`list-item-01`&gt;Item 1&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Vel,
    laborum
    reiciendis sunt officia doloribus, soluta ratione id
    reprehenderit
    autem
    temporibus cupiditate necessitatibus atque similique quam ex
    minus,
    sint
    ipsum deleniti sed assumenda fugiat numquam saepe incidunt
    perferendis.
    Aliquid, quas.&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`list-item-02`&gt;Item 2&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Vel,
    laborum
    reiciendis sunt officia doloribus, soluta ratione id
    reprehenderit
    autem
    temporibus cupiditate necessitatibus atque similique quam ex
    minus,
    sint
    ipsum deleniti sed assumenda fugiat numquam saepe incidunt
    perferendis.
    Aliquid, quas.&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`list-item-03`&gt;Item 3&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Vel,
    laborum
    reiciendis sunt officia doloribus, soluta ratione id
    reprehenderit
    autem
    temporibus cupiditate necessitatibus atque similique quam ex
    minus,
    sint
    ipsum deleniti sed assumenda fugiat numquam saepe incidunt
    perferendis.
    Aliquid, quas.&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`list-item-04`&gt;Item 4&lt;/h6&gt;
&lt;p className=`text-muted`&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Vel,
    laborum
    reiciendis sunt officia doloribus, soluta ratione id
    reprehenderit
    autem
    temporibus cupiditate necessitatibus atque similique quam ex
    minus,
    sint
    ipsum deleniti sed assumenda fugiat numquam saepe incidunt
    perferendis.
    Aliquid, quas.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                </div>
            </div>
        </div>
    </div>

    <div className="row row-sm">
        <div className="col-xl-12">
            <div className="card custom-card">
                <div className="card-header justify-content-between">
                    <div className="card-title">
                        Simple anchors
                    </div>
                    <div className="prism-toggle">
                        <button className="btn btn-sm btn-primary-light">Show Code<i className="ri-eye-line ms-2 d-inline-block align-middle fs-14"></i></button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="bd-example">
                        <div className="row">
                            <div className="col-md-2 col-12">
                                <div id="simple-list-example"
                                    className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
                                    <a className="p-2 rounded" href="#simple-list-item-1">Item 1</a>
                                    <a className="p-2 rounded" href="#simple-list-item-2">Item 2</a>
                                    <a className="p-2 rounded" href="#simple-list-item-3">Item 3</a>
                                    <a className="p-2 rounded" href="#simple-list-item-4">Item 4</a>
                                    <a className="p-2 rounded" href="#simple-list-item-5">Item 5</a>
                                </div>
                            </div>
                            <div className="col-md-10 col-12">
                                <div data-bs-spy="scroll" data-bs-target="#simple-list-example"
                                    data-bs-offset="0" data-bs-smooth-scroll="true"
                                    className="scrollspy-example-4" tabIndex={0}>
                                    <h6 className="fw-semibold" id="simple-list-item-1">Item 1</h6>
                                    <p className="text-muted">This is some placeholder content for the scrollspy page. Note
                                        that as you scroll down the page, the appropriate navigation
                                        link is highlighted. Its repeated throughout the component
                                        example. We keep adding some more example copy here to
                                        emphasize
                                        the scrolling and highlighting.</p>
                                    <h6 className="fw-semibold" id="simple-list-item-2">Item 2</h6>
                                    <p className="text-muted">This is some placeholder content for the scrollspy page. Note
                                        that as you scroll down the page, the appropriate navigation
                                        link is highlighted. Its repeated throughout the component
                                        example. We keep adding some more example copy here to
                                        emphasize
                                        the scrolling and highlighting.</p>
                                    <h6 className="fw-semibold" id="simple-list-item-3">Item 3</h6>
                                    <p className="text-muted">This is some placeholder content for the scrollspy page. Note
                                        that as you scroll down the page, the appropriate navigation
                                        link is highlighted. Its repeated throughout the component
                                        example. We keep adding some more example copy here to
                                        emphasize
                                        the scrolling and highlighting.</p>
                                    <h6 className="fw-semibold" id="simple-list-item-4">Item 4</h6>
                                    <p className="text-muted">This is some placeholder content for the scrollspy page. Note
                                        that as you scroll down the page, the appropriate navigation
                                        link is highlighted. Its repeated throughout the component
                                        example. We keep adding some more example copy here to
                                        emphasize
                                        the scrolling and highlighting.</p>
                                    <h6 className="fw-semibold" id="simple-list-item-5">Item 5</h6>
                                    <p className="text-muted">This is some placeholder content for the scrollspy page. Note
                                        that as you scroll down the page, the appropriate navigation
                                        link is highlighted. Its repeated throughout the component
                                        example. We keep adding some more example copy here to
                                        emphasize
                                        the scrolling and highlighting.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-none border-top-0">



<pre className="language-html"><code className="language-html">&lt;div className=`bd-example`&gt;
&lt;div className=`row`&gt;
&lt;div className=`col-md-2 col-12`&gt;
&lt;div id=`simple-list-example`
className=`d-flex flex-column gap-2 simple-list-example-scrollspy text-center`&gt;
&lt;a className=`p-2 rounded` href=`#simple-list-item-1`&gt;Item 1&lt;/a&gt;
&lt;a className=`p-2 rounded` href=`#simple-list-item-2`&gt;Item 2&lt;/a&gt;
&lt;a className=`p-2 rounded` href=`#simple-list-item-3`&gt;Item 3&lt;/a&gt;
&lt;a className=`p-2 rounded` href=`#simple-list-item-4`&gt;Item 4&lt;/a&gt;
&lt;a className=`p-2 rounded` href=`#simple-list-item-5`&gt;Item 5&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div className=`col-md-10 col-12`&gt;
&lt;div data-bs-spy=`scroll` data-bs-target=`#simple-list-example`
data-bs-offset=`0` data-bs-smooth-scroll=`true`
className=`scrollspy-example-4` tabindex=`0`&gt;
&lt;h6 className=`fw-semibold` id=`simple-list-item-1`&gt;Item 1&lt;/h6&gt;
&lt;p className=`text-muted`&gt;This is some placeholder content for the scrollspy page. Note
    that as you scroll down the page, the appropriate navigation
    link is highlighted. Its repeated throughout the component
    example. We keep adding some more example copy here to
    emphasize
    the scrolling and highlighting.&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`simple-list-item-2`&gt;Item 2&lt;/h6&gt;
&lt;p className=`text-muted`&gt;This is some placeholder content for the scrollspy page. Note
    that as you scroll down the page, the appropriate navigation
    link is highlighted. Its repeated throughout the component
    example. We keep adding some more example copy here to
    emphasize
    the scrolling and highlighting.&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`simple-list-item-3`&gt;Item 3&lt;/h6&gt;
&lt;p className=`text-muted`&gt;This is some placeholder content for the scrollspy page. Note
    that as you scroll down the page, the appropriate navigation
    link is highlighted. Its repeated throughout the component
    example. We keep adding some more example copy here to
    emphasize
    the scrolling and highlighting.&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`simple-list-item-4`&gt;Item 4&lt;/h6&gt;
&lt;p className=`text-muted`&gt;This is some placeholder content for the scrollspy page. Note
    that as you scroll down the page, the appropriate navigation
    link is highlighted. Its repeated throughout the component
    example. We keep adding some more example copy here to
    emphasize
    the scrolling and highlighting.&lt;/p&gt;
&lt;h6 className=`fw-semibold` id=`simple-list-item-5`&gt;Item 5&lt;/h6&gt;
&lt;p className=`text-muted`&gt;This is some placeholder content for the scrollspy page. Note
    that as you scroll down the page, the appropriate navigation
    link is highlighted. Its repeated throughout the component
    example. We keep adding some more example copy here to
    emphasize
    the scrolling and highlighting.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>

                </div>
            </div>
        </div>
    </div>
  </div>
  )
}
scrollspy.layout = `Contentlayout`

export default scrollspy