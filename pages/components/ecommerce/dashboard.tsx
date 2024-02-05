import dynamic from 'next/dynamic';
import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
const Dashboardecommerce = dynamic(() => import('../../../shared/data/e-commerce/dashboard'), { ssr: false });
import Seo from '../../../shared/layout-components/seo/seo';

const Dashboard = () => {


  return (
    <>
    <Seo title="Dashboard"/>
    <PageHeader title="Welcome To Dashboard" item="ECommerce" active_item="Dashboard"/>
    <Dashboardecommerce/>

    </>
  )
}

Dashboard.layout = "Contentlayout"


export default Dashboard