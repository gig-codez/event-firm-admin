import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Dropdown, Container, Form, Nav, Navbar, InputGroup, Badge, } from "react-bootstrap";
import Selectoptions from './headerdata';


import SimpleBar from 'simplebar-react';
import { ThemeChanger } from "../../redux/actions";
import store from '@/shared/redux/store';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

    const HeadDropDown = ({local_varaiable,ThemeChanger}:{local_varaiable:any,ThemeChanger:any}) => {
      let { basePath } = useRouter()

      let Shoppingcart = [
        {
            id:1,
          Product:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/ecommerce/jpg/1.jpg`,
          ProductName: "Smart Watch",
          Qtytext:"Status :",
          background:"text-success",
          Qty: "QTY :1",
          status:"In Stock",
          color:"text-success",
          Price: "$1,299.00",
        },
        {
            id: 2,
            Product:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/ecommerce/jpg/3.jpg`,
            ProductName: "Flowers",
            status: "Free shipping",
            background:"badge bg-pink-transparent fs-10",
            Qty: "QTY :2",
            Price: "$179.29",
          },
          {
            id:3,
            Product:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/ecommerce/jpg/5.jpg`,
            ProductName: "Running Shoes",
            Qtytext:"Status :",
            status: "Out Stock",
            background:"text-danger",
            Qty: "QTY :4",
            Price: "$29.00",
          },
          {
            id:4,
            Product:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/ecommerce/jpg/4.jpg`,
            ProductName: "Furniture",
            Qtytext:"50LB",
            Qty: "Gray",
            Price: "$4,999.00",
          },
          {
            id:5,
            Product:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/ecommerce/jpg/6.jpg`,
            ProductName: "Tourist Bag",
            Qty: "Qty: 1",
            Price: "$129.00",
            background:"text-success",
            status: "In Stock:",
            Qtytext:"Status :",
          },
      ];
      const [allData, setCartItems] = useState([...Shoppingcart]);
const [cartItemCount, setCartItemCount] = useState(Shoppingcart.length);
const handleRemove = (id: number) => {
    const newList = allData.filter((idx) => idx.id !== id);
    setCartItems(newList);
    setCartItemCount(newList.length);
};
  
          let Notify = [
            {
                id:1,
                online:"avatar avatar-md online br-5",
              image:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/5.jpg`,
              text1: "Congratulate",
              text2: "Olivia James",
              text3:"for New template start",
              date: "Oct 15 12:32pm",
              status: "",
              bg:"",
              proid:"",
            },
            {
                id:2,
                online:"avatar avatar-md offline br-5",
              image:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/2.jpg`,
              text2: "Joshua Gray ",
              text3:"New Message Received",
              date: "Oct 13 02:56am",
              status: "",
              bg:"",
              proid:"",
            
            },
            {
                id:3,
                online:"avatar avatar-md online br-5",
              image:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/3.jpg`,
              text2: "Elizabeth Lewis ",
              text3:"added new schedule realease",
              date: "Oct 12 10:40pm",
              status: "",
              bg:"",
              proid:"",
            },
            {
                id:4,
                online:"avatar avatar-md online br-5",
              image:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/5.jpg`,
              text1: "Delivered Successful to ",
              text2: "Micky",
              status: "Order ",
              bg:"text-warning",
              proid:"ID: #005428",
              date:" had been placed "
            },
            {
                id:5,
                online:"avatar avatar-md offline br-5",
              image:`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/1.jpg`,
              text1: "You got 22 requests form Facebook",
              text2: " ",
              text3:"",
              status: " ",
              bg:"",
              proid:"",
              date:"Today at 08:08pm"
            },
         
          ];
          const [notifications, setNotifications] = useState([...Notify]);

          const handleRemove1 = (id: number) => {
              // Create a copy of the notifications array and remove the item at the specified index
              const list = [...notifications];
              list.splice(id, 1);
              setNotifications(list);
          };
    //   function handleRemove(id: number) {
    //     const newList = allData.filter((idx) => idx.id !== id);
    //     setAllData(newList);
    // }
          // const [notification, setData] = useState(Notify);


      // const [allData, setAllData] = useState(Shoppingcart);

    //Dark Model
    const ToggleDark = () => {
        
      ThemeChanger({...local_varaiable,
          "dataThemeMode":local_varaiable.dataThemeMode =='dark' ? 'light' : 'dark',
          "dataHeaderStyles": local_varaiable.dataHeaderStyles  == 'dark' ? 'light' : 'dark',
          "dataMenuStyles": local_varaiable.dataNavLayout == 'horizontal' ?  local_varaiable.dataMenuStyles == 'light' ? 'dark' : 'dark' : "dark"
          
         
      })
      const theme = store.getState()

      if (theme.dataThemeMode != 'dark') {
          ThemeChanger({...theme,
              "bodyBg":'',
              "bodyBg1":'',
              "lightRgb":"",
              "formControl":"",
              "inputBorder":"",
              "sidemenuActiveBgcolor":""
          })
          localStorage.setItem("Spruhalighttheme", "dark")
          localStorage.removeItem("Spruhadarktheme")
          
      }
      else {
          localStorage.setItem("Spruhadarktheme", "dark")
          localStorage.removeItem("Spruhalighttheme")
      }

  }
    function Fullscreen() {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      } else {
        const element = document.documentElement;
        if (element.requestFullscreen) {
          element.requestFullscreen();
        }
      }
      }
 
 

      const openCloseSidebar1 = () => {
        document.querySelector("#right-sidebar-canvas")?.classList.toggle("show");
        document.querySelector("body")!.classList.add("overflow:hidden");
    document.querySelector("body")!.classList.add("padding-right:4px");
    
    if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
  }
      };
    
  return (
    <>
        <Dropdown className="header-element header-theme-mode">
                    <Nav.Link className="header-link layout-setting" onClick={() => ToggleDark()}>
                      <span className="dark-layout">
                        <i className="fe fe-sun header-link-icon"></i>
                      </span>
                      <span className="light-layout">
                        <i className="fe fe-moon header-link-icon lh-2"></i>
                      </span>
                    </Nav.Link>
                  </Dropdown>
        <Dropdown className="header-element country-selector">
                    <Dropdown.Toggle
                      className="nav-link icon country-Flag p-0"
                      variant=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <circle cx="256" cy="256" r="256" fill="#f0f0f0" />
                        <g fill="#0052b4">
                          <path d="M52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178L52.92 100.142zM503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076h133.176zM8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075H8.819zM411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177l89.076-89.075zM100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102V370.005l-89.076 89.074zM189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075V8.819zM322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075v133.176zM370.005 322.784l89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076H370.005z" />
                        </g>
                        <g fill="#d80027">
                          <path d="M509.833 222.609H289.392V2.167A258.556 258.556 0 00256 0c-11.319 0-22.461.744-33.391 2.167v220.441H2.167A258.556 258.556 0 000 256c0 11.319.744 22.461 2.167 33.391h220.441v220.442a258.35 258.35 0 0066.783 0V289.392h220.442A258.533 258.533 0 00512 256c0-11.317-.744-22.461-2.167-33.391z" />
                          <path d="M322.783 322.784L437.019 437.02a256.636 256.636 0 0015.048-16.435l-97.802-97.802h-31.482v.001zM189.217 322.784h-.002L74.98 437.019a256.636 256.636 0 0016.435 15.048l97.802-97.804v-31.479zM189.217 189.219v-.002L74.981 74.98a256.636 256.636 0 00-15.048 16.435l97.803 97.803h31.481zM322.783 189.219L437.02 74.981a256.328 256.328 0 00-16.435-15.047l-97.802 97.803v31.482z" />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu" style= {{margin: "0px"}}>
                      <Dropdown.Item className="d-flex ">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                        <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags/1.jpg`}
                alt="img"
              />
                          
                        </span>
                        <div className="d-flex">
                          <span className="mt-1">French</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                        <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags/2.jpg`}     
                alt="img"
              />
                          
                        </span>
                        <div className="d-flex">
                          <span className="mt-1">Germany</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar me-3 align-self-center bg-transparent">
                        <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags/3.jpg`}     
                alt="img"
              />
                        
                        </span>
                        <div className="d-flex">
                          <span className="mt-1">Italy</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar me-3 align-self-center bg-transparent">
                        <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags/4.jpg`}     
                alt="img"
              />
                          
                        </span>
                        <div className="d-flex">
                          <span className="mt-1">Russia</span>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="d-flex">
                        <span className="avatar  me-3 align-self-center bg-transparent">
                        <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/flags/5.jpg`}     
                alt="img"
              />
                        </span>
                        <div className="d-flex">
                          <span className="mt-1">spain</span>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="header-element header-fullscreen d-xl-flex d-none">
                    <div
                      className="header-link d-xl-block d-none"
                      onClick={Fullscreen}
                    >
                      <i className="fe fe-maximize full-screen-open header-link-icon"></i>
                    </div>
                  </div>
                  <Dropdown className="header-search">
                    <Dropdown.Toggle variant="default" className="px-0">
                      <i className="fe fe-search header-icons fs-18 px-2 lh-5" ></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="p-2">
                      <div className="mb-1">
                      <Selectoptions />
                      </div>
                      <InputGroup className="">
                        <Form.Control type="search" className="form-control rounded-0" placeholder="Search for anything..." />
                        <InputGroup.Text className="btn search-btn ms-auto d-flex">
                          <i className="fe fe-search"></i>
                        </InputGroup.Text>
                      </InputGroup>
                    </Dropdown.Menu>
                  </Dropdown>
              
                        <Dropdown className="header-element cart-dropdown">
                            <Dropdown.Toggle href="#!" variant='' className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                <i className="fe fe-shopping-cart header-link-icon d-xl-block d-none"></i>
                                <Badge bg="primary" className="badge bg-primary rounded-pill header-icon-badge d-xl-block d-none" id="cart-icon-badge">{cartItemCount}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold">Cart Items</p>
                                        <span className="badge bg-primary rounded-pill" id="cart-data"> {cartItemCount} Item{cartItemCount !== 1 ? 's' : ''}</span>
                                    </div>
                                </div>
                                <div>
                                    <hr className="dropdown-divider" />
                                </div>
                                <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                    {allData.map((idx) => (
                                        <Dropdown.Item as="li" className="dropdown-item" key={Math.random()}>
                                            <div className="d-flex align-items-center cart-dropdown-item">
                                                <img src={idx.Product} alt="img" className="avatar avatar-sm br-5 me-3" />
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                                        <div className="mb-0 fs-13 text-dark fw-medium">
                                                            <Link href="/components/ecommerce/cart/" className="text-dark">{idx.ProductName}</Link>
                                                        </div>
                                                        <div>
                                                            <span className="text-black mb-1 fw-medium">{idx.Price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                        <ul className="header-product-item d-flex">
                                                            <li>{idx.Qty}</li>
                                                            <li>{idx.Qtytext} <span className={idx.background}>{idx.status}</span></li>
                                                        </ul>
                                                        <div className="ms-auto">
                                                    <Link href="" className="header-cart-remove float-end dropdown-item-close" onClick={() => handleRemove(idx.id)}><i className="ri-delete-bin-2-line"></i></Link>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                  
                                </ul>
                                <div className={`p-3 empty-header-item border-top ${cartItemCount === 0 ? 'd-none' : 'd-block'}`}>
                                    <div className="d-grid">
                                        <Link href= "/components/ecommerce/checkout/" className="btn btn-primary">Proceed to checkout</Link>
                                    </div>
                                </div>
                                <div className={`p-5 empty-item ${cartItemCount === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                            <i className="ri-shopping-cart-2-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                        <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy :)</span>
                                        <Link href={`/components/ecommerce/products`} className="btn btn-primary btn-wave btn-sm m-1" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
              
                        <Dropdown className="header-element notifications-dropdown">
                        <Dropdown.Toggle href="#!" className="header-link" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false" variant="default">
                            <i className="fe fe-bell header-link-icon"></i>
                            <span className="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">{`${notifications.length} `}</span>
                        </Dropdown.Toggle>
      
                        <Dropdown.Menu className="main-header-dropdown  dropdown-menu-end" data-popper-placement="none">
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                                    <span className="badge bg-secondary rounded-pill" id="notifiation-data">{`${notifications.length} unread`}</span>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                              {/* <SimpleBar> */}
                                <SimpleBar  className="list-unstyled mb-0" id="header-notification-scroll">
                                {notifications.map((notification,id) => (
                            

                                    <Dropdown.Item as = "li" className="dropdown-item" key={id} >
                                        <div className="d-flex align-items-start">
                                            <div className="pe-2">
                                                <span className={notification.online}>
                                                <img 
                    src={notification.image}
                    alt="img" 
                  />
                                                    </span>
                                            </div>
                                            <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">
                                                        <Link href="/components/pages/notifications-list/" className="text-dark"> {notification.text1}<strong> {notification.text2}</strong>{notification.text3} </Link></p>
                                                    <span className="text-muted fw-normal fs-12 header-notification-text">{notification.status} <span className={notification.bg}>{notification.proid}</span>{notification.date}</span>

                                                </div>
                                                <div>
                                                    <Link href="#!" className="min-w-fit-content text-muted me-1 dropdown-item-close1" onClick={() => handleRemove1(id)}><i className="ti ti-x fs-16"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                            
                                ))}
                                  
                                </SimpleBar>
                                {/* </SimpleBar> */}
                            <div className={`p-3 empty-header-item1 border-top ${notifications.length === 0 ? 'd-none' : 'd-block'}`}>
                                <div className="d-grid">
                                    <Link href="/components/pages/notifications-list/" className="btn btn-primary">View All</Link>
                                </div>
                            </div>
                            <div className={`p-5 empty-item1 ${notifications.length === 0 ? 'd-block' : 'd-none'}`}>
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                        <i className="ri-notification-off-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                </div>
                            </div>

                        </Dropdown.Menu>
                    </Dropdown>
                    
                    <Dropdown className="header-element header-shortcuts-dropdown">
                        <Dropdown.Toggle href="#!" className="header-link" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="notificationDropdown" aria-expanded="false" variant="default">
                            <i className="fe fe-grid header-link-icon d-xl-block d-none"></i>
                        </Dropdown.Toggle>
                      
                        <Dropdown.Menu className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end" aria-labelledby="notificationDropdown">
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-17 fw-semibold">Related Apps</p>
                                </div>
                            </div>
                            <div className="dropdown-divider mb-0"></div>
                            <div className="main-header-shortcuts p-2" id="header-shortcut-scroll">
                               <div className="row g-2">
                                   <div className="col-4">
                                       <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/figma.png`}     
                alt="img" 
              />
                                               
                                                </span>
                                                <span className="d-block fs-12">Figma</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/microsoft-powerpoint.png`}     
                alt="img" 
              />
                                             
                                                </span>
                                                <span className="d-block fs-12">Power Point</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/microsoft-word.png`}     
                alt="img" 
              />
                                                
                                                    
                                                </span>
                                                <span className="d-block fs-12">MS Word</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/calender.png`}     
                alt="img" 
              />
                                               
                                                </span>
                                                <span className="d-block fs-12">Calendar</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/sketch.png`}     
                alt="img" 
              />
                                               
                                                </span>
                                                <span className="d-block fs-12">Sketch</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/google-docs.png`}     
                alt="img" 
              />
                                                </span>
                                                <span className="d-block fs-12">Docs</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/google.png`}     
                alt="img" 
              />
                                              
                                                </span>
                                                <span className="d-block fs-12">Google</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/translate.png`}     
                alt="img" 
              />
                                                
                                                </span>
                                                <span className="d-block fs-12">Translate</span>
                                            </div>
                                        </Link>
                                   </div>
                                   <div className="col-4">
                                        <Link href="#!" className="text-dark">
                                            <div className="text-center p-3 related-app">
                                                <span className="avatar avatar-sm rounded-2 p-1 bg-primary-transparent">
                                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/apps/google-sheets.png`}     
                alt="img" 
              />
                                           
                                                </span>
                                                <span className="d-block fs-12">Sheets</span>
                                            </div>
                                        </Link>
                                   </div>
                               </div>
                            </div>
                            <div className="p-3 border-top">
                                <div className="d-grid">
                                    <Link href="#!" className="btn btn-primary">View All</Link>
                                </div>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="header-element">
                        <Dropdown.Toggle href="#!" className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" variant="default">
                            <div className="d-flex align-items-center">
                                <div className="header-link-icon">
                                <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/faces/1.jpg`}     
                alt="img" width="32" height="32" className="rounded-circle"
              />
                                </div>
                                <div className="d-none">
                                    <p className="fw-semibold mb-0">Angelica</p>
                                    <span className="op-7 fw-normal d-block fs-11">Web Designer</span>
                                </div>
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile">
                            <li>
                                <div className="header-navheading border-bottom">
                                    <h6 className="main-notification-title">Sonia Taylor</h6>
                                    <p className="main-notification-text mb-0">Web Designer</p>
                                </div>
                            </li>
                            <li><Link className="dropdown-item d-flex border-bottom" href={`/components/pages/profile/`}><i className="fe fe-user fs-16 align-middle me-2"></i>Profile</Link></li>
                            <li><Link className="dropdown-item d-flex border-bottom" href={`/components/apps/mail/mail-inbox/`}><i className="fe fe-inbox fs-16 align-middle me-2"></i>Inbox <span className="badge bg-success ms-auto">25</span></Link></li>
                            <li><Link className="dropdown-item d-flex border-bottom border-block-end" href={`/components/pages/notifications-list/`}><i className="fe fe-compass fs-16 align-middle me-2"></i>Activity</Link></li>
                            <li><Link className="dropdown-item d-flex border-bottom" href={`/components/pages/settings/`}><i className="fe fe-settings fs-16 align-middle me-2"></i>Settings</Link></li>
                            <li><Link className="dropdown-item d-flex border-bottom" href={`/components/advancedui/chat/`}><i className="fe fe-headphones fs-16 align-middle me-2"></i>Support</Link></li>
                            <li><Link className="dropdown-item d-flex" href={`/components/authentication/signin/`}><i className="fe fe-power fs-16 align-middle me-2"></i>Log Out</Link></li>
                        </Dropdown.Menu>
                    </Dropdown>
                  <div className="header-element  right-sidebar" onClick={() => openCloseSidebar1()}>
                        <Link href="#!" className="header-link right-sidebar" data-bs-toggle="offcanvas" data-bs-target="#right-sidebar-canvas"  >
                            <i className="fe fe-align-right header-icons header-link-icon d-xl-block d-none"></i>
                        </Link>
                    </div>
               
                 
    </>
      
           
               
  )
}
const mapStateToProps = (state: any) => ({
  local_varaiable: state
})
export default connect(mapStateToProps,{ThemeChanger})(HeadDropDown);


