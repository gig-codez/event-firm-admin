import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';


    const AfterComplete = () => <span>You are good to go!</span>;
    // Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
    if (completed) {
      // Render a complete state
      return <AfterComplete />
    }else {
        // Render a countdown
        return (
          <React.Fragment>
            <div className="row mt-4 gy-xxl-0 gy-3 mb-5 justify-content-center" id="timer">
              <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                <div className="p-3 under-maintenance-time rounded">
                  <p className="mb-1 fs-12 op-5">DAYS</p><h4 className="fw-semibold mb-0">{days}</h4></div>
                </div><div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                  <div className="p-3 under-maintenance-time rounded">
                    <p className="mb-1 fs-12 op-5">HOURS</p><h4 className="fw-semibold mb-0">{hours}</h4></div></div>
                  <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                    <div className="p-3 under-maintenance-time rounded">
                      <p className="mb-1 fs-12 op-5">MINUTES</p><h4 className="fw-semibold mb-0">{minutes}</h4></div></div>
                      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-6">
                        <div className="p-3 under-maintenance-time rounded">
                          <p className="mb-1 fs-12 op-5">SECONDS</p><h4 className="fw-semibold mb-0">{seconds}</h4></div></div></div>
        
          </React.Fragment>
        );
      }
    };
  export function DayCounter() {
          return (
            <Countdown date={Date.now() + 12999800000} renderer={rendering} />
          );
        }
