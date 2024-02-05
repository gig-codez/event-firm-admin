import { ThemeChanger } from '@/shared/redux/actions';
import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from 'react-redux';
import { Button, Nav, Row, Tab } from "react-bootstrap";
import store from '@/shared/redux/store';

function  Landingpageswitcher ({local_varaiable,ThemeChanger}:{local_varaiable:any,ThemeChanger:any})  {
        useEffect(() => {
            const theme = store.getState();
          ThemeChanger({...local_varaiable,
            "dir":"ltr",
            "dataNavStyle": "menu-click",
            "dataMenuPosition":"fixed",
            "dataThemeMode":"light",
           "dataMenuStyles":"light"
           
          })
          return () => {
            ThemeChanger({
                ...theme,
                "dataNavStyle": "",
                "dataNavLayout": `${localStorage.spruhalayout == 'horizontal' ? 'horizontal' : 'vertical'}`
            });
        };
        }, [])
  return (
    <div>   
           <HelmetProvider>
                <div>
        <Helmet>
    <html dir={local_varaiable.dir} 
    data-theme-mode={local_varaiable.dataThemeMode} 
    data-header-styles={local_varaiable.dataHeaderStyles} 
    data-vertical-style={local_varaiable.dataVerticalStyle}
    data-nav-layout={local_varaiable.dataNavLayout}
    data-menu-styles={local_varaiable.dataMenuStyles}
    data-toggled={local_varaiable.dataToggled}
    data-nav-style={local_varaiable.dataNavStyle}
    data-menu-position={local_varaiable.dataMenuPosition}>

 </html>
</Helmet>
</div>
</HelmetProvider>

<div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel"    >
        <div className="offcanvas-header border-bottom" >
            <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
        </div>
        <div className="offcanvas-body">
        <Tab.Container id="left-tabs-example" defaultActiveKey="tab11" >
                          <Row>
            <Nav className="border-bottom border-block-end-dashed">
            <Nav.Item >
                                <Nav.Link eventKey="tab11" >Theme Styles</Nav.Link>
                              </Nav.Item >
                              <Nav.Item >
                                <Nav.Link eventKey="tab12">Theme Colors</Nav.Link>
                              </Nav.Item >
            </Nav>
            <Tab.Content id="nav-tabContent">
                <Tab.Pane eventKey="tab11">
                
                    <div className="">
                        <p className="switcher-style-head">Theme Color Mode:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                        Light
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                    
                                   
                                       />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                        Dark
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"
                                       
                                       />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Directions:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-ltr">
                                        LTR
                                    </label>
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-ltr" defaultChecked/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                        RTL
                                    </label>
                                    <input className="form-check-input"
                                     type="radio" name="direction"
                                     id="switcher"
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Navigation Styles:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-vertical">
                                        Vertical
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-style" id="switcher-vertical"
                                   
                                        />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-horizontal">
                                        Horizontal
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-style"                                   
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-menu-styles">
                        <p className="switcher-style-head">Vertical & Horizontal Menu Styles:</p>
                        <div className="row switcher-style gx-0 pb-2 gy-2">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-click">
                                        Menu Click
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-menu-click" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-hover">
                                        Menu Hover
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-menu-hover"   />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-click">
                                        Icon Click
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-click"   />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-hover">
                                        Icon Hover
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-hover" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidemenu-layout-styles">
                        <p className="switcher-style-head">Sidemenu Layout Styles:</p>
                        <div className="row switcher-style gx-0 pb-2 gy-2">
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-default-menu">
                                        Default Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-default-menu" defaultChecked/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-closed-menu">
                                        Closed Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-closed-menu"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                        Icon Text
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icontext-menu"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                        Icon Overlay
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icon-overlay"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-detached">
                                        Detached
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-detached"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-double-menu">
                                        Double Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-double-menu"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Page Styles:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-regular">
                                        Regular
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-regular"
                                         />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-classic">
                                        Classic
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-classic" />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-modern">
                                        Modern
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-modern"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Layout Width Styles:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-full-width">
                                        Full Width
                                    </label>
                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-full-width"
                                      />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-boxed">
                                        Boxed
                                    </label>
                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-boxed"    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Menu Positions:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-fixed">
                                        Fixed
                                    </label>
                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                        Scrollable
                                    </label>
                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Header Positions:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-header-fixed">
                                        Fixed
                                    </label>
                                    <input className="form-check-input" type="radio" name="header-positions"
                                        />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-header-scroll">
                                        Scrollable
                                    </label>
                                    <input className="form-check-input" type="radio" name="header-positions"
                                        id="switcher-header-scroll"        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="switcher-style-head">Loader:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-loader-enable">
                                        Enable
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-loader"
                                        id="switcher-loader-enable"/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-loader-disable">
                                        Disable
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-loader"
                                        id="switcher-loader-disable" defaultChecked/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="tab12">
                    <div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Menu Colors:</p>
                            <div className="d-flex switcher-style pb-2">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Light Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-light"/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Dark Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-dark"  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Color Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-primary" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                        data-bs-placement="top" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-transparent"
                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Transparent Menu"
                                        type="radio" name="menu-colors" id="switcher-menu-transparent" />
                                </div>
                            </div>
                            <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Menu dynamically change from below Theme Primary color picker</div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Header Colors:</p>
                            <div className="d-flex switcher-style pb-2">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Light Header" type="radio" name="header-colors"
                                        id="switcher-header-light" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Dark Header" type="radio" name="header-colors"
                                        id="switcher-header-dark" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Color Header" type="radio" name="header-colors"
                                        id="switcher-header-primary"  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Gradient Header" type="radio" name="header-colors"
                                        id="switcher-header-gradient"  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-transparent" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Transparent Header" type="radio" name="header-colors"
                                        id="switcher-header-transparent" />
                                </div>
                            </div>
                            <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically change from below Theme Primary color picker</div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Primary:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-1" type="radio"
                                        name="theme-primary" id="switcher-primary" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-2" type="radio"
                                        name="theme-primary" id="switcher-primary1"  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                        id="switcher-primary2" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                        id="switcher-primary3" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                        id="switcher-primary4" />
                                </div>

                                <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                    <div className="theme-container-primary"></div>
                                    <div className="pickr-container-primary"></div>
                                </div>
                            </div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Background:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-1" type="radio"
                                        name="theme-background" id="switcher-background"  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-2" type="radio"
                                        name="theme-background" id="switcher-background1" />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-3" type="radio" name="theme-background"
                                        id="switcher-background2"/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-4" type="radio"
                                        name="theme-background" id="switcher-background3"/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-5" type="radio"
                                        name="theme-background" id="switcher-background4"/>
                                </div>
                                <div className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                                    <div className="theme-container-background"></div>
                                    <div className="pickr-container-background"></div>
                                </div>
                            </div>
                        </div>
                        <div className="menu-image mb-3">
                            <p className="switcher-style-head">Menu With Background Image:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img1" type="radio"
                                        name="theme-background" id="switcher-bg-img"/>
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img2" type="radio"
                                        name="theme-background" id="switcher-bg-img1" />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img3" type="radio" name="theme-background"
                                        id="switcher-bg-img2"  />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img4" type="radio"
                                        name="theme-background" id="switcher-bg-img3"  />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img5" type="radio"
                                        name="theme-background" id="switcher-bg-img4"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <div className="d-flex justify-content-center gap-1 canvas-footer flex-wrap align-items-center"> 
                    <a href="https://themeforest.net/user/spruko/portfolio"className="btn btn-primary" target="_blank" rel="noreferrer">Buy Now</a>
                    <a href="https://themeforest.net/user/spruko/portfolio" className="btn btn-secondary" target="_blank" rel="noreferrer">Our Portfolio</a>
                    <a href="#" id="reset-all" className="btn btn-danger">Reset</a>  
                </div>
            </Tab.Content>
            </Row>

            </Tab.Container>

        </div>
    </div>
    
</div>
  )
}
Landingpageswitcher.propTypes = {};

Landingpageswitcher.defaultProps = {};

const mapStateToProps = (state:any) => ({
    local_varaiable: state
  })
  
  export default connect(mapStateToProps,{ThemeChanger})(Landingpageswitcher);