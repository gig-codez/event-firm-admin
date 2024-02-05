import React, { Fragment } from 'react'
import Seo from '../../../shared/layout-components/seo/seo'
import { DayCounter } from "../../../shared/data/pages/DataUnderConstruction"

//Images
import logolight from "../../../public/assets/images/brand/logo-light.png"
import Link from 'next/link'

const UnderConstruction = () => {
  interface DemoChangerElement extends HTMLElement {
    style: CSSStyleDeclaration;
  }
 function Swicherbutton() {
    let demoChanger: DemoChangerElement | null = document.querySelector(".demo_changer")
    if(demoChanger){
      demoChanger.style.right = "0px";
    }
    document.querySelector(".demo_changer")?.classList.toggle("active");
  }
 function remove  () {
  let demoChanger: DemoChangerElement | null = document.querySelector(".demo_changer")
  if(demoChanger){
    demoChanger.style.right = "-270px";
  }
  document.querySelector(".demo_changer")?.classList.remove("active");
  }
  return (
    <div>
        <Seo title="Under construction"/>

{/* <!-- Page --> */}
<Fragment>
    {/* <!-- Page --> */}
    <div className="page main-signin-wrapper bg-primary construction"  >
  
      <div className="container">
      <div className="construction1 text-center details text-fixed-white"
       onClick={() => remove()}
       >
        <div>
        <Link href="/components/dashboard/dashboard">
                <img
                    src={"../../../assets/images/brand-logos/desktop-white.png"}
                    className="header-brand-img mb-4"
                    alt="logo"
                  />
                                </Link>
          <h4 className="text-center text-fixed-white fs-30 fw-semibold  ">
            We are Coming soon
          </h4>
          <p className="text-white-6 fs-15">
           {` We're making the system more awesome.we'll`} be back shortly.
          </p>
            <DayCounter />
        </div>
        <div className="text-center">
          © 2023
          <a href="https://www.spruko.com/" className="text-white-50 mx-2">
            Spruko
          </a>
          All rights reserved.
        </div>
      </div>
      </div>
    </div>
    {/* <!-- End Page --> */}
  </Fragment>
		{/* <!-- End Page --> */}
    </div>
  )
}
UnderConstruction.layout = "Authenticationlayout"

export default UnderConstruction