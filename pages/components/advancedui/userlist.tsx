import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Row, Button, Dropdown, Table, Pagination } from "react-bootstrap";

import Link from 'next/link';
import Seo from '../../../shared/layout-components/seo/seo';

import dynamic from 'next/dynamic';
const Userlistdropdown = dynamic(()=>import('../../../shared/data/advanceui/userlistdropdown'), { ssr: false })


let UserlistData = [
	{
	  id: 1,
	  Product1:  "../../../assets/images/faces/1.jpg",
	  ProductId: "Megan Peters",
	  created: "08/06/2022",
	  status: "Inactive",
	  email: "mila@Kunis.com",
	  information: "gray"
  
	},
	{
	  id: 2,
	  Product1: "../../../assets/images/faces/2.jpg",
	  ProductId: "George Clooney",
	  created: "08/06/2022",
	  status: "active",
	  email: "	marlon@brando.com",
	  information: "success"
	},
	{
	  id: 3,
	  Product1: "../../../assets/images/faces/3.jpg",
	  ProductId: "Ryan Gossling	",
	  created: "08/06/2022",
	  status: "Banned",
	  email: "jack@nicholson",
	  information: "danger"
	},
	{
	  id: 4,
	  Product1: "../../../assets/images/faces/4.jpg",
	  ProductId: "Emma Watson",
	  created: "16/06/2022",
	  status: "Pending",
	  email: "jack@nicholsonm",
	  information: "warning"
  
	},
	{
	  id: 5,
	  Product1: "../../../assets/images/faces/5.jpg",
	  ProductId: "Mila Kunis",
	  created: "18/06/2022",
	  status: "active",
	  information: "success",
	  email: "mila@Kunis.com",
	},
  
	{
	  id: 6,
	  Product1:"../../../assets/images/faces/6.jpg",
	  ProductId: "	Phil Watsons",
	  created: "22/06/2022",
	  status: "active",
	  email: "	phil@watson.com",
	  information: "success",
	},
	{
	  id: 7,
	  Product1: "../../../assets/images/faces/7.jpg",
	  ProductId: "Sonia Robertson",
	  created: "25/06/2022",
	  status: "active",
	  email: "robertson@sonia.com",
	  information: "success"
	},
	{
	  id: 8,
	  Product1: "../../../assets/images/faces/8.jpg",
	  ProductId: "Megan Peters",
	  created: "28/06/2022",
	  status: "Banned",
	  email: "amelia23@kunis.com",
	  information: "danger"
	},
	{
	  id: 9,
	  Product1: "../../../assets/images/faces/9.jpg",
	  ProductId: "Adam Hamilton",
	  created: "30/06/2022",
	  status: "pending",
	  email: "	morganleah@.com",
	  information: "warning"
  
	},
	{
	  id: 10,
	  Product1:"../../../assets/images/faces/10.jpg",
	  ProductId: "Leah Morgan",
	  created: "08/06/2022",
	  status: "active",
	  email: "mila@Kunis.com",
	  information: "success"
  
	}
  ];

const Userlist = () => {
	var Delete = (list: number) => {
		let items = UserlistData.filter((userlist, i) => {
		  return userlist.id != list
		})
		UserlistData = items
		setdata(items)
		// console.log(items);
	  }
	  const [data, setdata] = useState(UserlistData)
  return (
    <>
        <Seo title="User List"/>

    <PageHeader title="UserList" item="AdvancedUI" active_item="UserList"/>

    {/* <!--Row--> */}
	<Row className=" row-sm">
        <Col sm={12} md={12} xl={12} lg={12} className="grid-margin">
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0 pb-0 d-block">
              <div className="d-flex justify-content-between align-items-center">
                <label className="main-content-label mb-0 pt-1">User Table</label>
                <div className="ms-auto float-end">
                  <Userlistdropdown/>
                </div>
              </div>
              <p className="fs-12 text-gray-5 mt-0 mb-2">
                Example of Spruha Simple Table. <Link href="#!">Learn more</Link>
              </p>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border userlist-table border-bottom-0">
                <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="wd-lg-8p">
                        <span>User</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span></span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Created</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Status</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Email</span>
                      </th>
                      <th className="wd-lg-20p">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((item, index) => (
                      <tr key={index}>
                        <td >
                          <div className="avatar-md">

                          <img
                          className="rounded-circle me-2"
                            alt="avatar"
                            src={item.Product1}
                          />
                          </div>
                        </td>
                        <td>{item.ProductId}</td>
                        <td>{item.created}</td>
                        <td className="text-center">
                          <span className={`label text-${item.information} d-flex`}>
                            <span className={`dot-label bg-${item.information} me-1- 300`}></span>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <Link href="#!">{item.email}</Link>
                        </td>
                        <td>
                          <Link href="#!" className="btn btn-sm btn-primary me-1">
                            <i className="fe fe-search"></i>
                          </Link>
                          <Link href="#!" className="btn btn-sm btn-info me-1">
                            <i className="fe fe-edit-2"></i>
                          </Link>
                          <Link href="#!" className="btn btn-sm btn-danger me-1" onClick={() => {Delete(item.id) }}>
                            <i className="fe fe-trash"></i>
                          </Link>
                        </td>
                      </tr>

                      ))}
                    </tbody>

                </Table>
              </div>
              <div className="mt-5">
                <Pagination className="mb-0 justify-content-end">
                  <Pagination.Item>Prev</Pagination.Item>
                  <Pagination.Item className="page-item disabled">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item className="page-item" active>
                    {2}
                  </Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- row closed  --> */}
    </>
  )
}
Userlist.layout = "Contentlayout"

export default Userlist