import React,{useState,useCallback} from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Row, Table } from "react-bootstrap";
import Link from "next/link"
import Slider from 'react-slick';
import Seo from '../../../../shared/layout-components/seo/seo';
 
import ImageViewer from "react-simple-image-viewer";




function SampleNextArrow1(props: { className: string; style: object; onClick:  React.MouseEventHandler<HTMLDivElement> | undefined; }) {
   
  
  
  const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",

                fontSize: "1.3rem",
                borderRadius: "50%",
                width: "3rem",
                height: "3rem",
                textAlign: "center",
                background: "rgb(255 255 255)",
                border: "1px solid #e8ebf3 ",
                zIndex: "99",
                boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow1(props: { className: string; style: object; onClick:  React.MouseEventHandler<HTMLDivElement> | undefined; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "rgb(255 255 255)",
                // height: "20px",
                fontSize: "1.3rem",
                borderRadius: "50%",
                width: "3rem",
                height: "3rem",
                textAlign: "center",

                border: "1px solid #e8ebf3",
                zIndex: "99",
                boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
            }}
            onClick={onClick}
        />
    );
}

const FileDetails = () => {
	const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        rtl: true,
        ltr: true,
        nextArrow: <SampleNextArrow1 className={''} style={SampleNextArrow1} onClick={undefined} />,
        prevArrow: <SamplePrevArrow1 className={''} style={SamplePrevArrow1} onClick={undefined} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
      "../../../../assets/images/files/jpg/8.jpg",
      "../../../../assets/images/files/jpg/6.jpg",
      "../../../../assets/images/files/jpg/7.jpg",
      "../../../../assets/images/files/jpg/2.jpg",
      "../../../../assets/images/files/jpg/5.jpg",
      "../../../../assets/images/files/jpg/4.jpg",
      "../../../../assets/images/files/jpg/3.jpg",
      "../../../../assets/images/files/jpg/9.jpg",
    ];
    const openImageViewer = useCallback((index: React.SetStateAction<number>) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
  return (
    <>
        <Seo title="File Details"/>

    <PageHeader title="File-Details" item="File Manager" active_item="File-Details"/>

    <Row className=" row-sm">
      <Col xl={8} lg={12} md={12}>
        <Card className=" custom-card overflow-hidden">
          <Card.Body className=" px-4 pt-4">
            <Link href="#!">
              <img src={"../../../../assets/images/media/jobs-landing/blog/15.jpg"} alt="img" className="rounded-2 w-100" />
            </Link>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={4} lg={12} md={12}>
        <Card className=" custom-card">
          <Card.Body className=" card-body ">
            <h5 className="mb-3">File details :</h5>
            <div className="table">
              <Row>
                <Col xl={12}>
                  <div className="table-responsive">
                    <Table className="table mb-0 border-top table-bordered text-nowrap">
                      <tbody>
                        <tr>
                          <th scope="row">File-name</th>
                          <td>image.jpg</td>
                        </tr>
                        <tr>
                          <th scope="row">File-size</th>
                          <td>12.45mb</td>
                        </tr>
                        <tr>
                          <th scope="row">uploaded-date</th>
                          <td>01-12-2020</td>
                        </tr>
                        <tr>
                          <th scope="row">uploaded-by</th>
                          <td>prityy abodh</td>
                        </tr>
                        <tr>
                          <th scope="row">image-width</th>
                          <td>1000</td>
                        </tr>
                        <tr>
                          <th scope="row">image-height</th>
                          <td>600</td>
                        </tr>
                        <tr>
                          <th scope="row">File-formate</th>
                          <td>jpg</td>
                        </tr>
                        <tr>
                          <th scope="row">File-location</th>
                          <td>storage/photos/image.jpg</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={8} lg={12} md={12}>
        <div className=" multiside filedetails-slide mb-4 file-image-silder file-details">
		<Slider {...settings}>
                
                <div className="item">
                    <div className="card">
                        <Card className=" custom-card overflow-hidden mb-0 ">
                            <Link href="#!">
                                <img src={"../../../../assets/images/files/jpg/3.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className=" custom-card overflow-hidden mb-0 ">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/9.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/8.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/7.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/6.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/5.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/4.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/2.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                <div className="item">
                    <div className="card">
                        <Card className="card custom-card overflow-hidden mb-0 ">
                            <Link href="#!"><img src={"../../../../assets/images/files/jpg/1.jpg"} alt="img" /></Link>
                            <Card.Footer className="bd-t-0 py-3">
                                <div className="d-flex">
                                    <div>
                                        <h6 className="mb-0">221.jpg</h6>
                                    </div>
                                    <div className="ms-auto">
                                        <h6 className="text-muted mb-0">120 KB</h6>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
                
            </Slider>
        </div>
      </Col>
      <Col xl={4} lg={12} md={12}>
        <Card className=" custom-card">
          <Card.Body>
            <h5 className="mb-3">Recent Files</h5>
            <Row >
            {images.map((image,index) =>  (

              <div className="col-lg-3 col-md-3 col-sm-6 col-12" 
              key={Math.random()}  >
                  <img onClick={() =>openImageViewer(index)} src={`${image}`}  alt="img" height="100%" width="100%" className="glightbox card" />
              </div>
            ))}
              {isViewerOpen && (
                    <ImageViewer key={Math.random()}
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                    />
                )}
            
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}
FileDetails.layout = "Contentlayout"

export default FileDetails