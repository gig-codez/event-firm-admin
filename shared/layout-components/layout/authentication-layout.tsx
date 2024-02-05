import dynamic from 'next/dynamic';
import React, { Fragment, ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Customswitcher from '../switcher/Customswitcher';
import Landingpageswitcher from '../switcher/landingpageswitcher';


interface AuthenticationLayoutProps {
  children: ReactNode;
}

const Authenticationlayout = ({ children }:AuthenticationLayoutProps) => {
  useEffect(()=>{
    document.querySelector("body")?.classList.add("error-1")
    document.querySelector("body")?.classList.remove("landing-body")

  })
  return (
    <Fragment>
    <Provider store={store}>{ children }
    <Customswitcher/>
    {/* <Landingpageswitcher/> */}
    {/* <Switcher/> */}
    </Provider>
    </Fragment>
  )
}

export default Authenticationlayout