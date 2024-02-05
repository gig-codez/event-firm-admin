import dynamic from 'next/dynamic';
import store from "../../redux/store";
import React, { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux';
import Landingpageswitcher from '../switcher/landingpageswitcher';
// const Switcher = dynamic(() => import("../switcher/switcher"), { ssr: false });

interface AuthenticationLayoutProps {
  children: ReactNode;
}

const Landingpagelayout = ({ children }:AuthenticationLayoutProps) => {
  
  const Add =()=>{
    
  document.querySelector("body")?.classList.add("landing-body")
  document.querySelector("body")?.classList.remove("leftmenu")
  document.querySelector("body")?.classList.remove("main-body")

  document.querySelector("body")?.classList.remove("error-1")

  }
  useEffect(() => {
    Add()
  },[])
  return (
<div className="landing-page-wrapper">
      <Provider store={store}>
          <Landingpageswitcher  />
      { children }
      </Provider>

      </div>
  )
}

export default Landingpagelayout