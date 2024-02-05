import React, { useEffect, useState } from "react";
import PageHeader from "../../../shared/layout-components/page-header/page-header";
import { Breadcrumb, Button, Card, Col, Row, Table } from "react-bootstrap";
import { connect } from "react-redux";
import Link from "next/link";

//Images

import Seo from "../../../shared/layout-components/seo/seo";


let Shoppingcart = [
  {
    Id: 1,
    Product: "../../../assets/images/pngs/14.png",
    ProductName: "COLLEGE BAG",
    Color: "Color:",
    Colorpicker: "Black color",
    Qty: "Out of stock",
    Qtytext: "danger",
    Quantity: 1,
    Price: "$26.00",
  },
  {
    Id: 2,
    Product: "../../../assets/images/pngs/15.png",
    ProductName: "PARTY WEAR SHOES",
    Color: "Color:",
    Colorpicker: "Pick",
    Qty: "In stock",
    Qtytext: "success",
    Quantity: 2,
    Price: "$23.00",
  },
  {
    Id: 3,
    Product: "../../../assets/images/pngs/19.png",
    ProductName: "SAMSUNG A2",
    Color: "Color:",
    Colorpicker: "Black color",
    Qty: "Out of stock",
    Qtytext: "danger",
    Quantity: 3,
    Price: "$56.00",
  },
  {
    Id: 4,
    Product:"../../../assets/images/pngs/16.png" ,
    ProductName: "FLOWER POT",
    Color: "Color:",
    Colorpicker: " Green and Black color",
    Qty: "Out of stock",
    Qtytext: "success",
    Quantity: 4,
    Price: "$36.00",
  },
  {
    Id: 5,
    Product: "../../../assets/images/pngs/17.png",
    ProductName: "CHAIR",
    Color: "Color:",
    Colorpicker: "Green and Black color",
    Qty: "Out of stock",
    Qtytext: "success",
    Quantity: 6,
    Price: "$24.00",
  },
  {
    Id: 6,
    Product: "../../../assets/images/pngs/18.png",
    ProductName: "WATCH",
    Color: "Color:",
    Colorpicker: "Green and Black color",
    Qty: "Out of stock",
    Qtytext: "danger",
    Quantity: 7,
    Price: "$34.00",
  },
];

const Cart = (local_varaiable: string) => {
  var Delete = (id1: number) => {
    let ee = Shoppingcart.filter((e, i) => {
      return e.Id !== id1;
    });
    Shoppingcart = ee;
    setdata(ee);
  };
  const [data, setdata] = useState(Shoppingcart);
  function dec(el: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
		const inputElement = (el.target as HTMLInputElement)?.parentNode?.querySelector("input");
  
    if (inputElement) {
      const unit = Number(inputElement.value);
      if (unit > 0) {
        inputElement.value = String(unit - 1);
      }
    }
	}
	function inc(el: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const inputElement = (el.target as HTMLElement)?.parentNode?.querySelector("input") ;
		if (inputElement) {
      const unit = Number(inputElement.value);
      inputElement.value = String(unit + 1);
    }
	}


  return (
    <>
      <Seo title="Cart" />

      <PageHeader title="Cart" item="Ecommerce" active_item="Cart" />

      <div>
        <Row className="row-sm">
          <Col lg={12} xl={9} md={12}>
            <Card className="custom-card">
              <Card.Header>
               <div className="card-title">Shopping cart</div>
              </Card.Header>
              <Card.Body className="pt-2">
                <div className="table-responsive">
                  <Table
                    
                    className="table border table-hover text-nowrap table-shopping-cart mb-0"
                  >
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col"></th>
                        <th scope="col" className="wd-120">
                          Quantity
                        </th>
                        <th scope="col" className="wd-120">
                          Price
                        </th>
                        <th scope="col" className="text-center ">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((list, index) => (
                        <tr key={index} data-index={index}>
                          <td>
                            <div className="media">
                              <div className="card-aside-img">
                                <img
                                  src={list.Product}
                                  alt="img"
                                  className="img-sm"
                                />
                              </div>
                              <div className="media-body my-auto">
                                <div className="card-item-desc mt-0">
                                  <h6 className="fw-semibold mt-0 text-uppercase">
                                    {list.ProductName}
                                  </h6>
                                  <dl className="card-item-desc-1">
                                    <dt>{list.Color} </dt>
                                    <dd>{list.Colorpicker}</dd>
                                  </dl>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p
                              className={`text-${list.Qtytext} small mb-0 mt-1 fs-12`}
                            >
                              {list.Qty}
                            </p>
                          </td>
                          <td>
                            <div className="input-group br-3 border flex-nowrap" id="">
                              <Button
                                variant="light"
                                className="btn btn-icon btn-light rounded-start-0 input-group-text flex-fill product-quantity-minus"
                                onClick={dec}
                              >
                                -
                              </Button>
                              <input type="text" defaultValue={0} className="form-control form-control-sm border-0 text-center w-100" id="product-quantity1" />
                              <Button
                                variant="light"
                                className="btn btn-icon btn-light rounded-end-0 input-group-text flex-fill product-quantity-plus"
                                onClick={inc}
                              >
                                +
                              </Button>
                            </div>
                          </td>
                          <td>
                            <div className="price-wrap">
                              <span className="price fw-bold fs-16">
                                {list.Price}
                              </span>
                            </div>
                          </td>
                          <td className="text-center">
                            <Link
                              href="#!"
                              onClick={function () {
                                Delete(list.Id);
                              }}
                              className="remove-list text-danger fs-20 remove-button"
                              data-abc="true"
                            >
                              <i className="fa fa-trash"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <div className="col-lg-12 col-xl-3 col-md-12">
          <div className="card custom-card">
                            <div className="card-body">
                                <form>
                                    <div className="form-group mb-0"> <label className="form-label fw-medium">Have coupon?</label>
                                        <div className="input-group"> <input type="text" className="form-control coupon" placeholder="Coupon code"/> <span className=""> <button className="btn btn-primary btn-apply coupon">Apply</button> </span> </div>
                                    </div>
                                </form>
                            </div>
                        </div>
           
            <div className="card custom-card cart-details">
              <Card.Body>
                <h5 className="mb-3 fw-bold fs-14">PRICE DETAIL</h5>
                <dl className="dlist-align">
                  <dt className="">ITEMS 3</dt>
                  <dd className="text-end ms-auto">$ 262.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Discount:</dt>
                  <dd className="text-end text-danger ms-auto">- $20.00</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-end ms-auto">$252.97</dd>
                </dl>
                <dl className="dlist-align">
                  <dt>Delivery:</dt>
                  <dd className="text-end text-success ms-auto">Free</dd>
                </dl>
                <hr />
                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-end  ms-auto">
                    <strong>$252.97</strong>
                  </dd>
                </dl>
                <div className="d-grid">
                  <Link
                    href={`/components/ecommerce/products/`}
                    className="btn btn-primary"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </Card.Body>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
  
};

Cart.layout = "Contentlayout";

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps)(Cart);
