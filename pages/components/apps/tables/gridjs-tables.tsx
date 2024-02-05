import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { Table, Button, Breadcrumb, Card, Row, Col } from "react-bootstrap";
import Seo from '../../../../shared/layout-components/seo/seo';
const Listpages = [

  { ID: "1", Name: "Joan Powell", POSITION: "Associate Developer", SALARY: "$450,870", },
  { ID: "2", Name: "Gavin Gibson", POSITION: "Account manager", SALARY: "$230,540", },
  { ID: "3", Name: "Julian Kerr", POSITION: "Senior Javascript Developer", SALARY: "$55,300", },
  { ID: "4", Name: "Cedric Kelly", POSITION: "Accountant", SALARY: "$234,100" },
  { ID: "5", Name: "Samantha May", POSITION: "Junior Technical Author", SALARY: "$43,198", }
];
const GridjsTables = () => {
  return (
    <>
        <Seo title="Gridjs Tables"/>

    <PageHeader title="Grid Js" item="Tables" active_item="Grid js"/>

    {/* <!-- Row --> */}
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Simple Table</h6>
              <p className="text-muted card-sub-title">
                Using the most basic table markup
              </p>
            </div>

            <div className="table-responsive border border-bottom-0">
              <Table className="table text-nowrap text-md-nowrap mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Striped Rows</h6>
              <p className="text-muted card-sub-title">
                Add zebra-striping to any table row.
              </p>
            </div>
            <div className="table-responsive border border-bottom-0" >
              <Table className="table  text-nowrap text-md-nowrap table-striped mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Bordered Table</h6>
              <p className="text-muted card-sub-title">
                Add borders on all sides of the table and cells.
              </p>
            </div>
            <div className="table-responsive" >
              <Table className="table text-nowrap text-md-nowrap table-bordered mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row row-sm">
      <Col lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Hoverable Rows Table</h6>
              <p className="text-muted card-sub-title">
                To enable a hover state on table rows.
              </p>
            </div>
            <div className="table-responsive border border-bottom-0">
              <table className="table text-nowrap text-md-nowrap table-hover mg-b-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>POSITION</th>
                    <th>SALARY</th>
                  </tr>
                </thead>
                <tbody>
                  {Listpages.map((list, index) => (
                    <tr key={index} data-index={index}>
                      <th scope="row">{list.ID}</th>
                      <td>{list.Name}</td>
                      <td>{list.POSITION} </td>
                      <td>{list.SALARY}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
    </>
  )
}
GridjsTables.layout = "Contentlayout"

export default GridjsTables