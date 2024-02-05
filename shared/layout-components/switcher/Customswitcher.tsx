import React, { Fragment, useEffect } from "react";
import * as Switcherdata from "../../../shared/data/switcherdata/switcherdata";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button, Dropdown, Modal, Nav, Offcanvas, Row, Tab} from "react-bootstrap";
import Link from "next/link"
import {connect} from "react-redux"
import {useRouter} from "next/router"
import { ThemeChanger } from "../../redux/actions";
import { useState } from "react";
import { Helmet,HelmetProvider  } from "react-helmet-async";


interface CustomCSSProperties {
    '--primary-rgb': string;
    '--body-bg-rgb': string;
    '--body-bg-rgb2': string;
    '--light-bg': string;
    '--form-control-bg': string;
    '--input-border': string;
    '--sidemenu-active-bgcolor': string;
    '--dark-bg': string;
  }

function Switcher(this: any, {local_varaiable,ThemeChanger}:{local_varaiable:any,ThemeChanger:any}) {
    useEffect(() => {
        ThemeChanger({...local_varaiable,
          "dir":"ltr",
          "dataNavLayout":"vertical",
         "dataMenuStyles":"dark",
         "dataToggled":""
        })
      }, [])
  const [show, setShow] = useState(false);
  const [HorizontalTabs, setHorizontalTabs] = useState(false);


  function SwitcherButton() {
    document.querySelector(".offcanvas-end")?.classList.remove("show");

    document.querySelector(".offcanvas-end")?.classList.toggle("hidden");
    document.querySelector("body")!.classList.remove("overflow:hidden");
    document.querySelector("body")!.classList.remove("padding-right:4px");
    document.querySelector(".offcanvas-end")?.classList.remove("show");
    document.querySelector(".switcher-backdrop")?.classList.remove("d-block");
    document.querySelector(".switcher-backdrop")?.classList.add("d-none");

  }
  const router = useRouter()
  const [Basic, setShow1] = useState(false);
  useEffect(() => {
    Switcherdata.localStorageBackUp(ThemeChanger);
  }, [])
  return (
    <Fragment>
<HelmetProvider>
<div>

        <Helmet>
        
                <html dir={local_varaiable.dir} 
                data-theme-mode={local_varaiable.dataThemeMode}
                data-menu-styles={local_varaiable.dataMenuStyles}
                data-nav-layout={local_varaiable.dataNavLayout}
                data-nav-style={local_varaiable.dataNavStyle}
                data-Vertical-style={local_varaiable.dataVerticalStyle}
                data-icon-overlay={local_varaiable.dataIconOverlay}
                hor-style={local_varaiable.horStyle}
                data-page-style={local_varaiable.dataPageStyle}
                data-width={local_varaiable.dataWidth}
                data-icon-text={local_varaiable.iconText}
                data-menu-position={local_varaiable.dataMenuPosition}
                data-header-position={local_varaiable.dataHeaderPosition}
                data-header-styles={local_varaiable.dataHeaderStyles} 
                data-bg-img={local_varaiable.dataBgImage}
                style={`
                ${local_varaiable.colorPrimaryRgb != '' ? `--primary-rgb:${local_varaiable.colorPrimaryRgb}` : ''};
                ${local_varaiable.bodyBg != '' ? `--body-bg-rgb:${local_varaiable.bodyBg}` : ''};
                ${local_varaiable.lightRgb != '' ? `--light-rgb:${local_varaiable.lightRgb}` : ''};
                ${local_varaiable.formControl != '' ? `--form-control-bg:rgb(${local_varaiable.formControl})` : ''};
                ${local_varaiable.inputBorder != '' ? `--input-border:rgba(${local_varaiable.inputBorder})` : ''};
                ${local_varaiable.sidemenuActiveBgcolor != '' ? `--sidemenu-active-bgcolor:rgb(${local_varaiable.sidemenuActiveBgcolor})` : ''};
  
                `as any}
              
                >
                </html>
            
         
            </Helmet>
    
</div>
            </HelmetProvider>

            <div className="switcher-backdrop d-none" onClick={() => {
                SwitcherButton();
            }}></div>
         <div className="offcanvas offcanvas-end " tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header border-bottom" >
            <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"  onClick={() => {
                            SwitcherButton();
                        }} ></button>
        </div>
        <div className="offcanvas-body">
        <Tab.Container id="left-tabs-example" defaultActiveKey="tab11" >
                          <Row>
            <Nav className="border-bottom border-block-end-dashed nav-tabs nav-justified" id="switcher-main-tab">
            <Nav.Item >
                                <Nav.Link  as="button" eventKey="tab11" >Theme Styles</Nav.Link>
                              </Nav.Item >
                              <Nav.Item >
                                <Nav.Link as="button" eventKey="tab12">Theme Colors</Nav.Link>
                              </Nav.Item >
            </Nav>
            <Tab.Content id="nav-tabContent">
                <Tab.Pane eventKey="tab11" className="p-0">
                
                    <div className="">
                        <p className="switcher-style-head">Theme Color Mode:</p>
                        <div className="row switcher-style gx-0">
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-light-theme">
                                        Light
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme"
                                    checked={local_varaiable.dataThemeMode != 'dark'} onChange={e => {}}
                                    onClick={() => Switcherdata.Light(ThemeChanger)} 
                                       />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-dark-theme">
                                        Dark
                                    </label>
                                    <input className="form-check-input" type="radio" name="theme-style" id="switcher-dark-theme"
                                      checked={local_varaiable.dataThemeMode == 'dark'} onChange={e => {}} 
                                      onClick={() => Switcherdata.Dark(ThemeChanger)} />
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
                                    <input className="form-check-input" type="radio" name="direction" id="switcher-ltr" checked={local_varaiable.dir == 'ltr'} onChange={e => {}} 
                                        onClick={() => {Switcherdata.LtrtoRtl(ThemeChanger)}}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-rtl">
                                        RTL
                                    </label>
                                    <input className="form-check-input"
                                     type="radio" name="direction"
                                     id="switcher-rtl"
                                     checked={local_varaiable.dir == 'rtl'}
                                     onChange={e => {}}
                                     onClick={() =>{Switcherdata.RtltoLtr(ThemeChanger)}} 
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
                                    checked={local_varaiable.dataNavLayout == 'vertical'} onChange={e => {}}
                                    onClick={() => Switcherdata.Vertical(ThemeChanger)} 
                                        />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-horizontal">
                                        Horizontal
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-style"
                                     checked={local_varaiable.dataNavLayout == 'horizontal'} onChange={e => {}}
                                     onClick={() => Switcherdata.HorizontalClick(ThemeChanger)}
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
                                        id="switcher-menu-click"  checked={local_varaiable.dataNavStyle == 'menu-click'} onChange={e => {}}
                                        onClick={() => Switcherdata.Menuclick(ThemeChanger)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-hover">
                                        Menu Hover
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-menu-hover"  checked={local_varaiable.dataNavStyle == 'menu-hover'} onChange={e => {}}
                                        onClick={() => Switcherdata.MenuHover(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-click">
                                        Icon Click
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-click"   checked={local_varaiable.dataNavStyle == 'icon-click'} onChange={e => {}}
                                        onClick={() => Switcherdata.IconClick(ThemeChanger)}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-hover">
                                        Icon Hover
                                    </label>
                                    <input className="form-check-input" type="radio" name="navigation-menu-styles"
                                        id="switcher-icon-hover"  checked={local_varaiable.dataNavStyle == 'icon-hover'} onChange={e => {}}
                                        onClick={() => Switcherdata.IconHover(ThemeChanger)}/>
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
                                        id="switcher-default-menu" checked={local_varaiable.dataVerticalStyle == 'default' || local_varaiable.dataVerticalStyle == 'overlay'} onChange={e => {}}
                                        onClick={() => Switcherdata.Defaultmenu(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-closed-menu">
                                        Closed Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-closed-menu"  checked={local_varaiable.dataToggled == 'close-menu-close'} onChange={e => {}}
                                        onClick={() => Switcherdata.Closedmenu(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icontext-menu">
                                        Icon Text
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icontext-menu" checked={local_varaiable.dataToggled == 'icon-text-close'} onChange={e => {}}
                                        onClick={() => Switcherdata.iconText(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-icon-overlay">
                                        Icon Overlay
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-icon-overlay"     checked={local_varaiable.dataToggled == 'icon-overlay-close'} onChange={e => {}}
                                        onClick={() => Switcherdata.iconOverayFn(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-detached">
                                        Detached
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-detached"  checked={local_varaiable.dataToggled == 'detached-close'} onChange={e => {}}
                                        onClick={() => Switcherdata.DetachedFn(ThemeChanger)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-double-menu">
                                        Double Menu
                                    </label>
                                    <input className="form-check-input" type="radio" name="sidemenu-layout-styles"
                                        id="switcher-double-menu"  checked={local_varaiable.dataToggled == 'double-menu-open'} onChange={e => {}}
                                        onClick={() => Switcherdata.DoubletFn(ThemeChanger)}/>
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
                                          checked={local_varaiable.dataPageStyle == 'regular'} onChange={e => {}}
                                          onClick={() => Switcherdata.Regular(ThemeChanger)}  />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-classic">
                                        Classic
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-classic"checked={local_varaiable.dataPageStyle == 'classic'} onChange={e => {}}
                                    onClick={() => Switcherdata.Classic(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-modern">
                                        Modern
                                    </label>
                                    <input className="form-check-input" type="radio" name="page-styles" id="switcher-modern"  checked={local_varaiable.dataPageStyle == 'modern'} onChange={e => {}}
                                    onClick={() => Switcherdata.Modern(ThemeChanger)} />
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
                                      checked={local_varaiable.dataWidth == 'fullwidth'} onChange={e => {}}
                                      onClick={() => Switcherdata.Fullwidth(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-boxed">
                                        Boxed
                                    </label>
                                    <input className="form-check-input" type="radio" name="layout-width" id="switcher-boxed"   checked={local_varaiable.dataWidth == 'boxed'} onChange={e => {}}
                                    onClick={() => Switcherdata.Boxed(ThemeChanger)} />
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
                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-fixed"
                                          checked={local_varaiable.dataMenuPosition == 'fixed'} onChange={e => {}}
                                          onClick={() => Switcherdata.FixedMenu(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-menu-scroll">
                                        Scrollable
                                    </label>
                                    <input className="form-check-input" type="radio" name="menu-positions" id="switcher-menu-scroll"  checked={local_varaiable.dataMenuPosition == 'scrollable'} onChange={e => {}}
                                    onClick={() => Switcherdata.scrollMenu(ThemeChanger)} />
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
                                            checked={local_varaiable.dataHeaderPosition == 'fixed'} onChange={e => {}}
                                            onClick={() => Switcherdata.Headerpostionfixed(ThemeChanger)} />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-check switch-select">
                                    <label className="form-check-label" htmlFor="switcher-header-scroll">
                                        Scrollable
                                    </label>
                                    <input className="form-check-input" type="radio" name="header-positions"
                                        id="switcher-header-scroll"      checked={local_varaiable.dataHeaderPosition == 'scrollable'} onChange={e => {}}
                                        onClick={() => Switcherdata.Headerpostionscroll(ThemeChanger)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Tab.Pane>
                <Tab.Pane eventKey="tab12" className="p-0">
                    <div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Menu Colors:</p>
                            <div className="d-flex switcher-style pb-2">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-white" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Light Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-light"onClick={() => Switcherdata.lightMenu(ThemeChanger)}  onChange={e => {}}   checked={local_varaiable.dataMenuStyles == 'light'}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Dark Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-dark"  onClick={() => Switcherdata.darkMenu(ThemeChanger)} onChange={e => {}} checked={local_varaiable.dataMenuStyles == 'dark'}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Color Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-primary" onClick={() => Switcherdata.colorMenu(ThemeChanger)} onChange={e => {}} checked={local_varaiable.dataMenuStyles == 'color'} />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Gradient Menu" type="radio" name="menu-colors"
                                        id="switcher-menu-gradient" onClick={() => Switcherdata.gradientMenu(ThemeChanger)} onChange={e => {}} checked={local_varaiable.dataMenuStyles == 'gradient'} />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-transparent"
                                        data-bs-toggle="tooltip" data-bs-placement="top" title="Transparent Menu"
                                        type="radio" name="menu-colors" id="switcher-menu-transparent" onClick={() => Switcherdata.transparentMenu(ThemeChanger)} onChange={e => {}} checked={local_varaiable.dataMenuStyles == 'transparent'}/>
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
                                        id="switcher-header-light"  onClick={() => Switcherdata.lightHeader(ThemeChanger)}  onChange={e => {}} checked={local_varaiable.dataHeaderStyles == 'light'} />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-dark" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Dark Header" type="radio" name="header-colors"
                                        id="switcher-header-dark" onClick={() => Switcherdata.darkHeader(ThemeChanger)}  onChange={e => {}} checked={local_varaiable.dataHeaderStyles == 'dark'}  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Color Header" type="radio" name="header-colors"
                                        id="switcher-header-primary"  onClick={() => Switcherdata.colorHeader(ThemeChanger)}  onChange={e => {}} checked={local_varaiable.dataHeaderStyles == 'color'}  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-gradient" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Gradient Header" type="radio" name="header-colors"
                                        id="switcher-header-gradient" onClick={() => Switcherdata.gradientHeader(ThemeChanger)}  onChange={e => {}} checked={local_varaiable.dataHeaderStyles == 'gradient'}  />
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-transparent" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Transparent Header" type="radio" name="header-colors"
                                        id="switcher-header-transparent" onClick={() => Switcherdata.transparentHeader(ThemeChanger)}  onChange={e => {}} checked={local_varaiable.dataHeaderStyles == 'transparent'} />
                                </div>
                            </div>
                            <div className="px-4 pb-3 text-muted fs-11">Note:If you want to change color Header dynamically change from below Theme Primary color picker</div>
                        </div>
                        <div className="theme-colors">
                            <p className="switcher-style-head">Theme Primary:</p>
                            <div className="d-flex flex-wrap align-items-center switcher-style">
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-1" type="radio"
                                        name="theme-primary" id="switcher-primary" onClick={() => Switcherdata.primaryColor1(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-2" type="radio"
                                        name="theme-primary" id="switcher-primary1"  onClick={() => Switcherdata.primaryColor2(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-3" type="radio" name="theme-primary"
                                        id="switcher-primary2"  onClick={() => Switcherdata.primaryColor3(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-4" type="radio" name="theme-primary"
                                        id="switcher-primary3" onClick={() => Switcherdata.primaryColor4(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-primary-5" type="radio" name="theme-primary"
                                        id="switcher-primary4" onClick={() => Switcherdata.primaryColor5(ThemeChanger)}/>
                                </div>

                                <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                                <Switcherdata.Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />
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
                                        name="theme-background" id="switcher-background"  onClick={() => Switcherdata.backgroundColor1(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-2" type="radio"
                                        name="theme-background" id="switcher-background1"  onClick={() => Switcherdata.backgroundColor2(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-3" type="radio" name="theme-background"
                                        id="switcher-background2"  onClick={() => Switcherdata.backgroundColor3(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-4" type="radio"
                                        name="theme-background" id="switcher-background3"  onClick={() => Switcherdata.backgroundColor4(ThemeChanger)}/>
                                </div>
                                <div className="form-check switch-select me-3">
                                    <input className="form-check-input color-input color-bg-5" type="radio"
                                        name="theme-background" id="switcher-background4"  onClick={() => Switcherdata.backgroundColor5(ThemeChanger)}/>
                                </div>
                                <Switcherdata.Themebackgroundcolor theme={local_varaiable} actionfunction={ThemeChanger} />

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
                                        name="theme-background" id="switcher-bg-img"onClick={() => Switcherdata.BgImage1(ThemeChanger)} />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img2" type="radio"
                                        name="theme-background" id="switcher-bg-img1" onClick={() => Switcherdata.BgImage2(ThemeChanger)} />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img3" type="radio" name="theme-background"
                                        id="switcher-bg-img2" onClick={() => Switcherdata.BgImage3(ThemeChanger)} />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img4" type="radio"
                                        name="theme-background" id="switcher-bg-img3" onClick={() => Switcherdata.BgImage4(ThemeChanger)} />
                                </div>
                                <div className="form-check switch-select m-2">
                                    <input className="form-check-input bgimage-input bg-img5" type="radio"
                                        name="theme-background" id="switcher-bg-img4" onClick={() => Switcherdata.BgImage5(ThemeChanger)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
                <div className="d-flex justify-content-between canvas-footer flex-wrap"> 
                    <a href="https://themeforest.net/user/spruko/portfolio" className="btn btn-primary m-1">Buy Now</a> 
                    <a href="https://themeforest.net/user/spruko/portfolio" className="btn btn-info m-1">Our Portfolio</a> 
                    <a href="#!" id="reset-all" className="btn btn-secondary m-1" onClick={() => Switcherdata.resetData(ThemeChanger)}>Reset</a> </div>
             
            </Tab.Content>
            </Row>

            </Tab.Container>

        </div>
    </div>
    

      {/* <!-- End Switcher --> */}
    </Fragment>
  );
}

Switcher.propTypes = {};

Switcher.defaultProps = {};

const mapStateToProps = (state:any) => ({
    local_varaiable : state
})
export default connect(mapStateToProps,{ThemeChanger})(Switcher);
