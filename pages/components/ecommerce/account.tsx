import React  from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import dynamic from 'next/dynamic';
const Accountcom = dynamic(()=>import('../../../shared/data/e-commerce/accountcom'), { ssr: false })
import {connect} from "react-redux"
import Seo from '../../../shared/layout-components/seo/seo';





const Account = () => {
  return (
    <>
    <PageHeader title="Account" item="Ecommerce" active_item="Account"/>
    <Seo title="Account"/>
    <Accountcom/>
    </>
  )
}

Account.layout = "Contentlayout"

const mapStateToProps = (state: string) => ({
  local_Products : state
})

export default connect(mapStateToProps)(Account)