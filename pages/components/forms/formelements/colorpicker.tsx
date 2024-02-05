import PageHeader from '@/shared/layout-components/page-header/page-header'
import Seo from '@/shared/layout-components/seo/seo'
import React, { useEffect, useRef, useState } from 'react'
import { Row, Col, Card, Button, Form, Collapse } from 'react-bootstrap'

const Colorpicker = () => {
    
  // Nano color picker
  const colorPicker = useRef<any>();

  useEffect(() => {
    if (colorPicker.current) {
    //   const pickr = Pickr.create({
    //     el: '.color-picker',
    //     theme: 'nano',
    //     default: '#05C3FB',
    //     swatches: [
    //       'rgba(156, 39, 176, 0.9)',
    //       'rgba(103, 58, 183, 0.85)',
    //       'rgba(63, 81, 181, 0.8)',
    //       'rgba(33, 150, 243, 0.75)',
    //       'rgba(3, 169, 244, 0.7)',
    //       'rgba(0, 188, 212, 0.7)',
    //       'rgba(0, 150, 136, 0.75)',
    //       'rgba(76, 175, 80, 0.8)',
    //       'rgba(244, 67, 54, 1)',
    //       'rgba(233, 30, 99, 0.95)',
    //       'rgba(139, 195, 74, 0.85)',
    //       'rgba(205, 220, 57, 0.9)',
    //       'rgba(255, 235, 59, 0.95)',
    //       'rgba(255, 193, 7, 1)'
    //     ],
   
    
    //     components: {
    //       // Main components
    //       preview: true,
    //       opacity: true,
    //       hue: false,

    //       // Input / output Options
    //       interaction: {
    //         hex: true,
    //         input: true,
    //         clear: true,
    //         save: true
    //       }
    //     }
    //   });
    //   console.log(pickr);
    }
  }, []);

  // Classic color picker
  const classicPicker = useRef<any>();

  useEffect(() => {
    if (classicPicker.current) {
    //   const pickr = Pickr.create({
    //     el: '.color-picker',
    //     theme: 'classic',
    //     default: '#6C5FFC',
    //     swatches: [
    //       'rgba(244, 67, 54, 1)',
    //       'rgba(233, 30, 99, 0.95)',
    //       'rgba(156, 39, 176, 0.9)',
    //       'rgba(103, 58, 183, 0.85)',
    //       'rgba(63, 81, 181, 0.8)',
    //       'rgba(33, 150, 243, 0.75)',
    //       'rgba(3, 169, 244, 0.7)',
    //       'rgba(0, 188, 212, 0.7)',
    //       'rgba(0, 150, 136, 0.75)',
    //       'rgba(76, 175, 80, 0.8)',
    //       'rgba(139, 195, 74, 0.85)',
    //       'rgba(205, 220, 57, 0.9)',
    //       'rgba(255, 235, 59, 0.95)',
    //       'rgba(255, 193, 7, 1)'
    //     ],

    //     components: {
    //       preview: true,
    //       opacity: true,
    //       hue: true,

    //       interaction: {
    //         hex: true,
    //         rgba: true,
    //         hsva: true,
    //         input: true,
    //         clear: true,
    //         save: true
    //       }
    //     }

    //   });
    //   console.log(pickr);
    }
  }, []);

  // Monolith color picker

  const monolithPicker = useRef<any>();

  useEffect(() => {
    if (monolithPicker.current) {
    //   const pickr = Pickr.create({
    //     el: '.color-picker',
    //     theme: 'classic',
    //     default: '#FC5296',

    //     swatches: [
    //       'rgba(55, 35, 9, 0.5)',
    //       'rgba(44, 67, 54, 1)',
    //       'rgba(33, 30, 99, 0.95)',
    //       'rgba(56, 39, 176, 0.9)',
    //       'rgba(03, 58, 183, 0.85)',
    //       'rgba(163, 81, 181, 0.8)',
    //       'rgba(33, 150, 243, 0.75)',
    //       'rgba(3, 169, 244, 0.7)',
    //       'rgba(0, 188, 212, 0.7)',
    //       'rgba(0, 150, 136, 0.75)',
    //       'rgba(76, 175, 80, 0.8)',
    //       'rgba(139, 195, 74, 0.85)',
    //       'rgba(205, 220, 57, 0.9)',

    //       'rgba(255, 193, 7, 1)'
    //     ],

    //     components: {
    //       // Main components
    //       preview: true,
    //       opacity: true,
    //       hue: false,

    //       // Input / output Options
    //       interaction: {

    //         input: true,
    //         clear: true,
    //         save: true
    //       }
    //     }
    //   });
    //   console.log(pickr);
    }
  }, []);

  const [open1, setOpen1] = useState(false);
  return (
    <div>
        <Seo title="Color Picker"/>

<PageHeader title="Color Picker" item="Form Elements" active_item="Color Picker"/>
    <Row>
      <Col xl={3}>
        <Card className="custom-card">
          <Card.Header className=" justify-content-between">
            <div className="card-title">
              Bootstrap Color Picker
            </div>
            <div className="prism-toggle">
              <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
            </div>
          </Card.Header>
          <Card.Body>
            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#136ad0"
              title="Choose your color"
            />
          </Card.Body>
            <Collapse in={open1} className="card-body"><pre><code>{`
<Form.Label htmlFor="exampleColorInput">
Color picker</Form.Label>
<Form.Control type="color" 
id="exampleColorInput"  
defaultValue="#136ad0" 
title="Choose your color"
/>`}</code></pre></Collapse>
        </Card>
      </Col>
      
    </Row></div>
  )
}
Colorpicker.layout = "Contentlayout"

export default Colorpicker