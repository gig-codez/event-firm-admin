import React, { Fragment,Component,Children } from "react";
import png19 from "../../../public/assets/images/pngs/19.png";
import png16 from "../../../public/assets/images/pngs/16.png";
import { Button, Col, Form, FormGroup, Nav, Row, Tab } from "react-bootstrap";
import dynamic from 'next/dynamic';
const Searchable = dynamic(() => import('react-searchable-dropdown'), { ssr: false });
import pngs19 from "../../../public/assets/images/pngs/19.png"
import pngs16 from "../../../public/assets/images/pngs/16.png"

import Link from "next/link"


const Signin = () => {
    return (
        <Fragment>
            <div>
                <section className="pt-3">
                    <form>
                        <h5 className="text-start mb-2">
                            Signin to Your Account
                        </h5>
                        <p className="mb-4 text-muted fs-13 ms-0 text-start">
                            Signin to create, discover and connect with the global
                            community
                        </p>
                        <FormGroup className="form-group text-start">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                placeholder="Enter your email"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup className="form-group text-start">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                placeholder="Enter your password"
                                type="password"
                            />
                        </FormGroup>
                        <button className="btn ripple btn-primary btn-block">
                            Sign In
                        </button>
                    </form>
                </section>
            </div>
        </Fragment>
    )
}
const Billing = () => {
    return (
        <Fragment>
            <div>

                <section className="pt-3">
                    <Form className="needs-validation">
                        <h5 className="text-start mb-2">Billing Information</h5>
                        <p className="mb-4 text-muted fs-13 ms-0 text-start">
                            Lorem Ipsum has been the {"industry's"} standard dummy
                            text ever since
                        </p>
                        <Row>
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="firstName">First name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="firstName"
                                    placeholder=""
                                    defaultValue=""
                                />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <Form.Label htmlFor="lastName">Last name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="lastName"
                                    placeholder=""
                                    defaultValue=""
                                />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Label htmlFor="address">Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="address"
                                    placeholder="1234 Main St"
                                />
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Label htmlFor="address2">
                                    Address 2
                                    <span className="text-muted">(Optional)</span>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    id="address2"
                                    placeholder="Apartment or suite"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Label htmlFor="mobile">Mobile Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="mobile"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} className="mb-3">
                                <Form.Label htmlFor="country">Country</Form.Label>
                                <Country />
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </Col>
                            <div className="col-md-4 mb-3">
                                <Form.Label htmlFor="state">State</Form.Label>
                                <State />
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <Form.Label htmlFor="zip">Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="zip"
                                    placeholder=""
                                />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </Row>
                        <hr className="mb-4" />
                        <button
                            className="btn btn-primary btn-lg btn-block mb-3"
                            type="submit"
                        >
                            Continue to checkout
                        </button>
                    </Form>
                </section></div>
        </Fragment>
    )
}
const Country = () => {
    interface SearchableProps extends React.HTMLAttributes<HTMLElement> {
        className?: string;
        value: string;
        placeholder?: string;
        notFoundText?: string;
        noInput?: boolean;
        options: { value: string; label: string }[];
        listMaxHeight?: number;
      }
    const searchableProps: SearchableProps = {
        className: "form-control select2",
        value: "test",
        placeholder: "Choose one",
        notFoundText: "No result found",
        noInput: true,
        options: [
          {
            value: "",
            label: "All categories",
          },
          {
            value: "USA",
            label: "USA",
          },
          {
            value: "India",
            label: "India",
          },
        ],
        listMaxHeight: 140,
      };
    return (
        <div >
            <Searchable {...searchableProps} />
        </div>
    );
}
const State = () => {
    interface SearchableProps extends React.HTMLAttributes<HTMLElement> {
        className?: string;
        value: string;
        placeholder?: string;
        notFoundText?: string;
        noInput?: boolean;
        options: { value: string; label: string }[];
        listMaxHeight?: number;
      }

    const searchableProps: SearchableProps = {
        className: "form-control select2",
        value: "test",
        placeholder: "Choose one",
        notFoundText: "No result found",
        noInput: true,
        options: [
          {
            value: "",
            label: "All categories",
          },
          {
            value: "California",
            label: "California",
          },
          {
            value: "Telangana",
            label: "Telangana",
          },
        ],
        listMaxHeight: 140,
      };
    return (
        <div >
            <Searchable {...searchableProps} />
        </div>
    );
}
const Order = () => {
    return (
        <Fragment>

            <div className="your-order">
                
                <section className="pt-3">
                    <h5 className="text-start mb-2">Your Order</h5>
                    <p className="mb-4 text-muted fs-13 ms-0 text-start">
                        Lorem Ipsum has been the {"industry's"} standard dummy text
                        ever since
                    </p>
                    <div className="product">
                        <div className="item flex-wrap gap-2">
                            <div className="left">
                                <Link className="thumb" href="#!">
                                    <img src={"../../../assets/images/pngs/19.png"} alt="" />
                                </Link>
                                <div className="purchase">
                                    <h6>
                                        <Link href="#!">Mobile Phone Mi</Link>
                                    </h6>
                                    <span>x1</span>
                                </div>
                            </div>
                            <span className="price">$290</span>
                        </div>
                        <div className="item flex-wrap gap-2">
                            <div className="left">
                                <Link className="thumb" href="#!">
                                    <img src={"../../../assets/images/pngs/16.png"} alt="" />
                                </Link>
                                <div className="purchase">
                                    <h6>
                                        <Link href="#!">Flowerpot</Link>
                                    </h6>
                                    <span>1</span>
                                </div>
                            </div>
                            <span className="price">$124</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center px-4 py-2">
                                                        <span>Subtotal</span> 
                                                        <span className="fs-20 fw-bold text-primary">$364</span> 
                                                    </div>
                </section>
            </div>
        </Fragment>

    )
}
const PaymentDetails = () => {
    return (
        <Fragment>
            <div>
                <section className="p-4">
                    <div className="card-pay">
                        <h5 className="text-start mb-2">Payments</h5>
                        <p className="mb-4 text-muted fs-13 ms-0 text-start">Lorem Ipsum has been the {"industry's"} standard dummy text ever since</p>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="tab20" >
                            <Nav as='ul' className="tabs-menu">
                                <Nav.Item as='li' bsPrefix='tabs' >
                                    <Nav.Link bsPrefix='tabs' className="w-100 fs-15" eventKey="tab20"><i className="fa fa-credit-card"></i> Credit Card</Nav.Link>
                                </Nav.Item>
                                <Nav.Item bsPrefix='tabs' as='li'>
                                    <Nav.Link bsPrefix='tabs' className="w-100 fs-15" eventKey="tab21"><i className="fab fa-paypal"></i>  Paypal</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as='li' bsPrefix='tabs' >
                                    <Nav.Link bsPrefix='tabs' className="w-100 fs-15" eventKey="tab22"><i className="fa fa-university"></i>  Bank Transfer</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="tab-content">
                                <Tab.Pane className="tab-pane px-0 py-2 br-3 mb-4" eventKey="tab20">
                                    <FormGroup className="form-group mt-4">
                                        <Form.Label className="form-label">CardHolder Name</Form.Label>
                                        <Form.Control type="text" placeholder="First Name" />
                                    </FormGroup>
                                    <FormGroup className="form-group ">
                                        <Form.Label className="form-label">Card number</Form.Label>
                                        <div className="input-group">
                                            <Form.Control type="text" placeholder="Search for..." />
                                            <span className="">
                                                <button className="btn btn-secondary box-shadow-0" type="button"><i className="fab fa-cc-visa"></i> &nbsp; <i className="fab fa-cc-amex"></i> &nbsp;
                                                    <i className="fab fa-cc-mastercard"></i></button>
                                            </span>
                                        </div>
                                    </FormGroup>
                                    <Row className="row">
                                        <div className="col-sm-8">
                                            <FormGroup className="form-group">
                                                <Form.Label className="form-label">Expiration</Form.Label>
                                                <div className="input-group">
                                                    <Form.Control type="number" placeholder="MM" name="Month" />
                                                    <Form.Control type="number" placeholder="YY" name="Year" />
                                                </div>
                                            </FormGroup>
                                        </div>
                                        <div className="col-sm-4">
                                            <FormGroup className="form-group">
                                                <Form.Label className="form-label">CVV <i className="fa fa-question-circle"></i></Form.Label>
                                                <Form.Control type="number" />
                                            </FormGroup>
                                        </div>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane px-0" eventKey="tab21">
                                    <p className="mt-4">Paypal is easiest way to pay online</p>
                                    <p>
                                        <Button href="#!" className="btn btn-primary">
                                            <i className="fab fa-paypal"></i> Log    in my Paypal</Button>
                                    </p>
                                    <p className=""><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                </Tab.Pane>
                                <Tab.Pane className="tab-pane px-0" eventKey="tab22">
                                    <p className="mt-4">Bank account details</p>
                                    <dl className="card-text">
                                        <dt>BANK: </dt>
                                        <dd> THE UNION BANK 0456</dd>
                                    </dl>
                                    <dl className="card-text">
                                        <dt>Account number: </dt>
                                        <dd> 67542897653214</dd>
                                    </dl>
                                    <dl className="card-text">
                                        <dt>IBAN: </dt>
                                        <dd>543218769</dd>
                                    </dl>
                                    <p className=""><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                </Tab.Pane>
                            </div>  
                        </Tab.Container>
                    </div>

                </section>
            </div>
        </Fragment>
    )
}
const Finished = () => {
    return (
        <Fragment>
           <div className="text-center p-4">
                <div>
                    <h5 className="text-center mb-4">Your order Confirmed!</h5>
                </div>
                <svg className="wd-100 ht-100 mx-auto justify-content-center mb-3 text-center" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                    <circle className="path circle" fill="none" stroke="#22c03c" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"></circle>
                    <polyline className="path check" fill="none" stroke="#22c03c" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "></polyline>
                </svg>
                <p className="success pl-5 pr-5">Order placed successfully. Your order will be dispacted soon. meanwhile you can track your order in my order section.</p>
            </div>
        </Fragment>)
}
interface MyButtonProps {
    visible: boolean;
    [key: string]: any ;
  }

function MyButton({ visible, ...props }:MyButtonProps) {
        return (
      
            <button
                className={visible ? "btn btn-primary " : "invisible"}
                {...props}
            />
      
        );
}
const Wizard = ({ step: currentIndex, ...props }: { step: number, children: React.ReactNode, onChange: (index: number) => void }) => {
        const steps = Children.toArray(props.children) as React.ReactElement[];
        const prevStep = currentIndex !== 0 && steps[currentIndex - 1]?.props ;
        const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1]?.props;
      
        return (
            <div className="card">
                <div className="card-header p-4  justify-content-center">
                    <nav className="steps basicsteps">
                        {steps.map((step, index) => (
                            <button
                                key={Math.random()}
                                onClick={() => props.onChange(index)}
                                className={getClsNavBtn(index === currentIndex)}
                            >
                                <span className="number">{step.props.number}</span>
                                <span>{step.props.title}</span>
                            </button>
                        ))}
                    </nav>
                </div>
      
                {steps[currentIndex]}
      
                <div className=" p-3 d-flex justify-content-between  ">
                    <MyButton
                        visible={prevStep}
                        onClick={() => props.onChange(currentIndex - 1)}
                        title={prevStep.description}
                    >
                        Back
                    </MyButton>
                    <MyButton
                        visible={nextStep}
                        onClick={() => props.onChange(currentIndex + 1)}
                        title={nextStep.description}
                    >
                        Next
                    </MyButton>
                </div>
            </div>
        );
};

interface SteppsProps {
    title: string;
    children: React.ReactChild;
  }

const Stepps: React.FC<SteppsProps> = ({ children }) => {
    return <>
  {children}
  </>};
function getClsNavBtn(active:Boolean) {
    return "btn ripple btn-block me-2" + (active ? " active" : "");
  }
export class AccordionWizardForm extends Component {
    state = { step: 0 };

    handleStep = (step:number) => {
        this.setState({ step });
    };
    stepswizard =
    [
        { name: 'Sigin', component: <Signin /> },
        { name: 'Billing', component: <Billing /> },
        { name: 'Order', component: <Order /> },
        { name: 'Payment', component: <PaymentDetails /> },
        { name: 'Finish', component: <Finished /> },


    ]
    render() {
        return (
            <div className='step-progress'>
                <Wizard step={this.state.step} onChange={this.handleStep}>
                {this.stepswizard.map((ele)=>(<Stepps key={Math.random()} title={ele.name}>
                <section className="card-body Basicwizard  ">
                    {ele.component}
                </section>
                </Stepps>))}
                </Wizard>
    
            </div>
        );
    }
}