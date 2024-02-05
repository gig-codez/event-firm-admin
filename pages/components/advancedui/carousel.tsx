import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import {Card, Carousel, Col, Row } from "react-bootstrap";
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Slider from "react-slick";
import Link from 'next/link';


import Seo from '../../../shared/layout-components/seo/seo';




const Carousels = () => {



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // rtl: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  const settingswithfade = {
    dots: false,
    fade: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
  };

  const [nav1, setNav1] = useState<HTMLDivElement | null>();
  const [nav2, setNav2] = useState<HTMLDivElement | null>();
  const slider1 : React.MutableRefObject<null> = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const settings2 = {
    arrows: true,
  };

  function SampleNextArrow1(props: { className: string ; style: object ; onClick: MouseEventHandler<HTMLDivElement> | undefined; }) {
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
          border: "1px solid #e8ebf3 !important",
          zIndex: "99",
          boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow1(props: { className: string; style: object; onClick: MouseEventHandler<HTMLDivElement>  | undefined;  }) {
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
  
          border: "1px solid #e8ebf3 !important",
          zIndex: "99",
          boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
        }}
        onClick={onClick}
      />
    );
  }

  const settingsSlickcarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // rtl: true,

    nextArrow: <SampleNextArrow1 className={''} style={SampleNextArrow1} onClick={undefined}/>,
    prevArrow: <SamplePrevArrow1 className={''} style={SamplePrevArrow1} onClick={function (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
      throw new Error('Function not implemented.');
    } } />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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


  const settingsMultipleslider = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // rtl: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow1 className={''} style={SampleNextArrow1} onClick={undefined} />,
    prevArrow: <SamplePrevArrow1 className={''} style={SamplePrevArrow1} onClick={undefined}/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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


  return (
    <>
        <Seo title="Carousel"/>
    <PageHeader title="Carousel" item="Advanced UI" active_item="Carousel"/>

    <Row className="row-sm">
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">Static Carousel</h6>
              <p className="text-muted card-sub-title">
                Heres a carousel with slides only.
              </p>
            </div>
            <div>
              <div
                id="carouselExampleSlidesOnly"
              >
                <div className="carousel-inner ap">
                <Slider {...settings}>
                <div className="item">
                <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-28.jpg"} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-29.jpg"} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-30.jpg"} />
                </div>
                </Slider>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">With Controls</h6>
              <p className="text-muted card-sub-title">
                Adding in the previous and next controls.
              </p>
            </div>
            <div  id="carouselExampleSlidesOnly">
              <div id="carouselExample2">
              <Slider {...settings}>
              <div className="item">
              <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-31.jpg"} />
              </div>
              <div className="item">
              <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-28.jpg"} />
              </div>
              <div className="item">
              <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-26.jpg"} />
              </div>
              </Slider>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">
                With Indicator/With Controls
              </h6>
              <p className="text-muted card-sub-title">
                You can also add the indicators to the carousel.
              </p>
            </div>
            <div  id="carouselExampleSlidesOnly">
              <div id="carouselExample3">
              <Slider {...settings}>
                <div className="item">
                <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-25.jpg"} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-33.jpg"} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={"../../../assets/images/media/media-32.jpg"} />
                </div>
              </Slider>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card carsoul-caption">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">With Caption</h6>
              <p className="text-muted card-sub-title">
                Add captions to your slides easily with the
                <code>.carousel-caption</code> element within any
                <code>.carousel-item.</code>
              </p>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={"../../../assets/images/media/media-16.jpg"}
                    alt="First"
                  />
                  <Carousel.Caption className=" d-none d-md-block">
                    <h4>First slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque,
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={"../../../assets/images/media/media-17.jpg"}
                    alt="Second"
                  />

                  <Carousel.Caption className=" d-none d-md-block">
                    <h4>Second slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={"../../../assets/images/media/media-15.jpg"}
                    alt="Third"
                  />

                  <Carousel.Caption className=" d-none d-md-block">
                    <h4>Third slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">Fade Animate Carousel</h6>
              <p className="text-muted card-sub-title">
                Add fade transition to your carousel to animate slides with a
                fade transition instead of a slide.
              </p>
         
            <div>
              <div id="carouselExample5">
              <Slider {...settingswithfade}>
            <div>
          <img className="d-block w-100" src={"../../../assets/images/media/media-21.jpg"} alt="media1" />
        </div>
        <div>
          <img className="d-block w-100" src={"../../../assets/images/media/media-16.jpg"} alt="media18" />
        </div>
        <div>
          <img className="d-block w-100" src={"../../../assets/images/media/media-29.jpg"} alt="media9" />
        </div>
        <div>
          <img className="d-block w-100" src={"../../../assets/images/media/media-23.jpg"} alt="media3" />
        </div>
      </Slider>
              </div>
            </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">
                Carousel With Thumbnails
              </h6>
              <p className="text-muted card-sub-title">
                The Carousel controls the Thumbnails easily design the images
                <br />
                with thumbnails
              </p>
            </div>
            <div id="carouselExample6">

            <Slider
        className="mainSlider"
        ref={slider1}
        {...settings}
      >
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={"../../../assets/images/media/media-27.jpg"} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={"../../../assets/images/media/media-28.jpg"} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={"../../../assets/images/media/media-29.jpg"} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={"../../../assets/images/media/media-30.jpg"} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={"../../../assets/images/media/media-31.jpg"} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={"../../../assets/images/media/media-21.jpg"} />
                  </span>
          </div>
        </div>
      </Slider>

            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card className="custom-card react-carousel-section">
            <Card.Header>
              <h6 className="main-content-label mb-1">React slick Carousel</h6>
              <p className="text-muted card-sub-title mb-1"> Touch enabled React slick plugin that lets you create a
                beautiful responsive carousel slider.</p>
            </Card.Header>
          <Card.Body className="h-100">
          <Slider {...settingsSlickcarousel}>
        <div className="item">
          <Card className="me-3 ">
            <Card.Body className=" user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-25.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-24.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-26.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Owen Bongcaras</h5>
                <p className="mb-1">Web Designer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-27.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Mariane Galeon</h5>
                <p className="mb-1">Php Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-28.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-29.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item ">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-30.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Owen Bongcaras</h5>
                <p className="mb-1">Web Designer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={"../../../assets/images/media/media-31.jpg"} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Mariane Galeon</h5>
                <p className="mb-1">Php Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Slider>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card className="custom-card multi-slider-section">
            <Card.Header>
              <h6 className="main-content-label mb-1"> Slick Multi Slider</h6>
              <p className="text-muted card-sub-title">
                Slick Multislider is a React Slick powered slideshow that
                specializes in showing more than one slide at a time. Theres no
                need to find messy CSS and JS work arounds for other
                single-slide solutions. Multislider allows the developer to
                focus fully on each individual slide as its own component, and
                then displays as many slides as you decide in a manner that is
                fluid, consistent, and dymanic.
              </p>
            </Card.Header>
          <Card.Body className="h-100">
            <div id="basicSlider">
            <Slider {...settingsMultipleslider}>
        <div className="item  pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-21.jpg"} alt="media1" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-22.jpg"} alt="media2" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-23.jpg"} alt="media3" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-24.jpg"} alt="media4" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-25.jpg"} alt="media5" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-26.jpg"} alt="media6" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-27.jpg"} alt="media7" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank ">
            <img src={"../../../assets/images/media/media-28.jpg"} alt="media8" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-29.jpg"} alt="media9" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-30.jpg"} alt="media10" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={"../../../assets/images/media/media-31.jpg"} alt="media11" />
          </Link>
        </div>
      </Slider>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}
Carousels.layout = "Contentlayout"

export default Carousels