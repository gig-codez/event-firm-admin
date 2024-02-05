import React from "react";
import PageHeader from "../../../shared/layout-components/page-header/page-header";
import dynamic from "next/dynamic";
const Dashboardcom = dynamic(() => import("../../../shared/data/crypto-currencies/dashboard"), {ssr: false,});
import Seo from "../../../shared/layout-components/seo/seo";


const Dashboard = () => {


  return (
    <>
      <Seo title={"Crypto Currencies Dashboard"} />

      <PageHeader
        title="Welcome To Dashboard"
        item="Crypto Currencies"
        active_item="Dashboard"
      />
      
      <Dashboardcom/>
    </>
  );
};

Dashboard.layout = "Contentlayout";

export default Dashboard;
