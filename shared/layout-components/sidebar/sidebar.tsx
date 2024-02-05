import React, { Fragment, useEffect, useRef, useState } from "react";
import { MENUITEMS, MenuItem } from "./nav";
import Link from "next/link";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useRouter } from "next/router";
// import { horizontalmenusticky } from "../../../shared/data/switcherdata/switcherdata";
import dynamic from "next/dynamic";
let history: string[] = [];
import SimpleBar from 'simplebar-react';
//Images
import logolight from "../../../public/assets/images/brand-logos/desktop-dark.png"
import iconlight from "../../../public/assets/images/brand-logos/toggle-white.png"
import logo from "../../../public/assets/images/brand-logos/desktop-logo.png"
import icon from "../../../public/assets/images/brand-logos/toggle-logo.png"
import store from "@/shared/redux/store";
import { ThemeChanger } from "@/shared/redux/actions";
import { connect } from "react-redux";

const SideBar = ({ local_varaiable, ThemeChanger }:{local_varaiable:any, ThemeChanger:any }) => {
	let { basePath } = useRouter()

  let location = useRouter();
  const [menuitems, setMenuitems] = useState(MENUITEMS);
  
  // initial loading
	useEffect(() => {
		history.push(location.pathname);  // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth  calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history       
		if (history.length > 2) {
			history.shift();
		}
		if (history[0] !== history[1]) {
			setSidemenu();
		}
		let mainContent = document.querySelector(".main-content") ;
		if(mainContent){

			mainContent.addEventListener("click", mainContentClickFn);
			return () => {
				mainContent!.removeEventListener("click", mainContentClickFn);
			};
		}
		else{
			return () => {};

		}

	},[location.pathname, mainContentClickFn, setSidemenu]);

	useEffect(() => {
		if (
			local_varaiable.dataNavLayout == "horizontal" &&
			window.innerWidth >= 992
		) {
			clearMenuActive();

		}
	}, []);


	// eslint-disable-next-line react-hooks/exhaustive-deps
	function mainContentClickFn() {
		if (
			local_varaiable.dataNavLayout === "horizontal" &&
			window.innerWidth >= 992
		) {
			clearMenuActive();

		}
	}
  // every chnage this effect calls
  let menuIcontype: string;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function setSidemenu() {
    
    if (menuitems) {
      menuitems.filter((mainlevel) => {
        if (mainlevel.Items) {
          mainlevel.Items.filter((items) => {
            if (ulRef.current.href != document.location['href'] || localStorage.Spruhaverticalstyles != 'doublemenu') {
              items.active = false;
            }
            items.selected = false;
            items.active = false;
            items.selected = false;
            if (
              location.pathname === "/spruha-ts/preview/" ||
              location.pathname === "/spruha-ts/preview"
            ) {
              location.pathname = "/spruha-ts/preview/dashboard/";
            }
            if (location.pathname === items.path) {
              items.active = true;
              items.selected = true;
            }
            if (items.children) {
              items.children.filter((submenu) => {
                submenu.active = false;
                submenu.selected = false;
                if (location.pathname === submenu.path) {
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                if (submenu.children) {
                  submenu.children.filter((submenu1: { active: boolean; selected: boolean; path: string; }) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (location.pathname === submenu1.path) {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    return submenu1;
                  });
                }
                if(location.pathname == "/components/ecommerce/product-detail/[id]" && submenu.path == "/components/ecommerce/product-details"){
                  items.active = true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                return submenu;
              });
            }
            return items;
          });
        }
        setMenuitems((arr) => [...arr]);
        return mainlevel;
      });
      
    }
    if (local_varaiable.dataVerticalStyle == "doublemenu") {
    }
  }
  function toggleSidemenu(item: MenuItem) {
    if (
      !document.body.classList.contains("horizontalmenu-hover") ||
      window.innerWidth < 992
    ) {
      // To show/hide the menu
      if (!item.active) {
        menuitems.filter((mainlevel) => {
          if (mainlevel.Items) {
            mainlevel.Items.filter((sublevel) => {
              sublevel.active = false;
              if (item === sublevel) {
                sublevel.active = true;
              }
              if (sublevel.children) {
                sublevel.children.filter((sublevel1) => {
                  sublevel1.active = false;
                  if (item === sublevel1) {
                    sublevel.active = true;
                    sublevel1.active = true;
                  }
                  if (sublevel1.children) {
                    sublevel1.children.filter((sublevel2: MenuItem) => {
                      sublevel2.active = false;
                      if (item === sublevel2) {
                        sublevel.active = true;
                        sublevel1.active = true;
                        sublevel2.active = true;
                      }
                      return sublevel2;
                    });
                  }
                  return sublevel1;
                });
              }
              return sublevel;
            });
          }
          return mainlevel;
        });
      } else {
        if (localStorage.Spruhaverticalstyles != 'doublemenu') {
          item.active = !item.active;
        }
      }
  
   


  
    }
    setMenuitems((arr) => [...arr]);
  
  }
  const noChild = () => {
    if (localStorage.Spruhaverticalstyles == 'doublemenu') {
      const theme = store.getState();
      ThemeChanger({ ...theme, "dataToggled": "double-menu-close" });
    }
  };
  
  
  function clearMenuActive() {
    MENUITEMS.filter((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.filter((sublevel) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.filter((sublevel1) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.filter((sublevel2: { active: boolean; }) => {
                  sublevel2.active = false;
                  return sublevel2;
                });
              }
              return sublevel1;
            });
          }
          return sublevel;
        });
      }
      return mainlevel;
    });
    setMenuitems((arr) => [...arr]);
  }
  function menuClose() {
    const theme = store.getState();
    ThemeChanger({ ...theme, dataToggled: 'close' });
    const overlayElement = document.querySelector("#responsive-overlay") as HTMLElement | null;
    if (overlayElement) {
    
      overlayElement.classList.remove("active");
    }
  }
  useEffect(() => {

    const mainContent = document.querySelector(".main-content");
    if (window.innerWidth <= 992) {
      if (mainContent) {
        mainContent.addEventListener("click", menuClose);
        menuClose();
      }
    } else {
      if (mainContent) {
        mainContent.removeEventListener("click", menuClose);
      }
    }
    window.addEventListener("resize", () => {
      const mainContent = document.querySelector(".main-content");
      setTimeout(() => {
        if (window.innerWidth <= 992) {
          if (mainContent) {
            mainContent.addEventListener("click", menuClose);
            // menuClose();
          }
        } else {
          if (mainContent) {
            mainContent.removeEventListener("click", menuClose);
            // menuClose();
          }
        }
      }, 100);
    });
  }, []);
  function Onhover() {
		const theme = store.getState()
		if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.dataIconOverlay != 'open') {
			ThemeChanger({ ...theme, "dataIconOverlay": "open" })
		}
	}
	function Outhover() {
		const theme = store.getState()
		if ((theme.dataToggled == 'icon-overlay-close' || theme.dataToggled == 'detached-close') && theme.dataIconOverlay == 'open') {
			ThemeChanger({ ...theme, "dataIconOverlay": "" })
		}
	}


    function switcherArrowFn(): void {

      // Used to remove is-expanded class and remove class on clicking arrow buttons
      function slideClick(): void {
        const slide = document.querySelectorAll<HTMLElement>(".slide");
        const slideMenu = document.querySelectorAll<HTMLElement>(".slide-menu");
  
        slide.forEach((element) => {
          if (element.classList.contains("is-expanded")) {
            element.classList.remove("is-expanded");
          }
        });
  
        slideMenu.forEach((element) => {
          if (element.classList.contains("open")) {
            element.classList.remove("open");
            element.style.display = "none";
          }
        });
      }
  
      slideClick();
    }
  
    function slideRight(): void {
      const menuNav = document.querySelector<HTMLElement>(".main-menu");
      const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");
  
      if (menuNav && mainContainer1) {
        const marginLeftValue = Math.ceil(
          Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
        );
        const marginRightValue = Math.ceil(
          Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
        );
        const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
        let mainContainer1Width = mainContainer1.offsetWidth;
  
        if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
          if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
            if (Math.abs(check) > Math.abs(marginLeftValue)) {
              menuNav.style.marginInlineEnd = "0";
  
              if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
                mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
                const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
                if (slideRightButton) {
                  slideRightButton.classList.add("hidden");
                }
              }
  
              menuNav.style.marginInlineStart =
                (Number(menuNav.style.marginInlineStart.split("px")[0]) -
                  Math.abs(mainContainer1Width)) +
                "px";
  
              const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.remove("hidden");
              }
            }
          } else {
            if (Math.abs(check) > Math.abs(marginRightValue)) {
              menuNav.style.marginInlineStart = "0";
  
              if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
                mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
                const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
                if (slideRightButton) {
                  slideRightButton.classList.add("hidden");
                }
              }
  
              menuNav.style.marginInlineEnd =
                (Number(menuNav.style.marginInlineEnd.split("px")[0]) -
                  Math.abs(mainContainer1Width)) +
                "px";
  
              const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
              if (slideLeftButton) {
                slideLeftButton.classList.remove("hidden");
              }
            }
          }
        }
  
        const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
        const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
        if (element) {
          element.classList.remove("active");
        }
        if (element1) {
          element1.style.display = "none";
        }
      }
  
      switcherArrowFn();
    }
  
    function slideLeft(): void {
      const menuNav = document.querySelector<HTMLElement>(".main-menu");
      const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");
  
      if (menuNav && mainContainer1) {
        const marginLeftValue = Math.ceil(
          Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
        );
        const marginRightValue = Math.ceil(
          Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
        );
        const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
        let mainContainer1Width = mainContainer1.offsetWidth;
  
        if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
          if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
            if (Math.abs(check) <= Math.abs(marginLeftValue)) {
              menuNav.style.marginInlineStart = "0px";
            }
          } else {
            if (Math.abs(check) > Math.abs(marginRightValue)) {
              menuNav.style.marginInlineStart = "0";
  
              if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
                mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
                const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
                if (slideRightButton) {
                  slideRightButton.classList.add("hidden");
                }
              }
  
              menuNav.style.marginInlineEnd =
                (Number(menuNav.style.marginInlineEnd.split("px")[0]) -
                  Math.abs(mainContainer1Width)) +
                "px";
  
              const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
              if (slideLeftButton) {
                slideLeftButton.classList.remove("hidden");
              }
            }
          }
        }
  
        const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
        const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
        if (element) {
          element.classList.remove("active");
        }
        if (element1) {
          element1.style.display = "none";
        }
      }
  
      switcherArrowFn();
    }

  function Clickhandelar() {
		if (localStorage.getItem("Spruhaverticalstyles") == "icontext") {
			ThemeChanger({ ...local_varaiable, "iconText": "open" })
		}
	
	}
  let MenuOpen = () => {
		let MainContent = document.querySelector(".main-content")
		if (local_varaiable.dataVerticalStyle == 'icontext' && local_varaiable.iconText != 'open') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "iconText": "open" })
			MainContent?.addEventListener("click", (_event) => {
				const theme = store.getState();
				ThemeChanger({ ...theme, "iconText": "" });
			  });
		}
		const theme = store.getState()
		if (localStorage.Spruhaverticalstyles == 'doublemenu' && theme.dataToggled != 'double-menu-open') {
			const theme = store.getState()
			ThemeChanger({ ...theme, "dataToggled": "double-menu-open"})
		}
	}



	const ulRef = useRef<any>(null);
	const ulElement = useRef(null);
  
  return (
    <Fragment>
      <div
        className="app-sidebar sticky"
        id="sidebar"
        onMouseOver={() => Onhover()}
        onMouseOut={() => Outhover()}
      >
              <div className="main-sidebar-header">
                <Link className="header-logo" href={`/components/dashboard/dashboard`}>
				<img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/desktop-white.png`}
                className="desktop-white"
                alt="logo"
              />
               <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/toggle-white.png`}
                className="toggle-white"
                alt="logo"
              />
               <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/desktop-logo.png`}
                className="desktop-logo"
                alt="logo"
              />
               <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/toggle-dark.png`}
                className="toggle-dark"
                alt="logo"
              />
                 <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/toggle-logo.png`}
                className="toggle-logo"
                alt="logo"
              />
               <img
                src={`${process.env.NODE_ENV === 'production'? basePath : ''}/assets/images/brand-logos/desktop-dark.png`}
                className="desktop-dark"
                alt="logo"
              />
                   
            
                
                </Link>
              </div>
              <div
                className="main-sidebar" id="sidebar-scroll"
               
              >

          <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left " id="slide-left">
                        <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => { slideLeft() }} fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
                    </div>
                    <ul className="main-menu" style={{ marginLeft: "0px" ,marginRight:"0px"}}>

{menuitems.map((Item:any) =>
  <Fragment key={Math.random()}>
    <li className="slide__category">
    <span className="category-name">{Item.menutitle}</span>
    </li>
    {Item.Items.map((menuItem:any) =>
      menuItem.type === "link" ?
        <li className={`slide ${menuItem.selected ? "active" : ''}`} key={Math.random()} >

          <Link ref={ulRef} onClick={(event) => { setSidemenu(); noChild() }} href={menuItem.path + "/"} className={`side-menu__item ${menuItem.selected ? "active" : ""}`}>
          <span className="shape1"></span>
                                <span className="shape2"></span>
                                <i
                                  className={`${menuItem.icon} ${menuIcontype} side-menu__icon`}
                                ></i>             <span className="side-menu__label">{menuItem.title}</span></Link>
        </li>
        : menuItem.type === "sub" ?
          <li className={`slide has-sub ${menuItem.active ? " open" : ''}${menuItem.selected ? " active" : ''}`} key={Math.random()} onClick={() => { MenuOpen() }}>
            <a href="#" className={`side-menu__item ${menuItem.selected ? "active" : ""}`}
              onClick={(event) => { event.preventDefault(); toggleSidemenu(menuItem) }}>
								<span className="shape1"></span>
                              <span className="shape2"></span>
                              <i
                                className={`${menuItem.icon} ${menuIcontype}  side-menu__icon`}
                              ></i>              <span className="side-menu__label">{menuItem.title}</span>
							   {menuItem.badge ? (
                                  <label className={menuItem.badge}>
                                    {menuItem.badgetxt}
                                  </label>
                                ) : (
                                  ""
                                )}
								{menuItem.badge ? (
                                  ""
                                ) : (
									<i className="ri ri-arrow-right-s-line side-menu__angle"></i>
                                )}
              </a>
            <ul ref={ulElement}  className={`slide-menu child1 ${menuItem.active ? "active" : ""} 
                            ${menuItem.active && localStorage.Spruhaverticalstyles == 'doublemenu' ? "double-menu-active" : ""}`}
             style={
              menuItem.active? { display: "block" , position:"relative",left:"0px",top:"0px",margin:"0px", }: { display: "none" }
            }>
              <li className="slide side-menu__label1">
           
                <a href="">{menuItem.title}</a>
              </li>
              {menuItem.children.map((childrenItem: any) =>
                <React.Fragment key={Math.random()} >
                  {childrenItem.type === "link" ? <li className={`slide ${childrenItem.active ? "active" : ''}`}>
                    {
                      childrenItem.path == "/" ?
                        <Link href={"#"} className={`side-menu__item ${childrenItem.selected ? "active" : ''}`}>
                          {childrenItem.icon}
                          {childrenItem.title}
                        </Link> :
                        <Link onClick={(event) => { setSidemenu(); }} href={childrenItem.path + "/"} className={`side-menu__item ${childrenItem.selected ? "active" : ''}`}>
                          {childrenItem.icon}
                          {childrenItem.title}
                        </Link>
                    }
                  </li>
                    : childrenItem.type === "sub" ? <li className={`slide has-sub ${childrenItem.active ? "open" : ''}`}>
                      <a href="#"  className={`side-menu__item ${childrenItem.selected ? "active" : ''}`} onClick={(evnt) => {
                        evnt.preventDefault();
                        toggleSidemenu(childrenItem)
                        Clickhandelar()
                       
                      }}> <span className="sidemenu-label">
                          {childrenItem.title}
                        </span><i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                      <ul className="slide-menu child2"
                         style={
                          childrenItem.active
                            ? { display: "block" }
                            : { display: "none" }
                        }>
                        {childrenItem.children.map((childrenSubItem: MenuItem, key: React.Key | null | undefined) => <React.Fragment key={Math.random()}>
                          {childrenSubItem.type === "link" ?
                            <li className={`slide ${childrenSubItem.active ? "active" : ''}`}>
                              <Link onClick={(event) => { setSidemenu(); }} href={childrenSubItem.path == "/" ? "#" : childrenSubItem.path + "/"} className={`side-menu__item ${childrenSubItem.selected ? "active" : ''}`}>
                                {childrenSubItem.icon}
                                {childrenSubItem.title}
                              </Link>
                            </li>
                            : childrenSubItem.type === "sub" ? <li className={`slide has-sub ${childrenSubItem.active ? "open" : ''}`}>

                              <a href="#" className="side-menu__item" onClick={(evnt) => {
                                evnt.preventDefault();
                                toggleSidemenu(childrenSubItem)

                              }}>{childrenSubItem.icon} <span className="">{childrenSubItem.title}</span><i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>

                            

                            </li> : ""

                          }


                        </React.Fragment>)}


                      </ul>
                    </li> : ""
                  }
                </React.Fragment>
              )}
            </ul>
          </li> : '')

    }
  </Fragment>
)}
</ul>
             
                <div className="slide-right" id="slide-right">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24" onClick={() => { slideRight() }}> 
                  <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" ></path> </svg></div>
                </nav>

              </div>
      
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state:any) => ({
	local_varaiable: state
})
export default connect(mapStateToProps, { ThemeChanger })(SideBar);
