import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Row, Card, Col } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';
import media17 from "../../../public/assets/images/brand/logo.png"
import Swal from 'sweetalert2';
const sweetalert = () => {
    // BasicAlert
    function Basicsweetalert() {
      Swal.fire({
        title: 'Hello this is Basic alert message',
        allowOutsideClick: true,
        confirmButtonColor: '#3085d6'
      });
    }
    // Titlealert
    function Titlealert() {
      Swal.fire(
        'The Internet ?',
        'That thing is still around ?',
        'question'
      );
    }
    //Footer
    function Footeralert() {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }
    //Long window
    function Longwindow() {
      Swal.fire({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image'
      });
    }
    function Htmlexample() {
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io" target=_blank>links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      });
    }
    //multiple buttons
  
    function Multiplebuttons() {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success');
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info');
        }
      });
    }
    //position 
  
    function Positiondialog() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    }
  
    //confirmalert
  
    function Confirmalert() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        }
      });
    }
    //parameter
    function Parameteralert() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger me-2'
        },
        buttonsStyling: false
      });
  
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
    }
    //image alert
    function Imagealert() {
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: "../../../assets/images/media/media-59.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
    }
    //backgroundimage
    function Backgroundimage() {
      Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: 'rgb(255, 255, 255)',
        background: '#fff url(../../../assets/images/media/media-6.jpg)',
  
      });
    }
  
    function Autoclose() {
      let timerInterval: any;
  
      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer()?.querySelector('b'); // Use optional chaining here
          if (b) {
            timerInterval = setInterval(() => {
              const timerLeft = Swal.getTimerLeft()?.toString() || '0'; // Use optional chaining and provide a default value
              b.textContent = timerLeft;
            }, 100);
          }
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
    }
  
  return (
    <>
        <Seo title="Sweet Alert"/>

    <PageHeader title="Sweet Alert" item="Advanced UI" active_item="Sweet Alert"/>

    <Row>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Basic Alert
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="basic-alert" onClick={Basicsweetalert}>Basic Alert</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Title With Text Under
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-text" onClick={Titlealert}>Title With Text</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                With Text,Error Icon & Footer
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-footer" onClick={Footeralert}>Alert Footer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Alert With Long Window
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="long-window" onClick={Longwindow}>Long Window Here</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Custom HTML Description
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-description" onClick={Htmlexample}>Custom HTML Alert</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Alert With Multiple Buttons
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="three-buttons" onClick={Multiplebuttons}>Multiple Buttons</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Custom Positioned Dialog Alert
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-dialog" onClick={Positiondialog}>Alert Dialog</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Confirm Alert
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-confirm" onClick={Confirmalert}>Confirm Alert</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Alert With Parameters
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-parameter" onClick={Parameteralert}>Alert Parameters</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Alert With Image
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-image" onClick={Imagealert}>Image Alert</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Alert With Image
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-custom-bg" onClick={Backgroundimage}>Custom Alert</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4}>
          <Card className="custom-card">
            <Card.Header>
              <div className="card-title">
                Auto Close Alert
              </div>
            </Card.Header>
            <Card.Body className="card-body text-center">
              <Button variant='primary' id="alert-auto-close" onClick={Autoclose}>Auto Close</Button>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
    </>
  )
}
sweetalert.layout = "Contentlayout"

export default sweetalert