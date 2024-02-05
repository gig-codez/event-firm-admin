import { Fragment, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";



export const Slicksider = () => {

    useEffect(()=>{
        const landingpages = () => {
            if (window.scrollY > 30 && document.querySelector(".landing-page")) {
              let Scolls = document.querySelectorAll(".sticky");
              Scolls.forEach((e) => {
                e.classList.add("sticky-pin");
              });
            } else {
              let Scolls = document.querySelectorAll(".sticky");
              Scolls.forEach((e) => {
                e.classList.remove("sticky-pin");
              });
            }
          }

        if (typeof window !== "undefined") {
          window.addEventListener("scroll", landingpages);
        }
    })


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Fragment>
            <div>
            
            </div>
        </Fragment>
    )
}

//Scroll To Top

// export const Topup = () => {
//     if (window.scrollY > 30 && document.querySelector(".landing-page")) {
//         let Scolls = document.querySelectorAll(".top", ".sticky");
//         Scolls.forEach((e) => {
//             e.classList.add("sticky-pin");
//         });
//     } else {
//         let Scolls = document.querySelectorAll(".top", ".sticky");
//         Scolls.forEach((e) => {
//             e.classList.remove("sticky-pin");
//         });
//     }
// };

// window.addEventListener("scroll", Topup);