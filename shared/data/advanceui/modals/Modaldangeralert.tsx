import React, {  Fragment } from "react";
import {  Modal,  Button,} from "react-bootstrap";

interface MydModalWithGridProps {
  show: boolean;
  onHide: () => void;
}

export function Alertdangermessage() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <Fragment>
        <Button variant="danger" onClick={() => setModalShow(true)}>
          View Demo
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Fragment>
    );
  }
  function MyVerticallyCenteredModal(props: MydModalWithGridProps) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton />
        {/* <button
          aria-label="Close"
          className="btn ripple  pd-x-25"
          data-bs-dismiss="modal"
          type="button"
        ></button> */}
  
        <Modal.Body className="text-center pd-y-20 pd-x-20">
          <i className="icon icon ion-ios-close-circle-outline fs-100 tx-danger lh-1  d-inline-block"></i>
          <h4 className="tx-danger mg-b-20">Error: Cannot process your entry!</h4>
          <p className="mg-b-20 mg-x-20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <Button onClick={props.onHide} variant="danger">
            continue
          </Button>
        </Modal.Body>
      </Modal>
    );
  }