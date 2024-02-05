import React from 'react'
import dynamic from "next/dynamic";
const Leafletmaps = dynamic(() => import("../../../../shared/data/map/leafletmaps"), {
  ssr: false
});

import Seo from '../../../../shared/layout-components/seo/seo'
import PageHeader from '@/shared/layout-components/page-header/page-header';
const leafletsmap = () => {
  return (
    <div>
        <Seo title="Leaflet Maps"/>
        <PageHeader title="Leaflet Maps" item="Maps" active_item="Leaflet Maps"/>

        <Leafletmaps/>
      
    </div>
  )
}
leafletsmap.layout = "Contentlayout"
export default leafletsmap