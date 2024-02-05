import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const icons = () => {
  return (
    <div>  
            <Seo title="Icons"/>

<PageHeader title="Icons" item="Icons" active_item="Icons"/>
    <div className="row row-sm">
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Bootstrap Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://icons.getbootstrap.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"bi bi-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrow-left-circle">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-arrow-left-circle</Tooltip>}
                      >
                        <i className="bi bi-arrow-left-circle" title="bi bi-arrow-left-circle"></i>
                      </OverlayTrigger>
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-arrows-move">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-arrows-move</Tooltip>}
                      >
                        <i
                          className="bi bi-arrows-move"
                          title="bi bi-arrows-move"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-bag">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-bag</Tooltip>}
                      >
                        <i
                          className="bi bi-bag"
                          title="bi bi-bag"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-bar-chart-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-bar-chart-line</Tooltip>}
                      >
                        <i
                          className="bi bi-bar-chart-line"
                          title="bi bi-bar-chart-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-basket">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-basket</Tooltip>}
                      >
                        <i
                          className="bi bi-basket"
                          title="bi bi-basket"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-bell">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-bell</Tooltip>}
                      >
                        <i
                          className="bi bi-bell"
                          title="bi bi-bell"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-book">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-book</Tooltip>}
                      >
                        <i
                          className="bi bi-book"
                          title="bi bi-book"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-box">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-box</Tooltip>}
                      >
                        <i
                          className="bi bi-box"
                          title="bi bi-box"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-briefcase">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-briefcase</Tooltip>}
                      >
                        <i
                          className="bi bi-briefcase"
                          title="bi bi-briefcase"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-brightness-high">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-brightness-high</Tooltip>}
                      >
                        <i
                          className="bi bi-brightness-high"
                          title="bi bi-brightness-high"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-calendar">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-calendar</Tooltip>}
                      >
                        <i
                          className="bi bi-calendar"
                          title="bi bi-calendar"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bi bi-paint-bucket">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bi bi-paint-bucket</Tooltip>}
                      >
                        <i
                          className="bi bi-paint-bucket"
                          title="bi bi-paint-bucket"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Remix Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://remixicon.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"ri-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-home-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-home-line</Tooltip>}
                      >
                        <i
                          className="ri-home-line"
                          title="ri-home-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-mail-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-mail-line</Tooltip>}
                      >
                        <i
                          className="ri-mail-line"
                          title="ri-mail-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-briefcase-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-briefcase-line</Tooltip>}
                      >
                        <i
                          className="ri-briefcase-line"
                          title="ri-briefcase-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-window-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-window-line</Tooltip>}
                      >
                        <i
                          className="ri-window-line"
                          title="ri-window-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-chat-2-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-chat-2-line</Tooltip>}
                      >
                        <i
                          className="ri-chat-2-line"
                          title="ri-chat-2-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-chat-settings-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-chat-settings-line</Tooltip>}
                      >
                        <i
                          className="ri-chat-settings-line"
                          title="ri-chat-settings-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-edit-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-edit-line</Tooltip>}
                      >
                        <i
                          className="ri-edit-line"
                          title="ri-edit-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-layout-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-layout-line</Tooltip>}
                      >
                        <i
                          className="ri-layout-line"
                          title="ri-layout-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-code-s-slash-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-code-s-slash-line</Tooltip>}
                      >
                        <i
                          className="ri-code-s-slash-line"
                          title="ri-code-s-slash-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-airplay-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-airplay-line</Tooltip>}
                      >
                        <i
                          className="ri-airplay-line"
                          title="ri-airplay-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ri-file-line">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ri-file-line</Tooltip>}
                      >
                        <i
                          className="ri-file-line"
                          title="ri-file-line"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                    </ul>     
                </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Feather Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://feathericons.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"fe fe-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-activity</Tooltip>}
                      >
                        <i className="fe fe-activity"></i>
                      </OverlayTrigger>
                    </li>                            
                        <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-airplay</Tooltip>}
                      >
                        <i className="fe fe-airplay"></i>
                      </OverlayTrigger>
                    </li>
                            
                        <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-alert-circle</Tooltip>}
                      >
                        <i className="fe fe-alert-circle"></i>
                      </OverlayTrigger>
                    </li>                            
                           
                        <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-alert-triangle</Tooltip>}
                      >
                        <i className="fe fe-alert-triangle"></i>
                      </OverlayTrigger>
                    </li>                            
                        <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-bar-chart-2</Tooltip>}
                      >
                        <i className="fe fe-bar-chart-2"></i>
                      </OverlayTrigger>
                    </li>                            
                        <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-bell</Tooltip>}
                      >
                        <i className="fe fe-bell"></i>
                      </OverlayTrigger>
                    </li>                           
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fe fe-camera">
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-camera</Tooltip>}
                      >
                        <i className="fe fe-camera"></i>
                      </OverlayTrigger>                            </li>
                        <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-copy</Tooltip>}
                      >
                        <i className="fe fe-copy"></i>
                      </OverlayTrigger>
                    </li>                            
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fe fe-eye">
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-eye</Tooltip>}
                      >
                        <i className="fe fe-eye"></i>
                      </OverlayTrigger>                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fe fe-file">
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-file</Tooltip>}
                      >
                        <i className="fe fe-file"></i>
                      </OverlayTrigger>                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fe fe-layout">
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fe fe-layout</Tooltip>}
                      >
                        <i className="fe fe-layout"></i>
                      </OverlayTrigger>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Tabler Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://tabler-icons.io/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"ti ti-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-brand-tabler">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-brand-tabler</Tooltip>}>
                        <i className="ti ti-brand-tabler" title="ti ti-brand-tabler" ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-activity-heartbeat">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-activity-heartbeat</Tooltip>}>
                        <i className="ti ti-activity-heartbeat" title="ti ti-activity-heartbeat" ></i>
                      </OverlayTrigger>

                            </ li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-alert-octagon">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-alert-octagon</Tooltip>}>
                        <i className="ti ti-alert-octagon" title="ti ti-alert-octagon" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-album">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-album</Tooltip>}>
                        <i className="ti ti-album" title="ti ti-album" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-alert-circle">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-alert-circle</Tooltip>}>
                        <i className="ti ti-alert-circle" title="ti ti-alert-circle" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-antenna-bars-5">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-antenna-bars-5</Tooltip>}>
                        <i className="ti ti-antenna-bars-5" title="ti ti-antenna-bars-5" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-armchair">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-armchair</Tooltip>}>
                        <i className="ti ti-armchair" title="ti ti-armchair" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-arrow-big-right">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-arrow-big-right</Tooltip>}>
                        <i className="ti ti-arrow-big-right" title="ti ti-arrow-big-right" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-arrows-shuffle-2">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-arrows-shuffle-2</Tooltip>}>
                        <i className="ti ti-arrows-shuffle-2" title="ti ti-arrows-shuffle-2" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-backspace">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-backspace</Tooltip>}>
                        <i className="ti ti-backspace" title="ti ti-backspace" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-apps">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-apps</Tooltip>}>
                        <i className="ti ti-apps" title="ti ti-apps" ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="ti ti-color-picker">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>ti ti-color-picker</Tooltip>}>
                        <i className="ti ti-color-picker" title="ti ti-color-picker" ></i>
                      </OverlayTrigger>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Line Awesome Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://icons8.com/line-awesome" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"las la-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-bell">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-bell</Tooltip>}
                      >
                        <i
                          className="las la-bell"
                          title="las la-bell"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-exclamation-circle">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-exclamation-circle</Tooltip>}
                      >
                        <i
                          className="las la-exclamation-circle"
                          title="las la-exclamation-circle"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-exclamation-triangle">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-exclamation-triangle</Tooltip>}
                      >
                        <i
                          className="las la-exclamation-triangle"
                          title="las la-exclamation-triangle"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-arrow-alt-circle-down">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-arrow-alt-circle-down</Tooltip>}
                      >
                        <i
                          className="las la-arrow-alt-circle-down"
                          title="las la-arrow-alt-circle-down"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-arrow-alt-circle-up">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-arrow-alt-circle-up</Tooltip>}
                      >
                        <i
                          className="las la-arrow-alt-circle-up"
                          title="las la-arrow-alt-circle-up"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-arrow-alt-circle-left">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-arrow-alt-circle-left</Tooltip>}
                      >
                        <i
                          className="las la-arrow-alt-circle-left"
                          title="las la-arrow-alt-circle-left"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-arrow-alt-circle-right">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-arrow-alt-circle-right</Tooltip>}
                      >
                        <i
                          className="las la-arrow-alt-circle-right"
                          title="las la-arrow-alt-circle-right"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-history">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-history</Tooltip>}
                      >
                        <i
                          className="las la-history"
                          title="las la-history"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-headphones">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-headphones</Tooltip>}
                      >
                        <i
                          className="las la-headphones"
                          title="las la-headphones"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-tv">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-tv</Tooltip>}
                      >
                        <i
                          className="las la-tv"
                          title="las la-tv"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-car-side">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-car-side</Tooltip>}
                      >
                        <i
                          className="las la-car-side"
                          title="las la-car-side"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-envelope">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-envelope</Tooltip>}
                      >
                        <i
                          className="las la-envelope"
                          title="las la-envelope"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-edit">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-edit</Tooltip>}
                      >
                        <i
                          className="las la-edit"
                          title="las la-edit"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="las la-map">
                            
                             <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>las la-map</Tooltip>}
                      >
                        <i
                          className="las la-map"
                          title="las la-map"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Boxicons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://boxicons.com/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"bx bx-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-home">
                            

                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-home</Tooltip>}
                      >
                        <i
                          className="bx bx-home"
                          data-bs-toggle="tooltip"
                          title="bx bx-home"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-home-alt">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-home-alt</Tooltip>}
                      >
                        <i
                          className="bx bx-home-alt"
                          data-bs-toggle="tooltip"
                          title="bx bx-home-alt"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-box">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-box</Tooltip>}
                      >
                        <i
                          className="bx bx-box"
                          data-bs-toggle="tooltip"
                          title="bx bx-box"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-medal">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip >bx bx-medal</Tooltip>}
                      >
                        <i
                          className="  bx bx-medal"
                          data-bs-toggle="tooltip"
                          title= "bx bx-medal"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-file">
                            
                          
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-file</Tooltip>}
                      >
                        <i
                          className=" bx bx-file"
                          data-bs-toggle="tooltip"
                          title="bx bx-file"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-palette">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-palette</Tooltip>}
                      >
                        <i
                          className=" bx bx-palette"
                          data-bs-toggle="tooltip"
                          title="bx bx-palette"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-receipt">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-receipt</Tooltip>}
                      >
                        <i
                          className="mdi bx bx-receipt"
                          data-bs-toggle="tooltip"
                          title="bx bx-receipt"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-table">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-table</Tooltip>}
                      >
                        <i
                          className=" bx bx-table"
                          data-bs-toggle="tooltip"
                          title="bx bx-table"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-bar-chart-alt">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-bar-chart-alt</Tooltip>}
                      >
                        <i
                          className=" bx bx-bar-chart-alt"
                          data-bs-toggle="tooltip"
                          title="bx bx-bar-chart-alt"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-layer">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-layer</Tooltip>}
                      >
                        <i
                          className=" bx bx-layer"
                          data-bs-toggle="tooltip"
                          title="bx bx-layer"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-map-alt">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-map-alt</Tooltip>}
                      >
                        <i
                          className=" bx bx-map-alt"
                          data-bs-toggle="tooltip"
                          title="bx bx-map-alt"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-gift">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-gift</Tooltip>}
                      >
                        <i
                          className=" bx bx-gift"
                          data-bs-toggle="tooltip"
                          title="bx bx-gift"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-file-blank">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-file-blank</Tooltip>}
                      >
                        <i
                          className=" bx bx-file-blank"
                          data-bs-toggle="tooltip"
                          title="bx bx-file-blank"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-lock-alt">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-lock-alt</Tooltip>}
                      >
                        <i
                          className=" bx bx-lock-alt"
                          data-bs-toggle="tooltip"
                          title="bx bx-lock-alt"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-error">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-error</Tooltip>}
                      >
                        <i
                          className=" bx bx-error"
                          data-bs-toggle="tooltip"
                          title="bx bx-error"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="bx bx-error-circle">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>bx bx-error-circle</Tooltip>}
                      >
                        <i
                          className=" bx bx-error-circle"
                          data-bs-toggle="tooltip"
                          title="bx bx-error-circle"
                        ></i>
                      </OverlayTrigger> 
                            </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Fontawesome Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="http://fontawesome.io" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"fa fa-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fab fa-500px">  <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-500px</Tooltip>}
                      >
                        <i className="fab fa-500px" title="fab fa-500px"></i>
                      </OverlayTrigger></li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fa fa-address-book">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-address-book</Tooltip>}
                      >
                        <i
                          className="fa fa-address-book"
                          title="fa fa-address-book"
                        ></i>
                      </OverlayTrigger>
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="far fa-address-book">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>far fa-address-book</Tooltip>}
                      >
                        <i
                          className="far fa-address-book"
                          title="far fa-address-book"
                        ></i>
                      </OverlayTrigger>
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fa fa-address-card">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-address-card</Tooltip>}
                      >
                        <i
                          className="fa fa-address-card"
                          title="fa fa-address-card"
                        ></i>
                      </OverlayTrigger>
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="far fa-address-card">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>far fa-address-card</Tooltip>}
                      >
                        <i
                          className="far fa-address-card"
                          title="far fa-address-card"
                        ></i>
                      </OverlayTrigger>
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fa fa-adjust">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-adjust</Tooltip>}
                      >
                        <i className="fa fa-adjust" title="fa fa-adjust"></i>
                      </OverlayTrigger>
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fab fa-adn">
                            
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-adn</Tooltip>}
                      >
                        <i className="fa fa-adn" title="fa fa-adn"></i>
                      </OverlayTrigger>
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="fa fa-align-center">
                            

                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-center</Tooltip>}
                      >
                        <i
                          className="fa fa-align-center"
                          title="fa fa-align-center"
                        ></i>
                      </OverlayTrigger>
                            
                            </li>
                            <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-justify</Tooltip>}
                      >
                        <i
                          className="fa fa-align-justify"
                          title="fa fa-align-justify"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-left</Tooltip>}
                      >
                        <i
                          className="fa fa-align-left"
                          title="fa fa-align-left"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-align-right</Tooltip>}
                      >
                        <i
                          className="fa fa-align-right"
                          title="fa fa-align-right"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-amazon</Tooltip>}
                      >
                        <i className="fab fa-amazon" title="fab fa-amazon"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-ambulance</Tooltip>}
                      >
                        <i
                          className="fa fa-ambulance"
                          title="fa fa-ambulance"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip>
                            fa fa-american-sign-language-interpreting
                          </Tooltip>
                        }
                      >
                        <i
                          className="fa fa-american-sign-language-interpreting"
                          title="fa fa-american-sign-language-interpreting"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fa fa-anchor</Tooltip>}
                      >
                        <i className="fa fa-anchor" title="fa fa-anchor"></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>fab fa-android</Tooltip>}
                      >
                        <i
                          className="fab fa-android"
                          title="fab fa-android"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Materialdesign Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://materialdesignicons.com" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"mdi mdi-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-access-point</Tooltip>}
                      >
                        <i
                          className="mdi mdi-access-point"
                          data-bs-toggle="tooltip"
                          title="mdi-access-point"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-access-point-network</Tooltip>}
                      >
                        <i
                          className="mdi mdi-access-point-network"
                          data-bs-toggle="tooltip"
                          title="mdi-access-point-network"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account"
                          data-bs-toggle="tooltip"
                          title="mdi-account"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-alert</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-alert"
                          data-bs-toggle="tooltip"
                          title="mdi-account-alert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-box</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-box"
                          data-bs-toggle="tooltip"
                          title="mdi-account-box"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-box-outline</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-box-outline"
                          data-bs-toggle="tooltip"
                          title="mdi-account-box-outline"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-card-details</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-card-details"
                          data-bs-toggle="tooltip"
                          title="mdi-account-card-details"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-check</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-check"
                          data-bs-toggle="tooltip"
                          title="mdi-account-check"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-circle</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-circle"
                          data-bs-toggle="tooltip"
                          title="mdi-account-circle"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-convert</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-convert"
                          data-bs-toggle="tooltip"
                          title="mdi-account-convert"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-edit</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-edit"
                          data-bs-toggle="tooltip"
                          title="mdi-account-edit"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-key</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-key"
                          data-bs-toggle="tooltip"
                          title="mdi-account-key"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-location</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-location"
                          data-bs-toggle="tooltip"
                          title="mdi-account-location"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-minus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-minus"
                          data-bs-toggle="tooltip"
                          title="mdi-account-minus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-multiple</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-multiple"
                          data-bs-toggle="tooltip"
                          title="mdi-account-multiple"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    <li className="icons-list-item">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>mdi-account-multiple-minus</Tooltip>}
                      >
                        <i
                          className="mdi mdi-account-multiple-minus"
                          data-bs-toggle="tooltip"
                          title="mdi-account-multiple-minus"
                        ></i>
                      </OverlayTrigger>
                    </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Simpleline Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://simplelineicons.github.io/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"si si-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-user">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-user</Tooltip>}
                      >
                        <i
                          className="si si-user"
                          title="si si-user"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-people">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-people</Tooltip>}
                      >
                        <i
                          className="si si-people"
                          title="si si-people"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-user-female">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-user-female</Tooltip>}
                      >
                        <i
                          className="si si-user-female"
                          title="si si-user-female"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-user-follow">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-user-follow</Tooltip>}
                      >
                        <i
                          className="si si-user-follow"
                          title="si si-user-follow"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-user-following">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-user-following</Tooltip>}
                      >
                        <i
                          className="si si-user-following"
                          title="si si-user-following"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-user-unfollow">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-user-unfollow</Tooltip>}
                      >
                        <i
                          className="si si-user-unfollow"
                          title="si si-user-unfollow"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-login">
                            
                            <i className="si si-login"></i>
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-login</Tooltip>}
                      >
                        <i
                          className="si si-login"
                          title="si si-login"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-logout">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-logout</Tooltip>}
                      >
                        <i
                          className="si si-logout"
                          title="si si-logout"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-emotsmile">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-emotsmile</Tooltip>}
                      >
                        <i
                          className="si si-emotsmile"
                          title="si si-emotsmile"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-phone">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-phone</Tooltip>}
                      >
                        <i
                          className="si si-phone"
                          title="si si-phone"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-call-end">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-call-end</Tooltip>}
                      >
                        <i
                          className="si si-call-end"
                          title="si si-call-end"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-call-in">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-call-in</Tooltip>}
                      >
                        <i
                          className="si si-call-in"
                          title="si si-call-in"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-call-out">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-call-out</Tooltip>}
                      >
                        <i
                          className="si si-call-out"
                          title="si si-call-out"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-map">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-map</Tooltip>}
                      >
                        <i
                          className="si si-map"
                          title="si si-map"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-location-pin">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-location-pin</Tooltip>}
                      >
                        <i
                          className="si si-location-pin"
                          title="si si-location-pin"
                        ></i>
                      </OverlayTrigger>
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="si si-direction">
                            
                              <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>si si-direction</Tooltip>}
                      >
                        <i
                          className="si si-direction"
                          title="si si-direction"
                        ></i>
                      </OverlayTrigger>
                            </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Ionic Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://ionicons.com" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"ion ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-alarm">
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-alarm</Tooltip>}>
                        <i className="icon ion-md-alarm" title="icon ion-md-alarm" ></i>
                      </OverlayTrigger>                             </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-chatboxes">
                        <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-chatboxes</Tooltip>}>
                        <i className="icon ion-md-chatboxes" title="icon ion-md-chatboxes" ></i>
                      </OverlayTrigger>                            
                      </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-copy">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-copy</Tooltip>}>
                        <i className="icon ion-md-copy" title="icon ion-md-copy" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-cube">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-cube</Tooltip>}>
                        <i className="icon ion-md-cube" title="icon ion-md-cube" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-filing">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-filing</Tooltip>}>
                        <i className="icon ion-md-filing" title="icon ion-md-filing" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-eye">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-eye</Tooltip>}>
                        <i className="icon ion-md-eye" title="icon ion-md-eye" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-globe">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-globe</Tooltip>}>
                        <i className="icon ion-md-globe" title="icon ion-md-globe" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-images">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-images</Tooltip>}>
                        <i className="icon ion-md-images" title="icon ion-md-images" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-laptop">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-laptop</Tooltip>}>
                        <i className="icon ion-md-laptop" title="icon ion-md-laptop" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-paper">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-paper</Tooltip>}>
                        <i className="icon ion-md-paper" title="icon ion-md-paper" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-paper-plane">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-paper-plane</Tooltip>}>
                        <i className="icon ion-md-paper-plane" title="icon ion-md-paper-plane" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-md-pricetags">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-md-pricetags</Tooltip>}>
                        <i className="icon ion-md-pricetags" title="icon ion-md-pricetags" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-ios-settings">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-settings</Tooltip>}>
                        <i className="icon ion-ios-settings" title="icon ion-ios-settings" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-ios-stats">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-stats</Tooltip>}>
                        <i className="icon ion-ios-stats" title="icon ion-ios-stats" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-ios-share-alt">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-share-alt</Tooltip>}>
                        <i className="icon ion-ios-share-alt" title="icon ion-ios-share-alt" ></i>
                      </OverlayTrigger>  
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="icon ion-ios-rocket">
                            
                           <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>icon ion-ios-rocket</Tooltip>}>
                        <i className="icon ion-ios-rocket" title="icon ion-ios-rocket" ></i>
                      </OverlayTrigger>  
                            </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Pe7 Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://themes-pixeden.com/font-demos/7-stroke/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"pe-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                    <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-album</Tooltip>}
                    >
                      <i className="pe-7s-album" title="pe-7s-album"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-arc</Tooltip>}
                    >
                      <i className="pe-7s-arc" title="pe-7s-arc"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-back-2</Tooltip>}
                    >
                      <i className="pe-7s-back-2" title="pe-7s-back-2"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-bandaid</Tooltip>}
                    >
                      <i className="pe-7s-bandaid" title="pe-7s-bandaid"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-car</Tooltip>}
                    >
                      <i className="pe-7s-car" title="pe-7s-car"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-diamond</Tooltip>}
                    >
                      <i className="pe-7s-diamond" title="pe-7s-diamond"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-door-lock</Tooltip>}
                    >
                      <i
                        className="pe-7s-door-lock"
                        title="pe-7s-door-lock"
                      ></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-eyedropper</Tooltip>}
                    >
                      <i
                        className="pe-7s-eyedropper"
                        title="pe-7s-eyedropper"
                      ></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-female</Tooltip>}
                    >
                      <i className="pe-7s-female" title="pe-7s-female"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-gym</Tooltip>}
                    >
                      <i className="pe-7s-gym" title="pe-7s-gym"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip> pe-7s-hammer</Tooltip>}
                    >
                      <i className="pe-7s-hammer" title="pe-7s-hammer"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-headphones</Tooltip>}
                    >
                      <i
                        className="pe-7s-headphones"
                        title="pe-7s-headphones"
                      ></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-helm</Tooltip>}
                    >
                      <i className="pe-7s-helm" title="pe-7s-helm"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-hourglass</Tooltip>}
                    >
                      <i
                        className="pe-7s-hourglass"
                        title="pe-7s-hourglass"
                      ></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-leaf</Tooltip>}
                    >
                      <i className="pe-7s-leaf" title="pe-7s-leaf"></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-magic-wand</Tooltip>}
                    >
                      <i
                        className="pe-7s-magic-wand"
                        title="pe-7s-magic-wand"
                      ></i>
                    </OverlayTrigger>
                  </li>
                  <li className="icons-list-item">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>pe-7s-male</Tooltip>}
                    >
                      <i className="pe-7s-male" title="pe-7s-male"></i>
                    </OverlayTrigger>
                  </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Themify Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://themify.me/themify-icons" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"ti-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                    <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-arrow-up</Tooltip>}
                          >
                            <i
                              className="ti-arrow-up"
                           
                            ></i>
                          </OverlayTrigger>
                        
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titarrow-right</Tooltip>}
                          >
                            <i
                              className="ti-arrow-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-arrow-left</Tooltip>}
                          >
                            <i
                              className="ti-arrow-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
						  <OverlayTrigger
                       placement="top"
                            overlay={<Tooltip>ti-arrow-down</Tooltip>}
                          >
                            <i
                              className="ti-arrow-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ws-vertical</Tooltip>}
                          >
                            <i
                              className="ti-arrows-vertical"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-horizontal</Tooltip>}
                          >
                            <i
                              className="ti-arrows-horizontal"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-angle-up</Tooltip>}
                          >
                            <i
                              className="ti-angle-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>titangle-right</Tooltip>}
                          >
                            <i
                              className="ti-angle-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-angle-left</Tooltip>}
                          >
                            <i
                              className="ti-angle-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-angle-down</Tooltip>}
                          >
                            <i
                              className="ti-angle-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>e-double-up</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-up"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-ouble-right</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-right"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>tidouble-left</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-left"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>tidouble-down</Tooltip>}
                          >
                            <i
                              className="ti-angle-double-down"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-move</Tooltip>}
                          >
                            <i className="ti-move" data-bs-toggle="tooltip"></i>
                          </OverlayTrigger>
                          <i
                            className="ti-mov<br>e"
                            data-bs-toggle="tooltip"
                            title="ti-move"
                          ></i>
                        </li>
                        <li className="icons-list-item">
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip>ti-fullscreen</Tooltip>}
                          >
                            <i
                              className="ti-fullscreen"
                              data-bs-toggle="tooltip"
                            ></i>
                          </OverlayTrigger>
                         
                        </li>
                    </ul>    
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Typicons Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://www.s-ings.com/typicons/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"typcn typcn-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>typcn typcn-chart-p<br/>
																	</Tooltip>}
                          															>
                            											<i
                          			    										className="typcn typcn-chart-pie-outline"
                           
                            																	></i>	
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		
								
														typcn typcn-chart-pie
																	</Tooltip>}>
														<i className="typcn typcn-chart-pie" data-bs-toggle="tooltip" title="typcn typcn-chart-pie"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

														typcn typcn-chevron-left-outline
																	</Tooltip>}>
														<i className="typcn typcn-chevron-left-outline" data-bs-toggle="tooltip" title="typcn typcn-chevron-left-outline"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

														typcn typcn-chevron-left
																	</Tooltip>}>
														<i className="typcn typcn-chevron-left" data-bs-toggle="tooltip" title="typcn typcn-chevron-left"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

														typcn typcn-chevron-right-outline
																	</Tooltip>}>
														<i className="typcn typcn-chevron-right-outline" data-bs-toggle="tooltip" title="typcn typcn-chevron-right-outline"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

									typcn typcn-chevron-right
																	</Tooltip>}>
														<i className="typcn typcn-chevron-right" data-bs-toggle="tooltip" title="typcn typcn-chevron-right"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

														typcn typcn-clipboard
																	</Tooltip>}>
														<i className="typcn typcn-clipboard" data-bs-toggle="tooltip" title="typcn typcn-clipboard"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		typcn typcn-cloud-storage
																	</Tooltip>}>
														<i className="typcn typcn-cloud-storage" data-bs-toggle="tooltip" title="typcn typcn-cloud-storage"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

														typcn typcn-cloud-storage-outline
																	</Tooltip>}>
														<i className="typcn typcn-cloud-storage-outline" data-bs-toggle="tooltip" title="typcn typcn-cloud-storage-outline"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>typcn typcn-co<br/>
																		<i className="" data-bs-toggle="tooltip" title="typcn typcn-code-outline"></i>
																	</Tooltip>}
                          															>
    
														<i className="typcn typcn-code-outline" data-bs-toggle="tooltip" title="typcn typcn-code-outline"></i>
										
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																	typcn typcn-code
																	</Tooltip>}>
														<i className="typcn typcn-code" data-bs-toggle="tooltip" title="typcn typcn-code"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

														typcn typcn-coffee
																	</Tooltip>}>
														<i className="typcn typcn-coffee" data-bs-toggle="tooltip" title="typcn typcn-coffee"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																	typcn typcn-cog-outline
																	</Tooltip>}>
														<i className="typcn typcn-cog-outline" data-bs-toggle="tooltip" title="typcn typcn-cog-outline"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																	typcn typcn-cog
																	</Tooltip>}>
														<i className="typcn typcn-cog" data-bs-toggle="tooltip" title="typcn typcn-cog"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		

														typcn typcn-compass
																	</Tooltip>}>
														<i className="typcn typcn-compass" data-bs-toggle="tooltip" title="typcn typcn-compass"></i>
				
                          															</OverlayTrigger>
														</li>
														<li className="icons-list-item">  
														   <OverlayTrigger
                            									placement="top"
                            										overlay={<Tooltip>
																		
                                                    typcn typcn-contacts
																	</Tooltip>}>
														<i className="typcn typcn-contacts" data-bs-toggle="tooltip" title="typcn typcn-contacts"></i>
				
                          															</OverlayTrigger>
														</li>
														
														<li>
															
														</li>
														<li>
															
														</li>
														<li>
															
														</li>
														<li>
															
														</li>
														<li>
															
														</li>
														<li>
															
														</li>
													</ul>
                </div>
            </div>
        </div>            
        <div className="col-xl-6">
            <div className="card custom-card">
                <div className="card-header">
                    <div className="card-title">Weather Icons</div>
                </div>
                <div className="card-body">
                    <p className="mb-1">Simply beautiful open source icons. For more info <a href="https://erikflowers.github.io/weather-icons/" target="_blank" className="text-primary" rel="noreferrer">click here</a>.</p>
                    <p className="mb-4"><code>&lt;i className={"wi wi-ICON_NAME"}&gt;&lt;/i&gt;</code></p>
                    <ul className="icons-list list-unstyled">
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-day-cloudy-high">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-day-cloudy-high</Tooltip>}
                      >
                        <i className="wi wi-day-cloudy-high" title="wi wi-day-cloudy-high"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-moonrise">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-moonrise</Tooltip>}
                      >
                        <i className="wi wi-moonrise" title="wi wi-moonrise"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-na">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-na</Tooltip>}
                      >
                        <i className="wi wi-na" title="wi wi-na"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-volcano">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-volcano</Tooltip>}
                      >
                        <i className="wi wi-volcano" title="wi wi-volcano"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-day-light-wind">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-day-light-wind</Tooltip>}
                      >
                        <i className="wi wi-day-light-wind" title="wi wi-day-light-wind"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-moonset">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-moonset</Tooltip>}
                      >
                        <i className="wi wi-moonset" title="wi wi-moonset"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-flood">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-flood</Tooltip>}
                      >
                        <i className="wi wi-flood" title="wi wi-flood"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-train">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-train</Tooltip>}
                      >
                        <i className="wi wi-train" title="wi wi-train"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-day-sleet">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-day-sleet</Tooltip>}
                      >
                        <i className="wi wi-day-sleet" title="fwi wi-day-sleet"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-night-sleet">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-night-sleet</Tooltip>}
                      >
                        <i className="wi wi-night-sleet" title="wi wi-night-sleet"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-sandstorm">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-sandstorm</Tooltip>}
                      >
                        <i className="wi wi-sandstorm" title="wi wi-sandstorm"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-small-craft-advisory">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-small-craft-advisory</Tooltip>}
                      >
                        <i className="wi wi-small-craft-advisory" title="wi wi-small-craft-advisory"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-day-haze">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-day-haze</Tooltip>}
                      >
                        <i className="wi wi-day-haze" title="wi wi-day-haze"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-night-alt-sleet">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-night-alt-sleet</Tooltip>}
                      >
                        <i className="wi wi-night-alt-sleet" title="wi wi-night-alt-sleet"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-tsunami">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-tsunami</Tooltip>}
                      >
                        <i className="wi wi-tsunami" title="wi wi-tsunami"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                        <li className="icons-list-item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="wi wi-gale-warning">
                            <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>wi wi-gale-warning</Tooltip>}
                      >
                        <i className="wi wi-gale-warning" title="fwi wi-gale-warning"></i>
                      </OverlayTrigger>
                            
                            
                            </li>
                    </ul>    
                </div>
            </div>
        </div>            
        
    </div>
   </div>
  )
}
icons.layout = "Contentlayout"

export default icons