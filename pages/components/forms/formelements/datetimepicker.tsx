import PageHeader from '@/shared/layout-components/page-header/page-header';
import Seo from '@/shared/layout-components/seo/seo';
import React, {useState} from 'react'
import { Card, Col,  InputGroup, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const Datetimepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
  return (
    <div>
        <Seo title="Date & Time Pickers"/>

<PageHeader title="Date & Time Pickers" item="Form Elements" active_item="Date & Time Pickers"/>

           <Row>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Basic Date picker
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                         </InputGroup.Text>
                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Date picker With Time
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker
                                        selected={startDate}
                                         onChange={handleDateChange}
                                         timeInputLabel="Time:"
                                         dateFormat="yy/MM/dd h:mm aa"
                                         placeholderText='Choose date with time'
                                         showTimeInput
                                         />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Human Friendly dates
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Date range picker
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> 
                                        </InputGroup.Text>
                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Basic Time picker
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className=" text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                Locale with time
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className=" text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleDateChange}
                                            locale="pt-BR"
                                            showTimeSelect
                                            timeFormat="p"
                                            timeIntervals={15}
                                            dateFormat="Pp"
                                            />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Time Picker with Limits
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className=" text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                          <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                Month Picker
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="flex-nowrap">
                                        <InputGroup.Text className=" text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleDateChange}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                            />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
    </div>
  )
}
Datetimepicker.layout = "Contentlayout"

export default Datetimepicker
