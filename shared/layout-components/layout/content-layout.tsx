import React, { ReactNode, useEffect, useState } from "react";
import Footer from "../footer/footer";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Rightside from "../right-sidebar/right-sidebar";
import TabToTop from "../tab-to-top/tab-to-top";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Switcher from "../switcher/switcher";


interface AuthenticationLayoutProps {
  children: ReactNode;
}

const Contentlayout = ({ children }:AuthenticationLayoutProps) => {
  const [lateLoad, setlateLoad] = useState(false)
  const Add = () => {
    document.querySelector("body")?.classList.remove("error-1");
    document.querySelector("body")?.classList.remove("landing-body");
  };
  
  useEffect(() => {
    Add();
    setlateLoad(true)
  });
  

  const remove = () => {
    document.querySelector("#right-sidebar-canvas")?.classList.remove("show");
    document.querySelector(".offcanvas-end")?.classList.remove("show");
    document.querySelector("body")!.classList.remove("overflow:hidden");
    document.querySelector("body")!.classList.remove("padding-right:4px");

    if (document.querySelector(".card.search-result") != null) {
      document.querySelector(".card.search-result")?.classList.add("d-none");
    }
    if (document.body.classList.contains("horizontalmenu")){
      document.querySelectorAll(".nav-sub").forEach((res)    =>{
        if(res){
          // res.classList = "nav-sub"
          (res as HTMLElement).style.display = "none"
        }
      })
    }
  };

  return (
    <>

      <Provider store={store}>
        <div style={{display: `${lateLoad ? 'block' : 'none'}`}}>
          <Switcher/>
        
          <div className="page">
            <Header />
            <Sidebar />
            <div className="main-content app-content">
              <div
                className=" container-fluid"
                onClick={() => remove()}
              >
                <div className="inner-body">{children}</div>
              </div>
            </div>
            <Footer />
            <Rightside />
          </div>
          <TabToTop />
          <div id="responsive-overlay"></div>
        </div>

      </Provider>
    </>
  );
};

export default Contentlayout;
