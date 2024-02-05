import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Card, Row, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
import * as basicdatatable from "../../../shared/data/crypto-currencies/transcationdetails"
import DataTable from "react-data-table-component";
import Seo from '../../../shared/layout-components/seo/seo';
const DataTableExtensions:any = dynamic(() => import('react-data-table-component-extensions'), { ssr: false });

const Transactions = () => {
  return (
    <div>
    <Seo title={"Transactions"}/>

    <PageHeader title="Transactions" item="Crypto Currencies" active_item="Transactions"/>
    {/* <!-- row --> */}
	<Row className=" row-sm">
			<Col md={12} lg={12} xl={12}>
				<Card className=" custom-card transcation-crypto">
					<Card.Header className="border-bottom-0">
						<div>

					<div className="card-title">Transaction History</div>
					<p className="d-block fs-12 mb-0 mt-2 text-muted">Transaction History it shows you who sent the transaction, how much has been sent, its destination and the fees that were paid for it.</p>
						</div>
					</Card.Header>
					
					<Card.Body className="">
						
					<DataTableExtensions {...basicdatatable.tableData} >
            			<DataTable className="border"
                			columns={basicdatatable.columns}
							data={basicdatatable.data}
							defaultSortFieldId="id"
							defaultSortAsc={false}
                			pagination
							noHeader
            			/>
        			</DataTableExtensions>
						
					</Card.Body>
				</Card>
 				{/* <!-- Row End --> */}
			</Col>
		</Row>				
	{/* <!-- Row End --> */}
      </div>
  )
}

Transactions.layout = "Contentlayout"


export default Transactions