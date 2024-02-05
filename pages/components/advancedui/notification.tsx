import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Button, Col, Row, Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import Seo from '../../../shared/layout-components/seo/seo';

const Notification = () => {
	  // Top
	  const Top = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Default Top Notification
		</p>,
		{
		  position: toast.POSITION.TOP_LEFT,
		  hideProgressBar: true,
		}
	  );
	// Right
	const Right = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0">
		  Default Right Notification
		</p>,
		{
		  position: toast.POSITION.TOP_RIGHT,
		  hideProgressBar: true,
		}
	  );
	// Center
	const Center = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Default Center Notification
		</p>,
		{
		  position: toast.POSITION.TOP_CENTER,
		  hideProgressBar: true,
		}
	  );
	// Bottom
	const Bottom = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Default Bottom Notification
		</p>,
		{
		  position: toast.POSITION.BOTTOM_LEFT,
		  hideProgressBar: true,
		}
	  );
	const Left = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Default left Notification
		</p>,
		{
		  position: toast.POSITION.TOP_LEFT,
		  hideProgressBar: true,
		}
	  );
  
	// type of  toastify notifications
	const defaultcolor = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Default Top Notification
		</p>,
		{
		  position: toast.POSITION.TOP_LEFT,
		  hideProgressBar: true,
		  theme: "colored",
		}
	  );
	const IconsSuccess = () =>
	  toast.success(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Success Right Notification
		</p>,
		{
		  position: toast.POSITION.TOP_RIGHT,
		  hideProgressBar: true,
		  theme: "colored",
		}
	  );
	const Iconsinfo = () =>
	  toast.info(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Info Center Notification
		</p>,
		{
		  position: toast.POSITION.TOP_CENTER,
		  hideProgressBar: true,
		  theme: "colored",
		}
	  );
	const Iconserror = () =>
	  toast.error(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0">
		  Error Bottom Notification
		</p>,
		{
		  position: toast.POSITION.BOTTOM_LEFT,
		  hideProgressBar: true,
		  theme: "colored",
		}
	  );
	const Iconswarn = () =>
	  toast.warn(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Warning left Notification
		</p>,
		{
		  position: toast.POSITION.BOTTOM_RIGHT,
		  hideProgressBar: true,
		  theme: "colored",
		}
	  );
	const Iconsdark = () =>
	  toast.warn(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Dark left Notification
		</p>,
		{
		  position: toast.POSITION.BOTTOM_RIGHT,
		  hideProgressBar: true,
		  theme: "dark",
		}
	  );
	//Toast notifiaction styles
  
	const Toastslide = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Slide Notification
		</p>,
  
		{
		  position: toast.POSITION.TOP_CENTER,
		  hideProgressBar: true,
		  transition: Slide,
		  autoClose: 1000,
		}
	  );
	const Toastszoom = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Zoom Notification
		</p>,
		{
		  position: toast.POSITION.TOP_CENTER,
		  hideProgressBar: true,
		  transition: Zoom,
		  autoClose: 1000,
		}
	  );
	const Toastsflip = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Flip Notification
		</p>,
		{
		  position: toast.POSITION.TOP_CENTER,
		  hideProgressBar: true,
		  transition: Flip,
		  autoClose: 1000,
		}
	  );
	const ToastsBounce = () =>
	  toast(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0 ">
		  Bounce Notification
		</p>,
		{
		  position: toast.POSITION.TOP_CENTER,
		  hideProgressBar: true,
		  transition: Bounce,
		  autoClose: 1000,
		}
	  );
	//update of toast
	
	const toastId :React.MutableRefObject<any> = React.useRef(null);
	const notify = () =>
	(toastId.current = toast.info(
	  <p className="mx-2 fs-16 d-flex align-items-center mb-0">
		updating............
	  </p>,
	  { autoClose: false }
	  // { closeButton: false } // Remove the closeButton
	));
	const update = () =>
	(toastId.current = toast.success(
		<p className="mx-2 fs-16 d-flex align-items-center mb-0">
		  updating............
		</p>,
	//   toast.update(toastId.current, {
	// 	type: toast.TYPE.SUCCESS,
	// 	render: (
	// 	  <p className="mx-2 fs-16 d-flex align-items-center mb-0 ">updated</p>
	// 	),
  
		{autoClose: 5000}
		// closeButton: true,// The closeButton defined on ToastContainer will be used
	));
	//Toast notifiaction styles
  
  return (
    <>
        <Seo title="Notification"/>

    <PageHeader title="Notification" item="Advanced UI" active_item="Notification"/>

    <Row>
        <Col md={12}>
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Position Notification
              </div>
              <p className="text-muted card-sub-title">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Button variant="light" onClick={Top} className="mg-t-5">
                    Top
                  </Button>
                  <Button variant="light" onClick={Center} className="mg-t-5">
                    Center
                  </Button>
                  <Button variant="light" onClick={Right} className="mg-t-5">
                    Right
                  </Button>
                  <Button variant="light" onClick={Bottom} className="mg-t-5">
                    Bottom
                  </Button>
                  <Button variant="light" onClick={Left} className="mg-t-5">
                    Left
                  </Button>
                  <ToastContainer />
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card className="custom-card mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Notification Types
              </div>
              <p className="text-muted card-sub-title">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Button variant="primary"
                    className="mg-t-5"
                    onClick={defaultcolor}
                  >
                    Default
                  </Button>
                  <Button variant="success"
                    className="mg-t-5"
                    onClick={IconsSuccess}
                  >
                    Success
                  </Button>
                  <Button variant="warning"
                    className=" mg-t-5"
                    onClick={Iconswarn}
                  >
                    Warning
                  </Button>
                  <Button variant="info" className=" mg-t-5" onClick={Iconsinfo}>
                    Info
                  </Button>
                  <Button variant="danger"
                    className="mg-t-5"
                    onClick={Iconserror}
                  >
                    Error
                  </Button>
                  <Button variant="dark" className="mg-t-5" onClick={Iconsdark}>
                    Dark
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card className=" custom-card mg-b-20">
            <Card.Body>
              <div className="main-content-label mg-b-5">
                Notification Styles
              </div>
              <p className="text-muted card-sub-title">
                It is Very Easy to Customize and it uses in website apllication.
              </p>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Button variant="primary"
                    onClick={Toastszoom}
                    className="mg-t-5"
                  >
                    Toast Zoom
                  </Button>
                  <Button variant="primary"
                    onClick={Toastslide}
                    className="mg-t-5"
                  >
                    Toast Slide
                  </Button>
                  <Button variant="primary"
                    onClick={Toastsflip}
                    className="mg-t-5"
                  >
                    Toast Flip
                  </Button>
                  <Button variant="primary"
                    onClick={ToastsBounce}
                    className="mg-t-5"
                  >
                    Toast Bounce
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}

          {/* <!-- div --> */}
          <Card className="custom-card">
            <Card.Body>
              <div className="main-content-label mg-b-5">Update a toast</div>
              <p className="text-muted card-sub-title">
                1 When you update a toast, the toast options and the content
                are inherited but {`don't`} worry you can update them as well.
                <br />
                12 If you want to update the toastId it can be done. But {`don't`}
                forget to use the new id if you want to update your toast again.
              </p>
              <div className="example border-0 p-0">
                <div className="btn-list">
                  <Button variant="primary" onClick={notify} className=" mg-t-5">
                    notify
                  </Button>
                  <Button variant="primary" onClick={update} className="mg-t-5">
                    update
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <!-- div --> */}
        </Col>
      </Row>
    </>
  )
}
Notification.layout = "Contentlayout"

export default Notification