import React, { Fragment, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Breadcrumb, Button, Col, Row, Card } from 'react-bootstrap';
import { EventClickArg } from '@fullcalendar/common';

function Calendars() {
  // dragg-start

  interface InitialState {
    calendarEvents: {
      title: string;
      start: Date;
      id: string;
    }[];
    events: {
      title: string;
      id: string;
    }[];
    weekendsVisible: boolean;
  }
  
  const initialstate1 : InitialState = {
    calendarEvents: [
      { title: "Atlanta Monster", start: new Date("2019-04-04 00:00"), id: "1001" },
      { title: "My Favorite Murder", start: new Date("2019-04-05 00:00"), id: "1002" },],
    events:
      [
        { title: "Meeting", id: "1" },
        { title: "Party", id: "2" },
        { title: "Long Event", id: "3" },
        { title: "Lunch", id: "4" },
        { title: "Tea", id: "5" },
        { title: "Gym", id: "6" },
      ],
      weekendsVisible: true
  }

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today
 const INITIAL_EVENTS = [
{
id: createEventId(),
title: 'All-day event',
start: todayStr
},
{
id: createEventId(),
title: 'Timed event',
start: todayStr + 'T12:00:00'
}
]
function createEventId() {
return String(eventGuid++)
}


  const [state, _setState] = useState(initialstate1)
  useEffect(() => {
    let draggableEl : HTMLElement | null = document.getElementById("external-events");
    if(draggableEl){
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          return {
            title: title,
            id: id
          };
        }
      });
    }
  }, []);

  const handleEventClick : (clickInfo: EventClickArg | any) => void | undefined = (clickInfo: EventClickArg | any) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  };

  interface SelectInfo {
    startStr: string;
    endStr: string;
    allDay: boolean;
    view: {
      calendar: any; // Replace 'any' with the actual type of 'calendar'
    };
  }
  const handleDateSelect = (selectInfo : SelectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };
  return (
    <Fragment>
      {/* <!-- Row --> */}
      <Row className="row-sm">
      
              <div className="col-xl-3">
                        <div className="card custom-card">
                            <div className="card-header d-grid">
                                <button className="btn btn-primary-light btn-wave waves-effect waves-light"><i className="ri-add-line align-middle me-1 fw-semibold d-inline-block"></i>Create New Event</button>
                            </div>
                            <div className="card-body p-0">
                                <div id="external-events" className="border-bottom p-3">
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-primary border border-primary">
                                      <div className="fc-event-main">Calendar Events</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-secondary border border-secondary" data-class="bg-secondary">
                                      <div className="fc-event-main">Birthday EVents</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-success border border-success" data-class="bg-success">
                                      <div className="fc-event-main">Holiday Calendar</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-info border border-info" data-class="bg-info">
                                      <div className="fc-event-main">Office Events</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-warning border border-warning" data-class="bg-warning">
                                      <div className="fc-event-main">Other Events</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-danger border border-danger" data-class="bg-danger">
                                      <div className="fc-event-main">Festival Events</div>
                                    </div>
                                    <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-teal border border-teal" data-class="bg-danger">
                                      <div className="fc-event-main">Timeline Events</div>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom">
                                  <div className="d-flex align-items-center mb-4 justify-content-between">
                                    <h6 className="fw-semibold">
                                      Activity :
                                    </h6>
                                    <button className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">View All</button>
                                  </div>
                                  <ul className="list-unstyled mb-0 fullcalendar-events-activity" id="full-calendar-activity" data-simplebar="init"><div className="simplebar-wrapper" style={{margin: "0px"}}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div><div className="simplebar-mask"><div className="simplebar-offset" style={{right: "0px", bottom: "0px"}}><div className="simplebar-content-wrapper"  role="region" aria-label="scrollable content" style={{height: "auto", overflow: "hidden"}}><div className="simplebar-content" style={{padding: "0px"}}>
                                    <li>
                                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p className="mb-1 fw-semibold">
                                          Monday, Jan 1,2023
                                        </p>
                                        <span className="badge bg-light text-default mb-1">12:00PM - 1:00PM</span>
                                      </div>
                                      <p className="mb-0 text-muted fs-12">
                                        Meeting with a client about new project requirement.
                                      </p>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p className="mb-1 fw-semibold">
                                          Thursday, Dec 29,2022
                                        </p>
                                        <span className="badge bg-success mb-1">Completed</span>
                                      </div>
                                      <p className="mb-0 text-muted fs-12">
                                        Birthday party of niha suka
                                      </p>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p className="mb-1 fw-semibold">
                                          Wednesday, Jan 3,2023
                                        </p>
                                        <span className="badge bg-warning-transparent mb-1">Reminder</span>
                                      </div>
                                      <p className="mb-0 text-muted fs-12">
                                        Work target for new project is completing
                                      </p>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p className="mb-1 fw-semibold">
                                          Friday, Jan 20,2023
                                        </p>
                                        <span className="badge bg-light text-default mb-1">06:00PM - 09:00PM</span>
                                      </div>
                                      <p className="mb-0 text-muted fs-12">
                                        Watch new movie with family
                                      </p>
                                    </li>
                                    <li>
                                      <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <p className="mb-1 fw-semibold">
                                          Saturday, Jan 07,2023
                                        </p>
                                        <span className="badge bg-danger-transparent mb-1">Due Date</span>
                                      </div>
                                      <p className="mb-0 text-muted fs-12">
                                        Last day to pay the electricity bill and water bill.need to check the bank details.
                                      </p>
                                    </li>
                                  </div></div></div></div><div className="simplebar-placeholder" style={{width: "auto",height: "314px"}}></div></div><div className="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}><div className="simplebar-scrollbar" style={{width:" 0px", display: "none;"}}></div></div><div className="simplebar-track simplebar-vertical" style={{visibility: "hidden"}}><div className="simplebar-scrollbar" style={{height: "0px",display: "none"}}></div></div></ul>
                                </div>
                                <div className="p-3">
                                  <img src="../../../assets/images/media/media-80.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Col xl={9}>
                    <div className="card custom-card">
                    <div className="card-header">
                                <div className="card-title">Full Calendar</div>
                            </div>
                  <div className="card-body">

                  <div id="calendar2">
                    <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        // listWeek,
                      ]}
                      headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                      }}
                      initialView="dayGridMonth"
                      editable={true}
                      selectable={true}
                      selectMirror={true}
                      dayMaxEvents={true}
                      weekends={state.weekendsVisible}
                      initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                      select={handleDateSelect}
                      // eventContent={renderEventContent} // custom render function
                      eventClick={handleEventClick}
                    />
                  </div>
                  </div>
                  </div>
                </Col>
           
      </Row>
      {/* <!-- End Row --> */}
    </Fragment>
  );
};

Calendars.propTypes = {};

Calendars.defaultProps = {};

export default Calendars;
