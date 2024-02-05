import { Box } from '@mui/material';
import React, { useState } from 'react'
import { Row, Col, Card, Button, Form, Collapse } from 'react-bootstrap';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import LabeledTwoThumbs, { Marks } from '../../../../shared/data/forms/rangesliderdata';
import { connect } from 'react-redux';
import PageHeader from '@/shared/layout-components/page-header/page-header';
import Seo from '@/shared/layout-components/seo/seo';

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
        },
        '& .airbnb-bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
        opacity: theme.palette.mode === 'dark' ? undefined : 1,
        height: 3,
    },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }

function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}
const Rangeslider = ({ local_varaiable }: any) => {
    function valuetext(value: number) {
        return `${value}°C`;
    }

    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
  return (
      <div>  
        <Seo title="Range Slider"/>
    
        <PageHeader title="Range Slider" item="Form Elements" active_item="Range Slider"/>
        
           <Row>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header className="justify-content-between">
                <div className="card-title">
                    Default Range
                </div>
                <div className="prism-toggle">
                    <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Form.Range className="" id="customRange1" />
            </Card.Body>
                <Collapse in={open1} className="card-body"><pre><code>{`
<Form.Range  className="" id="customRange1"/>`}</code></pre></Collapse>
        </Card>
    </Col>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header className="justify-content-between">
                <div className="card-title">
                    Disabled Range
                </div>
                <div className="prism-toggle">
                    <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Form.Range className="" id="disabledRange" disabled />
            </Card.Body>
                <Collapse in={open2} className="card-body"><pre><code>{`
<Form.Range  className="" 
id="disabledRange" disabled/>`}</code></pre></Collapse>
        </Card>
    </Col>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header className="justify-content-between">
                <div className="card-title">
                    Range With Min and Max Values
                </div>
                <div className="prism-toggle">
                    <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Form.Range className="" min="0" max="5" id="customRange2" />
            </Card.Body>
                <Collapse in={open3} className="card-body"><pre><code>{`
<Form.Range  className="" min="0" max="5"
id="customRange2"/>`}</code></pre></Collapse>
        </Card>
    </Col>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header className="justify-content-between">
                <div className="card-title">
                    Range With Steps
                </div>
                <div className="prism-toggle">
                    <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                </div>
            </Card.Header>
            <Card.Body>
                <Form.Range className="" min="0" max="5" step="0.5" id="customRange3" />
            </Card.Body>
                <Collapse in={open4} className="card-body"><pre><code>{`
<Form.Range  className="" min="0" max="5"
step="0.5" id="customRange3"/>`}</code></pre></Collapse>
        </Card>
    </Col>
</Row>
<h6 className="mb-3">noUiSlider:</h6>
<Row>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Default-Styling
                </div>
            </Card.Header>
            <Card.Body className="pt-0">
                <div id="slider">
                    <Box sx={{ m: 3 }} />
                    <AirbnbSlider
                        slots={{ thumb: AirbnbThumbComponent }}
                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                        defaultValue={[10, 90]}
                    />
                </div>

            </Card.Body>
        </Card>

    </Col>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Fit Handles
                </div>
            </Card.Header>
            <Card.Body>
                <div id="slider-fit">
                    <AirbnbSlider
                        slots={{ thumb: AirbnbThumbComponent }}
                        getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                        defaultValue={[10, 90]}
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Rounded Styling
                </div>
            </Card.Header>
            <Card.Body>
                <div id="slider-round" className="my-2">
                    <RangeSlider
                        className="single-thumb"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={3}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Square Styling
                </div>
            </Card.Header>
            <Card.Body>
                <div id="slider-square" className="my-2">
                    <RangeSlider
                        className="square-thumb"
                        defaultValue={[0, 50]}
                        thumbsDisabled={[true, false]}
                        rangeSlideDisabled={true}
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
</Row>
<Row>
    <Col xl={6}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">Toggle Movement By Clicking Pips</div>
            </Card.Header>
            <Card.Body className="card-body">
                <div id="slider-pips" className='mt-2'>
                    <LabeledTwoThumbs rtl={local_varaiable.dir == 'rtl'} />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={6}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">Soft Limits</div>
            </Card.Header>
            <Card.Body className="card-body pb-5">
                <div id="soft">
                    <Marks rtl={local_varaiable.dir == 'rtl'} />
                </div>
            </Card.Body>
        </Card>
    </Col>
</Row>

<h6 className="mb-3">noUiSlider Colors:</h6>
<Row>
    <Col xl={4}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Primary
                </div>
            </Card.Header>
            <Card.Body>
                <div id="primary-colored-slider">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        color="primary"
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={4}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Secondary
                </div>
            </Card.Header>
            <Card.Body>
                <div id="secondary-colored-slider">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        color="secondary"
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={4}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Warning
                </div>
            </Card.Header>
            <Card.Body>
                <div id="warning-colored-slider">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                    color="warning"
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={4}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Info
                </div>
            </Card.Header>
            <Card.Body>
                <div id="info-colored-slider">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                    color="info"
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={4}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Success
                </div>
            </Card.Header>
            <Card.Body>
                <div id="success-colored-slider">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                    color="success"
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
    <Col xl={4}>
        <Card className="custom-card">
            <Card.Header>
                <div className="card-title">
                    Danger
                </div>
            </Card.Header>
            <Card.Body>
                <div id="danger-colored-slider">
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                    color="error"
                    />
                </div>
            </Card.Body>
        </Card>
    </Col>
</Row></div>
  )
}
Rangeslider.layout = "Contentlayout"
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, {})(Rangeslider)