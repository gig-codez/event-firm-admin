import React, { useState, useEffect, Fragment } from "react";
import { Button } from "react-bootstrap";


const TabToTop = () => {
  const [BacktoTop, setBacktopTop] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktopTop("d-flex");
      } else setBacktopTop("");
    });
  }, []);
  const screenup = () => {
    window.scrollTo({ top: 10, behavior: "auto", });
  };
  return (
    <Fragment>

      <Button   className={`scrollToTop ${BacktoTop}`}   onClick={screenup}>
      <span className="arrow"><i className="fe fe-arrow-up"></i></span>
      </Button>
    </Fragment>
  )
}

export default TabToTop