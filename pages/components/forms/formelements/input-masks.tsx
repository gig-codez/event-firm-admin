import React, {useEffect,Fragment, useRef, useState } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import InputMask from 'react-input-mask';
import { NumericFormat } from 'react-number-format';
// import { format } from 'date-fns';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PageHeader from '@/shared/layout-components/page-header/page-header';
import Seo from '@/shared/layout-components/seo/seo';

const Inputmasks = () => {
    
useEffect(() => {
    // const domNode = inputRef.current;

    // Your client-side code here
  }, []);
    // const inputRef = useRef(null);
    // const datePickerRef = useRef(null);
    const [licensePlate, setLicensePlate] = useState('');

    // Handle changes in the license plate input
    const handleLicensePlateChange = (e: { target: { value: string; }; }) => {
        let inputText = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); // Remove non-alphanumeric characters
        inputText = inputText.slice(0, 14); // Limit input to a maximum of 14 characters
        const formattedText = formatLicensePlate(inputText);
        setLicensePlate(formattedText);
    };

    // Format the input text into blocks of 4 characters with spaces
    const formatLicensePlate = (inputText: string) => {
        const formattedText = inputText
            .split('')
            .map((char, index) => (index % 4 === 0 && index !== 0 ? ` ${char}` : char))
            .join('');
        return formattedText;
    };

    // const currentTime = new Date();
    // Format the time as HH:MM:SS
    const formattedTime = '00:00:00'; // Use a static time for initial rendering
    const formattedTime1 = '00:00:00'; // Use a static time for initial rendering
    //date format3
    // const [startDate, setStartDate] = useState(new Date());

  return (
    <Fragment>
           <Seo title="Input Mask"/>

<PageHeader title="Input Mask" item="Form Elements" active_item="Input Mask"/>
<Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputMask
                                className="form-control date-format"
                                placeholder="DD-MM-YYYY"
                                mask="99-99-9999"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputMask
                                className="form-control date-format-1"
                                placeholder="DD-MM"
                                mask="99-99"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Date Format-3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <InputMask
                                className="form-control date-format-2"
                                placeholder="MM-YYYY"
                                mask="99-9999"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Number Formatting
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div>
                            </div>
                            <NumericFormat className='form-control' value="20020220" allowLeadingZeros thousandSeparator="," />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Time Format-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {formattedTime}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Time Format-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {formattedTime1}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Formatting Into Blocks
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control
                                className="form-control formatting-blocks"
                                id="licensePlate"
                                value={licensePlate}
                                onChange={handleLicensePlateChange}
                                placeholder="ABCD EFG HIJ KLMN"
                            />
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
    </Fragment>
  )
}
Inputmasks.layout = "Contentlayout"

export default Inputmasks