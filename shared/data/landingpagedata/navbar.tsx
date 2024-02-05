import React, { HtmlHTMLAttributes } from "react";
import { links } from "./navbardata";
import { Nav } from "react-bootstrap";
const Navbar1 = () => {
  //Pageclick
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    const element = document.querySelector(target!) as HTMLElement | null;
    if(element ){
        const location = element.offsetTop;
        window.scrollTo({
          left: 0,
          top: location - 64,
        });
    }
  };
  // Pagesactive while scrolling
  const pageLink = document.querySelectorAll(".side-menu__item");
  pageLink.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const href = elem.getAttribute("href");
      const targetElement =  document.querySelector(href ?? "")
      if(targetElement){
        targetElement?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        window.scrollBy(0, -60);
      }
    });
  });
  function onScroll() {
    const sections = document.querySelectorAll(".side-menu__item");
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    sections.forEach((elem) => {
      const value = elem.getAttribute("href");
      if(value){
        const refElement = document.querySelector(value) as HTMLElement;
        const scrollTopMinus = scrollPos + 73;
        if(refElement){
          if (
            refElement.offsetTop <= scrollTopMinus &&
            refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
          ) {
            elem.classList.add("active");
          } else {
            elem.classList.remove("active");
          }
        }
      }
    });
  }
  window.document.addEventListener("scroll", onScroll);
  return (
    <div className="side-menu">
      {links.map((link, i) => {
        return (
          <li className="slide" key={i}>
            <Nav.Link
              href={link.url}
              onClick={handleClick}
              className="side-menu__item"
            >
              <span className="side-menu__label">{link.text}</span>
            </Nav.Link>
          </li>
        );
      })}
    </div>
  );
};

export default Navbar1;
