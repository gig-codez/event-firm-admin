import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Card, Col, FormGroup, Row, Form } from "react-bootstrap";
import Link from 'next/link';
import { FilePond } from 'react-filepond';
import Seo from '../../../shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(()=> import('react-quill'),{ ssr: false });
const Select = dynamic(()=>import('react-select'), { ssr: false })


const AddProduct = () => {
  const [filesimade, setFilesimage] = useState<any[]>([]);
  const [value, setvalue] = React.useState("");

  const Optioncategory1 = [
    { value: "Party Wear", label: "Party Wear" },
    { value: "Casual Wear", label: "Casual Wear" },
    { value: "Wedding", label: "Wedding" },
    { value: "Festive", label: "Festive" },
  ];
  const handleOnchange = () => {
		setvalue(value);
	  };
  return (
    <>
        <Seo title="Add Product"/>

    <PageHeader title="Add Product" item="Ecommerce" active_item="Add Product"/>

    <div>
    {/* <!-- Row --> */}
	<Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <FormGroup className="form-group">
              <Form.Label className="fw-medium">Product Name</Form.Label>
              <input type="text" className="form-control" placeholder="Name" />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="fw-medium">Category</Form.Label>
              <Select className='ms-3' classNamePrefix="selectform"
                                  options={Optioncategory1} 
                                  placeholder='Select'
                                  onChange={handleOnchange}
                                   />
             
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="fw-medium">Price</Form.Label>
              <input type="number" className="form-control" placeholder="Price" />
            </FormGroup>
            <div className="ql-wrapper ql-wrapper-demo mb-3">
              <Form.Label className="fw-medium">Product Description</Form.Label>
              <div id="quillEditor">
              <ReactQuill/>
                            </div>
            </div>
            <Form.Label className="fw-medium">Upload Product</Form.Label>
            <div className="p-4 border rounded-6 mb-0 form-group">
              <div>
              <FilePond className='mt-3 mb-5 mt-lg-0'
                  files={filesimade}
                  allowReorder={true}
                  allowMultiple={false}
                  onupdatefiles={setFilesimage}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
              </div>
            </div>
          </Card.Body>
          <div className="card-footer">
            <Link href="#!" className="btn btn-primary  me-1">
              Add Product
            </Link>
            <Link href="#!" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
	{/* <!-- End Row --> */}
    </div>
    </>
  )
}

AddProduct.layout = "Contentlayout"


export default AddProduct