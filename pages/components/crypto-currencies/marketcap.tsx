import React from 'react'
import dynamic from 'next/dynamic';
const Marketcapcom = dynamic(()=>import('../../../shared/data/crypto-currencies/marketcapcom'), { ssr: false })
import PageHeader from '../../../shared/layout-components/page-header/page-header'

import Seo from '../../../shared/layout-components/seo/seo';



const Marketcap = () => {
  return (
    <>
    <Seo title={"Marketcap"}/>

    <PageHeader title="Crypto-Market" item="Crypto Currencies" active_item="Crypto-Market"/>
    <Marketcapcom/>
    </>
  )
}

Marketcap.layout = "Contentlayout"


export default Marketcap