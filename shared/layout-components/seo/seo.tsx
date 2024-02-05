import React from 'react'
import Head from "next/head"
import favicon from "../../../public/assets/images/brand-logos/favicon.ico"

const Seo = ({title}:{title:string}) => {
  let i = `Spruha - ${title}`
  return (
    <Head>
        <title>{i}</title>
        <link rel="icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="description" content="Spruha - Nextjs Admin &amp; Dashboard Template" />
      <meta name="author" content="Spruko Technologies Private Limited" />
      <meta name="keywords" content="react bootstrap,nextjs,dashboard next js,dashboard,admin panel template,react dashboard,admin,next js dashboard template,next js admin template,nextjs dashboard,nextjs template,react bootstrap admin template"></meta>
    </Head>
  )
}

export default Seo