import React, {  Fragment } from "react";
import {  Modal,  Button, ModalProps,} from "react-bootstrap";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";

interface MydModalWithGridProps {
  show: boolean;
  onHide: () => void;
}

export function Alertmessagesuccess() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <Fragment>
        <Button variant="success" onClick={() => setModalShow(true)}>
          View Demo
        </Button>
        <MyVerticallyCenteredModal2
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Fragment>
    );
  }
  function MyVerticallyCenteredModal2(props: MydModalWithGridProps) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton />
        <Modal.Body className="text-center">
          <i className="icon ion-ios-checkmark-circle-outline fs-100 tx-success  mg-t-20 "></i>
  
          <h4 className="tx-success tx-semibold mg-b-20">Congratulations!</h4>
          <p className="mg-b-20 mg-x-20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <Button onClick={props.onHide} variant="success">
            continue
          </Button>
        </Modal.Body>
      </Modal>
    );
  }