import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Card, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
// import DataTable from "react-data-table-component";
const DataTable = dynamic(()=>import("react-data-table-component"), { ssr: false })
// import DataTableExtensions from "react-data-table-component-extensions";
const DataTableExtensions:any = dynamic(()=>import('react-data-table-component-extensions'), { ssr: false })
import "react-data-table-component-extensions/dist/index.css";
import Seo from '../../../shared/layout-components/seo/seo';
import { Placement } from '@popperjs/core';
const Orders = () => {
	const columns = [
        {
            name: "ID",
            selector: (row: { ID: number; }) => [row.ID],
            sortable: true,
            cell: (row: { ID: boolean | React.ReactNode | React.ReactNode[] | React.ReactPortal | null | undefined; }) => <div className="fw-bold">
                {row.ID}
            </div>,

        },

        {
            name: "INVOICE",
            selector: (row: { Invoice: string; }) => [row.Invoice],
            cell: (row: { Invoice: boolean |React.ReactNode | React.ReactNode[] | React.ReactPortal | null | undefined; }) =>
                <div className="fw-bold">
                    {row.Invoice}
                </div>,
            sortable: true
        },
        {
            name: "NAME",
            selector: (row: { Name: string; }) => [row.Name],
            sortable: true,
            cell: (row: { Name: boolean | React.ReactNode | React.ReactNode[]| React.ReactPortal | null | undefined; }) =>
                <div>
                    {row.Name}
                </div>
        },
        {
            name: "DATE",
            selector: (row: { Date: string; }) => [row.Date],
            sortable: true,
            cell: (row: { Date: boolean | React.ReactNode | React.ReactNode[] | React.ReactPortal | null | undefined; }) =>
                <div>
                    {row.Date}
                </div>
        },
        {
            name: "TOTAL",
            selector: (row: { Total: string; }) => [row.Total],
            cell: (row: { Total: boolean | React.ReactNode | React.ReactNode[] | React.ReactPortal | null | undefined; }) =>
                <div className="d-flex my-auto">

                    <span className="my-auto">{row.Total}</span>
                </div>,

            sortable: false,

        },
        {
            name: "WAREHOUSE",
            selector: (row: { Warhouse: string; }) => [row.Warhouse],
            sortable: true,
            cell: (row: { Warhouse: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                <div className="fw-semibold">
                    {row.Warhouse}
                </div>

        },
        {
            name: "STATUS",
            selector: (row: { Status: string; }) => [row.Status],
            sortable: true,
            cell: (row: { Statusinfo: string; Status: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
                <div>
                    <span className={`status bg-${row.Statusinfo}`}></span>
                    {row.Status}
                </div>
        },

        {
            name: "ACTIONS",
            selector: (row: { ACTIONS: string | number; }) => [row.ACTIONS],
            sortable: true,
            cell: (row: { Placement: Placement | undefined }) =>
                <div className="btn-list" >
<a className="btn btn-outline-light">


                    <OverlayTrigger
                        placement={row.Placement}
                        overlay={<Tooltip>File</Tooltip>}
                    >
                        <i className="bi bi-file-earmark-text"></i>
                    </OverlayTrigger>
</a>
<a className="btn btn-outline-light">

                    <OverlayTrigger
                        placement={row.Placement}
                        overlay={<Tooltip> Edit</Tooltip>}
                    >
                        <i className="bi bi-pencil-square"></i>
                    </OverlayTrigger>
</a>
<a className="btn btn-outline-light">

                    <OverlayTrigger
                        placement={row.Placement}
                        overlay={<Tooltip> Delete</Tooltip>}
                    >
                        <i className="bi bi-trash"></i>
                    </OverlayTrigger>
</a>
                </div>
        },
     
    ];
    let data1 = [
        {

            ID: "#W83549801",
            Invoice: "2",
            Name: "Anna sthesia",
            Date: "08/11/2020",
            Total: "$1,000",
            Warhouse: "Boston",
            Status: "pending",
            Statusinfo: "warning",
            Placement: "top"
        },
        {
            ID: "#W83549802",
            Invoice: "5",
            Name: "Barb Dwyer",
            Date: "15/11/2020",
            Total: "$4,577",
            Warhouse: "Washington Dc",
            Status: "Delivered",
            Statusinfo: "success",
        },
        {
            ID: "#W83549803",
            Invoice: "3",
            Name: "Wilma Mumduya",
            Date: "17/11/2020",
            Total: "$4,500",
            Warhouse: "San Francisco",
            Status: "Delivered",
            Statusinfo: "success",
        },
        {
            ID: "#W83549804",
            Invoice: "4",
            Name: "Zack Lee",
            Date: "18/11/2020",
            Total: "$3,266",
            Warhouse: "Las Vegas",
            Status: " Refunded",
            Statusinfo: "info",
        },
        {
            ID: "#W83549805",
            Invoice: "5",
            Name: "Tom Foolery",
            Date: "20/11/2020",
            Total: "$1,30,000",
            Warhouse: "Los Angel",
            Status: "Cancelled",
            Statusinfo: "danger",
        },
        {
            ID: "#W83549806",
            Invoice: "6",
            Name: "Pat Agonia",
            Date: "22/11/2020",
            Total: "$2,535",
            Warhouse: "Chicago",
            Status: "Delivered",
            Statusinfo: "success",
        },
        {
            ID: "#W83549807",
            Invoice: "6",
            Name: "Mary Christmas",
            Date: "26/11/2020",
            Total: "$1,526",
            Warhouse: "Los Angels",
            Status: "Cancelled",
            Statusinfo: "danger",
        },
        {
            ID: "#W83549808",
            Invoice: "5",
            Name: "Ella Vator",
            Date: "29/11/2020",
            Total: "$1,500",
            Warhouse: "Chicago",
            Status: "pending",
            Statusinfo: "warning",
        },
        {
            ID: "#W83549809",
            Invoice: "8",
            Name: "Sharon Needles",
            Date: "01/12/2020",
            Total: "$2,30,000",
            Warhouse: "Uk",
            Status: "Delivered",
            Statusinfo: "success",
        },
        {
            ID: "#W835498010",
            Invoice: "7",
            Name: "Anne Fibbiyon",
            Date: "04/12/2020",
            Total: "$33,990",
            Warhouse: "Chicago",
            Status: " Refunded",
            Statusinfo: "info",
        },
        {
            ID: "#W835498011",
            Invoice: "1",
            Name: "Frank Senbeans",
            Date: "09/12/2020",
            Total: "$12,999",
            Warhouse: "Chicago",
            Status: "Cancelled",
            Statusinfo: "danger",
        },
        {
            ID: "#W835498012",
            Invoice: "12",
            Name: "Chris P. Bacon",
            Date: "12/12/2020",
            Total: "$15,993",
            Warhouse: "Brazil",
            Status: "Delivered",
            Statusinfo: "success",
        },
    ]

    let [data, setData] = useState(data1)

    var click = (id: string) => {
        let i = data.filter((e, index) => {
            return e.ID !== id
        })
        data1 = i
        setData(i)
        console.log(data1)
    }
    const tableData = {
        columns,
        data,
    };
  return (
    <>
        <Seo title="Orders"/>

    <PageHeader title="Orders" item="Ecommerce" active_item="Orders"/>

    <div>
    {/* <!-- Row --> */}
	<Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className=" custom-card orders-table">
            <Card.Header className=" border-bottom-0 pb-0">
              <div>
                <div className="d-flex">
                  <label className="main-content-label my-auto pt-2">
                    All Orders
                  </label>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
            <div className="table-responsive">
            <DataTableExtensions {...tableData}  >
                <DataTable className="border"
                                      defaultSortAsc={false}
                                      // striped={true}
                                 columns={[]} data={[]}
                />
            </DataTableExtensions>
        </div>
             
             
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
	{/* <!-- End Row --> */}
    </div>
    </>
  )
}

Orders.layout = "Contentlayout"


export default Orders


