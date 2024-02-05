
import '../styles/globals.scss'
import '../public/assets/css/icons.css'
import Contentlayout from '../shared/layout-components/layout/content-layout'
import Landingpagelayout from '../shared/layout-components/layout/landingpage-layout'
import Authenticationlayout from '../shared/layout-components/layout/authentication-layout'
import { useEffect, useState } from 'react'
import Head from 'next/head'



const layouts : any = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Authenticationlayout: Authenticationlayout,
};

function MyApp({Component, pageProps } : {Component:any ,pageProps :any}) {

  const Layout : any = layouts[Component.layout] || ((pageProps: any) => <Component>{pageProps}</Component>);
  

  
  return (
   <>
       
    <Layout>
     
      <Component {...pageProps} />
    
    </Layout>
   </> 
  )
}

export default MyApp
