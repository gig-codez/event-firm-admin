import React, { HTMLAttributes,useState } from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import {  Card, Col, Row, Button, Form } from 'react-bootstrap';
import Link from "next/link"
import Seo from '../../../../shared/layout-components/seo/seo';
// import Editer from '../../../../shared/data/e-commerce/editer';
import dynamic from 'next/dynamic';
const Editer = dynamic(()=>import('../../../../shared/data/e-commerce/editer'), { ssr: false })
const Searchable = dynamic(()=>import('react-searchable-dropdown'), { ssr: false })
import { FilePond, registerPlugin } from 'react-filepond';
const ReactQuill = dynamic(()=> import('react-quill'),{ ssr: false });
const BlogPost = () => {
    const TitleOptions : Option[]= [

        {
          value: "fashion",
          label: "Fashion"
        },
        {
          value: "lifestyle",
          label: "Life Style"
        },
        {
          value: "science",
          label: "Science"
        },
        {
          value: "health",
          label: "health"
        },
        {
          value: "humanities",
          label: "humanities"
        },
        {
          value: "business",
          label: "Business"
        },
        {
          value: "marketing",
          label: "Marketing"
        },

      ]
      const [files, setFiles] = useState<any>([]);

      interface Option {
        value: string;
        label: string;
      }
      
      interface SearchableProps extends HTMLAttributes<HTMLDivElement> {
        value: string;
        placeholder: string;
        notFoundText: string;
        noInput?: boolean;
        options: Option[];
        listMaxHeight?: number;
      }

      const searchableProps: SearchableProps = {
        className: 'form-control select2',
        value: 'test',
        placeholder: 'Category',
        notFoundText: 'No result found',
        noInput: true,
        options: TitleOptions,
        listMaxHeight: 140,
      };

  return (
    <>
        <Seo title="Blog Post"/>

    <PageHeader title="Blog-Post" item="Blog" active_item="Blog-Post"/>

    {/* <!-- Row --> */}
    <Row className="row-sm">
            <Col lg={12} md={12}>
                <Card className="custom-card">
                    <Card.Body>
                        <Form.Group className="form-group">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" className="form-control" defaultValue="Title" />
                        </Form.Group>
                        <label className="form-label fw-medium">Category</label>
                        <Form.Group className="form-group">
                        <Searchable {...searchableProps}/>
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label>Type</Form.Label>
                            <div className="d-md-flex ad-post-details">
                                <label className="custom-radio mb-2 me-4">
                                    <Form.Check
                                        label="Image"
                                        type="radio" name="radios2" defaultValue="option1" />

                                </label>
                                <label className="custom-radio  mb-2 me-4">
                                    <Form.Check
                                        label="Video"
                                        type="radio" name="radios2" defaultValue="option2" defaultChecked />

                                </label>
                                <label className="custom-radio mb-2 me-4">
                                    <Form.Check
                                        label="Audio"
                                        type="radio" name="radios2" defaultValue="option3" />

                                </label>
                                <label className="custom-radio mb-2">
                                    <Form.Check
                                        label="Text"
                                        type="radio" name="radios2" defaultValue="option4" />

                                </label>
                            </div>
                        </Form.Group>
                        <div className="ql-wrapper ql-wrapper-demo mb-3">
                            <label className="fw-medium form-label">Post Description</label>
                            <ReactQuill/>
                            {/* <Editer/> */}
                        </div>
                        <label className="form-label fw-medium">Upload File</label>
                        <div className="p-4 border rounded-6 mb-4 form-group">
                            <div>
                            <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                            
                            </div>
                        </div>
                    </Card.Body>
                    <Card.Footer className="mb-1">
                        <Link href="#!"  className="btn btn-primary me-1">Post</Link>
                        <Link href="#!"  className="btn btn-danger me-1">Cancel</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
        {/* <!-- End Row --> */}
    </>
  )
}

BlogPost.layout = "Contentlayout"

export default BlogPost