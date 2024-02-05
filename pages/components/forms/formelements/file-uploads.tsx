import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React, { useState } from 'react'
import { Row, Col, Card, Button, Form, Collapse } from 'react-bootstrap'
import { FilePond } from 'react-filepond'

const Fileuploads = () => {
    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);
    const [files2, setFiles2] = useState<any>([]);
    //collapse1
    const [open1, setOpen1] = useState(false);
  return (
    <div>  
           <Seo title="File Uploads"/>

<PageHeader title="File Uploads" item="Form Elements" active_item="File Uploads"/>
         <Row>
    <Col xl={6}>
        <Card className="custom-card">
            <Card.Header className="justify-content-between">
                <div className="card-title">
                    Bootstrap File Input
                </div>
                <div className="prism-toggle">
                    <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Multiple files input example</Form.Label>
                    <Form.Control type="file" multiple />
                </Form.Group>
                <Form.Group controlId="formFileDisabled" className="mb-3">
                    <Form.Label>Disabled file input example</Form.Label>
                    <Form.Control type="file" disabled />
                </Form.Group>
                <Form.Group controlId="formFileSm" className="mb-3">
                    <Form.Label>Small file input example</Form.Label>
                    <Form.Control type="file" size="sm" />
                </Form.Group>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control type="file" size="lg" />
                </Form.Group>
            </Card.Body>
                <Collapse in={open1} className="card-body"><pre><code>{`
<Form.Group controlId="formFile" className="mb-3">
<Form.Label>Default file input example</Form.Label>
<Form.Control type="file" />
</Form.Group>
<Form.Group controlId="formFileMultiple" className="mb-3">
<Form.Label>Multiple files input example</Form.Label>
<Form.Control type="file" multiple />
</Form.Group>
<Form.Group controlId="formFileDisabled" className="mb-3">
<Form.Label>Disabled file input example</Form.Label>
<Form.Control type="file" disabled />
</Form.Group>
<Form.Group controlId="formFileSm" className="mb-3">
<Form.Label>Small file input example</Form.Label>
<Form.Control type="file" size="sm" />
</Form.Group>
<Form.Group controlId="formFileLg" className="mb-3">
<Form.Label>Large file input example</Form.Label>
<Form.Control type="file" size="lg" />
</Form.Group>`}</code></pre></Collapse>
        </Card>
    </Col>
    <Col xl={6}>
        <h6 className="mb-3">Filepond:</h6>
        <Row>
            <Col xl={12}>
                <Card className="custom-card">
                    <Card.Header>
                        <div className="card-title">
                            Multiple Upload
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <FilePond className="multiple-filepond"
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={true}
                            maxFiles={3}
                            server="/api"
                            name="files" /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your file here or click '
                        />
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={12}>
                <Card className="custom-card">
                    <Card.Header>
                        <div className="card-title">
                            Single Upload
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <FilePond className="multiple-filepond single-fileupload"
                            files={files1}
                            onupdatefiles={setFiles1}
                            allowMultiple={true}
                            maxFiles={3}
                            server="/api"
                            name="files" /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your file here or click '
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Col>
</Row>
<Row>
    <Col xl={12}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Dropzone
                </div>
            </Card.Header>
            <Card.Body>
                <FilePond className="multiple-filepond"
                    files={files2}
                    onupdatefiles={setFiles2}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    name="files" /* sets the file input name, it's filepond by default */
                    labelIdle='Drag & Drop your file here or click '
                />
            </Card.Body>
        </Card>
    </Col>
</Row></div>
  )
}
Fileuploads.layout = "Contentlayout"

export default Fileuploads