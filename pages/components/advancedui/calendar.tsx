import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from "../../../shared/layout-components/seo/seo"
import Calendars from '../../../shared/data/advanceui/calendar';



const Calendar = () => {

  return (
    <>
    <Seo title="Calendar"/>
    <PageHeader title="Full Calendar" item="Advanced UI" active_item="Full Calendar"/>
      {/* <!-- Row --> */}
        <Calendars/>
      {/* <!-- End Row --> */}
    </>
  )
}
Calendar.layout = "Contentlayout"

export default Calendar