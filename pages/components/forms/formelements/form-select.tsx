import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React, { useState } from 'react'
import { Multipleselectdata, Multipleselectdata1, Optionwithnosearch, SingleGroup } from '../../../../shared/data/forms/formsselectdata';
const CreatableSelect = dynamic(() => import("react-select/creatable"), { ssr: false });
const Select = dynamic(() => import("react-select"), { ssr: false });
import dynamic from 'next/dynamic'

import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';

const Formselect = () => {
    const components = {
        DropdownIndicator: null,
      };
    
      const createOption = (label: any) => ({
        label,
        value: label,
      });
    
      const [inputValue, setInputValue] = useState<any>('');
      const [value, setValue] = useState([
        createOption("one"),
        createOption("two"),
        createOption("three")
      ]);
      const [inputValue1, setInputValue1] = useState<any>('');
      const [value1, setValue1] = useState([
        createOption("child-1"),
        createOption("child-2")
      ]);
      const [inputValue2, setInputValue2] = useState<any>('');
      const [value2, setValue2] = useState([
        createOption("child-1"),
        createOption("child-2")
      ]);
      const handleKeyDown1 = (event: any) => {
        if (!inputValue1) return;
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            setValue1((prev) => [...prev, createOption(inputValue1)]);
            setInputValue1('');
            event.preventDefault();
        }
      };
      const handleKeyDown2 = (event: any) => {
        if (!inputValue2) return;
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            setValue2((prev) => [...prev, createOption(inputValue1)]);
            setInputValue2('');
            event.preventDefault();
        }
      };
      const handleKeyDown = (event: any) => {
        if (!inputValue) return;
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            setValue((prev) => [...prev, createOption(inputValue)]);
            setInputValue('');
            event.preventDefault();
        }
      };
    const [isSearchable] = useState(true);
        //collapse1
        const [open1, setOpen1] = useState(false);
        const [open2, setOpen2] = useState(false);
        const [open3, setOpen3] = useState(false);
        const [open4, setOpen4] = useState(false);
        const [open5, setOpen5] = useState(false);
        const [open6, setOpen6] = useState(false);
  return (
    <div>
           <Seo title="Form Select"/>

<PageHeader title="Form Select" item="Form Elements" active_item="Form Select"/>

<h6 className="fw-semibold mb-2">Choices:</h6>
                <Row>
                    <Col xl={6}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="d-flex align-items-center justify-content-between">
                                        <h6 className="card-title">Multiple Select</h6>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="fw-semibold mb-2">Default</p>
                                          <Select isMulti  name="colors" options={Multipleselectdata} className= "default basic-multi-select" id="choices-multiple-default"
                                         menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                             />
                                        <p className="fw-semibold mb-2">With Remove Button</p>
                                         <Select isMulti  name="colors" options={Multipleselectdata1} className="basic-multi-select" id="choices-multiple-default"
                                         menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata1[0]]}
                                             />
                                        <p className="fw-semibold mb-2">Option groups</p>
                                        <SingleGroup/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <div className="card-title">
                                            Passing Through Options
                                        </div>
                                    </Card.Header>
                                    <Card.Body className='passing-option'>
                                            <CreatableSelect
                                                components={components}
                                                classNamePrefix='react-select'
                                                inputValue={inputValue2}
                                                isClearable
                                                isMulti
                                                menuIsOpen={false}
                                                onChange={(newValue) => {
                                                    // Ensure newValue is an array (or empty array) of objects
                                                    if (Array.isArray(newValue)) {
                                                    setValue1(newValue);
                                                    } else {
                                                    // Handle the case when newValue is not an array
                                                    setValue1([]);
                                                    }
                                                }}
                                                onInputChange={(newValue) => setInputValue2(newValue)}
                                                onKeyDown={handleKeyDown2}
                                                placeholder="Type something and press enter..."
                                                value={value}
                                                />
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <div className="card-title">
                                            Options added via config with no search
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Select isClearable  name="choices-single-no-search" options={Optionwithnosearch} className= "default basic-multi-select" id="choices-single-no-search"
                                         menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Optionwithnosearch[5]]}
                                             />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6}>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="d-flex align-items-center justify-content-between">
                                        <h6 className="card-title">Single Select</h6>
                                    </Card.Header>
                                    <Card.Body>
                                        <p className="fw-semibold mb-2">Default</p>
                                         <Select isSearchable={isSearchable}   name="colors" options={Multipleselectdata} className= "default basic-multi-select" id="choices-multiple-default"
                                         menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Multipleselectdata[0]]}
                                             />
                                        <p className="fw-semibold mb-2">Option groups</p>
                                        <SingleGroup/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <div className="card-title">
                                            Email Address Only
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Form.Control className="form-control"
                                         id="choices-text-email-filter" type="text" placeholder="This is a placeholder"/>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header>
                                        <div className="card-title">
                                            Passing Unique Values
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                            <CreatableSelect
                                                components={components}
                                                classNamePrefix='react-select'
                                                inputValue={inputValue1}
                                                isClearable
                                                isMulti
                                                menuIsOpen={false}
                                                onChange={(newValue) => {
                                                    // Ensure newValue is an array (or empty array) of objects
                                                    if (Array.isArray(newValue)) {
                                                    setValue1(newValue);
                                                    } else {
                                                    // Handle the case when newValue is not an array
                                                    setValue1([]);
                                                    }
                                                }}
                                                onInputChange={(newValue) => setInputValue1(newValue)}
                                                onKeyDown={handleKeyDown1}
                                                placeholder="Type something and press enter..."
                                                value={value1}
                                                />
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <div className="card-title">
                                    Default Select
                                </div>
                                <div className="prism-toggle">
                                    <Button  onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </Form.Select>
                            </Card.Body>
<Collapse in={open1} className="card-body"><pre><code>{`
<Form.Select aria-label="Default select example">
<option>Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</Form.Select>`}</code></pre></Collapse>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <div className="card-title">
                                    Disabled Select
                                </div>
                                <div className="prism-toggle">
                                    <Button  onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                            <Form.Select aria-label="Default select example" disabled={true}>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </Form.Select>
                            </Card.Body>
<Collapse in={open2} className="card-body"><pre><code>{`
 <Form.Select aria-label="Default select example" disabled={true}>
 <option>Open this select menu</option>
 <option value="1">One</option>
 <option value="2">Two</option>
 <option value="3">Three</option>
 </Form.Select>`}</code></pre></Collapse>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <div className="card-title">
                                    Rounded Select
                                </div>
                                <div className="prism-toggle">
                                    <Button  onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                            <Form.Select className="form-select rounded-pill" aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </Form.Select>
                            </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
 <Form.Select className="form-select rounded-pill" aria-label="Default select example">
 <option>Open this select menu</option>
 <option value="1">One</option>
 <option value="2">Two</option>
 <option value="3">Three</option>
 </Form.Select>`}</code></pre></Collapse>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <div className="card-title">
                                    Multiple Attribute Select
                                </div>
                                <div className="prism-toggle">
                                    <Button  onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form.Select multiple className="form-select"  aria-label="multiple select example">
                                    <option >Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                            </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
 <Form.Select multiple className="form-select"  aria-label="multiple select example">
 <option >Open this select menu</option>
 <option defaultValue="1">One</option>
 <option defaultValue="2">Two</option>
 <option defaultValue="3">Three</option>
</Form.Select>`}</code></pre></Collapse>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <div className="card-title">
                                    Using Size Attribute
                                </div>
                                <div className="prism-toggle">
                                    <Button  onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form.Select className="form-select" htmlSize={4} aria-label="size 3 select example">
                                    <option>Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                    <option defaultValue="4">Four</option>
                                    <option defaultValue="5">Five</option>
                                </Form.Select>
                            </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
<Form.Select className="form-select" htmlSize={4} aria-label="size 3 select example">
<option>Open this select menu</option>
<option defaultValue="1">One</option>
<option defaultValue="2">Two</option>
<option defaultValue="3">Three</option>
<option defaultValue="4">Four</option>
<option defaultValue="5">Five</option>
</Form.Select>`}</code></pre></Collapse>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <div className="card-title">
                                    Select Sizes
                                </div>
                                <div className="prism-toggle">
                                    <Button  onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form.Select size="sm" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                    <option>Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                                <Form.Select className="form-select mb-3" aria-label="Default select">
                                    <option>Open this select menu
                                    </option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                                <Form.Select size="lg" className="form-select form-select-lg"
                                    aria-label=".form-select-lg example">
                                    <option>Open this select menu</option>
                                    <option defaultValue="1">One</option>
                                    <option defaultValue="2">Two</option>
                                    <option defaultValue="3">Three</option>
                                </Form.Select>
                            </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
 <Form.Select size="sm" className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
 <option>Open this select menu</option>
 <option defaultValue="1">One</option>
 <option defaultValue="2">Two</option>
 <option defaultValue="3">Three</option>
</Form.Select>
<Form.Select className="form-select mb-3" aria-label="Default select">
 <option>Open this select menu
 </option>
 <option defaultValue="1">One</option>
 <option defaultValue="2">Two</option>
 <option defaultValue="3">Three</option>
</Form.Select>
<Form.Select size="lg" className="form-select form-select-lg"
 aria-label=".form-select-lg example">
 <option>Open this select menu</option>
 <option defaultValue="1">One</option>
 <option defaultValue="2">Two</option>
 <option defaultValue="3">Three</option>
</Form.Select>`}</code></pre></Collapse>
                        </Card>
                    </Col>
                </Row>
    </div>
  )
}
Formselect.layout = "Contentlayout"

export default Formselect