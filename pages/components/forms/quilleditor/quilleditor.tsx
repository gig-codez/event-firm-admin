import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

const Editor1 = dynamic(()=>import('../../../../shared/data/forms/formEditers/quillbubbleeditor'), { ssr: false })
const Editor = dynamic(()=>import('../../../../shared/data/forms/formEditers/FromInlineEditEditor'), { ssr: false })

import PageHeader from '@/shared/layout-components/page-header/page-header';
import Seo from '@/shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';

const Quilleditor = () => {
  return (
    <div>   
            <Seo title="Quill Editor"/>

<PageHeader title="Quill Editor" item="Forms" active_item="Quill Editor"/>
        <Row>
    <Col xl={12}>
        <Card className="card custom-card">
            <Card.Header>
                <div className="card-title">
                    Quill Snow Editor
                </div>
            </Card.Header>
            <Card.Body>
                <Editor placeholder={'Write something...'} />
            </Card.Body>
        </Card>
    </Col>
</Row>
<Row>
    <Col xl={12}>
        <Card className="card custom-card">
            <Card.Header>
                <div className="card-title">
                    Quill Bubble Editor
                </div>
            </Card.Header>
            <Card.Body>
                <Editor1 placeholder={'Write something...'} />
            </Card.Body>
        </Card>
    </Col>
</Row></div>
  )
}
Quilleditor.layout = "Contentlayout"

export default Quilleditor